export type IqamaStatus = 'new' | 'renewal' | 'active'
export type ExitReEntryType = 'single' | 'multiple'
export type VisaDuration = '1m' | '2m' | '3m' | '6m' | '1y'
export type PlanningPeriod = '6m' | '1y' | '2y'

export interface FamilyVisaInput {
  wifeCount: number
  kidsCount: number
  wifeIqamaStatus: IqamaStatus
  kidsIqamaStatus: IqamaStatus
  exitType: ExitReEntryType
  visaDuration: VisaDuration
  iqamaExpiry: string
  planningPeriod: PlanningPeriod
}

export interface FeeBreakdownItem {
  key: string
  value: number
  format: string
}

export interface FamilyVisaResult {
  totalDependents: number
  monthlyDependentFees: number
  wifeIqamaFees: number
  kidsIqamaFees: number
  totalIqamaFees: number
  exitReEntryFees: number
  workPermitFees: number
  totalAnnualFees: number
  totalPlanningPeriodFees: number
  monthlyBudget: number
  planningMonths: number
  needsRenewalWarning: boolean
  largeFamilyWarning: boolean
  zeroDependents: boolean
  tips: string[]
  breakdown: FeeBreakdownItem[]
}

export function formatSAR(amount: number): string {
  return amount.toLocaleString('en-SA', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

const MONTHLY_DEPENDENT_FEE = 400
const IQAMA_FEE = 2000
const WORK_PERMIT_YEARLY = 960

function getExitReEntryFees(type: ExitReEntryType, duration: VisaDuration): number {
  if (type === 'single') {
    switch (duration) {
      case '1m': return 200
      case '2m': return 200
      case '3m': return 300
      case '6m': return 700
      case '1y': return 1400
    }
  } else {
    switch (duration) {
      case '1m': return 500
      case '2m': return 500
      case '3m': return 500
      case '6m': return 3000
      case '1y': return 5000
    }
  }
}

function getPlanningMonths(period: PlanningPeriod): number {
  switch (period) {
    case '6m': return 6
    case '1y': return 12
    case '2y': return 24
  }
}

function daysBetween(from: Date, to: Date): number {
  const diff = to.getTime() - from.getTime()
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
}

function monthsBetween(from: Date, to: Date): number {
  return Math.max(0, (to.getFullYear() - from.getFullYear()) * 12 + to.getMonth() - from.getMonth())
}

export function calculateFamilyVisa(input: FamilyVisaInput): FamilyVisaResult {
  const totalDependents = input.wifeCount + input.kidsCount
  if (totalDependents === 0) {
    return {
      totalDependents: 0,
      monthlyDependentFees: 0,
      wifeIqamaFees: 0,
      kidsIqamaFees: 0,
      totalIqamaFees: 0,
      exitReEntryFees: 0,
      workPermitFees: 0,
      totalAnnualFees: 0,
      totalPlanningPeriodFees: 0,
      monthlyBudget: 0,
      planningMonths: 0,
      needsRenewalWarning: false,
      largeFamilyWarning: false,
      zeroDependents: true,
      tips: [],
      breakdown: [],
    }
  }

  const planningMonths = getPlanningMonths(input.planningPeriod)
  const planningYears = planningMonths / 12

  const monthlyDependentFees = MONTHLY_DEPENDENT_FEE * totalDependents * planningMonths

  let wifeIqamaFees = 0
  if (input.wifeIqamaStatus === 'new' || input.wifeIqamaStatus === 'renewal') {
    wifeIqamaFees = IQAMA_FEE * input.wifeCount
  }
  let kidsIqamaFees = 0
  if (input.kidsIqamaStatus === 'new' || input.kidsIqamaStatus === 'renewal') {
    kidsIqamaFees = IQAMA_FEE * input.kidsCount
  }
  const totalIqamaFees = wifeIqamaFees + kidsIqamaFees

  const exitPerPerson = getExitReEntryFees(input.exitType, input.visaDuration)
  const exitReEntryFees = exitPerPerson * totalDependents * planningYears

  const workPermitFees = WORK_PERMIT_YEARLY * totalDependents * planningYears

  const totalAnnualFees = monthlyDependentFees / planningYears + totalIqamaFees / planningYears + exitReEntryFees / planningYears + workPermitFees / planningYears
  const totalPlanningPeriodFees = monthlyDependentFees + totalIqamaFees + exitReEntryFees + workPermitFees
  const monthlyBudget = totalPlanningPeriodFees / planningMonths

  let needsRenewalWarning = false
  if (input.iqamaExpiry) {
    const expiryDate = new Date(input.iqamaExpiry)
    const now = new Date()
    const monthsToExpiry = monthsBetween(now, expiryDate)
    if (planningMonths > monthsToExpiry) {
      needsRenewalWarning = true
    }
  }

  const largeFamilyWarning = totalDependents >= 8

  const tips: string[] = []
  if (input.exitType === 'single' && planningMonths >= 6) {
    tips.push('tips.multipleVisa')
  }
  if (input.wifeIqamaStatus === 'new' || input.kidsIqamaStatus === 'new') {
    tips.push('tips.oneTimeFee')
  }
  tips.push('tips.monthlySaving')
  if (input.planningPeriod === '2y') {
    tips.push('tips.longTermPlan')
  }

  const breakdown: FeeBreakdownItem[] = [
    { key: 'breakdown.monthlyDependentFees', value: monthlyDependentFees, format: 'sar' },
    { key: 'breakdown.wifeIqamaFees', value: wifeIqamaFees, format: 'sar' },
    { key: 'breakdown.kidsIqamaFees', value: kidsIqamaFees, format: 'sar' },
    { key: 'breakdown.exitReEntryFees', value: exitReEntryFees, format: 'sar' },
    { key: 'breakdown.workPermitFees', value: workPermitFees, format: 'sar' },
    { key: 'breakdown.totalPlanningPeriod', value: totalPlanningPeriodFees, format: 'sar' },
  ]

  return {
    totalDependents,
    monthlyDependentFees,
    wifeIqamaFees,
    kidsIqamaFees,
    totalIqamaFees,
    exitReEntryFees,
    workPermitFees,
    totalAnnualFees,
    totalPlanningPeriodFees,
    monthlyBudget,
    planningMonths,
    needsRenewalWarning,
    largeFamilyWarning,
    zeroDependents: false,
    tips,
    breakdown,
  }
}

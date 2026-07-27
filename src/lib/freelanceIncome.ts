export type FreelancePlatform = 'upwork' | 'fiverr' | 'mostaql' | 'khamsat' | 'direct'
export type TaxStatus = 'saudi_resident' | 'non_resident' | 'vat_registered'
export type VatAnswer = 'yes' | 'no'

export interface FreelanceInput {
  grossIncome: number
  platform: FreelancePlatform
  platformFeePct: number
  monthlyExpenses: number
  taxStatus: TaxStatus
  vatApplicable: VatAnswer
  workingHoursPerMonth: number
}

export interface FreelanceResult {
  platformFeeAmount: number
  netBeforeExpenses: number
  netIncome: number
  annualNetIncome: number
  effectiveHourlyRate: number
  vatAmount: number
  breakdown: BreakdownItem[]
  taxTips: string[]
}

export interface BreakdownItem {
  key: string
  label: string
  amount: number
  isNegative: boolean
}

export const PLATFORM_FEES: Record<FreelancePlatform, { min: number; max: number; default: number }> = {
  upwork: { min: 10, max: 20, default: 10 },
  fiverr: { min: 20, max: 20, default: 20 },
  mostaql: { min: 10, max: 10, default: 10 },
  khamsat: { min: 20, max: 20, default: 20 },
  direct: { min: 0, max: 0, default: 0 },
}

export function calculateFreelanceIncome(input: FreelanceInput): FreelanceResult {
  const {
    grossIncome,
    platformFeePct,
    monthlyExpenses,
    taxStatus,
    vatApplicable,
    workingHoursPerMonth,
  } = input

  const platformFeeAmount = grossIncome * (platformFeePct / 100)
  const netBeforeExpenses = grossIncome - platformFeeAmount
  const netIncomeBeforeVat = netBeforeExpenses - monthlyExpenses
  const vatAmount = vatApplicable === 'yes' ? netIncomeBeforeVat * 0.15 : 0
  const netIncome = netIncomeBeforeVat - vatAmount
  const annualNetIncome = netIncome * 12
  const effectiveHourlyRate = workingHoursPerMonth > 0 ? netIncome / workingHoursPerMonth : 0

  const breakdown: BreakdownItem[] = [
    { key: 'grossIncome', label: 'breakdown.grossIncome', amount: grossIncome, isNegative: false },
    { key: 'platformFee', label: 'breakdown.platformFee', amount: platformFeeAmount, isNegative: true },
    { key: 'expenses', label: 'breakdown.expenses', amount: monthlyExpenses, isNegative: true },
    { key: 'vat', label: 'breakdown.vat', amount: vatAmount, isNegative: vatAmount > 0 },
    { key: 'netIncome', label: 'breakdown.netIncome', amount: netIncome, isNegative: netIncome < 0 },
  ]

  const taxTips: string[] = []
  if (vatApplicable === 'yes' || taxStatus === 'vat_registered') {
    taxTips.push('taxTips.registration')
  }
  if (platformFeePct > 10) {
    taxTips.push('taxTips.platformDiversify')
  }
  if (monthlyExpenses > 0) {
    taxTips.push('taxTips.expenseTracking')
  }
  if (grossIncome > 30000) {
    taxTips.push('taxTips.taxConsultant')
  }
  taxTips.push('taxTips.watheq')

  return {
    platformFeeAmount,
    netBeforeExpenses,
    netIncome,
    annualNetIncome,
    effectiveHourlyRate,
    vatAmount,
    breakdown,
    taxTips,
  }
}

export type OverstayType = 'iqama' | 'exit_reentry' | 'visit_visa'

export interface JawazatInput {
  overstayType: OverstayType
  expiryDate: string
  calculateDate: string
  previousViolations: number
  hasPaidPartial: boolean
  amountPaid: number
  hasUncanceledExitVisa: boolean
}

export function formatSAR(amount: number): string {
  return amount.toLocaleString('en-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

export interface JawazatResult {
  daysOverstayed: number
  dailyFine: number
  dailyFineTotal: number
  flatFine: number
  uncanceledVisaFine: number
  totalFine: number
  maxPenalty: number
  riskLevel: 'none' | 'low' | 'medium' | 'high' | 'critical'
  riskLabelKey: string
  isOverstay: boolean
  messageKey: string
  breakdown: { key: string; value: number; format: string }[]
}

const IQAMA_FLAT_FINES = [0, 15000, 30000, 50000]
const DAILY_FINE_RATE = 100
const MAX_DAILY_FINE_VISIT = 50000
const MAX_VIOLATION_CAP = 100000
const UNCANCELED_VISA_FINE = 1000

function daysBetween(from: Date, to: Date): number {
  const diff = to.getTime() - from.getTime()
  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)))
}

export function calculateJawazatFine(input: JawazatInput): JawazatResult {
  const expiry = new Date(input.expiryDate)
  const calcDate = new Date(input.calculateDate)
  const days = daysBetween(expiry, calcDate)

  if (days === 0) {
    return {
      daysOverstayed: 0,
      dailyFine: 0,
      dailyFineTotal: 0,
      flatFine: 0,
      uncanceledVisaFine: 0,
      totalFine: 0,
      maxPenalty: 0,
      riskLevel: 'none',
      riskLabelKey: 'risk.none',
      isOverstay: false,
      messageKey: 'message.valid',
      breakdown: [],
    }
  }

  let dailyFineTotal = days * DAILY_FINE_RATE
  let flatFine = 0
  let maxPenalty = 0

  if (input.overstayType === 'iqama') {
    const violationIndex = Math.min(input.previousViolations, IQAMA_FLAT_FINES.length - 1)
    flatFine = IQAMA_FLAT_FINES[violationIndex]
    maxPenalty = MAX_VIOLATION_CAP

    if (input.previousViolations >= 3) {
      flatFine = IQAMA_FLAT_FINES[3]
    }
  } else if (input.overstayType === 'exit_reentry') {
    dailyFineTotal = Math.min(dailyFineTotal, MAX_DAILY_FINE_VISIT)
    maxPenalty = MAX_DAILY_FINE_VISIT
  } else if (input.overstayType === 'visit_visa') {
    dailyFineTotal = Math.min(dailyFineTotal, MAX_DAILY_FINE_VISIT)
    maxPenalty = MAX_DAILY_FINE_VISIT
  }

  const uncanceledVisaFine = input.overstayType === 'exit_reentry' && input.hasUncanceledExitVisa
    ? UNCANCELED_VISA_FINE
    : 0

  let totalFine = dailyFineTotal + flatFine + uncanceledVisaFine
  totalFine = Math.min(totalFine, maxPenalty)

  if (input.hasPaidPartial) {
    totalFine = Math.max(0, totalFine - input.amountPaid)
  }

  let riskLevel: JawazatResult['riskLevel'] = 'low'
  let riskLabelKey = 'risk.low'
  if (days === 0) { riskLevel = 'none'; riskLabelKey = 'risk.none' }
  else if (days <= 30) { riskLevel = 'low'; riskLabelKey = 'risk.low' }
  else if (days <= 90) { riskLevel = 'medium'; riskLabelKey = 'risk.medium' }
  else if (days <= 365) { riskLevel = 'high'; riskLabelKey = 'risk.high' }
  else { riskLevel = 'critical'; riskLabelKey = 'risk.critical' }

  const breakdown: JawazatResult['breakdown'] = []
  if (days > 0) {
    breakdown.push({ key: 'breakdown.daysOverstayed', value: days, format: 'number' })
    breakdown.push({ key: 'breakdown.dailyFineRate', value: DAILY_FINE_RATE, format: 'sar' })
    breakdown.push({ key: 'breakdown.totalDailyFines', value: dailyFineTotal, format: 'sar' })
  }
  if (flatFine > 0) {
    breakdown.push({ key: 'breakdown.flatPenalty', value: flatFine, format: 'sar' })
  }
  if (uncanceledVisaFine > 0) {
    breakdown.push({ key: 'breakdown.uncanceledVisaFine', value: uncanceledVisaFine, format: 'sar' })
  }
  if (input.hasPaidPartial && input.amountPaid > 0) {
    breakdown.push({ key: 'breakdown.amountPaid', value: -input.amountPaid, format: 'sar' })
  }

  let messageKey = ''
  if (days >= 365) {
    messageKey = 'message.critical'
  } else if (days >= 90) {
    messageKey = 'message.high'
  } else if (days > 0) {
    messageKey = 'message.overstay'
  }

  return {
    daysOverstayed: days,
    dailyFine: DAILY_FINE_RATE,
    dailyFineTotal,
    flatFine,
    uncanceledVisaFine,
    totalFine,
    maxPenalty,
    riskLevel,
    riskLabelKey,
    isOverstay: days > 0,
    messageKey,
    breakdown,
  }
}

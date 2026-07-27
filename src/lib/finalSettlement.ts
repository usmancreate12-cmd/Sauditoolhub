export type AirTicketOption = 'none' | 'economy' | 'business' | 'custom'

export interface FinalSettlementInput {
  totalSalary: number
  unpaidDays: number
  unusedLeaveDays: number
  airTicket: AirTicketOption
  customAirTicketAmount: number
  eosbAmount: number
}

export interface FinalSettlementResult {
  unpaidSalary: number
  unusedVacationPay: number
  airTicketValue: number
  eosbAmount: number
  totalSettlement: number
  dailyRate: number
  zeroInputs: boolean
  breakdown: { key: string; value: number; format: string }[]
}

export function formatSAR(amount: number): string {
  return amount.toLocaleString('en-SA', { minimumFractionDigits: 0, maximumFractionDigits: 0 })
}

const ECONOMY_TICKET = 2500
const BUSINESS_TICKET = 5000

function getAirTicketValue(option: AirTicketOption, customAmount: number): number {
  switch (option) {
    case 'none': return 0
    case 'economy': return ECONOMY_TICKET
    case 'business': return BUSINESS_TICKET
    case 'custom': return Math.max(0, customAmount || 0)
  }
}

export function calculateFinalSettlement(input: FinalSettlementInput): FinalSettlementResult {
  const dailyRate = input.totalSalary / 30
  const unpaidSalary = dailyRate * input.unpaidDays
  const unusedVacationPay = dailyRate * input.unusedLeaveDays
  const airTicketValue = getAirTicketValue(input.airTicket, input.customAirTicketAmount)
  const eosbAmount = Math.max(0, input.eosbAmount || 0)
  const totalSettlement = unpaidSalary + unusedVacationPay + airTicketValue + eosbAmount

  const zeroInputs =
    input.totalSalary <= 0 &&
    input.unpaidDays <= 0 &&
    input.unusedLeaveDays <= 0 &&
    input.airTicket === 'none' &&
    input.eosbAmount <= 0

  const breakdown = [
    ...(unpaidSalary > 0 ? [{ key: 'breakdown.unpaidSalary', value: unpaidSalary, format: 'sar' as const }] : []),
    ...(unusedVacationPay > 0 ? [{ key: 'breakdown.unusedVacationPay', value: unusedVacationPay, format: 'sar' as const }] : []),
    ...(airTicketValue > 0 ? [{ key: 'breakdown.airTicketValue', value: airTicketValue, format: 'sar' as const }] : []),
    ...(eosbAmount > 0 ? [{ key: 'breakdown.eosbAmount', value: eosbAmount, format: 'sar' as const }] : []),
  ]
  breakdown.push({ key: 'breakdown.totalSettlement', value: totalSettlement, format: 'sar' })

  return {
    unpaidSalary,
    unusedVacationPay,
    airTicketValue,
    eosbAmount,
    totalSettlement,
    dailyRate,
    zeroInputs,
    breakdown,
  }
}

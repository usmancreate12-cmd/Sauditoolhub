export interface EjarDepositInput {
  monthlyRent: number
  depositMonths: number
  yearsStayed: number
  cleaningFee: number
  repairCosts: number
  damageDeduction: number
}

export interface EjarDepositResult {
  depositAmount: number
  totalDeductions: number
  refundAmount: number
  refundPercentage: number
  breakdown: Array<{ key: string; label: string; amount: number }>
}

export function calculateEjarDeposit(input: EjarDepositInput): EjarDepositResult {
  const depositAmount = input.monthlyRent * input.depositMonths
  const damageAmount = (depositAmount * input.damageDeduction) / 100
  const totalDeductions = input.cleaningFee + input.repairCosts + damageAmount
  const refundAmount = Math.max(0, depositAmount - totalDeductions)
  const refundPercentage = depositAmount > 0 ? (refundAmount / depositAmount) * 100 : 0

  const breakdown: EjarDepositResult['breakdown'] = [
    { key: 'depositAmount', label: 'breakdown.depositAmount', amount: depositAmount },
    { key: 'cleaningFee', label: 'breakdown.cleaningFee', amount: input.cleaningFee },
    { key: 'repairCosts', label: 'breakdown.repairCosts', amount: input.repairCosts },
    { key: 'damageDeduction', label: 'breakdown.damageDeduction', amount: damageAmount },
    { key: 'totalDeductions', label: 'breakdown.totalDeductions', amount: totalDeductions },
    { key: 'refundAmount', label: 'breakdown.refundAmount', amount: refundAmount },
  ]

  return { depositAmount, totalDeductions, refundAmount, refundPercentage, breakdown }
}

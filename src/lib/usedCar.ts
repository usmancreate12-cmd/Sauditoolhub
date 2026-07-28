export interface UsedCarInput {
  purchasePrice: number
  carAge: number
  engineCapacity: 'small' | 'medium' | 'large'
  insuranceType: 'thirdParty' | 'comprehensive'
  repairCost: number
  istimaraExpired: boolean
  istimaraYears: number
}

export interface UsedCarResult {
  purchasePrice: number
  naqlMalikiya: number
  istimaraRenewal: number
  insurance: number
  totalHiddenCosts: number
  totalFinalPrice: number
  breakdown: UsedCarBreakdownItem[]
}

export interface UsedCarBreakdownItem {
  key: string
  label: string
  amount: number
}

const TRANSFER_FEES: Record<string, number> = {
  small: 150,
  medium: 300,
  large: 500,
}

const INSURANCE_THIRD_PARTY_MIN = 600
const INSURANCE_THIRD_PARTY_MAX = 1000

export function calculateUsedCarCost(input: UsedCarInput): UsedCarResult {
  const naqlMalikiya = TRANSFER_FEES[input.engineCapacity] ?? 300
  const istimaraRenewal = input.istimaraExpired ? (input.istimaraYears === 2 ? 600 : 300) : 0
  let insurance: number
  if (input.insuranceType === 'thirdParty') {
    insurance = Math.max(INSURANCE_THIRD_PARTY_MIN, Math.min(input.purchasePrice * 0.033, INSURANCE_THIRD_PARTY_MAX))
  } else {
    insurance = input.purchasePrice * 0.025
    insurance = Math.max(insurance, 800)
  }
  insurance = Math.round(insurance)
  const totalHiddenCosts = naqlMalikiya + istimaraRenewal + insurance + input.repairCost
  const totalFinalPrice = input.purchasePrice + totalHiddenCosts
  const breakdown: UsedCarBreakdownItem[] = [
    { key: 'purchasePrice', label: 'breakdown.purchasePrice', amount: input.purchasePrice },
    { key: 'naqlMalikiya', label: 'breakdown.naqlMalikiya', amount: naqlMalikiya },
    { key: 'istimaraRenewal', label: 'breakdown.istimaraRenewal', amount: istimaraRenewal },
    { key: 'insurance', label: 'breakdown.insurance', amount: insurance },
    { key: 'repairCost', label: 'breakdown.repairCost', amount: input.repairCost },
    { key: 'totalHiddenCosts', label: 'breakdown.totalHiddenCosts', amount: totalHiddenCosts },
    { key: 'totalFinalPrice', label: 'breakdown.totalFinalPrice', amount: totalFinalPrice },
  ]
  return { purchasePrice: input.purchasePrice, naqlMalikiya, istimaraRenewal, insurance, totalHiddenCosts, totalFinalPrice, breakdown }
}

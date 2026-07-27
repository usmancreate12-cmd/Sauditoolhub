export interface ZakatInput {
  cashSavings: number
  goldGrams: number
  silverGrams: number
  goldPricePerGram: number
  silverPricePerGram: number
  investmentsValue: number
  immediateDebts: number
}

export interface ZakatResult {
  totalAssets: number
  netWealth: number
  nisabThreshold: number
  nisabMet: boolean
  zakatPayable: number
  breakdown: ZakatBreakdownItem[]
}

export interface ZakatBreakdownItem {
  key: string
  label: string
  amount: number
}

const ZAKAT_RATE = 0.025
const NISAB_GOLD_GRAMS = 85

export function calculateZakat(input: ZakatInput): ZakatResult {
  const goldValue = input.goldGrams * input.goldPricePerGram
  const silverValue = input.silverGrams * input.silverPricePerGram

  const totalAssets = input.cashSavings + goldValue + silverValue + input.investmentsValue
  const netWealth = totalAssets - input.immediateDebts
  const nisabThreshold = NISAB_GOLD_GRAMS * input.goldPricePerGram

  const nisabMet = netWealth >= nisabThreshold
  const zakatPayable = nisabMet ? netWealth * ZAKAT_RATE : 0

  const breakdown: ZakatBreakdownItem[] = [
    { key: 'cashSavings', label: 'breakdown.cashSavings', amount: input.cashSavings },
    { key: 'goldValue', label: 'breakdown.goldValue', amount: goldValue },
    { key: 'silverValue', label: 'breakdown.silverValue', amount: silverValue },
    { key: 'investments', label: 'breakdown.investments', amount: input.investmentsValue },
    { key: 'totalAssets', label: 'breakdown.totalAssets', amount: totalAssets },
    { key: 'debts', label: 'breakdown.debts', amount: -input.immediateDebts },
    { key: 'netWealth', label: 'breakdown.netWealth', amount: netWealth },
  ]

  return { totalAssets, netWealth, nisabThreshold, nisabMet, zakatPayable, breakdown }
}

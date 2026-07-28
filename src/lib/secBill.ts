export const ACCOUNT_TYPES = [
  { id: 'residential', label: 'Residential' },
  { id: 'commercial', label: 'Commercial' },
  { id: 'agricultural', label: 'Agricultural' },
  { id: 'industrial', label: 'Industrial' },
  { id: 'government', label: 'Government' },
] as const

export type AccountType = (typeof ACCOUNT_TYPES)[number]['id']

export const TIERS: Record<AccountType, Array<{ min: number; max: number; rate: number }>> = {
  residential: [
    { min: 0, max: 3000, rate: 18 },
    { min: 3001, max: 4000, rate: 30 },
    { min: 4001, max: 5000, rate: 36 },
    { min: 5001, max: 6000, rate: 42 },
    { min: 6001, max: 7000, rate: 48 },
    { min: 7001, max: 8000, rate: 54 },
    { min: 8001, max: Infinity, rate: 60 },
  ],
  commercial: [
    { min: 0, max: 4000, rate: 26 },
    { min: 4001, max: 8000, rate: 36 },
    { min: 8001, max: Infinity, rate: 44 },
  ],
  agricultural: [
    { min: 0, max: 6000, rate: 12 },
    { min: 6001, max: Infinity, rate: 20 },
  ],
  industrial: [
    { min: 0, max: 5000, rate: 22 },
    { min: 5001, max: 10000, rate: 30 },
    { min: 10001, max: Infinity, rate: 38 },
  ],
  government: [
    { min: 0, max: Infinity, rate: 36 },
  ],
}

export interface SecTierBreakdown {
  tierLabel: string
  consumption: number
  rateSar: number
  cost: number
}

export interface SecBillResult {
  accountType: AccountType
  totalConsumption: number
  breakdown: SecTierBreakdown[]
  totalBeforeVat: number
  vatAmount: number
  totalAfterVat: number
  avgRatePerKwh: number
}

export function calculateSecBill(consumption: number, accountType: AccountType = 'residential'): SecBillResult {
  const tiers = TIERS[accountType]
  let remaining = consumption
  const breakdown: SecTierBreakdown[] = []
  let totalBeforeVat = 0

  for (const tier of tiers) {
    if (remaining <= 0) break
    const tierMax = tier.max === Infinity ? remaining : tier.max
    const tierConsumption = Math.max(0, Math.min(remaining, tierMax - tier.min + (tier.min === 0 ? 0 : 1)))
    const actualConsumption = Math.min(remaining, tierConsumption)
    const rateSar = tier.rate / 100
    const cost = actualConsumption * rateSar
    if (actualConsumption > 0) {
      breakdown.push({
        tierLabel: tier.max === Infinity ? `${tier.min.toLocaleString()}+` : `${tier.min.toLocaleString()}-${tier.max.toLocaleString()}`,
        consumption: actualConsumption,
        rateSar: Math.round(rateSar * 100) / 100,
        cost: Math.round(cost * 100) / 100,
      })
    }
    totalBeforeVat += cost
    remaining -= actualConsumption
  }

  totalBeforeVat = Math.round(totalBeforeVat * 100) / 100
  const vatAmount = Math.round(totalBeforeVat * 0.15 * 100) / 100
  const totalAfterVat = Math.round((totalBeforeVat + vatAmount) * 100) / 100
  const avgRatePerKwh = consumption > 0 ? Math.round((totalBeforeVat / consumption) * 1000) / 1000 : 0

  return { accountType, totalConsumption: consumption, breakdown, totalBeforeVat, vatAmount, totalAfterVat, avgRatePerKwh }
}

export type Platform = 'salla' | 'zid' | 'other'
export type PaymentMethod = 'credit_card' | 'mada' | 'apple_pay' | 'cod'

export interface SallaInput {
  sellingPrice: number
  costPrice: number
  shippingCost: number
  platform: Platform
  paymentMethod: PaymentMethod
  monthlyOrders: number
  codReturnRate: number
}

export interface SallaResult {
  netProfitPerOrder: number
  monthlyNetProfit: number
  profitMarginPct: number
  breakdown: BreakdownItem[]
  optimizationTips: string[]
}

export interface BreakdownItem {
  key: string
  label: string
  amount: number
  isNegative: boolean
}

function getPlatformSubscription(platform: Platform, _locale?: string): number {
  switch (platform) {
    case 'salla': return 149
    case 'zid': return 99
    default: return 0
  }
}

function getPaymentFee(amount: number, method: PaymentMethod, platform: Platform): number {
  if (method === 'cod') {
    return 15
  }
  const pctFee = 0.025 * amount
  const fixedFee = 1
  return pctFee + fixedFee
}

export function calculateSallaProfit(input: SallaInput): SallaResult {
  const {
    sellingPrice,
    costPrice,
    shippingCost,
    platform,
    paymentMethod,
    monthlyOrders,
    codReturnRate,
  } = input

  const subscription = getPlatformSubscription(platform)
  const vatOnFees = subscription * 0.15

  const revenuePerOrder = sellingPrice
  const cogsPerOrder = costPrice
  const shippingPerOrder = shippingCost

  const gatewayFeePerOrder = getPaymentFee(sellingPrice, paymentMethod, platform)
  const returnRate = paymentMethod === 'cod' ? Math.max(0, Math.min(100, codReturnRate || 15)) / 100 : 0.02
  const returnCostPerOrder = 20 * returnRate
  const platformFeePerOrder = monthlyOrders > 0 ? (subscription + vatOnFees) / monthlyOrders : 0

  const totalCostsPerOrder = cogsPerOrder + shippingPerOrder + gatewayFeePerOrder + returnCostPerOrder + platformFeePerOrder
  const netProfitPerOrder = revenuePerOrder - totalCostsPerOrder
  const profitMarginPct = revenuePerOrder > 0 ? (netProfitPerOrder / revenuePerOrder) * 100 : 0
  const monthlyNetProfit = netProfitPerOrder * monthlyOrders

  const breakdown: BreakdownItem[] = [
    { key: 'revenue', label: 'breakdown.revenue', amount: revenuePerOrder, isNegative: false },
    { key: 'cogs', label: 'breakdown.cogs', amount: cogsPerOrder, isNegative: true },
    { key: 'shipping', label: 'breakdown.shipping', amount: shippingPerOrder, isNegative: true },
    { key: 'gatewayFee', label: 'breakdown.gatewayFee', amount: gatewayFeePerOrder, isNegative: true },
    { key: 'returnCost', label: 'breakdown.returnCost', amount: returnCostPerOrder, isNegative: true },
    { key: 'platformFee', label: 'breakdown.platformFee', amount: platformFeePerOrder, isNegative: true },
    { key: 'netProfit', label: 'breakdown.netProfit', amount: netProfitPerOrder, isNegative: netProfitPerOrder < 0 },
  ]

  const codOrders = paymentMethod === 'cod' ? monthlyOrders * returnRate : 0
  const optimizationTips: string[] = []
  if (paymentMethod === 'cod' && codReturnRate > 5) {
    const savedReturns = Math.round(codOrders * 20 * 0.5)
    optimizationTips.push('optimization.reduceCOD')
  }
  if (profitMarginPct < 10) {
    optimizationTips.push('optimization.lowMargin')
  }
  if (shippingCost > 20) {
    optimizationTips.push('optimization.shipping')
  }
  if (platformFeePerOrder > 5) {
    optimizationTips.push('optimization.subscription')
  }

  return {
    netProfitPerOrder,
    monthlyNetProfit,
    profitMarginPct,
    breakdown,
    optimizationTips,
  }
}

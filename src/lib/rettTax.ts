export interface RettTaxInput {
  salePrice: number
  transactionType: 'buyer' | 'seller'
  agentCommission: number
  whoPaysAgent: 'buyer' | 'seller' | 'split'
}

export interface RettTaxResult {
  rettAmount: number
  agentCommissionAmount: number
  buyerTotalCost: number
  sellerNetAmount: number
  breakdown: Array<{ key: string; label: string; amount: number }>
}

export function calculateRettTax(input: RettTaxInput): RettTaxResult {
  const rettAmount = input.salePrice * 0.05
  const agentCommissionAmount = (input.salePrice * input.agentCommission) / 100

  let buyerAgentShare = 0
  let sellerAgentShare = 0
  if (input.whoPaysAgent === 'buyer') buyerAgentShare = agentCommissionAmount
  else if (input.whoPaysAgent === 'seller') sellerAgentShare = agentCommissionAmount
  else {
    buyerAgentShare = agentCommissionAmount / 2
    sellerAgentShare = agentCommissionAmount / 2
  }

  const buyerTotalCost = input.salePrice + rettAmount + buyerAgentShare
  const sellerNetAmount = input.salePrice - sellerAgentShare

  const breakdown: RettTaxResult['breakdown'] = [
    { key: 'salePrice', label: 'breakdown.salePrice', amount: input.salePrice },
    { key: 'rett', label: 'breakdown.rett', amount: rettAmount },
    { key: 'agentFee', label: 'breakdown.agentFee', amount: agentCommissionAmount },
    { key: 'buyerTotal', label: 'breakdown.buyerTotal', amount: buyerTotalCost },
    { key: 'sellerNet', label: 'breakdown.sellerNet', amount: sellerNetAmount },
  ]

  return { rettAmount, agentCommissionAmount, buyerTotalCost, sellerNetAmount, breakdown }
}

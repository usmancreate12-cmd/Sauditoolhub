export interface RoommateInput {
  id: string
  name: string
  share: number
}

export interface BillInput {
  name: string
  amount: number
}

export interface RoommateResult {
  id: string
  name: string
  share: number
  amount: number
  items: Array<{ name: string; amount: number }>
}

export interface BillSplitResult {
  roommates: RoommateResult[]
  grandTotal: number
  totalBills: number
  verified: boolean
}

export function calculateBillSplit(
  roommates: RoommateInput[],
  bills: BillInput[]
): BillSplitResult {
  const totalBills = bills.reduce((s, b) => s + b.amount, 0)
  const totalShares = roommates.reduce((s, r) => s + r.share, 0)

  const results: RoommateResult[] = roommates.map((r) => {
    const proportion = totalShares > 0 ? r.share / totalShares : 1 / roommates.length
    const amount = Math.round(totalBills * proportion * 100) / 100
    const items = bills.map((b) => ({
      name: b.name,
      amount: Math.round(b.amount * proportion * 100) / 100,
    }))
    return { ...r, amount, items }
  })

  const totalAllocated = results.reduce((s, r) => s + r.amount, 0)
  const verified = Math.abs(totalAllocated - totalBills) < 0.02

  return { roommates: results, grandTotal: totalAllocated, totalBills, verified }
}

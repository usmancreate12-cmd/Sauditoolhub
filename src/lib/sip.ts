export interface SipInput {
  monthlyInvestment: number
  annualReturnRate: number
  durationYears: number
}

export interface SipResult {
  futureValue: number
  totalInvested: number
  estimatedReturns: number
  principalRatio: number
  returnsRatio: number
}

export function calculateSip(input: SipInput): SipResult {
  const { monthlyInvestment, annualReturnRate, durationYears } = input

  const monthlyRate = annualReturnRate / 100 / 12
  const totalMonths = durationYears * 12

  let futureValue: number
  if (monthlyRate > 0) {
    futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate)
  } else {
    futureValue = monthlyInvestment * totalMonths
  }

  const totalInvested = monthlyInvestment * totalMonths
  const estimatedReturns = futureValue - totalInvested
  const principalRatio = totalMonths > 0 ? (totalInvested / futureValue) * 100 : 0
  const returnsRatio = totalMonths > 0 ? (estimatedReturns / futureValue) * 100 : 0

  return { futureValue, totalInvested, estimatedReturns, principalRatio, returnsRatio }
}

export interface MortgageVsRentInput {
  propertyValue: number
  downPaymentPercent: number
  interestRate: number
  loanTenure: number
  monthlyRent: number
  yearsToCompare: number
}

export interface YearBreakdown {
  year: number
  cumulativeBuyCost: number
  cumulativeRentCost: number
  equity: number
  remainingLoan: number
}

export interface MortgageVsRentResult {
  monthlyPayment: number
  totalBuyCost: number
  totalRentCost: number
  downPayment: number
  totalInterestPaid: number
  buyBetter: boolean
  breakEvenYear: number | null
  breakdown: YearBreakdown[]
}

export function calculateMortgageVsRent(input: MortgageVsRentInput): MortgageVsRentResult {
  const downPayment = (input.propertyValue * input.downPaymentPercent) / 100
  const loanAmount = input.propertyValue - downPayment
  const monthlyRate = input.interestRate / 100 / 12
  const totalMonths = input.loanTenure * 12

  const monthlyPayment =
    monthlyRate === 0
      ? loanAmount / totalMonths
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)

  const totalPayments = monthlyPayment * totalMonths
  const totalInterestPaid = totalPayments - loanAmount
  const totalBuyCost = downPayment + totalPayments

  const breakdown: YearBreakdown[] = []
  let breakEvenYear: number | null = null
  let cumulativeRentCost = 0

  for (let year = 1; year <= input.yearsToCompare; year++) {
    cumulativeRentCost += input.monthlyRent * 12

    let remainingLoan = loanAmount
    if (year <= input.loanTenure) {
      const paymentsMade = year * 12
      remainingLoan =
        monthlyRate === 0
          ? loanAmount - monthlyPayment * paymentsMade
          : (loanAmount * (Math.pow(1 + monthlyRate, totalMonths) - Math.pow(1 + monthlyRate, paymentsMade))) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
    } else {
      remainingLoan = 0
    }

    const totalPaidSoFar = downPayment + monthlyPayment * Math.min(year * 12, totalMonths)
    const equity = input.propertyValue - remainingLoan

    breakdown.push({
      year,
      cumulativeBuyCost: Math.round(totalPaidSoFar),
      cumulativeRentCost: Math.round(cumulativeRentCost),
      equity: Math.round(Math.max(0, equity)),
      remainingLoan: Math.round(Math.max(0, remainingLoan)),
    })

    if (breakEvenYear === null && totalPaidSoFar <= cumulativeRentCost) {
      breakEvenYear = year
    }
  }

  return {
    monthlyPayment: Math.round(monthlyPayment),
    totalBuyCost: Math.round(totalBuyCost),
    totalRentCost: Math.round(cumulativeRentCost),
    downPayment: Math.round(downPayment),
    totalInterestPaid: Math.round(totalInterestPaid),
    buyBetter: totalBuyCost < cumulativeRentCost,
    breakEvenYear,
    breakdown,
  }
}

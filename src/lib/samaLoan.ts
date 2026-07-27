export interface SamaLoanInput {
  monthlySalary: number
  existingEMIs: number
  annualRate: number
  tenureYears: number
}

export interface SamaLoanResult {
  maxEligibleLoan: number
  maxMonthlyEMI: number
  totalInterestPayable: number
  dbrUtilizationPercent: number
  maxAllowedEMI: number
  availableEMI: number
  isEligible: boolean
  errorMessage: string | null
}

const DBR_LIMIT = 0.33

export function calculateSamaLoan(input: SamaLoanInput): SamaLoanResult {
  const { monthlySalary, existingEMIs, annualRate, tenureYears } = input

  const maxAllowedEMI = monthlySalary * DBR_LIMIT
  const availableEMI = maxAllowedEMI - existingEMIs
  const dbrUtilizationPercent = Math.min((existingEMIs / maxAllowedEMI) * 100, 100)

  if (availableEMI <= 0) {
    return {
      maxEligibleLoan: 0,
      maxMonthlyEMI: 0,
      totalInterestPayable: 0,
      dbrUtilizationPercent,
      maxAllowedEMI,
      availableEMI: 0,
      isEligible: false,
      errorMessage: 'errors.dbrLimitReached',
    }
  }

  const monthlyRate = annualRate / 100 / 12
  const totalMonths = tenureYears * 12

  const pvFactor = monthlyRate > 0
    ? (Math.pow(1 + monthlyRate, totalMonths) - 1) / (monthlyRate * Math.pow(1 + monthlyRate, totalMonths))
    : totalMonths

  const maxEligibleLoan = availableEMI * pvFactor
  const totalPayable = availableEMI * totalMonths
  const totalInterestPayable = totalPayable - maxEligibleLoan

  return {
    maxEligibleLoan,
    maxMonthlyEMI: availableEMI,
    totalInterestPayable: Math.max(0, totalInterestPayable),
    dbrUtilizationPercent,
    maxAllowedEMI,
    availableEMI,
    isEligible: true,
    errorMessage: null,
  }
}

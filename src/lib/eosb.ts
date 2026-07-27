export type TerminationReason = 'resignation' | 'termination' | 'contract_end'
export type ContractType = 'fixed' | 'indefinite'

export interface EOSBInput {
  basicSalary: number
  years: number
  months: number
  reason: TerminationReason
  contractType: ContractType
}

export interface EOSBResult {
  fullEntitlement: number
  firstFiveYears: number
  afterFiveYears: number
  resignationReduction: number
  reductionPercentage: number
  finalAmount: number
  isZeroEntitlement: boolean
  zeroReason: string | null
}

const FIRST_BRACKET_YEARS = 5
const FIRST_BRACKET_RATE = 0.5
const SECOND_BRACKET_RATE = 1.0

const RESIGNATION_TIERS: { min: number; max: number; factor: number }[] = [
  { min: 0, max: 2, factor: 0 },
  { min: 2, max: 5, factor: 1 / 3 },
  { min: 5, max: 10, factor: 2 / 3 },
  { min: 10, max: Infinity, factor: 1 },
]

function getResignationFactor(totalYears: number): number {
  for (const tier of RESIGNATION_TIERS) {
    if (totalYears >= tier.min && totalYears < tier.max) {
      return tier.factor
    }
  }
  return 1
}

export function calculateEOSB(input: EOSBInput): EOSBResult {
  const { basicSalary, years, months, reason, contractType } = input

  if (basicSalary <= 0) {
    throw new Error('VALIDATION_SALARY')
  }
  if (years === 0 && months === 0) {
    throw new Error('VALIDATION_SERVICE_PERIOD')
  }

  const totalYears = years + months / 12

  if (reason === 'resignation' && totalYears < 2) {
    return {
      fullEntitlement: 0,
      firstFiveYears: 0,
      afterFiveYears: 0,
      resignationReduction: 0,
      reductionPercentage: 0,
      finalAmount: 0,
      isZeroEntitlement: true,
      zeroReason: 'ZERO_ENTITLEMENT_ARTICLE_85',
    }
  }

  const yearsInFirstBracket = Math.min(totalYears, FIRST_BRACKET_YEARS)
  const yearsInSecondBracket = Math.max(0, totalYears - FIRST_BRACKET_YEARS)

  const firstFiveYears = (basicSalary / 2) * yearsInFirstBracket
  const afterFiveYears = basicSalary * yearsInSecondBracket
  const fullEntitlement = firstFiveYears + afterFiveYears

  let reductionPercentage = 100

  if (reason === 'resignation') {
    const factor = getResignationFactor(totalYears)
    reductionPercentage = factor * 100
  }

  if (contractType === 'fixed' && reason === 'resignation') {
    reductionPercentage = reductionPercentage / 2
  }

  const finalAmount = (fullEntitlement * reductionPercentage) / 100
  const resignationReduction = fullEntitlement - finalAmount

  return {
    fullEntitlement: round(fullEntitlement),
    firstFiveYears: round(firstFiveYears),
    afterFiveYears: round(afterFiveYears),
    resignationReduction: round(resignationReduction),
    reductionPercentage: round(reductionPercentage),
    finalAmount: round(finalAmount),
    isZeroEntitlement: false,
    zeroReason: null,
  }
}

function round(value: number): number {
  return Math.round(value * 100) / 100
}

export function formatSAR(amount: number): string {
  return amount.toLocaleString('en-SA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })
}

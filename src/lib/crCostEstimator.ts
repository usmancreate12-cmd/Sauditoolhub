export type BusinessActivity = 'commercial' | 'industrial' | 'professional' | 'service'
export type CompanyType = 'sole_establishment' | 'llc' | 'closed_jsc' | 'foreign_branch'
export type CityTier = 'tier1' | 'tier2' | 'tier3'
export type PremisesType = 'rented' | 'owned' | 'home_office'

export interface CrCostInput {
  activity: BusinessActivity
  companyType: CompanyType
  cityTier: CityTier
  premisesType: PremisesType
  capitalAmount: number
  employeesCount: number
  yearsDuration: number
}

export interface CostBreakdown {
  key: string
  label: string
  amount: number
  isOneTime: boolean
}

export interface CrCostResult {
  totalCost: number
  annualRenewalCost: number
  firstYearCost: number
  subTotalGovernment: number
  subTotalChamber: number
  subTotalProfessional: number
  subTotalMunicipal: number
  breakdown: CostBreakdown[]
  tips: string[]
}

const GOVERNMENT_FEES: Record<BusinessActivity, { registration: number; renewal: number }> = {
  commercial: { registration: 200, renewal: 200 },
  industrial: { registration: 300, renewal: 300 },
  professional: { registration: 100, renewal: 100 },
  service: { registration: 150, renewal: 150 },
}

const CHAMBER_FEES: Record<CityTier, { registration: number; renewal: number }> = {
  tier1: { registration: 1500, renewal: 1200 },
  tier2: { registration: 1000, renewal: 800 },
  tier3: { registration: 600, renewal: 500 },
}

const MUNICIPAL_FEES: Record<PremisesType, number> = {
  rented: 500,
  owned: 800,
  home_office: 0,
}

const PROFESSIONAL_FEES: Record<CompanyType, number> = {
  sole_establishment: 500,
  llc: 2000,
  closed_jsc: 5000,
  foreign_branch: 8000,
}

export function calculateCrCost(input: CrCostInput): CrCostResult {
  const govt = GOVERNMENT_FEES[input.activity]
  const chamber = CHAMBER_FEES[input.cityTier]
  const municipal = MUNICIPAL_FEES[input.premisesType]
  const professional = PROFESSIONAL_FEES[input.companyType]

  const governmentRegistration = govt.registration + (input.capitalAmount * 0.001)
  const chamberRegistration = chamber.registration + (input.employeesCount * 100)
  const municipalFee = municipal
  const professionalFee = professional

  const subTotalGovernment = governmentRegistration
  const subTotalChamber = chamberRegistration
  const subTotalMunicipal = municipalFee
  const subTotalProfessional = professionalFee

  const firstYearCost = governmentRegistration + chamberRegistration + municipalFee + professionalFee

  const governmentRenewal = govt.renewal + (input.capitalAmount * 0.0005)
  const chamberRenewal = chamber.renewal + (input.employeesCount * 50)
  const annualRenewalCost = governmentRenewal + chamberRenewal

  const totalCost = firstYearCost + (annualRenewalCost * (input.yearsDuration - 1))

  const breakdown: CostBreakdown[] = [
    { key: 'governmentRegistration', label: 'breakdown.governmentRegistration', amount: governmentRegistration, isOneTime: true },
    { key: 'chamberRegistration', label: 'breakdown.chamberRegistration', amount: chamberRegistration, isOneTime: true },
    { key: 'municipalFee', label: 'breakdown.municipalFee', amount: municipalFee, isOneTime: true },
    { key: 'professionalFee', label: 'breakdown.professionalFee', amount: professionalFee, isOneTime: true },
    { key: 'governmentRenewal', label: 'breakdown.governmentRenewal', amount: governmentRenewal, isOneTime: false },
    { key: 'chamberRenewal', label: 'breakdown.chamberRenewal', amount: chamberRenewal, isOneTime: false },
  ]

  const tips: string[] = []
  if (input.companyType === 'sole_establishment') {
    tips.push('tips.homeOffice')
  }
  if (input.capitalAmount > 500000) {
    tips.push('tips.capitalLarge')
  }
  if (input.employeesCount > 10) {
    tips.push('tips.employeesMany')
  }
  if (input.cityTier === 'tier1') {
    tips.push('tips.tier1City')
  }
  tips.push('tips.qawaem')
  tips.push('tips.bulkYears')

  return {
    totalCost,
    annualRenewalCost,
    firstYearCost,
    subTotalGovernment,
    subTotalChamber,
    subTotalProfessional,
    subTotalMunicipal,
    breakdown,
    tips,
  }
}

export interface PropertyValuationInput {
  propertyType: 'apartment' | 'villa' | 'land' | 'commercial'
  city: 'riyadh' | 'jeddah' | 'dammam' | 'makkah' | 'madinah' | 'other'
  areaSqm: number
  age: number
  rooms: number
  finishing: 'standard' | 'good' | 'excellent' | 'luxury'
  hasParking: boolean
  hasCentralAc: boolean
}

export interface PropertyValuationResult {
  estimatedValue: number
  valuePerSqm: number
  depreciationPercent: number
  breakdown: Array<{ key: string; label: string; value: string }>
  rangeLow: number
  rangeHigh: number
}

const PROPERTY_RATES: Record<string, Record<string, number>> = {
  riyadh: { apartment: 4500, villa: 3800, land: 2500, commercial: 6000 },
  jeddah: { apartment: 4000, villa: 3500, land: 2000, commercial: 5500 },
  dammam: { apartment: 3000, villa: 2800, land: 1500, commercial: 4000 },
  makkah: { apartment: 5000, villa: 4200, land: 3000, commercial: 6500 },
  madinah: { apartment: 3800, villa: 3200, land: 2200, commercial: 5000 },
  other: { apartment: 2500, villa: 2200, land: 1200, commercial: 3500 },
}

const FINISHING_MULTIPLIERS = { standard: 1.0, good: 1.1, excellent: 1.25, luxury: 1.5 }

export function calculatePropertyValuation(input: PropertyValuationInput): PropertyValuationResult {
  const ratePerSqm = PROPERTY_RATES[input.city][input.propertyType]
  const baseValue = input.areaSqm * ratePerSqm
  const depreciationPercent = Math.min(30, input.age * 1)
  const depreciationMultiplier = 1 - depreciationPercent / 100
  const roomBonus = Math.max(0, (input.rooms - 2) * 0.05)
  const finishingMultiplier = FINISHING_MULTIPLIERS[input.finishing]
  const parkingBonus = input.hasParking ? 0.03 : 0
  const acBonus = input.hasCentralAc ? 0.02 : 0

  const estimatedValue = Math.round(
    baseValue * depreciationMultiplier * finishingMultiplier * (1 + roomBonus + parkingBonus + acBonus)
  )

  const valuePerSqm = Math.round(estimatedValue / input.areaSqm)
  const rangeLow = Math.round(estimatedValue * 0.9)
  const rangeHigh = Math.round(estimatedValue * 1.1)

  const breakdown: PropertyValuationResult['breakdown'] = [
    { key: 'propertyType', label: 'breakdown.propertyType', value: `breakdown.type${input.propertyType.charAt(0).toUpperCase() + input.propertyType.slice(1)}` },
    { key: 'city', label: 'breakdown.city', value: `cities.${input.city}` },
    { key: 'areaSqm', label: 'breakdown.areaSqm', value: `${input.areaSqm.toLocaleString()} sqm` },
    { key: 'ratePerSqm', label: 'breakdown.ratePerSqm', value: `${ratePerSqm.toLocaleString()} SAR/sqm` },
    { key: 'baseValue', label: 'breakdown.baseValue', value: `${baseValue.toLocaleString()} SAR` },
    { key: 'depreciation', label: 'breakdown.depreciation', value: `-${depreciationPercent}%` },
    { key: 'finishing', label: 'breakdown.finishing', value: `×${finishingMultiplier}` },
    { key: 'roomBonus', label: 'breakdown.roomBonus', value: `+${(roomBonus * 100).toFixed(0)}%` },
    { key: 'estimatedValue', label: 'breakdown.estimatedValue', value: `${estimatedValue.toLocaleString()} SAR` },
    { key: 'valuePerSqm', label: 'breakdown.valuePerSqm', value: `${valuePerSqm.toLocaleString()} SAR/sqm` },
  ]

  return { estimatedValue, valuePerSqm, depreciationPercent, breakdown, rangeLow, rangeHigh }
}

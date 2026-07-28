export const FUEL_TYPES = [
  { id: '91', label: 'Gasoline 91', price: 2.18 },
  { id: '95', label: 'Gasoline 95', price: 2.33 },
  { id: 'diesel', label: 'Diesel', price: 0.60 },
] as const

export type FuelTypeId = (typeof FUEL_TYPES)[number]['id']

export interface FuelCostInput {
  distance: number
  efficiency: number
  fuelType: FuelTypeId
  customPrice: number | null
  tripsPerMonth: number
}

export interface FuelCostResult {
  costPerTrip: number
  costPerKm: number
  monthlyCost: number
  litersNeeded: number
  fuelType: FuelTypeId
  fuelPrice: number
  distance: number
  efficiency: number
  tripsPerMonth: number
  annualCost: number
}

export function calculateFuelCost(input: FuelCostInput): FuelCostResult {
  const fuelPrice = input.customPrice ?? FUEL_TYPES.find((f) => f.id === input.fuelType)?.price ?? 2.18
  const litersNeeded = input.distance / input.efficiency
  const costPerTrip = litersNeeded * fuelPrice
  const costPerKm = fuelPrice / input.efficiency
  const monthlyCost = costPerTrip * input.tripsPerMonth
  const annualCost = monthlyCost * 12
  return {
    costPerTrip: Math.round(costPerTrip * 100) / 100,
    costPerKm: Math.round(costPerKm * 1000) / 1000,
    monthlyCost: Math.round(monthlyCost * 100) / 100,
    litersNeeded: Math.round(litersNeeded * 100) / 100,
    fuelType: input.fuelType,
    fuelPrice,
    distance: input.distance,
    efficiency: input.efficiency,
    tripsPerMonth: input.tripsPerMonth,
    annualCost: Math.round(annualCost * 100) / 100,
  }
}

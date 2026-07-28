export interface TrafficViolation {
  id: string
  categoryId: string
  fineRange: [number, number]
  blackPoints: number
  hasVehicleImpoundment?: boolean
}

export interface ViolationCategory {
  id: string
  violations: TrafficViolation[]
}

export interface AddedViolation {
  id: string
  violationId: string
  fineAmount: number
  blackPoints: number
}

export interface TrafficFineResult {
  totalFine: number
  totalBlackPoints: number
  licenseSuspensionWarning: boolean
  hasVehicleImpoundment: boolean
  violations: AddedViolation[]
}

export const violationCategories: ViolationCategory[] = [
  {
    id: 'speeding',
    violations: [
      { id: 'speeding_less_20', categoryId: 'speeding', fineRange: [300, 500], blackPoints: 0 },
      { id: 'speeding_20_30', categoryId: 'speeding', fineRange: [500, 800], blackPoints: 2 },
      { id: 'speeding_30_40', categoryId: 'speeding', fineRange: [800, 1000], blackPoints: 4 },
      { id: 'speeding_40_50', categoryId: 'speeding', fineRange: [1000, 1500], blackPoints: 6 },
      { id: 'speeding_50_plus', categoryId: 'speeding', fineRange: [1500, 2000], blackPoints: 8, hasVehicleImpoundment: true },
    ],
  },
  {
    id: 'signals',
    violations: [
      { id: 'red_light', categoryId: 'signals', fineRange: [3000, 6000], blackPoints: 6, hasVehicleImpoundment: true },
      { id: 'stop_sign', categoryId: 'signals', fineRange: [500, 900], blackPoints: 3 },
    ],
  },
  {
    id: 'driving_behavior',
    violations: [
      { id: 'no_seatbelt', categoryId: 'driving_behavior', fineRange: [300, 500], blackPoints: 1 },
      { id: 'mobile_phone', categoryId: 'driving_behavior', fineRange: [500, 900], blackPoints: 4 },
      { id: 'tailgating', categoryId: 'driving_behavior', fineRange: [500, 1500], blackPoints: 4 },
      { id: 'wrong_direction', categoryId: 'driving_behavior', fineRange: [3000, 6000], blackPoints: 8, hasVehicleImpoundment: true },
      { id: 'pedestrian', categoryId: 'driving_behavior', fineRange: [500, 1000], blackPoints: 6 },
    ],
  },
  {
    id: 'documents',
    violations: [
      { id: 'no_license', categoryId: 'documents', fineRange: [500, 1000], blackPoints: 4, hasVehicleImpoundment: true },
      { id: 'expired_istimara', categoryId: 'documents', fineRange: [150, 300], blackPoints: 1 },
    ],
  },
  {
    id: 'parking',
    violations: [
      { id: 'wrong_parking', categoryId: 'parking', fineRange: [150, 500], blackPoints: 0 },
      { id: 'handicapped_parking', categoryId: 'parking', fineRange: [500, 1000], blackPoints: 2, hasVehicleImpoundment: true },
    ],
  },
  {
    id: 'other',
    violations: [
      { id: 'illegal_tint', categoryId: 'other', fineRange: [500, 900], blackPoints: 2 },
      { id: 'street_racing', categoryId: 'other', fineRange: [5000, 20000], blackPoints: 12, hasVehicleImpoundment: true },
    ],
  },
]

export function getAllViolations(): TrafficViolation[] {
  return violationCategories.flatMap((c) => c.violations)
}

export function getViolationById(id: string): TrafficViolation | undefined {
  return getAllViolations().find((v) => v.id === id)
}

export function getCategoryById(id: string): ViolationCategory | undefined {
  return violationCategories.find((c) => c.id === id)
}

export function calculateTrafficFines(
  addedViolations: AddedViolation[]
): TrafficFineResult {
  const totalFine = addedViolations.reduce((sum, v) => sum + v.fineAmount, 0)
  const totalBlackPoints = addedViolations.reduce((sum, v) => sum + v.blackPoints, 0)
  const licenseSuspensionWarning = totalBlackPoints >= 24
  const hasVehicleImpoundment = addedViolations.some((v) => {
    const violation = getViolationById(v.violationId)
    return violation?.hasVehicleImpoundment ?? false
  })
  return {
    totalFine,
    totalBlackPoints,
    licenseSuspensionWarning,
    hasVehicleImpoundment,
    violations: addedViolations,
  }
}

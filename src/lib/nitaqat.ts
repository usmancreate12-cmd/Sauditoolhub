export type NitaqatBand = 'platinum' | 'highGreen' | 'midGreen' | 'lowGreen' | 'yellow' | 'red'

export interface NitaqatInput {
  totalEmployees: number
  saudiEmployees: number
}

export interface NitaqatResult {
  currentSaudization: number
  currentBand: NitaqatBand
  proposedSaudization: number
  proposedBand: NitaqatBand
  proposedTotal: number
  proposedSaudi: number
  recommendation: string
}

export interface BandInfo {
  key: NitaqatBand
  minPct: number
  maxPct: number
  color: string
  labelKey: string
  descriptionKey: string
}

export const BAND_DEFINITIONS: BandInfo[] = [
  { key: 'platinum', minPct: 25, maxPct: 100, color: '#00D4AA', labelKey: 'bandLabels.platinum', descriptionKey: 'bandDescriptions.platinum' },
  { key: 'highGreen', minPct: 15, maxPct: 24.99, color: '#22C55E', labelKey: 'bandLabels.highGreen', descriptionKey: 'bandDescriptions.highGreen' },
  { key: 'midGreen', minPct: 10, maxPct: 14.99, color: '#84CC16', labelKey: 'bandLabels.midGreen', descriptionKey: 'bandDescriptions.midGreen' },
  { key: 'lowGreen', minPct: 6, maxPct: 9.99, color: '#A3E635', labelKey: 'bandLabels.lowGreen', descriptionKey: 'bandDescriptions.lowGreen' },
  { key: 'yellow', minPct: 3, maxPct: 5.99, color: '#EAB308', labelKey: 'bandLabels.yellow', descriptionKey: 'bandDescriptions.yellow' },
  { key: 'red', minPct: 0, maxPct: 2.99, color: '#EF4444', labelKey: 'bandLabels.red', descriptionKey: 'bandDescriptions.red' },
]

export function getBand(pct: number): NitaqatBand {
  if (pct >= 25) return 'platinum'
  if (pct >= 15) return 'highGreen'
  if (pct >= 10) return 'midGreen'
  if (pct >= 6) return 'lowGreen'
  if (pct >= 3) return 'yellow'
  return 'red'
}

function getBandLabelKey(band: NitaqatBand): string {
  const b = BAND_DEFINITIONS.find((x) => x.key === band)
  return b ? b.labelKey : 'bandLabels.red'
}

function getBandDescriptionKey(band: NitaqatBand): string {
  const b = BAND_DEFINITIONS.find((x) => x.key === band)
  return b ? b.descriptionKey : 'bandDescriptions.red'
}

export function calculateNitaqat(input: NitaqatInput, proposedSaudi: number, proposedTotal: number): NitaqatResult {
  const currentSaudization = input.totalEmployees > 0 ? (input.saudiEmployees / input.totalEmployees) * 100 : 0
  const proposedSaudization = proposedTotal > 0 ? (proposedSaudi / proposedTotal) * 100 : 0

  const currentBand = getBand(currentSaudization)
  const proposedBand = getBand(proposedSaudization)

  const bandOrder: NitaqatBand[] = ['red', 'yellow', 'lowGreen', 'midGreen', 'highGreen', 'platinum']
  const currentRank = bandOrder.indexOf(currentBand)
  const proposedRank = bandOrder.indexOf(proposedBand)

  let recommendation = 'recommendation.noChange'
  if (proposedRank > currentRank) {
    const saudisNeeded = Math.ceil((proposedTotal * (proposedBand === proposedBand ? BAND_DEFINITIONS[bandOrder.indexOf(proposedBand)].minPct : 0)) / 100) - proposedSaudi
    if (saudisNeeded > 0) {
      recommendation = 'recommendation.hire'
    } else {
      recommendation = 'recommendation.better'
    }
  } else if (proposedRank < currentRank) {
    recommendation = 'recommendation.warning'
  }

  return {
    currentSaudization,
    currentBand,
    proposedSaudization,
    proposedBand,
    proposedTotal,
    proposedSaudi,
    recommendation,
  }
}

export function generateRecommendation(
  result: NitaqatResult,
  t: (key: string, vars?: Record<string, any>) => string
): string {
  const bandOrder: NitaqatBand[] = ['red', 'yellow', 'lowGreen', 'midGreen', 'highGreen', 'platinum']
  const currentRank = bandOrder.indexOf(result.currentBand)
  const proposedRank = bandOrder.indexOf(result.proposedBand)

  if (proposedRank > currentRank) {
    if (proposedRank < bandOrder.length - 1) {
      const nextBand = bandOrder[proposedRank + 1]
      const nextThreshold = BAND_DEFINITIONS.find((b) => b.key === nextBand)!.minPct
      const needed = Math.ceil((result.proposedTotal * nextThreshold) / 100) - result.proposedSaudi
      if (needed > 0) {
        return t('recommendation.hireMore', {
          count: needed,
          band: t(getBandLabelKey(nextBand)),
        })
      }
    }
    return t('recommendation.good')
  } else if (proposedRank < currentRank) {
    return t('recommendation.dropWarning', {
      band: t(getBandLabelKey(result.currentBand)),
    })
  }

  if (currentRank < bandOrder.length - 1) {
    const nextBand = bandOrder[currentRank + 1]
    const nextThreshold = BAND_DEFINITIONS.find((b) => b.key === nextBand)!.minPct
    const needed = Math.ceil((result.proposedTotal * nextThreshold) / 100) - result.proposedSaudi
    if (needed > 0) {
      return t('recommendation.hireMore', {
        count: needed,
        band: t(getBandLabelKey(nextBand)),
      })
    }
  }

  return t('recommendation.good')
}

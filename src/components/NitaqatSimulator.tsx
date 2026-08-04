'use client'

import { useState, useCallback, useEffect, useMemo } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Users,
  RotateCcw,
  TrendingUp,
  TrendingDown,
  Plus,
  Minus,
  Info,
  AlertTriangle,
  Copy,
  Printer,
  BarChart3,
} from 'lucide-react'

import { calculateNitaqat, getBand, BAND_DEFINITIONS, generateRecommendation, type NitaqatResult } from '@/lib/nitaqat'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 appearance-none cursor-pointer ' +
  'bg-gray-800 border-gray-600 text-gray-100 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

export function NitaqatSimulator({ locale }: { locale?: string }) {
  const t = useTranslations('NitaqatCalculator')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [totalEmployees, setTotalEmployees] = useState<number>(10)
  const [saudiEmployees, setSaudiEmployees] = useState<number>(2)
  const [proposedDeltaSaudi, setProposedDeltaSaudi] = useState(0)
  const [proposedDeltaExpat, setProposedDeltaExpat] = useState(0)
  const [isCalculated, setIsCalculated] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const proposedSaudi = useMemo(() => Math.max(0, saudiEmployees + proposedDeltaSaudi), [saudiEmployees, proposedDeltaSaudi])
  const proposedTotal = useMemo(() => Math.max(1, totalEmployees + proposedDeltaSaudi + proposedDeltaExpat), [totalEmployees, proposedDeltaSaudi, proposedDeltaExpat])

  const result = useMemo<NitaqatResult | null>(() => {
    if (!isCalculated || totalEmployees < 1) return null
    return calculateNitaqat(
      { totalEmployees, saudiEmployees },
      proposedSaudi,
      proposedTotal
    )
  }, [totalEmployees, saudiEmployees, proposedSaudi, proposedTotal, isCalculated])

  const recommendationText = useMemo(() => {
    if (!result) return ''
    return generateRecommendation(result, t)
  }, [result, t])

  const validate = useCallback((): string | null => {
    if (totalEmployees < 1) return t('errors.totalRequired')
    if (saudiEmployees > totalEmployees) return t('errors.saudiExceedsTotal')
    if (saudiEmployees < 0) return t('errors.invalidSaudi')
    return null
  }, [totalEmployees, saudiEmployees, t])

  const handleCalculate = useCallback(() => {
    const error = validate()
    if (error) {
      setCalcError(error)
      setIsCalculated(false)
      return
    }
    setCalcError(null)
    setIsCalculated(true)
  }, [validate])

  const handleReset = useCallback(() => {
    setTotalEmployees(10)
    setSaudiEmployees(2)
    setProposedDeltaSaudi(0)
    setProposedDeltaExpat(0)
    setIsCalculated(false)
    setCalcError(null)
  }, [])

  const handleCopy = useCallback(() => {
    if (!result) return
    const text = t('copiedResult', {
      current: result.currentSaudization.toFixed(1),
      proposed: result.proposedSaudization.toFixed(1),
    })
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result, t])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleDeltaSaudi = useCallback((delta: number) => {
    setProposedDeltaSaudi((prev) => prev + delta)
  }, [])

  const handleDeltaExpat = useCallback((delta: number) => {
    setProposedDeltaExpat((prev) => prev + delta)
  }, [])

  function bandColor(band: string): string {
    const b = BAND_DEFINITIONS.find((x) => x.key === band)
    return b?.color ?? '#EF4444'
  }

  const bandKey = (band: string) => `bandLabels.${band}` as const

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        {/* Left Column: Form */}
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelClass}>{t('form.totalEmployees.label')}</label>
                  <input
                    type="number"
                    min={1}
                    value={totalEmployees}
                    onChange={(e) => setTotalEmployees(Math.max(1, parseInt(e.target.value) || 1))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>{t('form.saudiEmployees.label')}</label>
                  <input
                    type="number"
                    min={0}
                    value={saudiEmployees}
                    onChange={(e) => setSaudiEmployees(Math.max(0, parseInt(e.target.value) || 0))}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className={labelClass}>{t('form.sector.label')}</label>
                  <div className="relative">
                    <select disabled className={selectClass + ' opacity-50 cursor-not-allowed'}>
                      <option value="all">{t('form.sector.options.all')}</option>
                    </select>
                  </div>
                  <p className="mt-1 text-xs text-gray-400">{t('form.sector.hint')}</p>
                </div>

                {calcError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
                    <AlertTriangle size={14} />
                    {calcError}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <MagneticButton type="button" onClick={handleCalculate} className="flex-1">
                    <span className="flex items-center justify-center gap-2">
                      <BarChart3 size={16} />
                      {t('buttons.simulate')}
                    </span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handleReset} className="px-4">
                    <RotateCcw size={16} />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* What-If Simulator Controls */}
          <GlassCard>
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-5 w-5 text-desert-accent" />
                <h3 className="text-base font-semibold text-white">{t('simulator.title')}</h3>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Saudi Controls */}
                <div className="rounded-xl bg-gray-800/40 p-4">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{t('simulator.saudiEmployees')}</p>
                  <p className="text-2xl font-bold text-desert-primary mb-3">
                    {proposedSaudi}
                  </p>
                  <div className="flex gap-2">
                    <MagneticButton
                      type="button"
                      variant="secondary"
                      onClick={() => handleDeltaSaudi(1)}
                      className="flex-1 text-xs py-1.5"
                    >
                      <Plus size={14} />
                      <span>{t('simulator.addSaudi')}</span>
                    </MagneticButton>
                    <MagneticButton
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        if (proposedSaudi > 0) handleDeltaSaudi(-1)
                      }}
                      className="flex-1 text-xs py-1.5"
                      disabled={proposedSaudi <= 0}
                    >
                      <Minus size={14} />
                      <span>{t('simulator.removeSaudi')}</span>
                    </MagneticButton>
                  </div>
                </div>

                {/* Expat Controls */}
                <div className="rounded-xl bg-gray-800/40 p-4">
                  <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-3">{t('simulator.expatEmployees')}</p>
                  <p className="text-2xl font-bold text-desert-accent mb-3">
                    {proposedTotal - proposedSaudi}
                  </p>
                  <div className="flex gap-2">
                    <MagneticButton
                      type="button"
                      variant="secondary"
                      onClick={() => handleDeltaExpat(1)}
                      className="flex-1 text-xs py-1.5"
                    >
                      <Plus size={14} />
                      <span>{t('simulator.addExpat')}</span>
                    </MagneticButton>
                    <MagneticButton
                      type="button"
                      variant="secondary"
                      onClick={() => {
                        if (proposedTotal - proposedSaudi > 0) handleDeltaExpat(-1)
                      }}
                      className="flex-1 text-xs py-1.5"
                      disabled={proposedTotal - proposedSaudi <= 0}
                    >
                      <Minus size={14} />
                      <span>{t('simulator.removeExpat')}</span>
                    </MagneticButton>
                  </div>
                </div>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed">{t('simulator.hint')}</p>
            </div>
          </GlassCard>
        </motion.div>

        {/* Right Column: Results */}
        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!isCalculated ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <BarChart3 className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-400">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : result ? (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                {/* Current Status */}
                <GlassCard>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <Info size={14} className="text-desert-primary" />
                    {t('results.currentStatus')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{t('results.saudizationPct')}</span>
                      <span className="text-lg font-bold text-white">
                        <NumberTicker value={result.currentSaudization} />%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{t('results.nitaqatBand')}</span>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          backgroundColor: `${bandColor(result.currentBand)}20`,
                          color: bandColor(result.currentBand),
                          border: `1px solid ${bandColor(result.currentBand)}40`,
                        }}
                      >
                        {t(bandKey(result.currentBand))}
                      </span>
                    </div>
                  </div>
                </GlassCard>

                {/* Proposed Status */}
                <GlassCard>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white mb-4">
                    <TrendingUp size={14} className="text-desert-accent" />
                    {t('results.proposedStatus')}
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{t('results.saudizationPct')}</span>
                      <span className="text-lg font-bold text-white">
                        <NumberTicker value={result.proposedSaudization} />%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{t('results.nitaqatBand')}</span>
                      <span
                        className="rounded-full px-3 py-1 text-xs font-bold"
                        style={{
                          backgroundColor: `${bandColor(result.proposedBand)}20`,
                          color: bandColor(result.proposedBand),
                          border: `1px solid ${bandColor(result.proposedBand)}40`,
                        }}
                      >
                        {t(bandKey(result.proposedBand))}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      <span className="text-xs text-gray-400">{t('results.breakdown')}</span>
                      <span className="text-xs text-gray-400">
                        {result.proposedSaudi} {t('results.saudi')} / {result.proposedTotal - result.proposedSaudi} {t('results.expat')} = {result.proposedTotal} {t('results.total')}
                      </span>
                    </div>
                  </div>
                </GlassCard>

                {/* Recommendation */}
                <GlassCard>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                    <TrendingUp size={14} className="text-desert-accent" />
                    {t('results.recommendation')}
                  </h3>
                  <p className="rounded-xl bg-gray-800/30 p-3 text-sm text-gray-300 leading-relaxed">
                    {recommendationText}
                  </p>
                </GlassCard>

                {/* Band Legend */}
                <GlassCard>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-white mb-3">
                    <BarChart3 size={14} className="text-desert-primary" />
                    {t('bandLegend.title')}
                  </h3>
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                    {BAND_DEFINITIONS.map((band) => (
                      <div
                        key={band.key}
                        className="flex items-center gap-2 rounded-lg bg-gray-800/20 px-2 py-1.5"
                      >
                        <div
                          className="h-3 w-3 shrink-0 rounded-full"
                          style={{ backgroundColor: band.color }}
                        />
                        <span className="text-xs text-gray-400">{t(band.labelKey)}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <div className="flex flex-wrap gap-2">
                  <MagneticButton type="button" variant="secondary" onClick={handleCopy} className="text-xs">
                    <Copy size={14} />
                    <span>{copied ? t('buttons.copied') : t('buttons.copy')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handlePrint} className="text-xs">
                    <Printer size={14} />
                    <span>{t('buttons.print')}</span>
                  </MagneticButton>
                </div>

                <p className="px-1 text-xs text-gray-600">{t('disclaimer')}</p>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

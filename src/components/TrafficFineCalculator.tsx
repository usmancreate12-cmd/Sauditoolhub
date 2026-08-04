'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, Copy, Printer, ShieldAlert, Plus, Trash2 } from 'lucide-react'

import { violationCategories, getAllViolations, calculateTrafficFines, getViolationById, type TrafficViolation, type AddedViolation, type TrafficFineResult } from '@/lib/trafficFine'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

export function TrafficFineCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('TrafficFineCalculator')

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedViolation, setSelectedViolation] = useState('')
  const [fineAmount, setFineAmount] = useState('')
  const [addedViolations, setAddedViolations] = useState<AddedViolation[]>([])
  const [result, setResult] = useState<TrafficFineResult | null>(null)
  const [copied, setCopied] = useState(false)

  const currentViolation: TrafficViolation | undefined = selectedViolation
    ? getViolationById(selectedViolation)
    : undefined

  const filteredViolations = selectedCategory
    ? violationCategories.find((c) => c.id === selectedCategory)?.violations ?? []
    : []

  const handleCategoryChange = useCallback((catId: string) => {
    setSelectedCategory(catId)
    setSelectedViolation('')
    setFineAmount('')
  }, [])

  const handleViolationChange = useCallback((violationId: string) => {
    setSelectedViolation(violationId)
    const v = getViolationById(violationId)
    if (v) setFineAmount(String(v.fineRange[1]))
    else setFineAmount('')
  }, [])

  const handleAddViolation = useCallback(() => {
    if (!selectedViolation || !fineAmount) return
    const v = getViolationById(selectedViolation)
    if (!v) return
    const amount = Number(fineAmount)
    if (isNaN(amount) || amount < v.fineRange[0] || amount > v.fineRange[1]) return
    const newViolation: AddedViolation = {
      id: `${selectedViolation}_${Date.now()}`,
      violationId: selectedViolation,
      fineAmount: amount,
      blackPoints: v.blackPoints,
    }
    const updated = [...addedViolations, newViolation]
    setAddedViolations(updated)
    setResult(calculateTrafficFines(updated))
    setSelectedViolation('')
    setFineAmount('')
    setSelectedCategory('')
  }, [selectedViolation, fineAmount, addedViolations])

  const handleRemoveViolation = useCallback((id: string) => {
    const updated = addedViolations.filter((v) => v.id !== id)
    setAddedViolations(updated)
    setResult(updated.length > 0 ? calculateTrafficFines(updated) : null)
  }, [addedViolations])

  const handleReset = useCallback(() => {
    setSelectedCategory('')
    setSelectedViolation('')
    setFineAmount('')
    setAddedViolations([])
    setResult(null)
    setCopied(false)
  }, [])

  const handleCopy = useCallback(() => {
    if (!result) return
    const text = t('copiedResult', { total: result.totalFine.toFixed(2), points: result.totalBlackPoints })
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result, t])

  const handlePrint = useCallback(() => { window.print() }, [])
  const hasResult = result !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item} className="space-y-4">
          <GlassCard>
            <div className="space-y-5">
              <div className="mb-2 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>{t('form.categoryLabel')}</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => handleCategoryChange(e.target.value)}
                    className={selectClass}
                  >
                    <option value="">{t('form.categoryPlaceholder')}</option>
                    {violationCategories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {t(`categories.${cat.id}`)}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedCategory && (
                  <div>
                    <label className={labelClass}>{t('form.violationLabel')}</label>
                    <select
                      value={selectedViolation}
                      onChange={(e) => handleViolationChange(e.target.value)}
                      className={selectClass}
                    >
                      <option value="">{t('form.violationPlaceholder')}</option>
                      {filteredViolations.map((v) => (
                        <option key={v.id} value={v.id}>
                          {t(`violations.${v.id}`)}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {currentViolation && (
                  <>
                    <div>
                      <label className={labelClass}>{t('form.fineAmountLabel')}</label>
                      <div className="flex gap-2">
                        <input
                          type="number"
                          value={fineAmount}
                          onChange={(e) => setFineAmount(e.target.value)}
                          min={currentViolation.fineRange[0]}
                          max={currentViolation.fineRange[1]}
                          className={inputClass}
                        />
                        <span className="flex items-center text-sm text-gray-400">SAR</span>
                      </div>
                      <p className="mt-1 text-xs text-gray-400">
                        {t('form.rangeHint', { min: currentViolation.fineRange[0], max: currentViolation.fineRange[1] })}
                      </p>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/30 px-3 py-2">
                      <span className="text-sm text-gray-400">{t('form.blackPointsLabel')}</span>
                      <span className="text-sm font-bold text-desert-accent">{currentViolation.blackPoints}</span>
                    </div>
                    {currentViolation.hasVehicleImpoundment && (
                      <div className="flex items-center gap-2 rounded-lg bg-yellow-500/10 px-3 py-2 text-xs text-yellow-400">
                        <AlertTriangle size={14} />
                        {t('form.impoundmentWarning')}
                      </div>
                    )}
                    <MagneticButton type="button" onClick={handleAddViolation} className="w-full">
                      <span className="flex items-center justify-center gap-2">
                        <Plus size={16} /> {t('buttons.addViolation')}
                      </span>
                    </MagneticButton>
                  </>
                )}
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!hasResult ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <ShieldAlert className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-400">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('results.totalFine')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.totalFine} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-400">{t('results.totalBlackPoints')}</p>
                        <p className="text-lg font-bold text-desert-accent">{result.totalBlackPoints}</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-400">{t('results.violationsCount')}</p>
                        <p className="text-lg font-bold text-white">{result.violations.length}</p>
                      </div>
                    </div>
                    {result.licenseSuspensionWarning && (
                      <div className="flex items-center gap-2 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
                        <AlertTriangle size={14} /> {t('warnings.licenseSuspension')}
                      </div>
                    )}
                    {result.hasVehicleImpoundment && (
                      <div className="flex items-center gap-2 rounded-lg bg-yellow-500/10 px-3 py-2 text-xs text-yellow-400">
                        <AlertTriangle size={14} /> {t('warnings.vehicleImpoundment')}
                      </div>
                    )}
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    {result.violations.map((v) => {
                      const violation = getViolationById(v.violationId)
                      return (
                        <div key={v.id} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-400">
                              {violation ? t(`violations.${violation.id}`) : v.violationId}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <span className="text-sm font-medium text-green-400">{v.fineAmount} SAR</span>
                            <span className="text-xs text-gray-600">{v.blackPoints} pt</span>
                            <button
                              onClick={() => handleRemoveViolation(v.id)}
                              className="text-gray-400 hover:text-red-400 transition-colors"
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </GlassCard>

                <div className="flex flex-wrap gap-2">
                  <MagneticButton type="button" variant="secondary" onClick={handleCopy} className="text-xs">
                    <Copy size={14} /><span>{copied ? t('buttons.copied') : t('buttons.copy')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handlePrint} className="text-xs">
                    <Printer size={14} /><span>{t('buttons.print')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handleReset} className="text-xs">
                    <Trash2 size={14} /><span>{t('buttons.reset')}</span>
                  </MagneticButton>
                </div>
                <p className="px-1 text-xs text-gray-600">{t('disclaimer')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

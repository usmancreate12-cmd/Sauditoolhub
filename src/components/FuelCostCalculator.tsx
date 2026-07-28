'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Fuel } from 'lucide-react'

import { calculateFuelCost, FUEL_TYPES, type FuelCostResult } from '@/lib/fuelCost'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  distance: z.coerce.number().min(1),
  efficiency: z.coerce.number().min(1),
  fuelType: z.enum(['91', '95', 'diesel']),
  customPrice: z.union([z.coerce.number().min(0), z.literal('')]),
  tripsPerMonth: z.coerce.number().min(0).max(100),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
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

export function FuelCostCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('FuelCostCalculator')

  const [result, setResult] = useState<FuelCostResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      distance: 50,
      efficiency: 12,
      fuelType: '91',
      customPrice: '' as any,
      tripsPerMonth: 30,
    },
  })

  const fuelType = watch('fuelType')
  const selectedFuel = FUEL_TYPES.find((f) => f.id === fuelType)

  const onSubmit = useCallback((values: FormValues) => {
    setIsCalculating(true); setCalcError(null)
    try {
      const customPrice = values.customPrice === '' || values.customPrice === 0 ? null : Number(values.customPrice)
      setResult(calculateFuelCost({
        distance: values.distance,
        efficiency: values.efficiency,
        fuelType: values.fuelType,
        customPrice,
        tripsPerMonth: values.tripsPerMonth,
      }))
    } catch { setCalcError(t('errors.generic')); setResult(null) }
    finally { setTimeout(() => setIsCalculating(false), 400) }
  }, [t])

  const handleReset = useCallback(() => { reset(); setResult(null); setCalcError(null) }, [reset])
  const handleCopy = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(t('copiedResult', { monthly: result.monthlyCost.toFixed(2), trip: result.costPerTrip.toFixed(2) }))
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }, [result, t])
  const handlePrint = useCallback(() => { window.print() }, [])
  const hasResult = result !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="mb-2 flex items-center gap-2">
                <Fuel className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.distanceLabel')}</label>
                    <input type="number" min={1} step={5} {...register('distance')} className={inputClass} />
                    <p className="mt-1 text-xs text-gray-500">{t('form.distanceHint')}</p>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.efficiencyLabel')}</label>
                    <input type="number" min={1} step={0.5} {...register('efficiency')} className={inputClass} />
                    <p className="mt-1 text-xs text-gray-500">{t('form.efficiencyHint')}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.fuelTypeLabel')}</label>
                    <select {...register('fuelType')} className={selectClass}>
                      {FUEL_TYPES.map((ft) => (
                        <option key={ft.id} value={ft.id}>{ft.label} ({ft.price.toFixed(2)} SAR/L)</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.customPriceLabel')}</label>
                    <input type="number" min={0} step={0.1} {...register('customPrice')} placeholder={selectedFuel ? String(selectedFuel.price) : ''} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('form.tripsLabel')}</label>
                  <input type="number" min={0} max={100} step={1} {...register('tripsPerMonth')} className={inputClass} />
                  <p className="mt-1 text-xs text-gray-500">{t('form.tripsHint')}</p>
                </div>
                {calcError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
                    <AlertTriangle size={14} />{calcError}
                  </div>
                )}
                <div className="flex gap-3 pt-2">
                  <MagneticButton type="submit" disabled={isCalculating} className="flex-1">
                    <span className="flex items-center justify-center gap-2">
                      {isCalculating ? t('buttons.calculating') : <><Calculator size={16} /> {t('buttons.calculate')}</>}
                    </span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handleReset} disabled={isCalculating} className="px-4">
                    <RotateCcw size={16} />
                  </MagneticButton>
                </div>
              </form>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!hasResult ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Fuel className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.monthlyCost')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.monthlyCost} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.costPerTrip')}</p>
                        <p className="text-lg font-bold text-desert-accent"><NumberTicker value={result.costPerTrip} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.costPerKm')}</p>
                        <p className="text-lg font-bold text-white">{result.costPerKm} SAR</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                      <span className="text-sm text-gray-400">{t('breakdown.fuelType')}</span>
                      <span className="text-sm font-medium text-white">{t(`fuelTypes.${result.fuelType}`)} @ {result.fuelPrice.toFixed(2)} SAR/L</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                      <span className="text-sm text-gray-400">{t('breakdown.distance')}</span>
                      <span className="text-sm font-medium text-white">{result.distance} km</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                      <span className="text-sm text-gray-400">{t('breakdown.efficiency')}</span>
                      <span className="text-sm font-medium text-white">{result.efficiency} km/L</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                      <span className="text-sm text-gray-400">{t('breakdown.litersNeeded')}</span>
                      <span className="text-sm font-medium text-white">{result.litersNeeded} L</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                      <span className="text-sm text-gray-400">{t('breakdown.tripsPerMonth')}</span>
                      <span className="text-sm font-medium text-white">{result.tripsPerMonth}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg bg-desert-primary/10 px-3 py-2">
                      <span className="text-sm font-semibold text-desert-primary">{t('breakdown.annualCost')}</span>
                      <span className="text-sm font-bold text-desert-primary">{result.annualCost.toFixed(2)} SAR</span>
                    </div>
                  </div>
                </GlassCard>

                <div className="flex flex-wrap gap-2">
                  <MagneticButton type="button" variant="secondary" onClick={handleCopy} className="text-xs">
                    <Copy size={14} /><span>{copied ? t('buttons.copied') : t('buttons.copy')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handlePrint} className="text-xs">
                    <Printer size={14} /><span>{t('buttons.print')}</span>
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

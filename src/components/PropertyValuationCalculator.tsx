'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Building2 } from 'lucide-react'

import { calculatePropertyValuation, type PropertyValuationResult } from '@/lib/propertyValuation'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  propertyType: z.enum(['apartment', 'villa', 'land', 'commercial']),
  city: z.enum(['riyadh', 'jeddah', 'dammam', 'makkah', 'madinah', 'other']),
  areaSqm: z.coerce.number().min(1),
  age: z.coerce.number().min(0).max(100),
  rooms: z.coerce.number().min(0).max(50),
  finishing: z.enum(['standard', 'good', 'excellent', 'luxury']),
  hasParking: z.boolean(),
  hasCentralAc: z.boolean(),
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

export function PropertyValuationCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('PropertyValuationCalculator')

  const [result, setResult] = useState<PropertyValuationResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      propertyType: 'apartment',
      city: 'riyadh',
      areaSqm: 150,
      age: 5,
      rooms: 3,
      finishing: 'good',
      hasParking: true,
      hasCentralAc: false,
    },
  })

  const onSubmit = useCallback((values: FormValues) => {
    setIsCalculating(true); setCalcError(null)
    try {
      setResult(calculatePropertyValuation(values))
    } catch { setCalcError(t('errors.generic')); setResult(null) }
    finally { setTimeout(() => setIsCalculating(false), 400) }
  }, [t])

  const handleReset = useCallback(() => { reset(); setResult(null); setCalcError(null) }, [reset])
  const handleCopy = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(t('copiedResult', { value: result.estimatedValue.toLocaleString() }))
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
                <Building2 className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.propertyTypeLabel')}</label>
                    <select {...register('propertyType')} className={selectClass}>
                      <option value="apartment">{t('form.types.apartment')}</option>
                      <option value="villa">{t('form.types.villa')}</option>
                      <option value="land">{t('form.types.land')}</option>
                      <option value="commercial">{t('form.types.commercial')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.cityLabel')}</label>
                    <select {...register('city')} className={selectClass}>
                      <option value="riyadh">{t('cities.riyadh')}</option>
                      <option value="jeddah">{t('cities.jeddah')}</option>
                      <option value="dammam">{t('cities.dammam')}</option>
                      <option value="makkah">{t('cities.makkah')}</option>
                      <option value="madinah">{t('cities.madinah')}</option>
                      <option value="other">{t('cities.other')}</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.areaSqmLabel')}</label>
                    <input type="number" min={1} step={10} {...register('areaSqm')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.ageLabel')}</label>
                    <input type="number" min={0} max={100} step={1} {...register('age')} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.roomsLabel')}</label>
                    <input type="number" min={0} max={50} step={1} {...register('rooms')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.finishingLabel')}</label>
                    <select {...register('finishing')} className={selectClass}>
                      <option value="standard">{t('form.finishings.standard')}</option>
                      <option value="good">{t('form.finishings.good')}</option>
                      <option value="excellent">{t('form.finishings.excellent')}</option>
                      <option value="luxury">{t('form.finishings.luxury')}</option>
                    </select>
                  </div>
                </div>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register('hasParking')} className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-desert-primary" />
                    <span className="text-sm text-gray-400">{t('form.parkingLabel')}</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="checkbox" {...register('hasCentralAc')} className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-desert-primary" />
                    <span className="text-sm text-gray-400">{t('form.centralAcLabel')}</span>
                  </label>
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
                    <Building2 className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.estimatedValue')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.estimatedValue} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.valuePerSqm')}</p>
                        <p className="text-lg font-bold text-white"><NumberTicker value={result.valuePerSqm} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.range')}</p>
                        <p className="text-sm font-bold text-desert-accent">{result.rangeLow.toLocaleString()} – {result.rangeHigh.toLocaleString()} SAR</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    {result.breakdown.map((item) => (
                      <div key={item.key} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400">{t(item.label)}</span>
                        <span className={`text-sm font-medium ${item.key === 'estimatedValue' ? 'text-desert-primary' : 'text-gray-300'}`}>
                          {item.key === 'propertyType' || item.key === 'city' ? t(item.value) : item.value}
                        </span>
                      </div>
                    ))}
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

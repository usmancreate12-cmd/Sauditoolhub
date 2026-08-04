'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Car } from 'lucide-react'

import { calculateUsedCarCost, type UsedCarResult } from '@/lib/usedCar'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  purchasePrice: z.coerce.number().min(1),
  carAge: z.coerce.number().min(0).max(50),
  engineCapacity: z.enum(['small', 'medium', 'large']),
  insuranceType: z.enum(['thirdParty', 'comprehensive']),
  repairCost: z.coerce.number().min(0),
  istimaraExpired: z.boolean(),
  istimaraYears: z.coerce.number().min(1).max(5),
})

type FormValues = z.output<typeof formSchema>

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

export function UsedCarCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('UsedCarCalculator')

  const [result, setResult] = useState<UsedCarResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      purchasePrice: 50000,
      carAge: 5,
      engineCapacity: 'small',
      insuranceType: 'thirdParty',
      repairCost: 2000,
      istimaraExpired: false,
      istimaraYears: 1,
    },
  })

  const istimaraExpired = watch('istimaraExpired')

  const onSubmit = useCallback((values: FormValues) => {
    setIsCalculating(true); setCalcError(null)
    try {
      setResult(calculateUsedCarCost(values))
    } catch { setCalcError(t('errors.generic')); setResult(null) }
    finally { setTimeout(() => setIsCalculating(false), 400) }
  }, [t])

  const handleReset = useCallback(() => { reset(); setResult(null); setCalcError(null) }, [reset])
  const handleCopy = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(t('copiedResult', { total: result.totalFinalPrice.toFixed(2), hidden: result.totalHiddenCosts.toFixed(2) }))
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }, [result, t])
  const handlePrint = useCallback(() => { window.print() }, [])
  const hasResult = result !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="mb-2 flex items-center gap-2">
                <Car className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.purchasePrice.label')}</label>
                    <input type="number" min={1} step={1000} {...register('purchasePrice')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.carAge.label')}</label>
                    <input type="number" min={0} max={50} step={1} {...register('carAge')} className={inputClass} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.engineCapacity.label')}</label>
                    <select {...register('engineCapacity')} className={selectClass}>
                      <option value="small">{t('form.engineCapacity.options.small')}</option>
                      <option value="medium">{t('form.engineCapacity.options.medium')}</option>
                      <option value="large">{t('form.engineCapacity.options.large')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.insuranceType.label')}</label>
                    <select {...register('insuranceType')} className={selectClass}>
                      <option value="thirdParty">{t('form.insuranceType.options.thirdParty')}</option>
                      <option value="comprehensive">{t('form.insuranceType.options.comprehensive')}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('form.repairCost.label')}</label>
                  <input type="number" min={0} step={500} {...register('repairCost')} className={inputClass} />
                </div>
                <div className="flex items-center gap-3">
                  <input type="checkbox" id="istimaraExpired" {...register('istimaraExpired')} className="h-4 w-4 accent-desert-primary" />
                  <label htmlFor="istimaraExpired" className="text-sm text-gray-400">{t('form.istimaraExpired.label')}</label>
                </div>
                {istimaraExpired && (
                  <div>
                    <label className={labelClass}>{t('form.istimaraYears.label')}</label>
                    <select {...register('istimaraYears')} className={selectClass}>
                      <option value={1}>1 {t('form.istimaraYears.year')}</option>
                      <option value={2}>2 {t('form.istimaraYears.years')}</option>
                    </select>
                  </div>
                )}
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
                    <Car className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-400">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('results.totalFinalPrice')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.totalFinalPrice} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-400">{t('results.totalHiddenCosts')}</p>
                        <p className="text-lg font-bold text-desert-accent"><NumberTicker value={result.totalHiddenCosts} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-400">{t('results.purchasePrice')}</p>
                        <p className="text-lg font-bold text-white"><NumberTicker value={result.purchasePrice} /> SAR</p>
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
                        <span className="text-sm font-medium text-green-400">{item.amount.toFixed(2)} SAR</span>
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

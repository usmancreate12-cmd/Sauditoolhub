'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Zap } from 'lucide-react'

import { calculateSecBill, ACCOUNT_TYPES, type SecBillResult } from '@/lib/secBill'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  consumption: z.coerce.number().min(1, 'Enter your monthly consumption'),
  accountType: z.enum(['residential', 'commercial', 'agricultural', 'industrial', 'government']),
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

export function SecBillCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('SecBillCalculator')

  const [result, setResult] = useState<SecBillResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: { consumption: 3000, accountType: 'residential' },
  })

  const onSubmit = useCallback((values: FormValues) => {
    setIsCalculating(true); setCalcError(null)
    try {
      setResult(calculateSecBill(values.consumption, values.accountType))
    } catch { setCalcError(t('errors.generic')); setResult(null) }
    finally { setTimeout(() => setIsCalculating(false), 400) }
  }, [t])

  const handleReset = useCallback(() => { reset(); setResult(null); setCalcError(null) }, [reset])
  const handleCopy = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(t('copiedResult', { total: result.totalAfterVat.toFixed(2), consumption: result.totalConsumption }))
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
                <Zap className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className={labelClass}>{t('form.consumptionLabel')}</label>
                  <input
                    type="number"
                    min={1}
                    step={100}
                    {...register('consumption')}
                    placeholder={t('form.consumptionPlaceholder')}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-gray-500">{t('form.consumptionHint')}</p>
                  {errors.consumption && (
                    <p className="mt-1 text-xs text-red-400">{errors.consumption.message}</p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>{t('form.accountTypeLabel')}</label>
                  <select {...register('accountType')} className={selectClass}>
                    {ACCOUNT_TYPES.map((type) => (
                      <option key={type.id} value={type.id}>
                        {t(`accountTypes.${type.id}`)}
                      </option>
                    ))}
                  </select>
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
                    <Zap className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.totalBill')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.totalAfterVat} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.beforeVat')}</p>
                        <p className="text-lg font-bold text-white"><NumberTicker value={result.totalBeforeVat} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.vatAmount')}</p>
                        <p className="text-lg font-bold text-desert-accent"><NumberTicker value={result.vatAmount} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.avgRate')}</p>
                        <p className="text-lg font-bold text-white">{result.avgRatePerKwh} SAR</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2 text-xs text-gray-500">
                      <span>{t('breakdown.tierHeader')}</span>
                      <span>{t('breakdown.kwhHeader')}</span>
                      <span>{t('breakdown.rateHeader')}</span>
                      <span>{t('breakdown.costHeader')}</span>
                    </div>
                    {result.breakdown.map((item, i) => (
                      <div key={i} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400 w-20">{item.tierLabel}</span>
                        <span className="text-sm text-gray-300 w-20 text-center">{item.consumption.toLocaleString()}</span>
                        <span className="text-sm text-gray-500 w-16 text-center">{item.rateSar.toFixed(3)}</span>
                        <span className="text-sm font-medium text-green-400 w-20 text-right">{item.cost.toFixed(2)} SAR</span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between rounded-lg bg-desert-primary/10 px-3 py-2">
                      <span className="text-sm font-semibold text-desert-primary">{t('breakdown.totalLabel')}</span>
                      <span className="text-sm font-bold text-desert-primary">{result.totalConsumption.toLocaleString()} kWh</span>
                      <span className="text-sm font-bold text-desert-primary">{(result.totalAfterVat).toFixed(2)} SAR</span>
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

'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calculator,
  RotateCcw,
  TrendingUp,
  AlertTriangle,
  Copy,
  Printer,
  Building2,
} from 'lucide-react'

import { calculateCrCost, type CrCostResult } from '@/lib/crCostEstimator'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  activity: z.enum(['commercial', 'industrial', 'professional', 'service']),
  companyType: z.enum(['sole_establishment', 'llc', 'closed_jsc', 'foreign_branch']),
  cityTier: z.enum(['tier1', 'tier2', 'tier3']),
  premisesType: z.enum(['rented', 'owned', 'home_office']),
  capitalAmount: z.coerce.number().min(1),
  employeesCount: z.coerce.number().min(0).max(500),
  yearsDuration: z.coerce.number().min(1).max(10),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer ' +
  'bg-gray-800 border-gray-600 text-gray-100 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

export function CrCostEstimator({ locale }: { locale?: string }) {
  const t = useTranslations('CrCostEstimator')

  const [result, setResult] = useState<CrCostResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      activity: 'commercial',
      companyType: 'sole_establishment',
      cityTier: 'tier1',
      premisesType: 'rented',
      capitalAmount: 100000,
      employeesCount: 1,
      yearsDuration: 1,
    },
  })

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)

      try {
        const res = calculateCrCost(values)
        setResult(res)
      } catch {
        setCalcError(t('errors.generic'))
        setResult(null)
      } finally {
        setTimeout(() => setIsCalculating(false), 400)
      }
    },
    [t]
  )

  const handleReset = useCallback(() => {
    reset()
    setResult(null)
    setCalcError(null)
  }, [reset])

  const handleCopy = useCallback(() => {
    if (!result) return
    const text = t('copiedResult', {
      total: result.totalCost.toFixed(2),
      annual: result.annualRenewalCost.toFixed(2),
    })
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result, t])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const hasResult = result !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Building2 className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.activity.label')}</label>
                    <select {...register('activity')} className={selectClass}>
                      <option value="commercial">{t('form.activity.options.commercial')}</option>
                      <option value="industrial">{t('form.activity.options.industrial')}</option>
                      <option value="professional">{t('form.activity.options.professional')}</option>
                      <option value="service">{t('form.activity.options.service')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.companyType.label')}</label>
                    <select {...register('companyType')} className={selectClass}>
                      <option value="sole_establishment">{t('form.companyType.options.sole_establishment')}</option>
                      <option value="llc">{t('form.companyType.options.llc')}</option>
                      <option value="closed_jsc">{t('form.companyType.options.closed_jsc')}</option>
                      <option value="foreign_branch">{t('form.companyType.options.foreign_branch')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.cityTier.label')}</label>
                    <select {...register('cityTier')} className={selectClass}>
                      <option value="tier1">{t('form.cityTier.options.tier1')}</option>
                      <option value="tier2">{t('form.cityTier.options.tier2')}</option>
                      <option value="tier3">{t('form.cityTier.options.tier3')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.premisesType.label')}</label>
                    <select {...register('premisesType')} className={selectClass}>
                      <option value="rented">{t('form.premisesType.options.rented')}</option>
                      <option value="owned">{t('form.premisesType.options.owned')}</option>
                      <option value="home_office">{t('form.premisesType.options.home_office')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.capital.label')}</label>
                    <input type="number" min={1} step={10000} {...register('capitalAmount')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.employees.label')}</label>
                    <input type="number" min={0} step={1} {...register('employeesCount')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.years.label')}</label>
                    <input type="number" min={1} max={10} step={1} {...register('yearsDuration')} className={inputClass} />
                  </div>
                </div>

                {calcError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
                    <AlertTriangle size={14} />
                    {calcError}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <MagneticButton type="submit" disabled={isCalculating} className="flex-1">
                    <span className="flex items-center justify-center gap-2">
                      {isCalculating ? t('buttons.calculating') : (
                        <><Calculator size={16} /> {t('buttons.calculate')}</>
                      )}
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
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.firstYear')}</p>
                        <p className="text-2xl font-bold text-desert-primary">
                          <NumberTicker value={result.firstYearCost} /> SAR
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.annual')}</p>
                        <p className="text-2xl font-bold text-desert-accent">
                          <NumberTicker value={result.annualRenewalCost} /> SAR
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                      <p className="text-xs text-gray-500">{t('results.total', { years: 1 })}</p>
                      <p className="text-lg font-bold text-desert-primary">
                        <NumberTicker value={result.totalCost} /> SAR
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    {result.breakdown.map((item) => (
                      <div key={item.key} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-400">{t(item.label)}</span>
                          {item.isOneTime ? (
                            <span className="rounded bg-desert-primary/10 px-1.5 py-0.5 text-[10px] text-desert-primary">{t('breakdown.oneTime')}</span>
                          ) : (
                            <span className="rounded bg-desert-accent/10 px-1.5 py-0.5 text-[10px] text-desert-accent">{t('breakdown.annual')}</span>
                          )}
                        </div>
                        <span className="text-sm font-medium text-gray-200">{item.amount.toFixed(2)} SAR</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <TrendingUp size={14} className="text-desert-accent" />
                    {t('tips.title')}
                  </h3>
                  <div className="space-y-2">
                    {result.tips.map((tip, i) => (
                      <div key={i} className="flex items-start gap-2 rounded-lg bg-desert-primary/5 px-3 py-2">
                        <TrendingUp size={14} className="mt-0.5 shrink-0 text-desert-primary" />
                        <p className="text-sm text-gray-300">{t(tip)}</p>
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
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

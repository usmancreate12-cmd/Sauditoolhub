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
  Users,
  AlertTriangle,
  Info,
  Lightbulb,
  Copy,
  Printer,
  ChevronDown,
  Baby,
  User,
} from 'lucide-react'

import { calculateFamilyVisa, formatSAR, type FamilyVisaResult } from '@/lib/familyVisa'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  wifeCount: z.coerce.number().min(0).max(1).default(1),
  kidsCount: z.coerce.number().min(0).max(10).default(2),
  wifeIqamaStatus: z.enum(['new', 'renewal', 'active']),
  kidsIqamaStatus: z.enum(['new', 'renewal', 'active']),
  exitType: z.enum(['single', 'multiple']),
  visaDuration: z.enum(['1m', '2m', '3m', '6m', '1y']),
  iqamaExpiry: z.string().min(1, 'VALIDATION_DATE'),
  planningPeriod: z.enum(['6m', '1y', '2y']),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 ' +
  'border-gray-600 ' +
  'text-gray-100 ' +
  'placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 appearance-none cursor-pointer ' +
  'bg-gray-800 ' +
  'border-gray-600 ' +
  'text-gray-100 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

export function FamilyVisaOptimizer({ locale }: { locale?: string }) {
  const t = useTranslations('FamilyVisaCalculator')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [result, setResult] = useState<FamilyVisaResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [showSuccess, setShowSuccess] = useState(false)
  const [copied, setCopied] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      wifeCount: 1,
      kidsCount: 2,
      wifeIqamaStatus: 'active',
      kidsIqamaStatus: 'active',
      exitType: 'single',
      visaDuration: '3m',
      iqamaExpiry: '',
      planningPeriod: '1y',
    },
  })

  const watchedWifeCount = watch('wifeCount')
  const watchedKidsCount = watch('kidsCount')

  const totalDependents = (watchedWifeCount || 0) + (watchedKidsCount || 0)

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)
      setShowSuccess(false)

      try {
        const res = calculateFamilyVisa({
          wifeCount: values.wifeCount || 0,
          kidsCount: values.kidsCount || 0,
          wifeIqamaStatus: values.wifeIqamaStatus,
          kidsIqamaStatus: values.kidsIqamaStatus,
          exitType: values.exitType,
          visaDuration: values.visaDuration,
          iqamaExpiry: values.iqamaExpiry,
          planningPeriod: values.planningPeriod,
        })
        setResult(res)
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
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
    setShowSuccess(false)
  }, [reset])

  const handleCopy = useCallback(() => {
    if (!result) return
    const total = formatSAR(result.totalPlanningPeriodFees)
    navigator.clipboard.writeText(t('copiedResult', { total }))
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
        {/* ---- FORM COLUMN ---- */}
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">
                  {t('form.title')}
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                {/* Wife & Kids */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <User size={14} className="text-desert-primary" />
                        {t('form.wifeCount.label')}
                      </span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={1}
                      step={1}
                      {...register('wifeCount')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <Baby size={14} className="text-desert-primary" />
                        {t('form.kidsCount.label')}
                      </span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={10}
                      step={1}
                      {...register('kidsCount')}
                      className={inputClass}
                    />
                  </div>
                </div>

                {totalDependents === 0 && (
                  <div className="flex items-center gap-2 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-400">
                    <Info size={14} />
                    {t('noDependentsInfo')}
                  </div>
                )}

                {/* Iqama Status */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.wifeIqamaStatus.label')}</label>
                    <div className="relative">
                      <select {...register('wifeIqamaStatus')} className={selectClass}>
                        <option value="new">{t('form.wifeIqamaStatus.options.new')}</option>
                        <option value="renewal">{t('form.wifeIqamaStatus.options.renewal')}</option>
                        <option value="active">{t('form.wifeIqamaStatus.options.active')}</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.kidsIqamaStatus.label')}</label>
                    <div className="relative">
                      <select {...register('kidsIqamaStatus')} className={selectClass}>
                        <option value="new">{t('form.kidsIqamaStatus.options.new')}</option>
                        <option value="renewal">{t('form.kidsIqamaStatus.options.renewal')}</option>
                        <option value="active">{t('form.kidsIqamaStatus.options.active')}</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Exit/Re-Entry */}
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.exitType.label')}</label>
                    <div className="relative">
                      <select {...register('exitType')} className={selectClass}>
                        <option value="single">{t('form.exitType.options.single')}</option>
                        <option value="multiple">{t('form.exitType.options.multiple')}</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.visaDuration.label')}</label>
                    <div className="relative">
                      <select {...register('visaDuration')} className={selectClass}>
                        <option value="1m">{t('form.visaDuration.options.1m')}</option>
                        <option value="2m">{t('form.visaDuration.options.2m')}</option>
                        <option value="3m">{t('form.visaDuration.options.3m')}</option>
                        <option value="6m">{t('form.visaDuration.options.6m')}</option>
                        <option value="1y">{t('form.visaDuration.options.1y')}</option>
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    </div>
                  </div>
                </div>

                {/* Iqama Expiry */}
                <div>
                  <label className={labelClass}>{t('form.iqamaExpiry.label')}</label>
                  <input type="date" {...register('iqamaExpiry')} className={inputClass} />
                  {errors.iqamaExpiry && (
                    <p className="mt-1 text-xs text-red-400">{t('errors.dateRequired')}</p>
                  )}
                </div>

                {/* Planning Period */}
                <div>
                  <label className={labelClass}>{t('form.planningPeriod.label')}</label>
                  <div className="relative">
                    <select {...register('planningPeriod')} className={selectClass}>
                      <option value="6m">{t('form.planningPeriod.options.6m')}</option>
                      <option value="1y">{t('form.planningPeriod.options.1y')}</option>
                      <option value="2y">{t('form.planningPeriod.options.2y')}</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                  </div>
                </div>

                {calcError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
                    <AlertTriangle size={14} />
                    {calcError}
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <MagneticButton
                    type="submit"
                    disabled={isCalculating || totalDependents === 0}
                    className="flex-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      {isCalculating ? (
                        t('buttons.calculating')
                      ) : (
                        <>
                          <Calculator size={16} />
                          {t('buttons.calculate')}
                        </>
                      )}
                    </span>
                  </MagneticButton>
                  <MagneticButton
                    type="button"
                    variant="secondary"
                    onClick={handleReset}
                    disabled={isCalculating}
                    className="px-4"
                  >
                    <RotateCcw size={16} />
                  </MagneticButton>
                </div>
              </form>
            </div>
          </GlassCard>
        </motion.div>

        {/* ---- RESULTS COLUMN ---- */}
        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!hasResult ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Users className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : result.zeroDependents ? (
              <motion.div
                key="zero"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle2 className="mb-4 h-12 w-12 text-desert-primary" />
                    <p className="text-lg font-semibold text-white">{t('noDependents.title')}</p>
                    <p className="mt-2 text-sm text-gray-400">{t('noDependents.message')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {/* Main Result */}
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                        {t('results.totalFees')} ({t(`period.${result.planningMonths}m`)})
                      </p>
                      <p className={cn('result-value text-desert-primary', isRtl && 'font-arabic')}>
                        <NumberTicker value={result.totalPlanningPeriodFees} /> SAR
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.monthlyBudget')}</p>
                        <p className="text-lg font-bold text-white">
                          <NumberTicker value={result.monthlyBudget} /> SAR
                        </p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.dependents')}</p>
                        <p className="text-lg font-bold text-white">{result.totalDependents}</p>
                      </div>
                    </div>

                    {/* Warnings */}
                    {result.needsRenewalWarning && (
                      <div className="flex items-start gap-2 rounded-lg bg-amber-500/10 px-3 py-2 text-xs text-amber-400">
                        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                        <span>{t('warnings.renewal')}</span>
                      </div>
                    )}
                    {result.largeFamilyWarning && (
                      <div className="flex items-start gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
                        <AlertTriangle size={14} className="mt-0.5 shrink-0" />
                        <span>{t('warnings.largeFamily')}</span>
                      </div>
                    )}
                  </div>
                </GlassCard>

                {/* Breakdown */}
                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">
                    <span className="flex items-center gap-2">
                      <Info size={14} className="text-desert-primary" />
                      {t('breakdown.title')}
                    </span>
                  </h3>
                  <div className="space-y-2">
                    {result.breakdown.map((item) => (
                      <div
                        key={item.key}
                        className="flex items-center justify-between rounded-lg bg-gray-800/30 px-3 py-2"
                      >
                        <span className="text-sm text-gray-400">{t(item.key)}</span>
                        <span className="text-sm font-semibold text-white">
                          {formatSAR(item.value)} SAR
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                {/* Tips */}
                {result.tips.length > 0 && (
                  <GlassCard>
                    <h3 className="mb-3 text-sm font-semibold text-white">
                      <span className="flex items-center gap-2">
                        <Lightbulb size={14} className="text-desert-gold" />
                        {t('tips.title')}
                      </span>
                    </h3>
                    <ul className="space-y-2">
                      {result.tips.map((tipKey, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="mt-0.5 text-desert-gold">•</span>
                          <span>{t(tipKey)}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-2">
                  <MagneticButton
                    type="button"
                    variant="secondary"
                    onClick={handleCopy}
                    className="text-xs"
                  >
                    <Copy size={14} />
                    <span>{copied ? t('buttons.copied') : t('buttons.copy')}</span>
                  </MagneticButton>
                  <MagneticButton
                    type="button"
                    variant="secondary"
                    onClick={handlePrint}
                    className="text-xs"
                  >
                    <Printer size={14} />
                    <span>{t('buttons.print')}</span>
                  </MagneticButton>
                </div>

                {/* Success animation */}
                <AnimatePresence>
                  {showSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 rounded-lg bg-emerald-500/15 px-3 py-2 text-xs text-emerald-400"
                    >
                      <CheckCircle2 size={14} />
                      {t('successMessage')}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Disclaimer */}
                <p className="px-1 text-xs text-gray-600">{t('disclaimer')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

function CheckCircle2(props: { className?: string; size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}

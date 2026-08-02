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
  ChevronDown,
  AlertTriangle,
  CheckCircle2,
  Copy,
  Printer,
  Info,
  Scale,
  BookOpen,
  Sparkles,
} from 'lucide-react'

import { calculateEOSB, formatSAR, type EOSBResult } from '@/lib/eosb'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z
  .object({
    basicSalary: z.coerce
      .number({ invalid_type_error: 'VALIDATION_SALARY' })
      .positive('VALIDATION_SALARY'),
    years: z.coerce.number().min(0).max(50).default(0),
    months: z.coerce.number().min(0).max(11).default(0),
    reason: z.enum(['resignation', 'termination', 'contract_end']),
    contractType: z.enum(['fixed', 'indefinite']),
  })
  .refine((d) => d.years > 0 || d.months > 0, {
    message: 'VALIDATION_SERVICE_PERIOD',
    path: ['years'],
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

const fadeSlide = (isRtl: boolean) => ({
  initial: { opacity: 0, x: isRtl ? 20 : -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as const } },
})

const colorMap: Record<string, string> = {
  'var(--color-desert-text)': '',
  'var(--color-desert-accent)': 'text-desert-accent',
  'var(--color-desert-success)': 'text-emerald-500',
}

function BreakdownRow({
  label,
  value,
  color,
  bold = false,
  large = false,
}: {
  label: string
  value: string
  color: string
  bold?: boolean
  large?: boolean
}) {
  const colorClass = colorMap[color] ?? ''
  return (
    <div className="flex items-center justify-between">
      <span
        className={cn(
          'text-gray-400',
          bold && 'font-medium text-white'
        )}
      >
        {label}
      </span>
      <span
        className={cn(
          'tabular-nums',
          colorClass,
          large ? 'text-lg font-bold' : bold ? 'font-semibold' : ''
        )}
      >
        {value}
      </span>
    </div>
  )
}

export function EOSBCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('EOSBCalculator')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [result, setResult] = useState<EOSBResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      basicSalary: 0,
      years: 0,
      months: 0,
      reason: 'termination',
      contractType: 'indefinite',
    },
  })

  const watchedReason = watch('reason')
  const watchedContract = watch('contractType')

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)
      setShowSuccess(false)

      try {
        const res = calculateEOSB({
          basicSalary: values.basicSalary,
          years: values.years ?? 0,
          months: values.months ?? 0,
          reason: values.reason,
          contractType: values.contractType,
        })
        setResult(res)
        setShowSuccess(true)
        setTimeout(() => setShowSuccess(false), 3000)
      } catch (e) {
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
    navigator.clipboard.writeText(`EOSB Estimate: ${formatSAR(result.finalAmount)} SAR`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleShare = useCallback(
    (platform: 'whatsapp' | 'twitter') => {
      if (!result) return
      const text = `My EOSB estimate: ${formatSAR(result.finalAmount)} SAR (via Sauditoolhub)`
      const url = window.location.href
      const href =
        platform === 'whatsapp'
          ? `https://wa.me/?text=${encodeURIComponent(text + ' ' + url)}`
          : `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`
      window.open(href, '_blank', 'noopener,noreferrer')
    },
    [result]
  )

  const hasResult = result !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        {/* ---- FORM COLUMN ---- */}
        <motion.div variants={stagger.item}>
          <GlassCard className="p-6 lg:p-8" tilt>
            <motion.div className="mb-6" variants={fadeSlide(isRtl)}>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-white lg:text-3xl">
                  {t('toolName')}
                </h1>
                <Sparkles className="h-5 w-5 text-desert-gold" />
              </div>
              <p className="mt-1.5 text-sm text-gray-400">
                {t('description')}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-desert-primary/15 px-3 py-1 text-xs font-medium text-desert-primary">
                <CheckCircle2 className="h-3 w-3" />
                {t('trustBadge')}
              </span>
            </motion.div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.basicSalary.label')}</label>
                <input
                  type="number"
                  step="0.01"
                  min="0"
                  placeholder={t('form.basicSalary.placeholder')}
                  {...register('basicSalary', { valueAsNumber: true })}
                  className={inputClass}
                />
                {errors.basicSalary && (
                  <motion.p
                    initial={{ opacity: 0, x: isRtl ? 10 : -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mt-1 text-xs text-red-500"
                  >
                    {t('errors.salaryRequired')}
                  </motion.p>
                )}
              </motion.div>

              <motion.div variants={fadeSlide(isRtl)} className="grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>{t('form.years.label')}</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    placeholder={t('form.years.placeholder')}
                    {...register('years', { valueAsNumber: true })}
                    className={inputClass}
                  />
                  {errors.years?.message === 'VALIDATION_SERVICE_PERIOD' && (
                    <p className="mt-1 text-xs text-red-500">
                      {t('errors.serviceRequired')}
                    </p>
                  )}
                </div>
                <div>
                  <label className={labelClass}>{t('form.months.label')}</label>
                  <input
                    type="number"
                    min="0"
                    max="11"
                    placeholder={t('form.months.placeholder')}
                    {...register('months', { valueAsNumber: true })}
                    className={inputClass}
                  />
                </div>
              </motion.div>

              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.reason.label')}</label>
                <div className="relative">
                  <select {...register('reason')} className={selectClass}>
                    <option value="termination">{t('form.reason.options.termination')}</option>
                    <option value="resignation">{t('form.reason.options.resignation')}</option>
                    <option value="contract_end">{t('form.reason.options.contract_end')}</option>
                  </select>
                  <ChevronDown className={cn('pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500', isRtl ? 'left-3' : 'right-3')} />
                </div>
              </motion.div>

              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.contractType.label')}</label>
                <div className="relative">
                  <select {...register('contractType')} className={selectClass}>
                    <option value="indefinite">{t('form.contractType.options.indefinite')}</option>
                    <option value="fixed">{t('form.contractType.options.fixed')}</option>
                  </select>
                  <ChevronDown className={cn('pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500', isRtl ? 'left-3' : 'right-3')} />
                </div>
              </motion.div>

              {/* Fixed-term early resignation note */}
              <AnimatePresence>
                {watchedReason === 'resignation' && watchedContract === 'fixed' && (
                  <motion.div
                    key="fixed-term-note"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="flex items-start gap-2 rounded-xl border border-amber-800/30 bg-amber-900/20 px-4 py-3 text-xs text-desert-accent"
                  >
                    <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                    <span>{t('fixedTermNote')}</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success toast */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="flex items-center gap-2 rounded-xl border border-emerald-800/30 bg-emerald-900/20 px-4 py-3 text-sm text-emerald-400"
                  >
                    <CheckCircle2 className="h-4 w-4" />
                    Calculation complete!
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <motion.div variants={fadeSlide(isRtl)} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <MagneticButton type="submit" variant="primary" size="lg" disabled={isCalculating} className="flex-1">
                  <Calculator className="h-4 w-4" />
                  {isCalculating ? t('buttons.calculating') : t('buttons.calculate')}
                </MagneticButton>
                <MagneticButton type="button" variant="ghost" size="lg" onClick={handleReset} className="flex-1">
                  <RotateCcw className="h-4 w-4" />
                  {t('buttons.reset')}
                </MagneticButton>
              </motion.div>

              <AnimatePresence>
                {calcError && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-500"
                  >
                    {calcError}
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </GlassCard>
        </motion.div>

        {/* ---- RESULTS COLUMN ---- */}
        <div className="flex flex-col gap-4">
          <AnimatePresence mode="wait">
            {!hasResult ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-1"
              >
                <GlassCard className="flex h-full min-h-[300px] flex-col items-center justify-center p-10 text-center lg:min-h-0" tilt>
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Calculator className="mb-4 h-14 w-14 text-gray-500" />
                  </motion.div>
                  <p className="text-sm text-gray-400">
                    Enter your details and click Calculate to see your EOSB estimate.
                  </p>
                </GlassCard>
              </motion.div>
            ) : result.isZeroEntitlement ? (
              <motion.div
                key="zero"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
              >
                <GlassCard className="p-6 lg:p-8" tilt>
                  <motion.div
                    className="flex flex-col items-center gap-3 text-center"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                  >
                    <AlertTriangle className="h-10 w-10 text-desert-accent" />
                    <h2 className="text-xl font-bold text-white">
                      {t('zeroEntitlement.title')}
                    </h2>
                    <p className="max-w-sm text-sm text-gray-400">
                      {t('zeroEntitlement.message')}
                    </p>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col gap-4"
              >
                {/* Final Amount Card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                >
                  <GlassCard glow className="relative overflow-hidden p-6 lg:p-8" tilt>
                    {/* Gold shimmer overlay */}
                    <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.03)] to-transparent" />
                    <p className="mb-1 text-sm font-medium text-gray-400">
                      {t('results.finalAmount')}
                    </p>
                    <p className="result-value text-emerald-500">
                      <NumberTicker
                        value={result.finalAmount}
                        duration={1500}
                        formatter={(v) => formatSAR(v)}
                        suffix=" SAR"
                      />
                    </p>

                    {/* Action buttons */}
                    <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-gray-700/30 pt-4">
                      <span className="mr-1 text-xs text-gray-500">
                        {t('buttons.share')}:
                      </span>
                      <MagneticButton variant="secondary" size="sm" onClick={() => handleShare('whatsapp')}>
                        {t('buttons.shareWhatsApp')}
                      </MagneticButton>
                      <MagneticButton variant="secondary" size="sm" onClick={() => handleShare('twitter')}>
                        {t('buttons.shareTwitter')}
                      </MagneticButton>
                      <MagneticButton variant="secondary" size="sm" onClick={handleCopy}>
                        {copied ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </MagneticButton>
                      <MagneticButton variant="secondary" size="sm" onClick={handlePrint}>
                        <Printer className="h-3.5 w-3.5" />
                        Print
                      </MagneticButton>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Breakdown */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.4 }}
                >
                  <GlassCard className="p-6" tilt>
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <Scale className="h-4 w-4 text-desert-primary" />
                      {t('results.breakdown.title')}
                    </h3>
                    <div className="space-y-2 text-sm">
                      <BreakdownRow
                        label={t('results.breakdown.firstFiveYears')}
                        value={formatSAR(result.firstFiveYears)}
                        color="var(--color-desert-text)"
                      />
                      <BreakdownRow
                        label={t('results.breakdown.afterFiveYears')}
                        value={formatSAR(result.afterFiveYears)}
                        color="var(--color-desert-text)"
                      />
                      <div className="border-t border-gray-700/30 pt-2">
                        <BreakdownRow
                          label={t('results.breakdown.fullEntitlement')}
                          value={formatSAR(result.fullEntitlement)}
                          color="var(--color-desert-text)"
                          bold
                        />
                      </div>

                      {watchedReason === 'resignation' && result.reductionPercentage < 100 && (
                        <BreakdownRow
                          label={`${t('results.breakdown.resignationReduction')} (${result.reductionPercentage}%)`}
                          value={`- ${formatSAR(result.resignationReduction)}`}
                          color="var(--color-desert-accent)"
                        />
                      )}

                      <div className="border-t-2 border-desert-primary pt-2">
                        <BreakdownRow
                          label={t('results.breakdown.finalAmount')}
                          value={`${formatSAR(result.finalAmount)} SAR`}
                          color="var(--color-desert-success)"
                          bold
                          large
                        />
                      </div>
                    </div>

                    {watchedReason === 'resignation' && result.reductionPercentage < 100 && (
                      <p className="mt-3 flex items-center gap-1.5 text-xs text-gray-500">
                        <Info className="h-3 w-3" />
                        {t('results.breakdown.percentageApplied', {
                          percentage: result.reductionPercentage,
                        })}
                      </p>
                    )}
                  </GlassCard>
                </motion.div>

                {/* Legal Reference */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.4 }}
                >
                  <GlassCard className="overflow-hidden p-0" tilt={false}>
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-medium text-gray-400 hover:text-white">
                        <span className="flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-desert-primary" />
                          {t('results.howItsCalculated')}
                        </span>
                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                      </summary>
                      <div className="border-t border-gray-700/30 px-6 py-4 text-sm leading-relaxed text-gray-400">
                        {t('results.howItsCalculatedContent')}
                        <div className="mt-3 rounded-xl bg-gray-800 p-3 font-mono text-xs">
                          <p>EOSB = (BasicSalary / 2) &times; min(Years, 5) + BasicSalary &times; max(0, Years - 5)</p>
                          <p className="mt-1 text-gray-500">
                            Article 84: &frac12; month/year (first 5yr) + 1 month/year (after 5yr)
                          </p>
                          <p className="text-gray-500">
                            Article 85: Resignation reduces entitlement by tier
                          </p>
                        </div>
                      </div>
                    </details>
                  </GlassCard>
                </motion.div>

                {/* Disclaimer */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="px-1 text-xs leading-relaxed text-gray-500"
                >
                  {t('disclaimer')}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  )
}


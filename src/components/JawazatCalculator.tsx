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
  AlertTriangle,
  CheckCircle2,
  Info,
  Scale,
  BookOpen,
  Sparkles,
  Calendar,
  Clock,
  ShieldAlert,
  Copy,
  Printer,
  ChevronDown,
} from 'lucide-react'

import { calculateJawazatFine, formatSAR, type JawazatResult } from '@/lib/jawazat'
import { cn } from '@/lib/utils'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  overstayType: z.enum(['iqama', 'exit_reentry', 'visit_visa']),
  expiryDate: z.string().min(1, 'VALIDATION_DATE'),
  calculateDate: z.string().min(1, 'VALIDATION_DATE'),
  previousViolations: z.coerce.number().min(0).max(10).default(0),
  hasPaidPartial: z.boolean().default(false),
  amountPaid: z.coerce.number().min(0).default(0),
  hasUncanceledExitVisa: z.boolean().default(false),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
  'bg-gray-800 ' +
  'border-gray-600 ' +
  'text-gray-100 ' +
  'placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer ' +
  'bg-gray-800 ' +
  'border-gray-600 ' +
  'text-gray-100 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const todayStr = () => new Date().toISOString().split('T')[0]

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

const riskClasses: Record<string, string> = {
  none: 'text-emerald-500',
  low: 'text-desert-primary',
  medium: 'text-desert-gold',
  high: 'text-desert-accent',
  critical: 'text-red-500',
}

const riskBgClasses: Record<string, string> = {
  none: 'bg-emerald-500/15',
  low: 'bg-desert-primary/15',
  medium: 'bg-desert-gold/15',
  high: 'bg-desert-accent/15',
  critical: 'bg-red-500/15',
}

const riskLabelMap: Record<string, string> = {
  none: 'results.risk.none',
  low: 'results.risk.low',
  medium: 'results.risk.medium',
  high: 'results.risk.high',
  critical: 'results.risk.critical',
}

export function JawazatCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('JawazatCalculator')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [result, setResult] = useState<JawazatResult | null>(null)
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
      overstayType: 'iqama',
      expiryDate: '',
      calculateDate: todayStr(),
      previousViolations: 0,
      hasPaidPartial: false,
      amountPaid: 0,
      hasUncanceledExitVisa: false,
    },
  })

  const watchedType = watch('overstayType')
  const watchedHasPaid = watch('hasPaidPartial')

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)
      setShowSuccess(false)

      try {
        const res = calculateJawazatFine({
          overstayType: values.overstayType,
          expiryDate: values.expiryDate,
          calculateDate: values.calculateDate,
          previousViolations: values.previousViolations,
          hasPaidPartial: values.hasPaidPartial,
          amountPaid: values.amountPaid || 0,
          hasUncanceledExitVisa: values.hasUncanceledExitVisa,
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
    navigator.clipboard.writeText(`Jawazat Fine Estimate: ${formatSAR(result.totalFine)} SAR`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleShare = useCallback(
    (platform: 'whatsapp' | 'twitter') => {
      if (!result) return
      const text = `My Jawazat fine estimate: ${formatSAR(result.totalFine)} SAR (via Sauditoolhub)`
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
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8">
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
              {/* Overstay Type */}
              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.overstayType.label')}</label>
                <div className="relative">
                  <div className="relative">
                    <select {...register('overstayType')} className={selectClass}>
                      <option value="iqama">{t('form.overstayType.options.iqama')}</option>
                      <option value="exit_reentry">{t('form.overstayType.options.exit_reentry')}</option>
                      <option value="visit_visa">{t('form.overstayType.options.visit_visa')}</option>
                    </select>
                    <ChevronDown className={cn('pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500', isRtl ? 'left-3' : 'right-3')} />
                  </div>
                </div>
              </motion.div>

              {/* Expiry Date */}
              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.expiryDate.label')}</label>
                <div className="relative">
                  <Calendar className={cn('pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500', isRtl ? 'left-3' : 'right-3')} />
                  <input type="date" {...register('expiryDate')} className={inputClass} />
                </div>
                {errors.expiryDate && (
                  <motion.p initial={{ opacity: 0, x: isRtl ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} className="mt-1 text-xs text-red-500">
                    {t('errors.dateRequired')}
                  </motion.p>
                )}
              </motion.div>

              {/* Calculate Date */}
              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.calculateDate.label')}</label>
                <div className="relative">
                  <Clock className={cn('pointer-events-none absolute top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500', isRtl ? 'left-3' : 'right-3')} />
                  <input type="date" {...register('calculateDate')} className={inputClass} />
                </div>
              </motion.div>

              {/* Previous Violations */}
              <motion.div variants={fadeSlide(isRtl)}>
                <label className={labelClass}>{t('form.violations.label')}</label>
                <input type="number" min="0" max="10" {...register('previousViolations', { valueAsNumber: true })} className={inputClass} />
              </motion.div>

              {/* Uncanceled Exit Visa (only for exit_reentry) */}
              <AnimatePresence>
                {watchedType === 'exit_reentry' && (
                  <motion.div
                    key="uncanceled-visa"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    variants={fadeSlide(isRtl)}
                  >
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" {...register('hasUncanceledExitVisa')} className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-desert-primary focus:ring-desert-primary" />
                      <span className="text-sm text-gray-400">{t('form.uncanceledVisa.label')}</span>
                    </label>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Partial Payment */}
              <motion.div variants={fadeSlide(isRtl)}>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" {...register('hasPaidPartial')} className="h-4 w-4 rounded border-gray-600 bg-gray-800 text-desert-primary focus:ring-desert-primary" />
                  <span className="text-sm text-gray-400">{t('form.partialPayment.label')}</span>
                </label>
              </motion.div>

              <AnimatePresence>
                {watchedHasPaid && (
                  <motion.div
                    key="amount-paid"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    variants={fadeSlide(isRtl)}
                  >
                    <label className={labelClass}>{t('form.amountPaid.label')}</label>
                    <input type="number" min="0" step="0.01" {...register('amountPaid', { valueAsNumber: true })} className={inputClass} />
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Success toast */}
              <AnimatePresence>
                {showSuccess && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
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
                  <motion.p initial={{ opacity: 0, x: isRtl ? 10 : -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }} className="text-sm text-red-500">
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
              <motion.div key="empty" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="flex-1">
                <GlassCard className="flex h-full min-h-[300px] flex-col items-center justify-center p-10 text-center lg:min-h-0" tilt>
                  <motion.div animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                    <ShieldAlert className="mb-4 h-14 w-14 text-gray-500" />
                  </motion.div>
                  <p className="text-sm text-gray-400">
                    Enter your visa details and click Calculate to see your Jawazat fine estimate.
                  </p>
                </GlassCard>
              </motion.div>
            ) : !result.isOverstay ? (
              <motion.div key="no-overstay" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }}>
                <GlassCard className="p-6 lg:p-8" tilt>
                  <motion.div className="flex flex-col items-center gap-3 text-center" initial={{ scale: 0.9 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
                    <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                    <h2 className="text-xl font-bold text-white">{t('noOverstay.title')}</h2>
                    <p className="max-w-sm text-sm text-gray-400">{t('noOverstay.message')}</p>
                  </motion.div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="results" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex flex-col gap-4">
                {/* Total Fine Card */}
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: 'spring', stiffness: 200, damping: 15 }}>
                  <GlassCard glow className="relative overflow-hidden p-6 lg:p-8" tilt>
                    <div className="pointer-events-none absolute -inset-1 bg-gradient-to-r from-transparent via-[rgba(255,215,0,0.03)] to-transparent" />
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium text-gray-400">{t('results.totalFine')}</p>
                      <span className={`flex items-center gap-1.5 text-xs px-2 py-0.5 rounded-full ${riskBgClasses[result.riskLevel]} ${riskClasses[result.riskLevel]}`}>
                        <AlertTriangle className="h-3 w-3" />
                        {t(`results.${result.riskLevel === 'none' ? 'risk.none' : 'risk.' + result.riskLevel}`)}
                      </span>
                    </div>
                    <p className={`result-value ${riskClasses[result.riskLevel]}`}>
                      <NumberTicker value={result.totalFine} duration={1500} formatter={(v) => formatSAR(v)} suffix=" SAR" />
                    </p>
                    <p className="mt-2 text-xs text-gray-500">
                      <Clock className="inline h-3 w-3 mr-1" />
                      {result.daysOverstayed} {t('results.daysOverstayed')} &middot; {result.dailyFine} SAR/day
                    </p>
                    {result.messageKey && (
                      <div className="mt-3 flex items-start gap-2 rounded-xl border border-amber-800/30 bg-amber-900/20 px-3 py-2 text-xs text-desert-accent">
                        <Info className="mt-0.5 h-3 w-3 shrink-0" />
                        <span>{t(`results.${result.messageKey}`, { totalFine: formatSAR(result.totalFine) })}</span>
                      </div>
                    )}

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
                        {copied ? t('buttons.copied') : t('buttons.copy')}
                      </MagneticButton>
                      <MagneticButton variant="secondary" size="sm" onClick={handlePrint}>
                        <Printer className="h-3.5 w-3.5" />
                        {t('buttons.print')}
                      </MagneticButton>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Breakdown */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.4 }}>
                  <GlassCard className="p-6" tilt>
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
                      <Scale className="h-4 w-4 text-desert-primary" />
                      {t('results.breakdown.title')}
                    </h3>
                    <div className="space-y-2 text-sm">
                      {result.breakdown.map((row, i) => (
                        <div key={i} className="flex items-center justify-between">
                          <span className="text-gray-400">{t(`results.${row.key}`)}</span>
                          <span className={cn('tabular-nums', row.value < 0 ? 'text-red-500' : 'text-white')}>
                            {row.format === 'sar' ? `${formatSAR(Math.abs(row.value))} SAR` : row.value}
                          </span>
                        </div>
                      ))}
                      <div className="border-t-2 border-desert-primary pt-2">
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-white">{t('results.breakdown.finalAmount')}</span>
                          <span className={cn('tabular-nums text-lg font-bold', riskClasses[result.riskLevel])}>
                            {formatSAR(result.totalFine)} SAR
                          </span>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>

                {/* Info */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.4 }}>
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
                      </div>
                    </details>
                  </GlassCard>
                </motion.div>

                <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="px-1 text-xs leading-relaxed text-gray-500">
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


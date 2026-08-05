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
  DollarSign,
  Plane,
  Luggage,
  Briefcase,
  AlertTriangle,
  Info,
  Copy,
  Printer,
} from 'lucide-react'

import { calculateFinalSettlement, formatSAR, type FinalSettlementResult } from '@/lib/finalSettlement'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  totalSalary: z.coerce.number().min(0, 'VALIDATION_SALARY'),
  unpaidDays: z.coerce.number().min(0).max(30).default(0),
  unusedLeaveDays: z.coerce.number().min(0).max(30).default(0),
  airTicket: z.enum(['none', 'economy', 'business', 'custom']),
  customAirTicketAmount: z.coerce.number().min(0).default(0),
  eosbAmount: z.coerce.number().min(0).default(0),
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

export function FinalSettlementCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('FinalSettlementCalculator')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [result, setResult] = useState<FinalSettlementResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
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
      totalSalary: 0,
      unpaidDays: 0,
      unusedLeaveDays: 0,
      airTicket: 'none',
      customAirTicketAmount: 0,
      eosbAmount: 0,
    },
  })

  const watchedAirTicket = watch('airTicket')

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)

      try {
        if (values.totalSalary <= 0 && values.eosbAmount <= 0) {
          setCalcError(t('errors.salaryRequired'))
          setResult(null)
          setIsCalculating(false)
          return
        }
        const res = calculateFinalSettlement({
          totalSalary: values.totalSalary || 0,
          unpaidDays: values.unpaidDays || 0,
          unusedLeaveDays: values.unusedLeaveDays || 0,
          airTicket: values.airTicket,
          customAirTicketAmount: values.customAirTicketAmount || 0,
          eosbAmount: values.eosbAmount || 0,
        })
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
    const total = formatSAR(result.totalSettlement)
    navigator.clipboard.writeText(t('copiedResult', { total }))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result, t])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const hasResult = result !== null

  return (
    <div id="final-settlement-calculator" className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
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
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <DollarSign size={14} className="text-desert-primary" />
                      {t('form.totalSalary.label')}
                    </span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    placeholder={t('form.totalSalary.placeholder')}
                    {...register('totalSalary')}
                    className={inputClass}
                  />
                  {errors.totalSalary && (
                    <p className="mt-1 text-xs text-red-400">{t(errors.totalSalary.message as any)}</p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={14} className="text-desert-primary" />
                        {t('form.unpaidDays.label')}
                      </span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={30}
                      step={1}
                      placeholder={t('form.unpaidDays.placeholder')}
                      {...register('unpaidDays')}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className={labelClass}>
                      <span className="flex items-center gap-1.5">
                        <Luggage size={14} className="text-desert-primary" />
                        {t('form.unusedLeaveDays.label')}
                      </span>
                    </label>
                    <input
                      type="number"
                      min={0}
                      max={30}
                      step={1}
                      placeholder={t('form.unusedLeaveDays.placeholder')}
                      {...register('unusedLeaveDays')}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Plane size={14} className="text-desert-primary" />
                      {t('form.airTicket.label')}
                    </span>
                  </label>
                  <div className="relative">
                    <select {...register('airTicket')} className={selectClass}>
                      <option value="none">{t('form.airTicket.options.none')}</option>
                      <option value="economy">{t('form.airTicket.options.economy')}</option>
                      <option value="business">{t('form.airTicket.options.business')}</option>
                      <option value="custom">{t('form.airTicket.options.custom')}</option>
                    </select>
                  </div>
                </div>

                {watchedAirTicket === 'custom' && (
                  <div>
                    <label className={labelClass}>{t('form.airTicket.customAmountLabel')}</label>
                    <input
                      type="number"
                      min={0}
                      step={1}
                      placeholder={t('form.airTicket.customAmountPlaceholder')}
                      {...register('customAirTicketAmount')}
                      className={inputClass}
                    />
                  </div>
                )}

                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Calculator size={14} className="text-desert-primary" />
                      {t('form.eosbAmount.label')}
                    </span>
                  </label>
                  <input
                    type="number"
                    min={0}
                    step={1}
                    placeholder={t('form.eosbAmount.placeholder')}
                    {...register('eosbAmount')}
                    className={inputClass}
                  />
                  <p className="mt-1 text-xs text-gray-400">{t('form.eosbAmount.hint')}</p>
                </div>

                {calcError && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-500/15 px-3 py-2 text-xs text-red-400">
                    <AlertTriangle size={14} />
                    {calcError}
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  <MagneticButton
                    type="submit"
                    disabled={isCalculating}
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
                    <Calculator className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-400">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : result.zeroInputs ? (
              <motion.div
                key="zero"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Info className="mb-4 h-12 w-12 text-desert-primary" />
                    <p className="text-lg font-semibold text-white">{t('zeroEntitlement.title')}</p>
                    <p className="mt-2 text-sm text-gray-400">{t('zeroEntitlement.message')}</p>
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
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                        {t('results.totalSettlement')}
                      </p>
                      <p className="text-4xl font-bold text-desert-primary">
                        <NumberTicker value={result.totalSettlement} /> SAR
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-400">{t('results.dailyRate')}</p>
                        <p className="text-lg font-bold text-white">
                          <NumberTicker value={result.dailyRate} /> SAR
                        </p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-400">{t('results.totalSettlement')}</p>
                        <p className="text-lg font-bold text-white">
                          <NumberTicker value={result.totalSettlement} /> SAR
                        </p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

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
                  <div className="mt-3 rounded-lg bg-desert-primary/5 px-3 py-2 text-xs text-gray-400">
                    {t('legalReference')}
                  </div>
                </GlassCard>

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

                <p className="px-1 text-xs text-gray-600">{t('disclaimer')}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </div>
  )
}

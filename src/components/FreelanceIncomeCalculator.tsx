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
  Briefcase,
} from 'lucide-react'

import { calculateFreelanceIncome, PLATFORM_FEES, type FreelanceResult, type FreelancePlatform } from '@/lib/freelanceIncome'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  grossIncome: z.coerce.number().min(0.01),
  platform: z.enum(['upwork', 'fiverr', 'mostaql', 'khamsat', 'direct']),
  platformFeePct: z.coerce.number().min(0).max(100),
  monthlyExpenses: z.coerce.number().min(0),
  taxStatus: z.enum(['saudi_resident', 'non_resident', 'vat_registered']),
  vatApplicable: z.enum(['yes', 'no']),
  workingHoursPerMonth: z.coerce.number().min(1),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 appearance-none cursor-pointer ' +
  'bg-gray-800 border-gray-600 text-gray-100 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

export function FreelanceIncomeCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('FreelanceIncomeCalculator')

  const [result, setResult] = useState<FreelanceResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      grossIncome: 5000,
      platform: 'upwork',
      platformFeePct: 10,
      monthlyExpenses: 500,
      taxStatus: 'saudi_resident',
      vatApplicable: 'no',
      workingHoursPerMonth: 160,
    },
  })

  const selectedPlatform = watch('platform')

  const handlePlatformChange = useCallback(
    (val: string) => {
      const platform = val as FreelancePlatform
      setValue('platform', platform)
      const feeInfo = PLATFORM_FEES[platform]
      if (feeInfo) {
        setValue('platformFeePct', feeInfo.default)
      }
    },
    [setValue]
  )

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)

      try {
        const res = calculateFreelanceIncome({
          grossIncome: values.grossIncome || 0,
          platform: values.platform,
          platformFeePct: values.platformFeePct,
          monthlyExpenses: values.monthlyExpenses || 0,
          taxStatus: values.taxStatus,
          vatApplicable: values.vatApplicable,
          workingHoursPerMonth: values.workingHoursPerMonth || 160,
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
    const text = t('copiedResult', {
      monthly: result.netIncome.toFixed(2),
      annual: result.annualNetIncome.toFixed(2),
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
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.grossIncome.label')}</label>
                    <input type="number" min={0} step={100} placeholder={t('form.grossIncome.placeholder')} {...register('grossIncome')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.monthlyExpenses.label')}</label>
                    <input type="number" min={0} step={50} placeholder={t('form.monthlyExpenses.placeholder')} {...register('monthlyExpenses')} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t('form.platform.label')}</label>
                  <div className="relative">
                    <select value={selectedPlatform} onChange={(e) => handlePlatformChange(e.target.value)} className={selectClass}>
                      <option value="upwork">{t('form.platform.options.upwork')}</option>
                      <option value="fiverr">{t('form.platform.options.fiverr')}</option>
                      <option value="mostaql">{t('form.platform.options.mostaql')}</option>
                      <option value="khamsat">{t('form.platform.options.khamsat')}</option>
                      <option value="direct">{t('form.platform.options.direct')}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.platformFee.label')}</label>
                    <div className="relative">
                      <input type="number" min={0} max={100} step={0.5} {...register('platformFeePct')} className={inputClass} />
                    </div>
                    <p className="mt-1 text-[10px] text-gray-400">{t('form.platformFee.hint')}</p>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.hours.label')}</label>
                    <input type="number" min={1} step={10} {...register('workingHoursPerMonth')} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.taxStatus.label')}</label>
                    <div className="relative">
                      <select {...register('taxStatus')} className={selectClass}>
                        <option value="saudi_resident">{t('form.taxStatus.options.saudi_resident')}</option>
                        <option value="non_resident">{t('form.taxStatus.options.non_resident')}</option>
                        <option value="vat_registered">{t('form.taxStatus.options.vat_registered')}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.vatApplicable.label')}</label>
                    <div className="relative">
                      <select {...register('vatApplicable')} className={selectClass}>
                        <option value="no">{t('form.vatApplicable.options.no')}</option>
                        <option value="yes">{t('form.vatApplicable.options.yes')}</option>
                      </select>
                    </div>
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
                    <Briefcase className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-400">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('results.monthly')}</p>
                        <p className={`text-2xl font-bold ${result.netIncome >= 0 ? 'text-desert-primary' : 'text-red-400'}`}>
                          <NumberTicker value={result.netIncome} /> SAR
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-400">{t('results.annual')}</p>
                        <p className={`text-2xl font-bold ${result.annualNetIncome >= 0 ? 'text-desert-primary' : 'text-red-400'}`}>
                          <NumberTicker value={result.annualNetIncome} /> SAR
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                      <p className="text-xs text-gray-400">{t('results.hourlyRate')}</p>
                      <p className="text-lg font-bold text-desert-primary">
                        <NumberTicker value={result.effectiveHourlyRate} /> SAR/hr
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    {result.breakdown.map((item) => (
                      <div key={item.key} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400">{t(item.label)}</span>
                        <span className={`text-sm font-medium ${item.isNegative ? 'text-red-400' : 'text-green-400'}`}>
                          {item.isNegative ? '-' : '+'}{item.amount.toFixed(2)} SAR
                        </span>
                      </div>
                    ))}
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-white">
                    <TrendingUp size={14} className="text-desert-accent" />
                    {t('taxTips.title')}
                  </h3>
                  <div className="space-y-2">
                    {result.taxTips.map((tip, i) => (
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

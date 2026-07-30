'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, TrendingUp, AlertTriangle, Copy, Printer, Landmark } from 'lucide-react'

import { calculateSamaLoan, type SamaLoanResult } from '@/lib/samaLoan'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  monthlySalary: z.coerce.number().min(1, 'errors.salaryRequired'),
  existingEMIs: z.coerce.number().min(0),
  annualRate: z.coerce.number().min(0.01).max(100),
  tenureYears: z.coerce.number().int().min(1).max(5),
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

export function SamaLoanCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('SamaLoanCalculator')

  const [result, setResult] = useState<SamaLoanResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      monthlySalary: 10000,
      existingEMIs: 0,
      annualRate: 5.99,
      tenureYears: 5,
    },
  })

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)
      try {
        const res = calculateSamaLoan(values)
        if (!res.isEligible && res.errorMessage) {
          setCalcError(t(res.errorMessage))
          setResult(res)
        } else {
          setResult(res)
        }
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
      loan: result.maxEligibleLoan.toFixed(2),
      emi: result.maxMonthlyEMI.toFixed(2),
    })
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
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
                <Landmark className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className={labelClass}>{t('form.monthlySalary.label')}</label>
                  <input type="number" min={1} step={500} placeholder={t('form.monthlySalary.placeholder')} {...register('monthlySalary')} className={inputClass} />
                  {errors.monthlySalary && <p className="mt-1 text-xs text-red-400">{t('errors.salaryRequired')}</p>}
                </div>
                <div>
                  <label className={labelClass}>{t('form.existingEMIs.label')}</label>
                  <input type="number" min={0} step={100} placeholder={t('form.existingEMIs.placeholder')} {...register('existingEMIs')} className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.annualRate.label')}</label>
                    <input type="number" min={0.01} step={0.01} {...register('annualRate')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.tenureYears.label')}</label>
                    <select {...register('tenureYears', { valueAsNumber: true })} className={selectClass}>
                      {[1, 2, 3, 4, 5].map((y) => (
                        <option key={y} value={y}>{y} {t('form.tenureYears.year')}</option>
                      ))}
                    </select>
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
                    <Landmark className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : !result.isEligible ? (
              <motion.div key="ineligible" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="flex flex-col items-center gap-3 py-8 text-center">
                    <AlertTriangle size={40} className="text-red-400" />
                    <p className="text-lg font-semibold text-red-400">{t('errors.dbrLimitReached')}</p>
                    <p className="text-sm text-gray-400">{t('dbrInfo.maxAllowed')} <span className="font-semibold text-white">{result.maxAllowedEMI.toFixed(2)} SAR</span></p>
                    <p className="text-sm text-gray-400">{t('dbrInfo.yourDBR')} <span className="font-semibold text-white">{result.dbrUtilizationPercent.toFixed(1)}%</span></p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.eligibleLoan')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.maxEligibleLoan} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.monthlyEMI')}</p>
                        <p className="text-lg font-bold text-white"><NumberTicker value={result.maxMonthlyEMI} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.totalInterest')}</p>
                        <p className="text-lg font-bold text-desert-accent"><NumberTicker value={result.totalInterestPayable} /> SAR</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">DBR {t('dbrInfo.utilization')}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{t('dbrInfo.yourDBR')}: {result.dbrUtilizationPercent.toFixed(1)}%</span>
                      <span>{t('dbrInfo.samaLimit')}: 33%</span>
                    </div>
                    <div className="h-3 w-full overflow-hidden rounded-full bg-gray-800">
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          width: `${Math.min(result.dbrUtilizationPercent, 100)}%`,
                          background: result.dbrUtilizationPercent > 80
                            ? 'linear-gradient(90deg, #FF6B35, #ef4444)'
                            : 'linear-gradient(90deg, #00D4AA, #10b981)',
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(result.dbrUtilizationPercent, 100)}%` }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-gray-600">
                      <span>0%</span>
                      <span>33%</span>
                    </div>
                    <div className="mt-1 rounded-lg bg-gray-800/20 p-2 text-xs text-gray-400">
                      <p>{t('dbrInfo.maxAllowed')} <span className="font-semibold text-white">{result.maxAllowedEMI.toFixed(2)} SAR</span></p>
                      <p>{t('dbrInfo.available')} <span className="font-semibold text-white">{result.availableEMI.toFixed(2)} SAR</span></p>
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

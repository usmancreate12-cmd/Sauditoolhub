'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Home, TrendingUp } from 'lucide-react'

import { calculateMortgageVsRent, type MortgageVsRentResult } from '@/lib/mortgageVsRent'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  propertyValue: z.coerce.number().min(1),
  downPaymentPercent: z.coerce.number().min(0).max(100),
  interestRate: z.coerce.number().min(0).max(30),
  loanTenure: z.coerce.number().min(1).max(50),
  monthlyRent: z.coerce.number().min(1),
  yearsToCompare: z.coerce.number().min(1).max(50),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.08 } } },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

export function MortgageVsRentCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('MortgageVsRentCalculator')

  const [result, setResult] = useState<MortgageVsRentResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)
  const [showBreakdown, setShowBreakdown] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      propertyValue: 1000000,
      downPaymentPercent: 20,
      interestRate: 3.5,
      loanTenure: 25,
      monthlyRent: 4000,
      yearsToCompare: 10,
    },
  })

  const onSubmit = useCallback((values: FormValues) => {
    setIsCalculating(true); setCalcError(null)
    try {
      setResult(calculateMortgageVsRent(values))
    } catch { setCalcError(t('errors.generic')); setResult(null) }
    finally { setTimeout(() => setIsCalculating(false), 400) }
  }, [t])

  const handleReset = useCallback(() => { reset(); setResult(null); setCalcError(null) }, [reset])
  const handleCopy = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(t('copiedResult', { monthly: result.monthlyPayment.toString(), buy: result.totalBuyCost.toString(), rent: result.totalRentCost.toString() }))
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
                <Home className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.propertyValueLabel')}</label>
                    <input type="number" min={1} step={50000} {...register('propertyValue')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.downPaymentPercentLabel')}</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min={0} max={100} step={1} {...register('downPaymentPercent')} className={inputClass} />
                      <span className="text-sm text-gray-500">%</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.interestRateLabel')}</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min={0} max={30} step={0.1} {...register('interestRate')} className={inputClass} />
                      <span className="text-sm text-gray-500">%</span>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.loanTenureLabel')}</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min={1} max={50} step={1} {...register('loanTenure')} className={inputClass} />
                      <span className="text-sm text-gray-500">{t('form.years')}</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.monthlyRentLabel')}</label>
                    <input type="number" min={1} step={500} {...register('monthlyRent')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.yearsToCompareLabel')}</label>
                    <div className="flex items-center gap-2">
                      <input type="number" min={1} max={50} step={1} {...register('yearsToCompare')} className={inputClass} />
                      <span className="text-sm text-gray-500">{t('form.years')}</span>
                    </div>
                  </div>
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
                    <TrendingUp className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.monthlyPayment')}</p>
                    <p className="text-3xl font-bold text-desert-primary">
                      <NumberTicker value={result.monthlyPayment} /> SAR
                    </p>
                  </div>
                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                      <p className="text-xs text-gray-500">{t('results.totalBuyCost')}</p>
                      <p className={`text-lg font-bold ${result.buyBetter ? 'text-green-400' : 'text-desert-accent'}`}><NumberTicker value={result.totalBuyCost} /> SAR</p>
                    </div>
                    <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                      <p className="text-xs text-gray-500">{t('results.totalRentCost')}</p>
                      <p className={`text-lg font-bold ${!result.buyBetter ? 'text-green-400' : 'text-desert-accent'}`}><NumberTicker value={result.totalRentCost} /> SAR</p>
                    </div>
                  </div>
                  <div className="mt-3 rounded-xl bg-desert-primary/10 p-3 text-center">
                    <p className="text-xs text-gray-500">{result.buyBetter ? t('results.buyRecommend') : t('results.rentRecommend')}</p>
                  </div>
                </GlassCard>

                <GlassCard>
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-white">{t('results.breakdownTitle')}</h3>
                    <button onClick={() => setShowBreakdown(!showBreakdown)} className="text-xs text-desert-primary hover:underline">
                      {showBreakdown ? t('buttons.hideBreakdown') : t('buttons.showBreakdown')}
                    </button>
                  </div>
                  <div className="space-y-1">
                    {[
                      { key: 'downPayment', label: t('results.downPayment'), amount: result.downPayment },
                      { key: 'totalInterest', label: t('results.totalInterest'), amount: result.totalInterestPaid },
                      { key: 'totalBuy', label: t('results.totalBuyCost'), amount: result.totalBuyCost },
                      { key: 'totalRent', label: t('results.totalRentCost'), amount: result.totalRentCost },
                    ].map((item) => (
                      <div key={item.key} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400">{item.label}</span>
                        <span className="text-sm font-medium text-gray-100">{item.amount.toLocaleString()} SAR</span>
                      </div>
                    ))}
                  </div>
                  {showBreakdown && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 space-y-1">
                      <p className="text-xs font-medium text-gray-500">{t('results.yearlyTable')}</p>
                      {result.breakdown.map((row) => (
                        <div key={row.year} className="flex items-center justify-between rounded-lg bg-gray-800/10 px-3 py-1.5 text-xs">
                          <span className="text-gray-500">{t('results.yearLabel', { year: row.year })}</span>
                          <span className="text-gray-400">{t('results.buyLabel')}: {row.cumulativeBuyCost.toLocaleString()}</span>
                          <span className="text-gray-400">{t('results.rentLabel')}: {row.cumulativeRentCost.toLocaleString()}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
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

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
  TrendingDown,
  Info,
  AlertTriangle,
  Copy,
  Printer,
  ShoppingCart,
} from 'lucide-react'

import { calculateSallaProfit, type SallaResult } from '@/lib/sallaProfit'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  sellingPrice: z.coerce.number().min(0.01, 'VALIDATION_PRICE'),
  costPrice: z.coerce.number().min(0),
  shippingCost: z.coerce.number().min(0),
  platform: z.enum(['salla', 'zid', 'other']),
  paymentMethod: z.enum(['credit_card', 'mada', 'apple_pay', 'cod']),
  monthlyOrders: z.coerce.number().min(1, 'VALIDATION_ORDERS'),
  codReturnRate: z.coerce.number().min(0).max(100).default(15),
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

export function SallaProfitCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('SallaProfitCalculator')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [result, setResult] = useState<SallaResult | null>(null)
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
      sellingPrice: 100,
      costPrice: 50,
      shippingCost: 20,
      platform: 'salla',
      paymentMethod: 'credit_card',
      monthlyOrders: 100,
      codReturnRate: 15,
    },
  })

  const onSubmit = useCallback(
    (values: FormValues) => {
      setIsCalculating(true)
      setCalcError(null)

      try {
        const res = calculateSallaProfit({
          sellingPrice: values.sellingPrice || 0,
          costPrice: values.costPrice || 0,
          shippingCost: values.shippingCost || 0,
          platform: values.platform,
          paymentMethod: values.paymentMethod,
          monthlyOrders: values.monthlyOrders || 1,
          codReturnRate: values.codReturnRate ?? 15,
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
      perOrder: result.netProfitPerOrder.toFixed(2),
      monthly: result.monthlyNetProfit.toFixed(2),
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
                <ShoppingCart className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.sellingPrice.label')}</label>
                    <input type="number" min={0} step={0.5} placeholder={t('form.sellingPrice.placeholder')} {...register('sellingPrice')} className={inputClass} />
                    {errors.sellingPrice && <p className="mt-1 text-xs text-red-400">{t('errors.priceRequired')}</p>}
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.costPrice.label')}</label>
                    <input type="number" min={0} step={0.5} placeholder={t('form.costPrice.placeholder')} {...register('costPrice')} className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.shippingCost.label')}</label>
                    <input type="number" min={0} step={1} placeholder={t('form.shippingCost.placeholder')} {...register('shippingCost')} className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.monthlyOrders.label')}</label>
                    <input type="number" min={1} step={1} placeholder={t('form.monthlyOrders.placeholder')} {...register('monthlyOrders')} className={inputClass} />
                    {errors.monthlyOrders && <p className="mt-1 text-xs text-red-400">{t('errors.ordersRequired')}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.platform.label')}</label>
                    <div className="relative">
                      <select {...register('platform')} className={selectClass}>
                        <option value="salla">{t('form.platform.options.salla')}</option>
                        <option value="zid">{t('form.platform.options.zid')}</option>
                        <option value="other">{t('form.platform.options.other')}</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.paymentMethod.label')}</label>
                    <div className="relative">
                      <select {...register('paymentMethod')} className={selectClass}>
                        <option value="credit_card">{t('form.paymentMethod.options.credit_card')}</option>
                        <option value="mada">{t('form.paymentMethod.options.mada')}</option>
                        <option value="apple_pay">{t('form.paymentMethod.options.apple_pay')}</option>
                        <option value="cod">{t('form.paymentMethod.options.cod')}</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>{t('form.codReturnRate.label')}</label>
                  <input type="number" min={0} max={100} step={1} placeholder={t('form.codReturnRate.placeholder')} {...register('codReturnRate')} className={inputClass} />
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
                    <ShoppingCart className="mb-4 h-12 w-12 text-gray-600" />
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
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.perOrder')}</p>
                        <p className={`text-2xl font-bold ${result.netProfitPerOrder >= 0 ? 'text-desert-primary' : 'text-red-400'}`}>
                          <NumberTicker value={result.netProfitPerOrder} /> SAR
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.monthly')}</p>
                        <p className={`text-2xl font-bold ${result.monthlyNetProfit >= 0 ? 'text-desert-primary' : 'text-red-400'}`}>
                          <NumberTicker value={result.monthlyNetProfit} /> SAR
                        </p>
                      </div>
                    </div>
                    <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                      <p className="text-xs text-gray-500">{t('results.profitMargin')}</p>
                      <p className={`text-lg font-bold ${result.profitMarginPct >= 0 ? 'text-desert-primary' : 'text-red-400'}`}>
                        <NumberTicker value={result.profitMarginPct} />%
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

                {result.optimizationTips.length > 0 && (
                  <GlassCard>
                    <h3 className="mb-3 text-sm font-semibold text-white">{t('optimization.title')}</h3>
                    <div className="space-y-2">
                      {result.optimizationTips.map((tip, i) => (
                        <div key={i} className="flex items-start gap-2 rounded-lg bg-desert-primary/5 px-3 py-2">
                          <TrendingUp size={14} className="mt-0.5 shrink-0 text-desert-primary" />
                          <p className="text-sm text-gray-300">{t(tip)}</p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                )}

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

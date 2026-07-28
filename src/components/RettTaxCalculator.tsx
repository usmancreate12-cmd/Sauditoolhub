'use client'

import { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Building2 } from 'lucide-react'

import { calculateRettTax, type RettTaxResult } from '@/lib/rettTax'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const formSchema = z.object({
  salePrice: z.coerce.number().min(1),
  transactionType: z.enum(['buyer', 'seller']),
  agentCommission: z.coerce.number().min(0).max(100),
  whoPaysAgent: z.enum(['buyer', 'seller', 'split']),
})

type FormValues = z.output<typeof formSchema>

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const selectClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
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

export function RettTaxCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('RettTaxCalculator')

  const [result, setResult] = useState<RettTaxResult | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)
  const [calcError, setCalcError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema) as any,
    defaultValues: {
      salePrice: 500000,
      transactionType: 'buyer',
      agentCommission: 2.5,
      whoPaysAgent: 'seller',
    },
  })

  const onSubmit = useCallback((values: FormValues) => {
    setIsCalculating(true); setCalcError(null)
    try {
      setResult(calculateRettTax(values))
    } catch { setCalcError(t('errors.generic')); setResult(null) }
    finally { setTimeout(() => setIsCalculating(false), 400) }
  }, [t])

  const handleReset = useCallback(() => { reset(); setResult(null); setCalcError(null) }, [reset])
  const handleCopy = useCallback(() => {
    if (!result) return
    navigator.clipboard.writeText(t('copiedResult', { rett: result.rettAmount.toFixed(2), total: result.buyerTotalCost.toFixed(2) }))
    setCopied(true); setTimeout(() => setCopied(false), 2000)
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
                <Building2 className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className={labelClass}>{t('form.salePriceLabel')}</label>
                  <input type="number" min={1} step={10000} {...register('salePrice')} className={inputClass} />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>{t('form.transactionTypeLabel')}</label>
                    <select {...register('transactionType')} className={selectClass}>
                      <option value="buyer">{t('form.buyer')}</option>
                      <option value="seller">{t('form.seller')}</option>
                    </select>
                  </div>
                  <div>
                    <label className={labelClass}>{t('form.agentCommissionLabel')}</label>
                    <input type="number" min={0} max={100} step={0.1} {...register('agentCommission')} className={inputClass} />
                  </div>
                </div>
                <div>
                  <label className={labelClass}>{t('form.whoPaysLabel')}</label>
                  <select {...register('whoPaysAgent')} className={selectClass}>
                    <option value="buyer">{t('form.paysBuyer')}</option>
                    <option value="seller">{t('form.paysSeller')}</option>
                    <option value="split">{t('form.paysSplit')}</option>
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
                    <Building2 className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.rettAmount')}</p>
                      <p className="text-3xl font-bold text-desert-primary">
                        <NumberTicker value={result.rettAmount} /> SAR
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.agentFee')}</p>
                        <p className="text-lg font-bold text-desert-accent"><NumberTicker value={result.agentCommissionAmount} /> SAR</p>
                      </div>
                      <div className="rounded-xl bg-gray-800/50 p-3 text-center">
                        <p className="text-xs text-gray-500">{t('results.buyerTotal')}</p>
                        <p className="text-lg font-bold text-white"><NumberTicker value={result.buyerTotalCost} /> SAR</p>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard>
                  <h3 className="mb-3 text-sm font-semibold text-white">{t('breakdown.title')}</h3>
                  <div className="space-y-1">
                    {result.breakdown.map((item) => (
                      <div key={item.key} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400">{t(item.label)}</span>
                        <span className={`text-sm font-medium ${item.key === 'buyerTotal' || item.key === 'sellerNet' ? 'text-desert-primary' : item.key === 'rett' ? 'text-desert-accent' : 'text-green-400'}`}>
                          {item.amount.toFixed(2)} SAR
                        </span>
                      </div>
                    ))}
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

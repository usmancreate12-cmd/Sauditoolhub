'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { RotateCcw, CheckCircle2, XCircle, Copy, Printer, Banknote } from 'lucide-react'

import { validateIban, estimateTransferFee, type TransferType } from '@/lib/iban'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

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

export function IbanValidator({ locale }: { locale?: string }) {
  const t = useTranslations('IbanValidator')

  const [iban, setIban] = useState('')
  const [transferType, setTransferType] = useState<TransferType>('sarie')
  const [transferAmount, setTransferAmount] = useState(1000)
  const [validResult, setValidResult] = useState<ReturnType<typeof validateIban> | null>(null)
  const [feeResult, setFeeResult] = useState<ReturnType<typeof estimateTransferFee> | null>(null)
  const [copied, setCopied] = useState(false)

  const handleValidate = useCallback(() => {
    const result = validateIban(iban)
    setValidResult(result)
    if (result.isValid && transferAmount > 0) {
      setFeeResult(estimateTransferFee(transferType, transferAmount))
    } else {
      setFeeResult(null)
    }
  }, [iban, transferType, transferAmount])

  const handleReset = useCallback(() => {
    setIban(''); setTransferType('sarie'); setTransferAmount(1000)
    setValidResult(null); setFeeResult(null)
  }, [])

  const handleCopy = useCallback(() => {
    if (!validResult?.isValid) return
    navigator.clipboard.writeText(t('copiedResult', { iban, bank: validResult.bankName || 'Unknown' }))
    setCopied(true); setTimeout(() => setCopied(false), 2000)
  }, [validResult, iban, t])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const hasResult = validResult !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="mb-2 flex items-center gap-2">
                <Banknote className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className={labelClass}>{t('form.iban.label')}</label>
                  <input type="text" value={iban} onChange={(e) => setIban(e.target.value.toUpperCase())} maxLength={24} placeholder={t('form.iban.placeholder')} className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>{t('form.transferType.label')}</label>
                  <select value={transferType} onChange={(e) => setTransferType(e.target.value as TransferType)} className={selectClass}>
                    <option value="sarie">{t('form.transferType.options.sarie')}</option>
                    <option value="mada">{t('form.transferType.options.mada')}</option>
                    <option value="swift">{t('form.transferType.options.swift')}</option>
                  </select>
                </div>
                <div>
                  <label className={labelClass}>{t('form.amount.label')}</label>
                  <input type="number" min={1} value={transferAmount} onChange={(e) => setTransferAmount(Number(e.target.value))} className={inputClass} />
                </div>
                <div className="flex gap-3 pt-2">
                  <MagneticButton type="button" onClick={handleValidate} className="flex-1">
                    <span className="flex items-center justify-center gap-2">{t('buttons.validate')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handleReset} className="px-4">
                    <RotateCcw size={16} />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!hasResult ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Banknote className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 py-2">
                      {validResult.isValid ? (
                        <CheckCircle2 size={32} className="text-green-400" />
                      ) : (
                        <XCircle size={32} className="text-red-400" />
                      )}
                      <p className={`text-lg font-semibold ${validResult.isValid ? 'text-green-400' : 'text-red-400'}`}>
                        {validResult.isValid ? t('results.valid') : t(validResult.errorMessage || 'errors.generic')}
                      </p>
                    </div>
                    {validResult.isValid && (
                      <div className="space-y-2">
                        <div className="flex justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                          <span className="text-sm text-gray-400">{t('results.bankName')}</span>
                          <span className="text-sm font-medium text-white">{validResult.bankName || t('results.unknown')}</span>
                        </div>
                        <div className="flex justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                          <span className="text-sm text-gray-400">{t('results.bankCode')}</span>
                          <span className="text-sm font-medium text-white">{validResult.bankCode}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </GlassCard>

                {feeResult && validResult.isValid && (
                  <GlassCard>
                    <h3 className="mb-3 text-sm font-semibold text-white">{t('fees.title')}</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400">{t(feeResult.description)}</span>
                      </div>
                      <div className="flex justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                        <span className="text-sm text-gray-400">{t('fees.estimatedFee')}</span>
                        <span className="text-sm font-medium text-white"><NumberTicker value={feeResult.estimatedFee} /> SAR</span>
                      </div>
                      {feeResult.exchangeMargin > 0 && (
                        <div className="flex justify-between rounded-lg bg-gray-800/20 px-3 py-2">
                          <span className="text-sm text-gray-400">{t('fees.exchangeMargin')}</span>
                          <span className="text-sm font-medium text-desert-accent"><NumberTicker value={feeResult.exchangeMargin} /> SAR</span>
                        </div>
                      )}
                      <div className="flex justify-between rounded-lg bg-gray-800/30 px-3 py-2">
                        <span className="text-sm font-semibold text-white">{t('fees.totalCost')}</span>
                        <span className="text-sm font-bold text-desert-primary"><NumberTicker value={feeResult.totalCost} /> SAR</span>
                      </div>
                    </div>
                  </GlassCard>
                )}

                <div className="flex flex-wrap gap-2">
                  <MagneticButton type="button" variant="secondary" onClick={handleCopy} className="text-xs" disabled={!validResult.isValid}>
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

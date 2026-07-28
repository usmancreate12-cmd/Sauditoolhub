'use client'

import { useState, useCallback } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, RotateCcw, AlertTriangle, Copy, Printer, Users, Plus, Trash2 } from 'lucide-react'

import { calculateBillSplit, type RoommateInput, type BillInput, type BillSplitResult } from '@/lib/billSplitter'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'
import { NumberTicker } from '@/components/NumberTicker'

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 ' +
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

const defaultBills: BillInput[] = [
  { name: 'Rent', amount: 0 },
  { name: 'Electricity', amount: 0 },
  { name: 'Water', amount: 0 },
  { name: 'Internet', amount: 0 },
]

export function BillSplitterCalculator({ locale }: { locale?: string }) {
  const t = useTranslations('BillSplitterCalculator')

  const [roommates, setRoommates] = useState<RoommateInput[]>([
    { id: '1', name: '', share: 1 },
    { id: '2', name: '', share: 1 },
  ])
  const [bills, setBills] = useState<BillInput[]>(defaultBills)
  const [result, setResult] = useState<BillSplitResult | null>(null)
  const [copied, setCopied] = useState(false)

  const updateRoommate = useCallback((id: string, field: 'name' | 'share', value: string) => {
    setRoommates((prev) => prev.map((r) =>
      r.id === id ? { ...r, [field]: field === 'share' ? Number(value) || 0 : value } : r
    ))
    setResult(null)
  }, [])

  const addRoommate = useCallback(() => {
    const newId = String(Date.now())
    setRoommates((prev) => [...prev, { id: newId, name: '', share: 1 }])
    setResult(null)
  }, [])

  const removeRoommate = useCallback((id: string) => {
    setRoommates((prev) => prev.filter((r) => r.id !== id))
    setResult(null)
  }, [])

  const updateBill = useCallback((index: number, value: string) => {
    setBills((prev) => prev.map((b, i) => i === index ? { ...b, amount: Number(value) || 0 } : b))
    setResult(null)
  }, [])

  const addBill = useCallback(() => {
    setBills((prev) => [...prev, { name: '', amount: 0 }])
    setResult(null)
  }, [])

  const updateBillName = useCallback((index: number, name: string) => {
    setBills((prev) => prev.map((b, i) => i === index ? { ...b, name } : b))
    setResult(null)
  }, [])

  const removeBill = useCallback((index: number) => {
    setBills((prev) => prev.filter((_, i) => i !== index))
    setResult(null)
  }, [])

  const handleCalculate = useCallback(() => {
    if (roommates.length < 1 || bills.length < 1) return
    const validRoommates = roommates.filter((r) => r.name.trim())
    if (validRoommates.length < 1) return
    setResult(calculateBillSplit(validRoommates, bills.filter((b) => b.amount > 0)))
  }, [roommates, bills])

  const handleReset = useCallback(() => {
    setRoommates([{ id: '1', name: '', share: 1 }, { id: '2', name: '', share: 1 }])
    setBills(defaultBills)
    setResult(null)
    setCopied(false)
  }, [])

  const handleCopy = useCallback(() => {
    if (!result) return
    const lines = result.roommates.map((r) =>
      `${r.name}: ${t('copiedAmount', { amount: r.amount.toFixed(2) })}`
    )
    navigator.clipboard.writeText(lines.join('\n'))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [result, t])

  const handlePrint = useCallback(() => { window.print() }, [])
  const hasResult = result !== null

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item} className="space-y-4">
          <GlassCard>
            <div className="space-y-5">
              <div className="mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.roommatesTitle')}</h2>
              </div>
              <div className="space-y-3">
                {roommates.map((r, i) => (
                  <div key={r.id} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={r.name}
                      onChange={(e) => updateRoommate(r.id, 'name', e.target.value)}
                      placeholder={t('form.namePlaceholder', { n: i + 1 })}
                      className={`${inputClass} flex-1`}
                    />
                    <div className="flex items-center gap-1">
                      <input
                        type="number"
                        min={0}
                        step={0.5}
                        value={r.share}
                        onChange={(e) => updateRoommate(r.id, 'share', e.target.value)}
                        className={`${inputClass} w-16 text-center`}
                      />
                      <span className="text-xs text-gray-500">pts</span>
                    </div>
                    {roommates.length > 2 && (
                      <button onClick={() => removeRoommate(r.id)} className="text-gray-500 hover:text-red-400 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    )}
                  </div>
                ))}
                <MagneticButton type="button" variant="secondary" onClick={addRoommate} className="w-full text-xs">
                  <Plus size={14} /> {t('buttons.addRoommate')}
                </MagneticButton>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Calculator className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.billsTitle')}</h2>
              </div>
              <div className="space-y-3">
                {bills.map((b, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={b.name}
                      onChange={(e) => updateBillName(i, e.target.value)}
                      placeholder={t('form.billNamePlaceholder')}
                      className={`${inputClass} flex-1`}
                    />
                    <input
                      type="number"
                      min={0}
                      step={50}
                      value={b.amount || ''}
                      onChange={(e) => updateBill(i, e.target.value)}
                      placeholder="0"
                      className={`${inputClass} w-24`}
                    />
                    <button onClick={() => removeBill(i)} className="text-gray-500 hover:text-red-400 transition-colors">
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
                <MagneticButton type="button" variant="secondary" onClick={addBill} className="w-full text-xs">
                  <Plus size={14} /> {t('buttons.addBill')}
                </MagneticButton>
              </div>
            </div>
          </GlassCard>

          <MagneticButton type="button" onClick={handleCalculate} className="w-full">
            <span className="flex items-center justify-center gap-2">
              <Calculator size={16} /> {t('buttons.calculate')}
            </span>
          </MagneticButton>
        </motion.div>

        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!hasResult ? (
              <motion.div key="empty" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <Users className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-500">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-4">
                <GlassCard>
                  <div className="text-center">
                    <p className="text-xs font-medium uppercase tracking-wider text-gray-500">{t('results.totalBills')}</p>
                    <p className="text-3xl font-bold text-desert-primary">
                      <NumberTicker value={result.grandTotal} /> SAR
                    </p>
                  </div>
                </GlassCard>

                {result.roommates.map((r) => (
                  <GlassCard key={r.id}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-white">{r.name}</h3>
                      <p className="text-lg font-bold text-desert-primary">{r.amount.toFixed(2)} SAR</p>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      {t('results.shareInfo', { share: r.share })}
                    </p>
                    <div className="space-y-1">
                      {r.items.filter((i) => i.amount > 0).map((item, idx) => (
                        <div key={idx} className="flex items-center justify-between rounded-lg bg-gray-800/20 px-3 py-1.5">
                          <span className="text-sm text-gray-400">{item.name}</span>
                          <span className="text-sm font-medium text-green-400">{item.amount.toFixed(2)} SAR</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                ))}

                <div className="flex flex-wrap gap-2">
                  <MagneticButton type="button" variant="secondary" onClick={handleCopy} className="text-xs">
                    <Copy size={14} /><span>{copied ? t('buttons.copied') : t('buttons.copy')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handlePrint} className="text-xs">
                    <Printer size={14} /><span>{t('buttons.print')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handleReset} className="text-xs">
                    <RotateCcw size={14} /><span>{t('buttons.reset')}</span>
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

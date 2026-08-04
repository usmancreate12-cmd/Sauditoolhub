'use client'

import { useState, useCallback, useMemo, useRef, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FileText,
  RotateCcw,
  CheckCircle2,
  Printer,
  Share2,
  ClipboardList,
  Globe,
  ChevronDown,
  Search,
  X,
} from 'lucide-react'

import { getDocumentsForVisa, VISA_TYPES, CATEGORY_ORDER, NATIONALITY_GROUPS, type VisaType, type DocumentItem, type Nationality } from '@/lib/visaDocuments'
import { GlassCard } from '@/components/GlassCard'
import { MagneticButton } from '@/components/MagneticButton'

const inputClass =
  'w-full rounded-xl border px-4 py-2.5 text-base outline-none transition-all duration-200 ' +
  'bg-gray-800 border-gray-600 text-gray-100 placeholder-gray-500 ' +
  'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'

const labelClass = 'block text-sm font-medium text-gray-400 mb-1.5'

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.05 } } },
  item: {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] as const } },
  },
}

interface SearchableSelectProps {
  value: string
  onChange: (value: string) => void
  groups: Record<string, readonly string[]>
  placeholder: string
  searchPlaceholder: string
  getLabel: (key: string) => string
  getGroupLabel: (key: string) => string
}

function SearchableSelect({ value, onChange, groups, placeholder, searchPlaceholder, getLabel, getGroupLabel }: SearchableSelectProps) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const containerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false)
        setSearch('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const filtered = useMemo(() => {
    if (!search) return groups
    const lower = search.toLowerCase()
    const result: Record<string, readonly string[]> = {}
    for (const [groupKey, items] of Object.entries(groups)) {
      const filtered = items.filter((k) => getLabel(k).toLowerCase().includes(lower))
      if (filtered.length > 0) result[groupKey] = filtered
    }
    return result
  }, [search, groups, getLabel])

  function handleSelect(key: string) {
    onChange(key)
    setOpen(false)
    setSearch('')
  }

  function handleClear() {
    onChange('')
    setSearch('')
  }

  const selectedLabel = value ? getLabel(value) : ''

  return (
    <div ref={containerRef} className="relative">
      <div
        role="combobox"
        tabIndex={0}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={placeholder}
        className={`${inputClass} flex cursor-pointer items-center justify-between gap-2 ${
          open ? 'border-desert-primary shadow-[0_0_0_3px_rgba(0,212,170,0.15)]' : ''
        }`}
        onClick={() => { setOpen(!open); setTimeout(() => inputRef.current?.focus(), 50) }}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpen(!open); setTimeout(() => inputRef.current?.focus(), 50) } }}
      >
        <span className={value ? 'text-gray-100' : 'text-gray-400'}>
          {value ? selectedLabel : placeholder}
        </span>
        <div className="flex items-center gap-1">
          {value && (
            <button
              onClick={(e) => { e.stopPropagation(); handleClear() }}
              className="rounded p-0.5 text-gray-400 hover:text-gray-300 transition-colors"
              aria-label="Clear selection"
            >
              <X size={14} />
            </button>
          )}
          <ChevronDown size={14} className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 mt-1 w-full overflow-hidden rounded-xl border border-gray-600 bg-gray-900 shadow-2xl"
          >
            <div className="relative border-b border-gray-700">
              <Search size={14} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full bg-transparent px-9 py-2.5 text-sm text-gray-100 placeholder-gray-500 outline-none"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                >
                  <X size={14} />
                </button>
              )}
            </div>
            <div className="max-h-64 overflow-y-auto">
              {Object.keys(filtered).length === 0 ? (
                <p className="p-4 text-center text-sm text-gray-400">No results found</p>
              ) : (
                Object.entries(filtered).map(([groupKey, items]) => (
                  <div key={groupKey}>
                    <p className="sticky top-0 bg-gray-900 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-desert-primary">
                      {getGroupLabel(groupKey)}
                    </p>
                    {items.map((natKey) => (
                      <button
                        key={natKey}
                        onClick={() => handleSelect(natKey)}
                        className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-desert-primary/10 ${
                          value === natKey ? 'bg-desert-primary/15 text-desert-primary' : 'text-gray-300'
                        }`}
                      >
                        <Globe size={12} className="shrink-0 text-gray-600" />
                        <span>{getLabel(natKey)}</span>
                      </button>
                    ))}
                  </div>
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function VisaChecklistGenerator({ locale }: { locale?: string }) {
  const t = useTranslations('VisaChecklist')
  const isRtl = locale === 'ar' || locale === 'ur'

  const [visaType, setVisaType] = useState<VisaType | ''>('')
  const [nationality, setNationality] = useState('')
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set())
  const [generated, setGenerated] = useState(false)

  const documents = useMemo(() => {
    if (!visaType) return []
    return getDocumentsForVisa(visaType, (nationality || undefined) as Nationality | undefined)
  }, [visaType, nationality])

  const groupedDocs = useMemo(() => {
    const groups: Record<string, DocumentItem[]> = {}
    for (const cat of CATEGORY_ORDER) {
      const items = documents.filter((d) => d.category === cat)
      if (items.length > 0) groups[cat] = items
    }
    return groups
  }, [documents])

  const totalDocs = documents.length
  const checkedCount = checkedItems.size
  const progress = totalDocs > 0 ? Math.round((checkedCount / totalDocs) * 100) : 0

  const nationalityGroups = useMemo(() => {
    return NATIONALITY_GROUPS as Record<string, readonly string[]>
  }, [])

  const getNatLabel = useCallback((key: string) => t(`nationalities.${key}`), [t])
  const getGroupLabel = useCallback((key: string) => t(`nationalityGroups.${key}`), [t])

  const toggleItem = useCallback((key: string) => {
    setCheckedItems((prev) => {
      const next = new Set(prev)
      if (next.has(key)) next.delete(key)
      else next.add(key)
      return next
    })
  }, [])

  const handleGenerate = useCallback(() => {
    if (!visaType) return
    setCheckedItems(new Set())
    setGenerated(true)
  }, [visaType])

  const handleReset = useCallback(() => {
    setVisaType('')
    setNationality('')
    setCheckedItems(new Set())
    setGenerated(false)
  }, [])

  const handlePrint = useCallback(() => {
    window.print()
  }, [])

  const handleShare = useCallback(() => {
    const docList = documents.map((d) => `☐ ${t(`documents.${d.key}`)}`).join('\n')
    const text = `${t('shareTitle')} - ${visaType ? t(`visaTypes.${visaType}`) : ''}\n\n${docList}\n\n${t('shareFooter')}`
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }, [documents, visaType, t])

  return (
    <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <motion.div className="grid gap-6 lg:grid-cols-2 lg:gap-8" variants={stagger.container} initial="initial" animate="animate">
        <motion.div variants={stagger.item}>
          <GlassCard>
            <div className="space-y-5">
              <div className="flex items-center gap-2 mb-2">
                <FileText className="h-5 w-5 text-desert-primary" />
                <h2 className="text-lg font-semibold text-white">{t('form.title')}</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <FileText size={14} className="text-desert-primary" />
                      {t('form.visaType.label')}
                    </span>
                  </label>
                  <div className="relative">
                    <select
                      value={visaType}
                      onChange={(e) => { setVisaType(e.target.value as VisaType); setGenerated(false); setCheckedItems(new Set()) }}
                      className={
                        'w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-all duration-200 appearance-none cursor-pointer ' +
                        'bg-gray-800 border-gray-600 text-gray-100 ' +
                        'focus:border-desert-primary focus:shadow-[0_0_0_3px_rgba(0,212,170,0.15)]'
                      }
                    >
                      <option value="">{t('form.visaType.placeholder')}</option>
                      {VISA_TYPES.map((vt) => (
                        <option key={vt} value={vt}>{t(`visaTypes.${vt}`)}</option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  </div>
                </div>

                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1.5">
                      <Globe size={14} className="text-desert-primary" />
                      {t('form.nationality.label')}
                    </span>
                  </label>
                  <SearchableSelect
                    value={nationality}
                    onChange={setNationality}
                    groups={nationalityGroups}
                    placeholder={t('form.nationality.placeholder')}
                    searchPlaceholder={t('form.nationality.searchPlaceholder')}
                    getLabel={getNatLabel}
                    getGroupLabel={getGroupLabel}
                  />
                </div>

                <div className="flex gap-3 pt-2">
                  <MagneticButton
                    type="button"
                    onClick={handleGenerate}
                    disabled={!visaType}
                    className="flex-1"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <ClipboardList size={16} />
                      {t('buttons.generate')}
                    </span>
                  </MagneticButton>
                  <MagneticButton
                    type="button"
                    variant="secondary"
                    onClick={handleReset}
                    className="px-4"
                  >
                    <RotateCcw size={16} />
                  </MagneticButton>
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={stagger.item} className="space-y-4">
          <AnimatePresence mode="wait">
            {!generated || !visaType ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <FileText className="mb-4 h-12 w-12 text-gray-600" />
                    <p className="text-sm text-gray-400">{t('emptyState')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : documents.length === 0 ? (
              <motion.div
                key="no-docs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <GlassCard>
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <FileText className="mb-4 h-12 w-12 text-gray-400" />
                    <p className="text-lg font-semibold text-white">{t('noDocuments.title')}</p>
                    <p className="mt-2 text-sm text-gray-400">{t('noDocuments.message')}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ) : (
              <motion.div
                key="checklist"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                <GlassCard>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-white">{t('visaTypes.' + visaType)}</p>
                        {nationality && (
                          <p className="text-xs text-gray-400">{t('nationalities.' + nationality)}</p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-desert-primary">{checkedCount}<span className="text-sm text-gray-400">/{totalDocs}</span></p>
                        <p className="text-xs text-gray-400">{t('progress.ready')}</p>
                      </div>
                    </div>

                    <div className="h-2 w-full overflow-hidden rounded-full bg-gray-800">
                      <motion.div
                        className="h-full rounded-full bg-desert-primary"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      />
                    </div>
                    <p className="text-xs text-gray-400">{t('progress.completed', { progress })}</p>
                  </div>
                </GlassCard>

                {Object.entries(groupedDocs).map(([category, docs]) => (
                  <GlassCard key={category}>
                    <h3 className="mb-3 text-sm font-semibold text-white">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-desert-primary" />
                        {t(`categories.${category}`)}
                      </span>
                    </h3>
                    <div className="space-y-2">
                      {docs.map((doc) => {
                        const isChecked = checkedItems.has(doc.key)
                        return (
                          <label
                            key={doc.key}
                            className={`flex cursor-pointer items-start gap-3 rounded-lg p-3 transition-all duration-200 ${
                              isChecked ? 'bg-desert-primary/10' : 'bg-gray-800/30 hover:bg-gray-800/50'
                            }`}
                          >
                            <div className="relative mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                              <input
                                type="checkbox"
                                checked={isChecked}
                                onChange={() => toggleItem(doc.key)}
                                className="peer absolute h-0 w-0 opacity-0"
                              />
                              <div
                                className={`flex h-5 w-5 items-center justify-center rounded-md border-2 transition-all duration-200 ${
                                  isChecked
                                    ? 'border-desert-primary bg-desert-primary'
                                    : 'border-gray-600 bg-transparent'
                                }`}
                              >
                                {isChecked && (
                                  <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                  </svg>
                                )}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className={`text-sm font-medium ${isChecked ? 'text-desert-primary line-through opacity-60' : 'text-white'}`}>
                                {t(`documents.${doc.key}`)}
                              </p>
                              <span className={`mt-0.5 inline-block rounded px-1.5 py-0.5 text-[10px] ${
                                doc.required
                                  ? 'bg-red-500/20 text-red-400'
                                  : 'bg-gray-700/50 text-gray-400'
                              }`}>
                                {doc.required ? t('required') : t('optional')}
                              </span>
                              {doc.nationalityNote && nationality && (
                                <p className="mt-0.5 text-[10px] text-amber-400">
                                  {t(`nationalityNotes.${doc.nationalityNote}`)}
                                </p>
                              )}
                            </div>
                          </label>
                        )
                      })}
                    </div>
                  </GlassCard>
                ))}

                <div className="flex flex-wrap gap-2 print:hidden">
                  <MagneticButton type="button" variant="secondary" onClick={handlePrint} className="text-xs">
                    <Printer size={14} />
                    <span>{t('buttons.print')}</span>
                  </MagneticButton>
                  <MagneticButton type="button" variant="secondary" onClick={handleShare} className="text-xs">
                    <Share2 size={14} />
                    <span>{t('buttons.share')}</span>
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

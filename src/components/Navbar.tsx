'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import {
  Calculator,
  Globe,
  ChevronDown,
  Search,
  Menu,
  X,
  Briefcase,
  Users,
  Landmark,
  Car,
  Building2,
  ExternalLink,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const locales = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
  { code: 'ur', label: 'اردو', dir: 'rtl' },
  { code: 'tl', label: 'Tagalog', dir: 'ltr' },
  { code: 'bn', label: 'বাংলা', dir: 'ltr' },
] as const

const categories = [
  {
    key: 'expat',
    icon: Briefcase,
    tools: [
      { nameKey: 'toolNames.eosb', href: 'eosb-calculator' },
      { nameKey: 'toolNames.jawazat', href: 'jawazat-fine-calculator' },
      { nameKey: 'toolNames.family', href: 'family-visa-optimizer' },
      { nameKey: 'toolNames.settlement', href: 'final-settlement-calculator' },
      { nameKey: 'toolNames.visaChecklist', href: 'visa-checklist-generator' },
    ],
  },
  {
    key: 'business',
    icon: Users,
    tools: [
      { nameKey: 'toolNames.zatca', href: '#' },
      { nameKey: 'toolNames.nitaqat', href: '#' },
      { nameKey: 'toolNames.freelance', href: '#' },
      { nameKey: 'toolNames.crCost', href: '#' },
    ],
  },
  {
    key: 'finance',
    icon: Landmark,
    tools: [
      { nameKey: 'toolNames.loan', href: '#' },
      { nameKey: 'toolNames.mortgage', href: '#' },
      { nameKey: 'toolNames.rett', href: '#' },
      { nameKey: 'toolNames.zakat', href: '#' },
    ],
  },
  {
    key: 'vehicle',
    icon: Car,
    tools: [
      { nameKey: 'toolNames.loan', href: '#' },
      { nameKey: 'toolNames.traffic', href: '#' },
      { nameKey: 'toolNames.fuel', href: '#' },
      { nameKey: 'toolNames.insurance', href: '#' },
    ],
  },
  {
    key: 'realEstate',
    icon: Building2,
    tools: [
      { nameKey: 'toolNames.rett', href: '#' },
      { nameKey: 'toolNames.roi', href: '#' },
      { nameKey: 'toolNames.ijara', href: '#' },
      { nameKey: 'toolNames.ejar', href: '#' },
    ],
  },
]

export function Navbar({ locale }: { locale?: string }) {
  const pathname = usePathname()
  const tn = useTranslations('Navbar')
  const th = useTranslations('HomePage')
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [langOpen, setLangOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)
  const isRtl = locale === 'ar' || locale === 'ur'

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setSearchOpen((prev) => !prev)
      }
      if (e.key === 'Escape') {
        setSearchOpen(false)
        setLangOpen(false)
        setOpenCategory(null)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false)
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const currentLang = locales.find((l) => l.code === locale) ?? locales[0]
  const allTools = categories.flatMap((c) => c.tools)
  const searchResults = searchQuery
    ? allTools.filter((t) => th(t.nameKey).toLowerCase().includes(searchQuery.toLowerCase()))
    : []

  const switchLocale = (newLocale: string) => {
    setLangOpen(false)
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`)
    window.location.href = newPath
  }

  return (
    <>
      <nav className="sticky top-0 z-50 border-b border-gray-700/30 bg-[#0A0E1A]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex h-14 items-center justify-between">
            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center gap-2 shrink-0">
              <Calculator className="h-5 w-5 text-desert-primary" />
              <span className="font-bold text-white">HsabKSA</span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {categories.map((cat) => (
                <div
                  key={cat.key}
                  className="relative"
                  onMouseEnter={() => setOpenCategory(cat.key)}
                  onMouseLeave={() => setOpenCategory(null)}
                >
                  <button
                    className={cn(
                      'flex items-center gap-1.5 px-3 py-2 text-sm rounded-lg transition-colors',
                      'text-gray-300 hover:text-white hover:bg-gray-800'
                    )}
                  >
                    <cat.icon className="h-4 w-4" />
                    {tn(`categories.${cat.key}`)}
                    <ChevronDown className={cn('h-3 w-3 transition-transform', openCategory === cat.key && 'rotate-180')} />
                  </button>
                  {openCategory === cat.key && (
                    <div className="absolute top-full left-0 mt-1 w-56 rounded-xl border border-gray-700 bg-gray-900 shadow-lg backdrop-blur-xl p-2">
                      {cat.tools.map((tool) => (
                        <Link
                          key={tool.nameKey}
                          href={tool.href.startsWith('#') ? tool.href : `/${locale}/${tool.href}`}
                          onClick={() => setOpenCategory(null)}
                          className={cn(
                            'flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors',
                            'text-gray-400 hover:text-white hover:bg-gray-800'
                          )}
                        >
                          {th(tool.nameKey)}
                          {tool.href !== '#' && <ExternalLink className="h-3 w-3 opacity-40" />}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side */}
            <div className="flex items-center gap-1">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-400 hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-800"
                title="Search (⌘K)"
              >
                <Search className="h-4 w-4" />
              </button>

              {/* Language */}
              <div className="relative" ref={langRef}>
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center gap-1 p-2 text-gray-400 hover:text-gray-200 transition-colors rounded-lg hover:bg-gray-800"
                >
                  <Globe className="h-4 w-4" />
                  <span className="text-xs font-medium hidden sm:inline">{currentLang.code.toUpperCase()}</span>
                </button>
                {langOpen && (
                  <div className={cn(
                    'absolute top-full mt-1 w-36 rounded-xl border border-gray-700 bg-gray-900 shadow-lg backdrop-blur-xl p-1',
                    isRtl ? 'left-0' : 'right-0'
                  )}>
                    {locales.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => switchLocale(l.code)}
                        className={cn(
                          'w-full text-left flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors',
                          l.code === locale
                            ? 'text-desert-primary bg-desert-primary/10'
                            : 'text-gray-400 hover:text-white hover:bg-gray-800'
                        )}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile menu */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 text-gray-400 hover:text-gray-200"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-700/30 bg-[#0A0E1A]">
            <div className="px-4 py-3 space-y-2 max-h-[70vh] overflow-y-auto">
              {categories.map((cat) => (
                <div key={cat.key}>
                  <button
                    onClick={() => setOpenCategory(openCategory === cat.key ? null : cat.key)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-gray-800"
                  >
                    <span className="flex items-center gap-2">
                      <cat.icon className="h-4 w-4 text-desert-primary" />
                      {tn(`categories.${cat.key}`)}
                    </span>
                    <ChevronDown className={cn('h-3 w-3 transition-transform', openCategory === cat.key && 'rotate-180')} />
                  </button>
                  {openCategory === cat.key && (
                    <div className="ml-4 mt-1 space-y-1">
                      {cat.tools.map((tool) => (
                        <Link
                          key={tool.nameKey}
                          href={tool.href.startsWith('#') ? tool.href : `/${locale}/${tool.href}`}
                          onClick={() => { setMobileOpen(false); setOpenCategory(null) }}
                          className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800"
                        >
                          {th(tool.nameKey)}
                          {tool.href !== '#' && <ExternalLink className="h-3 w-3 opacity-40" />}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Search modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-[60] flex items-start justify-center pt-[15vh] px-4">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setSearchOpen(false)} />
          <div
            ref={searchRef}
            className="relative w-full max-w-lg rounded-xl border border-gray-700 bg-gray-900 shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-700/30">
              <Search className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder={tn('search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent text-sm text-gray-100 outline-none placeholder-gray-400"
              />
              <kbd className="text-[10px] text-gray-400 px-1.5 py-0.5 rounded bg-gray-800">ESC</kbd>
            </div>
            <div className="mt-1 space-y-1 max-h-60 overflow-y-auto p-2">
              {searchResults.map((tool) => (
                <Link
                  key={tool.nameKey}
                  href={`/${locale}/${tool.href}`}
                  onClick={() => { setSearchOpen(false); setSearchQuery('') }}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                >
                  {th(tool.nameKey)}
                  <ExternalLink className="h-3 w-3 opacity-40" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

'use client'

import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Calculator } from 'lucide-react'

const categories = [
  {
    key: 'expat',
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
    tools: [
      { nameKey: 'toolNames.zatca', href: 'zatca-vat-calculator' },
      { nameKey: 'toolNames.salla', href: 'salla-profit-calculator' },
      { nameKey: 'toolNames.nitaqat', href: 'nitaqat-simulator' },
      { nameKey: 'toolNames.freelance', href: 'freelance-income-calculator' },
      { nameKey: 'toolNames.crCost', href: 'cr-cost-estimator' },
    ],
  },
  {
    key: 'finance',
    tools: [
      { nameKey: 'toolNames.loan', href: 'sama-loan-calculator' },
      { nameKey: 'toolNames.zakat', href: 'zakat-calculator' },
      { nameKey: 'toolNames.iban', href: 'iban-validator' },
      { nameKey: 'toolNames.sip', href: 'sip-calculator' },
      { nameKey: 'toolNames.rett', href: 'rett-tax-calculator' },
      { nameKey: 'toolNames.mortgage', href: 'mortgage-vs-rent' },
    ],
  },
]

export function Footer() {
  const tf = useTranslations('Footer')
  const tn = useTranslations('Navbar')
  const th = useTranslations('HomePage')

  return (
    <footer className="border-t border-gray-700/30 mt-auto bg-[#0A0E1A]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-desert-primary" />
              <span className="text-lg font-bold text-white">Sauditoolhub</span>
            </Link>
<p className="text-sm text-gray-400 leading-relaxed">
              {tf('tagline')}
            </p>
            <Link
              href="/blog"
              className="flex items-center gap-2 min-h-[44px] text-sm text-desert-primary hover:text-desert-primary-dim transition-colors font-medium active:scale-95"
            >
              <span className="text-xs bg-desert-primary/20 text-desert-primary px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">NEW</span>
              {tf('links.blog')}
            </Link>
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center justify-center min-h-[44px] min-w-[44px] text-gray-400 hover:text-desert-primary transition-colors rounded-lg hover:bg-gray-800 active:scale-95" aria-label="Home">
                <Calculator className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {categories.map((cat) => (
            <div key={cat.key}>
              <h3 className="text-sm font-semibold text-white mb-3">{tn(`categories.${cat.key}`)}</h3>
              <ul className="space-y-2">
                {cat.tools.map((tool) => (
                    <li key={tool.nameKey}>
                    <Link
                      href={tool.href.startsWith('#') ? tool.href : `/${tool.href}`}
                      className="flex items-center min-h-[44px] text-sm text-gray-400 hover:text-desert-primary transition-colors"
                    >
                      {th(tool.nameKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            {tf('copyright', { year: new Date().getFullYear() })}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-400">
            <Link href="/about" className="flex items-center min-h-[44px] hover:text-desert-primary transition-colors active:scale-95">{tf('links.about')}</Link>
            <Link href="/privacy-policy" className="flex items-center min-h-[44px] hover:text-desert-primary transition-colors active:scale-95">{tf('links.privacy')}</Link>
            <Link href="/terms-of-service" className="flex items-center min-h-[44px] hover:text-desert-primary transition-colors active:scale-95">{tf('links.terms')}</Link>
            <Link href="/disclaimer" className="flex items-center min-h-[44px] hover:text-desert-primary transition-colors active:scale-95">{tf('links.disclaimer')}</Link>
            <Link href="/contact" className="flex items-center min-h-[44px] hover:text-desert-primary transition-colors active:scale-95">{tf('links.contact')}</Link>
          </div>
          <p className="text-xs text-gray-400">
            {tf('disclaimerText')}
          </p>
        </div>
      </div>
    </footer>
  )
}


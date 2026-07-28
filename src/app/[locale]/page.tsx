'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Calculator, Shield, Zap, Globe, ChevronRight } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'

const categories = [
  {
    key: 'expat',
    tools: [
      { nameKey: 'toolNames.eosb', href: '/eosb-calculator' },
      { nameKey: 'toolNames.jawazat', href: '/jawazat-fine-calculator' },
      { nameKey: 'toolNames.family', href: '/family-visa-optimizer' },
    ],
  },
  {
    key: 'business',
    tools: [
      { nameKey: 'toolNames.zatca', href: '/zatca-vat-calculator' },
      { nameKey: 'toolNames.nitaqat', href: '/nitaqat-simulator' },
      { nameKey: 'toolNames.salla', href: '/salla-profit-calculator' },
      { nameKey: 'toolNames.freelance', href: '/freelance-income-calculator' },
      { nameKey: 'toolNames.crCost', href: '/cr-cost-estimator' },
    ],
  },
  {
    key: 'finance',
    tools: [
      { nameKey: 'toolNames.loan', href: 'sama-loan-calculator' },
      { nameKey: 'toolNames.zakat', href: 'zakat-calculator' },
      { nameKey: 'toolNames.iban', href: 'iban-validator' },
      { nameKey: 'toolNames.sip', href: 'sip-calculator' },
    ],
  },
  {
    key: 'auto',
    tools: [
      { nameKey: 'toolNames.usedCar', href: '/used-car-calculator' },
      { nameKey: 'toolNames.traffic', href: '/traffic-fine-calculator' },
      { nameKey: 'toolNames.sec', href: '/sec-bill-calculator' },
      { nameKey: 'toolNames.billSplitter', href: '/bill-splitter-calculator' },
      { nameKey: 'toolNames.fuel', href: '/fuel-cost-calculator' },
    ],
  },
  {
    key: 'realEstate',
    tools: [
      { nameKey: 'toolNames.rett', href: '/rett-tax-calculator' },
    ],
  },
]

export default function HomePage() {
  const t = useTranslations('HomePage')

  const whyCards = [
    { key: 'privacy', icon: Shield },
    { key: 'instant', icon: Zap },
    { key: 'languages', icon: Globe },
    { key: 'accurate', icon: Calculator },
  ] as const

  return (
    <div className="relative z-10">
      <HeroSection />

      {/* Categories Grid */}
      <section id="categories" className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            {t('categories.title')}
          </h2>
          <p className="text-sm text-gray-400 text-center mb-12">
            {t('categories.subtitle')}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.key}
                className="glass p-6 transition-all duration-300 hover:border-desert-primary/20 hover:shadow-[0_0_25px_rgba(0,212,170,0.08)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div>
                    <h3 className="font-semibold text-white">
                      {t(`categories.${cat.key}.name`)}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {t(`categories.${cat.key}.desc`)}
                    </p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {cat.tools.map((tool) => (
                    <li key={tool.nameKey}>
                      <Link
                        href={tool.href.startsWith('#') ? tool.href : tool.href}
                        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors"
                      >
                        {t(tool.nameKey)}
                        <ChevronRight className="h-3.5 w-3.5 opacity-40" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('whyChooseUs.title')}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyCards.map((item) => (
              <div key={item.key} className="glass text-center p-8 transition-all duration-300 hover:border-desert-primary/20 hover:shadow-[0_0_25px_rgba(0,212,170,0.08)]">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-desert-primary/15">
                  <item.icon className="h-7 w-7 text-desert-primary" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  {t(`whyChooseUs.cards.${item.key}.title`)}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {t(`whyChooseUs.cards.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-3xl glass p-12 text-center border-desert-primary/20 transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,212,170,0.1)]">
          <h2 className="text-3xl font-bold text-white mb-3">
            {t('cta.title')}
          </h2>
          <p className="text-sm text-gray-400 mb-8">
            {t('cta.subtitle')}
          </p>
          <Link
            href="/eosb-calculator"
            className="group inline-flex items-center gap-2.5 rounded-xl bg-desert-primary px-10 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-desert-primary-dim hover:shadow-[0_0_30px_rgba(0,212,170,0.3)] active:scale-95"
          >
            <Calculator className="h-5 w-5" />
            {t('cta.button')}
          </Link>
        </div>
      </section>
    </div>
  )
}

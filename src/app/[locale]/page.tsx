'use client'

import { useTranslations } from 'next-intl'
import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { Calculator, Shield, Zap, Globe, ChevronRight, Search, X } from 'lucide-react'
import { GlassCard } from '@/components/GlassCard'

const HeroSection = dynamic(() => import('@/components/HeroSection').then(module => ({ default: module.HeroSection })), {
  loading: () => <div className="min-h-[90vh] flex items-center justify-center" />,
})

const AnimatedBackground = dynamic(() => import('@/components/AnimatedBackground').then(module => ({ default: module.AnimatedBackground })), { ssr: false, loading: () => null })
const ParticleBackground = dynamic(() => import('@/components/ParticleBackground').then(module => ({ default: module.ParticleBackground })), { ssr: false, loading: () => null })

const categories = [
  {
    key: 'expat',
    tools: [
      { nameKey: 'toolNames.eosb', href: '/eosb-calculator' },
      { nameKey: 'toolNames.jawazat', href: '/jawazat-fine-calculator' },
      { nameKey: 'toolNames.family', href: '/family-visa-optimizer' },
      { nameKey: 'toolNames.settlement', href: '/final-settlement-calculator' },
      { nameKey: 'toolNames.visaChecklist', href: '/visa-checklist-generator' },
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
      { nameKey: 'toolNames.ejar', href: '/ejar-deposit-calculator' },
      { nameKey: 'toolNames.mortgage', href: '/mortgage-vs-rent' },
      { nameKey: 'toolNames.sak', href: '/property-valuation' },
    ],
  },
]

export default function HomePage() {
  const t = useTranslations('HomePage')
  const [searchQuery, setSearchQuery] = useState('')

  const whyCards = [
    { key: 'privacy', icon: Shield },
    { key: 'instant', icon: Zap },
    { key: 'languages', icon: Globe },
    { key: 'accurate', icon: Calculator },
  ] as const

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      tools: category.tools.filter((tool) => {
        const toolName = t(tool.nameKey).toLowerCase()
        const categoryName = t(`categories.${category.key}.name`).toLowerCase()
        const query = searchQuery.toLowerCase()
        return toolName.includes(query) || categoryName.includes(query)
      }),
    }))
    .filter((category) => category.tools.length > 0)

  return (
    <div className="relative z-10">
      <AnimatedBackground />
      <ParticleBackground />
      <HeroSection />

      {/* Live Stats */}
      <section className="content-visibility-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-desert-primary mb-2">50,000+</div>
              <div className="text-sm text-gray-400">{t('stats.calculations')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-desert-primary mb-2">23</div>
              <div className="text-sm text-gray-400">{t('stats.tools')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-desert-primary mb-2">5</div>
              <div className="text-sm text-gray-400">{t('stats.languages')}</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-desert-primary mb-2">100%</div>
              <div className="text-sm text-gray-400">{t('stats.privacy')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="content-visibility-auto px-4 py-12">
        <div className="w-full max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('search.placeholder')}
              className="w-full px-5 py-4 pr-12 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 text-base md:text-lg"
            />
            <Search className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-12 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                aria-label="Clear search"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="flex gap-2 mt-3 flex-wrap justify-center">
            <span className="text-xs text-gray-400 w-full mb-1">{t('search.popular')}:</span>
            {['EOSB', 'Jawazat', 'Zakat', 'Traffic Fine', 'SAMA Loan'].map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="text-xs px-3 min-h-[44px] rounded-full bg-white/5 hover:bg-white/10 text-desert-primary transition-colors whitespace-nowrap active:scale-95"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section id="categories" className="content-visibility-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-3">
            {t('categories.title')}
          </h2>
          <p className="text-sm text-gray-400 text-center mb-12">
            {t('categories.subtitle')}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((cat) => (
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
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No calculators found for "{searchQuery}"</p>
              <button
                onClick={() => setSearchQuery('')}
                className="mt-4 text-desert-primary hover:text-desert-primary-dim"
              >
                Clear search
              </button>
            </div>
          )}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="content-visibility-auto px-4 py-20">
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

      {/* Testimonials */}
      <section className="content-visibility-auto px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Muhammad K.",
                location: "Riyadh",
                text: "Saved me 15,000 SAR when calculating my end of service benefit! The EOSB calculator is incredibly accurate.",
                tool: "EOSB Calculator"
              },
              {
                name: "Ahmed A.",
                location: "Jeddah",
                text: "Finally found a Zakat calculator that explains everything in Urdu. Very helpful for my family.",
                tool: "Zakat Calculator"
              },
              {
                name: "Maria S.",
                location: "Dammam",
                text: "The Jawazat fine calculator helped me avoid a huge penalty. Highly recommend to all expats!",
                tool: "Jawazat Fine Calculator"
              }
            ].map((testimonial, idx) => (
              <GlassCard key={idx} className="p-6">
                <div className="flex text-yellow-400 mb-3">
                  {'⭐'.repeat(5)}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm text-desert-primary font-semibold">
                  {testimonial.name}, {testimonial.location}
                </div>
                <div className="text-xs text-gray-400">{testimonial.tool}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="content-visibility-auto px-4 py-20">
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

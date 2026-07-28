import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { ChevronRight, Calendar, Clock } from 'lucide-react'
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd'

type Props = {
  params: Promise<{ locale: string }>
}

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://Sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'BlogPage' })
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${l}/blog`
  }

  return {
    title: `${t('title')} — Sauditoolhub`,
    description: t('subtitle'),
    alternates: {
      canonical: pageUrl,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('title')} — Sauditoolhub`,
      description: t('subtitle'),
      url: pageUrl,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} — Sauditoolhub`,
      description: t('subtitle'),
    },
    robots: { index: true, follow: true },
  }
}

const blogPosts = [
  {
    title: 'Complete Guide to EOSB in Saudi Arabia 2026',
    excerpt: 'Learn how to calculate your End of Service Benefit under Saudi Labor Law. We cover Article 84, resignation rules, and common mistakes expats make when leaving their job.',
    category: 'expat',
    href: '/guide/eosb-end-of-service-benefit-saudi-arabia-2026',
    date: '2026-01-15',
    readTime: 12,
  },
  {
    title: 'Complete Guide to Jawazat Overstay Fines 2026',
    excerpt: 'Everything you need to know about Iqama and visa overstay fines in Saudi Arabia. Includes daily rates, flat penalties, and how to check your status online.',
    category: 'expat',
    href: '/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026',
    date: '2026-01-22',
    readTime: 15,
  },
  {
    title: 'Complete Guide to Family Visa & Dependent Fees 2026',
    excerpt: 'Plan your family sponsorship costs in Saudi Arabia. We break down Iqama fees, dependent fees, exit/re-entry visas, and work permit costs for families.',
    category: 'expat',
    href: '/guide/family-visa-dependent-fee-calculator-saudi-arabia-2026',
    date: '2026-02-05',
    readTime: 10,
  },
  {
    title: 'Complete Guide to Final Settlement & Air Ticket in Saudi Arabia 2026',
    excerpt: 'Everything about final settlement when leaving your job in Saudi Arabia: EOSB, unpaid salary, unused leave pay, air ticket entitlement, and step-by-step calculation examples.',
    category: 'expat',
    href: '/guide/final-settlement-air-ticket-calculator-saudi-arabia-2026',
    date: '2026-07-28',
    readTime: 14,
  },
  {
    title: 'SAMA Loan Guide: How to Calculate Your Home Loan in Saudi Arabia 2026',
    excerpt: 'Understand Saudi Arabia mortgage rules, SAMA interest rate guidelines, and how to estimate your monthly payments before applying for a home loan.',
    category: 'finance',
    href: '/guide/sama-loan-calculator-saudi-arabia-2026',
    date: '2026-02-18',
    readTime: 11,
  },
  {
    title: 'Zakat Calculator Guide: How to Calculate Zakat in Saudi Arabia 2026',
    excerpt: 'A complete walkthrough of Zakat calculation for cash, gold, investments, and property. Learn nisab thresholds and common exemptions under Saudi law.',
    category: 'finance',
    href: '/guide/zakat-calculator-saudi-arabia-2026',
    date: '2026-03-02',
    readTime: 14,
  },
  {
    title: 'Nitaqat Guide: Understanding Saudization Ratios in 2026',
    excerpt: 'How Nitaqat Saudization bands affect your company classification, visa quotas, and hiring ability. A must-read for HR managers and business owners.',
    category: 'business',
    href: '/guide/nitaqat-simulator-saudi-arabia-2026',
    date: '2026-03-14',
    readTime: 9,
  },
  {
    title: 'Salla Profit Calculator Guide for E-Commerce in Saudi Arabia 2026',
    excerpt: 'Maximize your Salla store profitability. We cover commission structures, payment gateway fees, shipping costs, and hidden expenses new sellers miss.',
    category: 'business',
    href: '/guide/salla-profit-calculator-saudi-arabia-2026',
    date: '2026-03-28',
    readTime: 8,
  },
  {
    title: 'Freelance Income Tax Guide for Saudi Arabia 2026',
    excerpt: 'How freelance income is taxed in Saudi Arabia, what deductions you can claim, and how to stay compliant with ZATCA as an independent contractor.',
    category: 'business',
    href: '/guide/freelance-income-calculator-saudi-arabia-2026',
    date: '2026-04-10',
    readTime: 10,
  },
  {
    title: 'CR Cost Guide: Starting a Business in Saudi Arabia 2026',
    excerpt: 'Breakdown of commercial registration fees, chamber of commerce costs, professional licenses, and government fees for new businesses in KSA.',
    category: 'business',
    href: '/guide/cr-cost-estimator-saudi-arabia-2026',
    date: '2026-04-22',
    readTime: 13,
  },
  {
    title: 'SIP Calculator Guide: Building Wealth in Saudi Arabia 2026',
    excerpt: 'How Systematic Investment Plans work in Saudi Arabia. Compare mutual fund SIPs, expected returns, and how inflation impacts long-term savings.',
    category: 'finance',
    href: '/guide/sip-calculator-saudi-arabia-2026',
    date: '2026-05-05',
    readTime: 9,
  },
  {
    title: 'IBAN Validator Guide: Safe Banking in Saudi Arabia 2026',
    excerpt: 'Why IBAN validation matters for SAR transfers, how to spot fake IBANs, and what to do if your bank details are rejected during payments.',
    category: 'finance',
    href: '/guide/iban-validator-saudi-arabia-2026',
    date: '2026-05-18',
    readTime: 7,
  },
  {
    title: 'Used Car Price Guide: Buying a Car in Saudi Arabia 2026',
    excerpt: 'Negotiation tips, market prices for popular models, registration fees, and inspection costs when buying a used car in Riyadh, Jeddah, or Dammam.',
    category: 'auto',
    href: '/guide/used-car-calculator-saudi-arabia-2026',
    date: '2026-06-01',
    readTime: 11,
  },
  {
    title: 'Traffic Fine Guide: Understanding Saudi Traffic Violations 2026',
    excerpt: 'Complete list of traffic violation codes, fine amounts, points system, and how to pay or appeal tickets through Absher and Najiz platforms.',
    category: 'auto',
    href: '/guide/traffic-fine-calculator-saudi-arabia-2026',
    date: '2026-06-14',
    readTime: 12,
  },
  {
    title: 'SEC Bill Guide: Electricity Bill Estimator Saudi Arabia 2026',
    excerpt: 'How SEC electricity tariffs work in Saudi Arabia, peak vs off-peak rates, and how to estimate your monthly bill before it arrives.',
    category: 'auto',
    href: '/guide/sec-bill-calculator-saudi-arabia-2026',
    date: '2026-06-28',
    readTime: 8,
  },
  {
    title: 'Bill Splitter Guide: Splitting Expenses in Saudi Arabia 2026',
    excerpt: 'Fair methods for splitting rent, utilities, and group trip costs among roommates and friends in Saudi Arabia. Includes templates and examples.',
    category: 'auto',
    href: '/guide/bill-splitter-calculator-saudi-arabia-2026',
    date: '2026-07-10',
    readTime: 6,
  },
  {
    title: 'Fuel Cost Guide: Calculating Fuel Expenses in Saudi Arabia 2026',
    excerpt: 'How to budget for fuel in Saudi Arabia, current petrol prices, fuel efficiency tips for expats, and long-distance travel cost estimates.',
    category: 'auto',
    href: '/guide/fuel-cost-calculator-saudi-arabia-2026',
    date: '2026-07-24',
    readTime: 7,
  },
  {
    title: 'RETT Guide: Real Estate Tax in Saudi Arabia 2026',
    excerpt: 'Who pays real estate transfer tax, current rates, exemptions for first-time buyers, and how to calculate the tax when buying property in KSA.',
    category: 'realEstate',
    href: '/guide/rett-tax-calculator-saudi-arabia-2026',
    date: '2026-08-05',
    readTime: 10,
  },
  {
    title: 'Ejar Deposit Guide: Rental Deposit Calculator Saudi Arabia 2026',
    excerpt: 'How Ejar deposit calculations work, standard deposit amounts by city, how to get your deposit back, and legal protections for tenants in Saudi Arabia.',
    category: 'realEstate',
    href: '/guide/ejar-deposit-calculator-saudi-arabia-2026',
    date: '2026-08-18',
    readTime: 9,
  },
  {
    title: 'Mortgage vs Rent Guide: Making the Right Choice in Saudi Arabia 2026',
    excerpt: 'Compare the true cost of buying vs renting in Riyadh, Jeddah, and Dammam. We break down mortgage payments, maintenance costs, and opportunity cost.',
    category: 'realEstate',
    href: '/guide/mortgage-vs-rent-saudi-arabia-2026',
    date: '2026-09-01',
    readTime: 14,
  },
  {
    title: 'Property Valuation Guide: Real Estate in Saudi Arabia 2026',
    excerpt: 'Factors that affect property values in Saudi Arabia, how to get an accurate valuation, and what buyers and sellers need to know in 2026.',
    category: 'realEstate',
    href: '/guide/property-valuation-saudi-arabia-2026',
    date: '2026-09-14',
    readTime: 11,
  },
  {
    title: 'Final Settlement Guide: End of Employment in Saudi Arabia 2026',
    excerpt: 'What is included in your final settlement, how unused leave and air tickets are calculated, and common mistakes to avoid before your final exit.',
    category: 'expat',
    href: '/guide/final-settlement-calculator-saudi-arabia-2026',
    date: '2026-09-28',
    readTime: 13,
  },
  {
    title: 'Visa Checklist Guide: Documents for Saudi Visas 2026',
    excerpt: 'Complete document checklist for family visit, work, Umrah, and tourist visas in Saudi Arabia. Includes attestation steps and embassy requirements.',
    category: 'expat',
    href: '/guide/visa-checklist-generator-saudi-arabia-2026',
    date: '2026-10-10',
    readTime: 15,
  },
  {
    title: 'ZATCA VAT Guide: Understanding VAT in Saudi Arabia 2026',
    excerpt: 'How ZATCA VAT works for businesses and consumers, current 15% rate rules, invoicing requirements, and common filing mistakes to avoid.',
    category: 'business',
    href: '/guide/zatca-vat-calculator-saudi-arabia-2026',
    date: '2026-10-24',
    readTime: 12,
  },
]

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('BlogPage')
  const isRtl = locale === 'ar' || locale === 'ur'
  const pageUrl = locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('title')} — Sauditoolhub`,
    description: t('subtitle'),
    url: pageUrl,
    isPartOf: { '@type': 'WebSite', url: baseUrl },
    inLanguage: locale === 'en' ? 'en-US' : locale === 'ar' ? 'ar-SA' : locale === 'ur' ? 'ur-PK' : locale,
  }

  return (
    <>
      <JsonLd data={webPageSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: t('title'), url: pageUrl },
        ]}
      />

      <div className="relative z-10">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <div
                  key={i}
                  className="glass p-6 transition-all duration-300 hover:border-desert-primary/20 hover:shadow-[0_0_25px_rgba(0,212,170,0.08)] flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-desert-primary/15 text-desert-primary">
                      {t(`categories.${post.category}`)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {post.readTime} {t('minRead')}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/30">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'ar' ? 'ar-SA' : locale === 'ur' ? 'ur-PK' : locale, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/${locale}${post.href}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-desert-primary hover:text-desert-primary-dim transition-colors"
                    >
                      {t('readMore')}
                      <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

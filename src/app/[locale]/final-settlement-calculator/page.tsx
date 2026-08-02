import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FinalSettlementCalculator } from '@/components/FinalSettlementCalculator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import { SoftwareAppJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'FinalSettlementCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/final-settlement-calculator` : `${baseUrl}/${l}/final-settlement-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/final-settlement-calculator` : `${baseUrl}/${locale}/final-settlement-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/final-settlement-calculator` : `${baseUrl}/${locale}/final-settlement-calculator`,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function FinalSettlementPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/final-settlement-calculator` : `${baseUrl}/${locale}/final-settlement-calculator`
  const t = await getTranslations({ locale, namespace: 'FinalSettlementCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <FinalSettlementCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="Final Settlement & Air Ticket Calculator"
        description="Calculate your full final settlement in Saudi Arabia including unpaid salary, unused vacation pay, air ticket, and EOSB."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Expat Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expat-tools` },
          { name: 'Final Settlement Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'How is final settlement calculated in Saudi Arabia?',
            answer: 'Final settlement in Saudi Arabia includes unpaid salary, unused vacation pay, air ticket to home country, and EOSB. Unpaid salary is calculated as (total monthly salary / 30) x unpaid days. Unused vacation pay follows Article 76: (total monthly salary / 30) x unused leave days. Air ticket is based on standard economy fare or as per your contract.',
          },
          {
            question: 'Is air ticket included in final settlement in Saudi Arabia?',
            answer: 'Yes, under Saudi Labor Law and standard employment contracts, the employer is obligated to provide a one-way air ticket to the employee\'s home country upon final exit. This applies to both resignation and termination, unless otherwise specified in the contract.',
          },
          {
            question: 'How is unused vacation pay calculated in Saudi Arabia?',
            answer: 'Under Saudi Labor Law Article 76, unused vacation days are paid at the rate of (total monthly salary / 30) per day. For example, if your salary is 12,000 SAR and you have 15 unused leave days: (12,000 / 30) x 15 = 6,000 SAR.',
          },
          {
            question: 'What is included in a final settlement when leaving a job in Saudi?',
            answer: 'A final settlement in Saudi Arabia typically includes: End of Service Benefit (EOSB), unpaid salary for days worked, payment for unused annual leave days, one-way air ticket to home country, and any contractual bonuses or allowances due.',
          },
          {
            question: 'Do I get final settlement if I resign in Saudi Arabia?',
            answer: 'Yes, even if you resign, you are entitled to unpaid salary, unused vacation pay, and air ticket. EOSB is also payable but may be reduced under Article 85 if you resign before certain service periods.',
          },
          {
            question: 'How much air ticket should I get in my final settlement?',
            answer: 'The standard is a one-way economy class ticket to your home country, typically valued between 1,500 - 3,000 SAR depending on your destination. Some contracts specify business class for certain positions. Check your employment contract for exact entitlement.',
          },
          {
            question: 'Can my employer deduct from my final settlement?',
            answer: 'Employers can only make deductions permitted by Saudi Labor Law, such as outstanding loans, visa cancellation fees, or fixed-term contract early resignation penalties (up to 50% of EOSB). They cannot deduct for arbitrary reasons.',
          },
        ]}
      />
      <ToolSeoContent namespace="FinalSettlementCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Saudi Labor Law Article 76 &amp; standard employment contracts
        </p>
      </div>
    </>
  )
}

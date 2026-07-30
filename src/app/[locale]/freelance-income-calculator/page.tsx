import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FreelanceIncomeCalculator } from '@/components/FreelanceIncomeCalculator'
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
  const t = await getTranslations({ locale, namespace: 'FreelanceIncomeCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/freelance-income-calculator` : `${baseUrl}/${l}/freelance-income-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/freelance-income-calculator` : `${baseUrl}/${locale}/freelance-income-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/freelance-income-calculator` : `${baseUrl}/${locale}/freelance-income-calculator`,
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

export default async function FreelanceIncomePage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/freelance-income-calculator` : `${baseUrl}/${locale}/freelance-income-calculator`

  return (
    <>
      <FreelanceIncomeCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="Freelance (Watheq) Net Income Calculator"
        description="Calculate your freelance net income after platform fees, taxes, and expenses. Supports Upwork, Fiverr, Mostaql, Khamsat, and direct clients."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Business Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}business-tools` },
          { name: 'Freelance Income Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'How do platform fees work on Upwork vs Fiverr in Saudi Arabia?',
            answer: 'Upwork charges 10% for most clients (20% for the first $500 with a new client). Fiverr charges a flat 20% on all earnings. Mostaql and Khamsat charge around 10-20%. Direct clients have 0% platform fees. These fees are deducted before taxes and expenses.',
          },
          {
            question: 'Do freelancers in Saudi Arabia need to pay VAT?',
            answer: 'If your freelance income exceeds SAR 375,000 annually, you must register for VAT in Saudi Arabia and charge 15% VAT on your services. Freelancers below this threshold are not required to charge VAT unless they voluntarily register. Watheq (freelance platform) provides guidance on tax registration.',
          },
          {
            question: 'What is Watheq and how does it help freelancers?',
            answer: 'Watheq is Saudi Arabia\'s official freelance documentation platform under the Ministry of Human Resources and Social Development. It helps freelancers obtain freelance documents, validate their status, and access benefits. Watheq registration is recommended for all freelancers in Saudi Arabia.',
          },
          {
            question: 'Can I deduct expenses as a freelancer in Saudi Arabia?',
            answer: 'Yes, freelancers can deduct legitimate business expenses including internet costs, software subscriptions, co-working space fees, equipment, professional development, and marketing costs. Keep detailed records and receipts for all deductions.',
          },
          {
            question: 'What is the tax rate for freelancers in Saudi Arabia?',
            answer: 'Saudi Arabia does not impose personal income tax on Saudi residents. However, VAT-registered freelancers must charge 15% VAT on their services. Non-resident freelancers may be subject to withholding tax at 5-20% depending on the service type. Consult a tax advisor for your specific situation.',
          },
          {
            question: 'Which freelance platform has the lowest fees?',
            answer: 'Direct clients have 0% fees. Mostaql charges 10% — the lowest among platforms. Upwork charges 10% for established clients. Fiverr and Khamsat charge 20%. Consider diversifying across platforms and building direct client relationships to reduce fees.',
          },
          {
            question: 'How do I calculate my effective hourly rate as a freelancer?',
            answer: 'Effective hourly rate = Net Income / Hours Worked per month. For example, if your net income is SAR 8,000 and you work 160 hours, your effective rate is SAR 50/hour. This helps you evaluate whether your current projects are worth your time.',
          },
        ]}
      />
      <ToolSeoContent namespace="FreelanceIncomeCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Saudi freelance regulations &amp; platform fee structures
        </p>
      </div>
    </>
  )
}

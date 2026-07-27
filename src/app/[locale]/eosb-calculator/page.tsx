import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { EOSBCalculator } from '@/components/EOSBCalculator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import {
  SoftwareAppJsonLd,
  BreadcrumbJsonLd,
  FAQJsonLd,
} from '@/components/JsonLd'

type Props = {
  params: Promise<{ locale: string }>
}

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://hsabksa.com'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ur' }, { locale: 'tl' }, { locale: 'bn' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'EOSBCalculator' })
  const isDefault = locale === 'en'

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/eosb-calculator` : `${baseUrl}/${l}/eosb-calculator`
  }

  return {
    title: `${t('toolName')} — HsabKSA`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/eosb-calculator` : `${baseUrl}/${locale}/eosb-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — HsabKSA`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/eosb-calculator` : `${baseUrl}/${locale}/eosb-calculator`,
      siteName: 'HsabKSA',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('toolName')} — HsabKSA`,
      description: t('description'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function EOSBCalculatorPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/eosb-calculator` : `${baseUrl}/${locale}/eosb-calculator`

  return (
    <>
      <EOSBCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="End of Service Benefit Calculator"
        description="Free EOSB calculator for Saudi Arabia. Calculate your end of service benefit instantly based on Saudi Labor Law."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Expat Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expat-tools` },
          { name: 'EOSB Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'How is EOSB calculated in Saudi Arabia?',
            answer:
              'EOSB is calculated based on Saudi Labor Law Article 84: half a month\'s basic salary for each of the first 5 years, and one full month\'s basic salary for each subsequent year. Partial years are calculated proportionally.',
          },
          {
            question: 'Do I get EOSB if I resign before 2 years?',
            answer:
              'Under Article 85 of the Saudi Labor Law, employees who resign with less than 2 years of service are not entitled to End of Service Benefits.',
          },
          {
            question: 'Is EOSB calculated on basic salary or total salary?',
            answer:
              'EOSB is generally calculated on the basic salary only. Housing, transportation, and other allowances are typically not included unless stated otherwise in the employment contract.',
          },
          {
            question: 'How much EOSB do I get if I resign after 3 years?',
            answer:
              'If you resign between 2-5 years of service, you are entitled to one-third (1/3) of the full EOSB amount calculated under Article 84.',
          },
        ]}
      />
      <ToolSeoContent namespace="EOSBCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Saudi Labor Law Articles 84 &amp; 85
        </p>
      </div>
    </>
  )
}

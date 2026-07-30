import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { JawazatCalculator } from '@/components/JawazatCalculator'
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
  const t = await getTranslations({ locale, namespace: 'JawazatCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/jawazat-fine-calculator` : `${baseUrl}/${l}/jawazat-fine-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/jawazat-fine-calculator` : `${baseUrl}/${locale}/jawazat-fine-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/jawazat-fine-calculator` : `${baseUrl}/${locale}/jawazat-fine-calculator`,
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

export default async function JawazatPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/jawazat-fine-calculator` : `${baseUrl}/${locale}/jawazat-fine-calculator`

  return (
    <>
      <JawazatCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="Jawazat Overstay Fine Calculator"
        description="Calculate your Jawazat overstay fines for expired Iqama, exit/re-entry visa, or visit visa in Saudi Arabia."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Expat Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expat-tools` },
          { name: 'Jawazat Fine Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'What is the fine for overstaying my Iqama in Saudi Arabia?',
            answer: 'The first overstay violation is SAR 15,000. Second violation is SAR 30,000. Third and subsequent violations are SAR 50,000, capped at SAR 100,000 per violation.',
          },
          {
            question: 'How is the Exit/Re-Entry visa overstay fine calculated?',
            answer: 'The fine is SAR 100 per day from the visa expiry date. If an unused exit visa is not canceled within 90 days, an additional SAR 1,000 fine applies.',
          },
          {
            question: 'Can I leave Saudi Arabia without paying the overstay fine?',
            answer: 'No. Immigration officers will check your visa status before stamping your exit. All fines must be paid in full before departure.',
          },
          {
            question: 'What happens if I overstay my visit visa?',
            answer: 'Visit visa overstay is SAR 100 per day, capped at SAR 50,000. Additional penalties include imprisonment up to 6 months, deportation, and a possible 10-year re-entry ban.',
          },
          {
            question: 'Is there a grace period after my visa expires?',
            answer: 'No. There is no official grace period. Fines begin accumulating from the day after your visa or Iqama expiry date.',
          },
        ]}
      />
      <ToolSeoContent namespace="JawazatCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Saudi Jawazat regulations &amp; Article 39 of Iqama Regulations
        </p>
      </div>
    </>
  )
}

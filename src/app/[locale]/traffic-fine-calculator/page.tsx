import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { TrafficFineCalculator } from '@/components/TrafficFineCalculator'
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
  const t = await getTranslations({ locale, namespace: 'TrafficFineCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/traffic-fine-calculator` : `${baseUrl}/${l}/traffic-fine-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/traffic-fine-calculator` : `${baseUrl}/${locale}/traffic-fine-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/traffic-fine-calculator` : `${baseUrl}/${locale}/traffic-fine-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function TrafficFinePage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/traffic-fine-calculator` : `${baseUrl}/${locale}/traffic-fine-calculator`
  const t = await getTranslations({ locale, namespace: 'TrafficFineCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <TrafficFineCalculator locale={locale} />
      <SoftwareAppJsonLd name="Traffic Fine (Saher) Calculator" description="Calculate Saudi traffic fines including black points and vehicle impoundment rules. Supports all Saher violation types and license suspension thresholds." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Auto & Daily Life', url: `${baseUrl}/${isDefault ? '' : locale + '/'}auto-tools` }, { name: 'Traffic Fine Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'How much is the speeding fine in Saudi Arabia?', answer: 'Speeding fines in Saudi Arabia are based on how much you exceed the limit: less than 20 km/h over costs SAR 300-500 (no black points), 20-30 km/h over costs SAR 500-800 (2 points), 30-40 km/h over costs SAR 800-1,000 (4 points), 40-50 km/h over costs SAR 1,000-1,500 (6 points), and over 50 km/h costs SAR 1,500-2,000 (8 points) with possible vehicle impoundment.' },
        { question: 'How many black points lead to license suspension in Saudi Arabia?', answer: 'Accumulating 24 black points within a 12-month period results in license suspension in Saudi Arabia. The suspension period varies: 30 days for 24 points, 60 days for 36 points, and 90 days for 48 points. After suspension, the driver must take driving courses to reinstate the license.' },
        { question: 'What is the fine for running a red light in Saudi Arabia?', answer: 'Running a red light in Saudi Arabia carries a fine of SAR 3,000 to 6,000, 6 black points on your license, and vehicle impoundment. The vehicle can be impounded for up to 15 days. This is one of the most serious traffic violations tracked by the Saher system.' },
        { question: 'Can I check my traffic fines online in Saudi Arabia?', answer: 'Yes, you can check your traffic fines online through Absher (Ministry of Interior), Tawakkalna, My Services, or the Ministry of Interior\'s Istiqra system. You can view all recorded violations, black points, and pay fines directly through these platforms.' },
        { question: 'What is the mobile phone fine while driving in Saudi Arabia?', answer: 'Using a mobile phone while driving in Saudi Arabia results in a fine of SAR 500-900 and 4 black points. This includes texting, calling without a hands-free device, or using apps while the vehicle is in motion. The Saher cameras can also detect phone usage in some areas.' },
        { question: 'How long do traffic violations stay on record in Saudi Arabia?', answer: 'In Saudi Arabia, black points remain on your driving record for 12 consecutive months. Traffic fines must be paid; unpaid fines can prevent vehicle registration (Istimara) renewal, license renewal, and can affect your ability to leave the country.' },
        { question: 'Is there a discount on traffic fines in Saudi Arabia?', answer: 'Saudi authorities occasionally announce traffic fine discounts during national celebrations (e.g., Saudi National Day). However, these are temporary amnesties. The standard penalty applies for all violations from the date of issue. Always check Absher for any active discount campaigns.' },
      ]} />
      <ToolSeoContent namespace="TrafficFineCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi Traffic Department (Moroor) Saher fine schedule and black points system</p>
      </div>
    </>
  )
}

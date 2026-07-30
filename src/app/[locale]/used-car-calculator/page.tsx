import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { UsedCarCalculator } from '@/components/UsedCarCalculator'
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
  const t = await getTranslations({ locale, namespace: 'UsedCarCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/used-car-calculator` : `${baseUrl}/${l}/used-car-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/used-car-calculator` : `${baseUrl}/${locale}/used-car-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/used-car-calculator` : `${baseUrl}/${locale}/used-car-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function UsedCarPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/used-car-calculator` : `${baseUrl}/${locale}/used-car-calculator`

  return (
    <>
      <UsedCarCalculator locale={locale} />
      <SoftwareAppJsonLd name="Used Car Naql Malikiya & Hidden Cost Calculator" description="Calculate the total cost of buying a used car in Saudi Arabia including transfer fees, insurance, Istimara renewal, and repairs." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Auto & Daily Life', url: `${baseUrl}/${isDefault ? '' : locale + '/'}auto-tools` }, { name: 'Used Car Cost Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'What is Naql Malikiya in Saudi Arabia?', answer: 'Naql Malikiya (نقل الملكية) is the vehicle ownership transfer fee charged by the Saudi Traffic Department (Moroor). The fee depends on engine capacity: SAR 150 for under 1600cc, SAR 300 for 1601-2000cc, and SAR 500 for over 2000cc. The transfer is done through the Absher platform or a traffic office.' },
        { question: 'How do I transfer car ownership via Absher?', answer: 'To transfer car ownership via Absher: 1) Log in to your Absher account, 2) Go to "My Services" > "Traffic Services" > "Vehicle Ownership Transfer", 3) Enter the vehicle details and the buyer\'s ID/Iqama number, 4) Pay the transfer fee, 5) Both parties must agree and the buyer receives the new Istimara. No need to visit a traffic office.' },
        { question: 'What is the Istimara renewal fee in Saudi Arabia?', answer: 'Istimara (vehicle registration) renewal costs SAR 300 for 1 year or SAR 600 for 2 years. You must renew your Istimara before it expires to avoid late fees. Renewal can be done through Absher, Tawakkalna, or at a traffic office. Expired Istimara can result in fines.' },
        { question: 'How much is car insurance in Saudi Arabia?', answer: 'Third-party insurance in Saudi Arabia ranges from SAR 600 to SAR 1,000 per year. Comprehensive insurance costs approximately 2-3% of the car\'s value, with a minimum of around SAR 800. Insurance is mandatory for all vehicles in Saudi Arabia.' },
        { question: 'What hidden costs should I consider when buying a used car in KSA?', answer: 'When buying a used car in Saudi Arabia, consider these hidden costs: Naql Malikiya transfer fee (SAR 150-500), Istimara renewal (SAR 300-600), mandatory insurance (SAR 600-1,000+), potential repair costs, and a comprehensive mechanical inspection. These can add SAR 3,000-8,000+ to the purchase price.' },
        { question: 'Can I drive a used car home without complete transfer?', answer: 'No. You must complete the Naql Malikiya (ownership transfer) before driving the vehicle. Without the transfer, you are not the legal owner, and the insurance will not cover you. The buyer receives a temporary plate or the existing plates until the new Istimara is issued.' },
        { question: 'Is a mechanical inspection required for used cars in Saudi Arabia?', answer: 'A comprehensive mechanical inspection (فحص) is strongly recommended but not legally required for private sales. For bank-financed used cars, the bank requires an inspection at an approved center (e.g., via SAB, Enmaa, or Sara). Inspection costs range from SAR 150-400.' },
      ]} />
      <ToolSeoContent namespace="UsedCarCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi Traffic Department (Moroor) fee schedule and insurance market rates</p>
      </div>
    </>
  )
}

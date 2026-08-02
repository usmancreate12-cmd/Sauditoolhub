import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { PropertyValuationCalculator } from '@/components/PropertyValuationCalculator'
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
  const t = await getTranslations({ locale, namespace: 'PropertyValuationCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/property-valuation` : `${baseUrl}/${l}/property-valuation`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/property-valuation` : `${baseUrl}/${locale}/property-valuation`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/property-valuation` : `${baseUrl}/${locale}/property-valuation`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function PropertyValuationPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/property-valuation` : `${baseUrl}/${locale}/property-valuation`
  const t = await getTranslations({ locale, namespace: 'PropertyValuationCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <PropertyValuationCalculator locale={locale} />
      <SoftwareAppJsonLd name="Sak Property Valuation Tool" description="Estimate the market value of residential or commercial property in Saudi Arabia. Get a price per square meter breakdown for apartments, villas, land, and commercial properties across major Saudi cities." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Real Estate', url: `${baseUrl}/${isDefault ? '' : locale + '/'}real-estate-tools` }, { name: 'Property Valuation', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'How is property value calculated in Saudi Arabia?', answer: 'Property value in Saudi Arabia is primarily determined by: 1) Location (city and neighborhood), 2) Property type (apartment, villa, land, commercial), 3) Total area in square meters, 4) Age and condition, 5) Finishing quality, 6) Amenities (parking, AC). Our calculator uses market-based rates per square meter for each city and property type to provide an estimated value.' },
        { question: 'What is the average price per square meter in Riyadh?', answer: 'As of 2026, average property prices in Riyadh range from SAR 3,800/sqm for villas to SAR 4,500/sqm for apartments in standard areas. Prime neighborhoods like Al Olaya, Diplomatic Quarter, and Al Malqa command higher prices. New developments in areas like Al Qiddiya and Diriyah are also seeing rapid appreciation.' },
        { question: 'How does property age affect value in Saudi Arabia?', answer: 'Property age affects value through depreciation. Typically, properties depreciate at about 1% per year, capped at 30% total depreciation. However, well-maintained properties in prime locations may depreciate less. Renovated older properties can command prices close to newer ones, especially in established neighborhoods with mature infrastructure.' },
        { question: 'What finishing levels affect property valuation?', answer: 'Finishing quality significantly impacts property value: 1) Standard — basic finishes, adds no premium, 2) Good — quality materials, +10% premium, 3) Excellent — premium finishes, +25% premium, 4) Luxury — high-end designer finishes, +50% premium. Properties with excellent or luxury finishes also tend to appreciate faster.' },
        { question: 'Is this valuation accurate for Sak (White Deed) purposes?', answer: 'This calculator provides a market estimate and should not be used as an official valuation for Sak (White Deed) registration purposes. For official property valuation in Saudi Arabia, you must use an accredited real estate valuer registered with the Saudi Authority for Accredited Valuers (TAQEEM). The actual transaction price may differ from this estimate.' },
        { question: 'Which Saudi city has the most expensive property?', answer: 'Makkah currently has the highest property prices, particularly for apartments near the Grand Mosque, with rates exceeding SAR 5,000/sqm. Riyadh follows closely, especially in central and northern districts. Jeddah\'s coastal properties and Madinah\'s properties near the Prophet\'s Mosque also command premium prices.' },
        { question: 'How do amenities like parking and AC affect property value?', answer: 'Amenities add to property value: dedicated parking adds approximately 3% to the value, and central air conditioning adds about 2%. Additional premium features like swimming pools, gyms, and 24/7 security can add 5-15% total, especially in apartment buildings. These amenities are particularly valued in Saudi Arabia\'s hot climate.' },
      ]} />
      <ToolSeoContent namespace="PropertyValuationCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi real estate market data. For reference only.</p>
      </div>
    </>
  )
}

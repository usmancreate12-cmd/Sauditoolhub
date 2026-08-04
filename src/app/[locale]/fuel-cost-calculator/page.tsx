import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FuelCostCalculator } from '@/components/FuelCostCalculator'
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
  const t = await getTranslations({ locale, namespace: 'FuelCostCalculator' })
  const isDefault = locale === 'en'
  const metaTitle = t.has('metaTitle') ? t('metaTitle') : `${t('toolName')} — Sauditoolhub`
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/fuel-cost-calculator` : `${baseUrl}/${l}/fuel-cost-calculator`
  }
  return {
    title: metaTitle,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/fuel-cost-calculator` : `${baseUrl}/${locale}/fuel-cost-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: metaTitle, description: t('description'),
      url: isDefault ? `${baseUrl}/fuel-cost-calculator` : `${baseUrl}/${locale}/fuel-cost-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: metaTitle, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function FuelCostPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/fuel-cost-calculator` : `${baseUrl}/${locale}/fuel-cost-calculator`
  const t = await getTranslations({ locale, namespace: 'FuelCostCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <FuelCostCalculator locale={locale} />
      <SoftwareAppJsonLd name="Fuel Cost & Mileage Calculator" description="Calculate fuel costs for daily commutes or road trips in Saudi Arabia based on your car's fuel efficiency and current gasoline prices. Supports Gasoline 91, 95, and Diesel." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Auto & Daily Life', url: `${baseUrl}/${isDefault ? '' : locale + '/'}auto-tools` }, { name: 'Fuel Cost Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'How much is gasoline in Saudi Arabia?', answer: 'As of 2026, gasoline prices in Saudi Arabia are approximately SAR 2.18 per liter for Gasoline 91, SAR 2.33 per liter for Gasoline 95, and Diesel is approximately SAR 0.60 per liter. Prices may vary slightly by region and are subject to periodic adjustments by the government.' },
        { question: 'How do I calculate my fuel cost per kilometer?', answer: 'To calculate fuel cost per kilometer: divide the fuel price per liter by your car\'s fuel efficiency (km per liter). For example, if Gasoline 91 costs SAR 2.18/L and your car does 12 km/L, your cost per km is 2.18 ÷ 12 = 0.182 SAR/km. Multiply by your daily distance to get your daily fuel cost.' },
        { question: 'What is the average fuel efficiency of cars in Saudi Arabia?', answer: 'Average fuel efficiency in Saudi Arabia varies by vehicle type: sedans typically achieve 12-16 km/L, SUVs achieve 8-12 km/L, and pickup trucks achieve 6-10 km/L. Fuel efficiency also depends on driving habits, AC usage, and road conditions.' },
        { question: 'How can I reduce my fuel costs in Saudi Arabia?', answer: 'To reduce fuel costs: 1) Drive smoothly and avoid sudden acceleration, 2) Use cruise control on highways, 3) Maintain proper tire pressure, 4) Reduce AC usage when possible, 5) Remove unnecessary weight from the car, 6) Service your car regularly (air filters, spark plugs, oil), 7) Plan routes to avoid traffic congestion.' },
        { question: 'What is the difference between Gasoline 91 and 95?', answer: 'Gasoline 91 (Regular) has an octane rating of 91 and costs approximately SAR 2.18/L. Gasoline 95 (Premium) has an octane rating of 95 and costs approximately SAR 2.33/L. Most modern cars can use either, but high-performance engines typically recommend 95. Using 91 in a car that requires 95 can reduce performance and efficiency.' },
        { question: 'How much does a full tank of gas cost in Saudi Arabia?', answer: 'A full tank cost depends on your car\'s tank size and fuel type. For a typical sedan with a 55-liter tank: Gasoline 91 would cost about 55 × 2.18 = SAR 120, and Gasoline 95 would cost about 55 × 2.33 = SAR 128. For a large SUV with a 90-liter tank using Gasoline 91: about SAR 196.' },
        { question: 'Is Diesel cheaper than gasoline in Saudi Arabia?', answer: 'Yes, Diesel is significantly cheaper at approximately SAR 0.60/L compared to Gasoline 91 (SAR 2.18/L) and Gasoline 95 (SAR 2.33/L). However, diesel cars typically have higher purchase prices, and diesel fuel is primarily available at stations that serve trucks and commercial vehicles.' },
      ]} />
      <ToolSeoContent namespace="FuelCostCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-400">Last updated: July 2026 &middot; Based on current Saudi fuel prices</p>
      </div>
    </>
  )
}

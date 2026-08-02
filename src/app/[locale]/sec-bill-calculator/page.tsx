import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SecBillCalculator } from '@/components/SecBillCalculator'
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
  const t = await getTranslations({ locale, namespace: 'SecBillCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/sec-bill-calculator` : `${baseUrl}/${l}/sec-bill-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/sec-bill-calculator` : `${baseUrl}/${locale}/sec-bill-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/sec-bill-calculator` : `${baseUrl}/${locale}/sec-bill-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function SecBillPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/sec-bill-calculator` : `${baseUrl}/${locale}/sec-bill-calculator`
  const t = await getTranslations({ locale, namespace: 'SecBillCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <SecBillCalculator locale={locale} />
      <SoftwareAppJsonLd name="SEC Bill Estimator" description="Estimate your monthly Saudi Electricity Company bill based on tiered consumption rates with 15% VAT included. Supports residential, commercial, agricultural, industrial, and government account types." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Auto & Daily Life', url: `${baseUrl}/${isDefault ? '' : locale + '/'}auto-tools` }, { name: 'SEC Bill Estimator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'What is the SEC residential electricity tariff in Saudi Arabia?', answer: 'The Saudi Electricity Company (SEC) residential tariff is tiered: 1-3,000 kWh at 0.18 SAR/kWh, 3,001-4,000 kWh at 0.30 SAR/kWh, 4,001-5,000 kWh at 0.36 SAR/kWh, 5,001-6,000 kWh at 0.42 SAR/kWh, 6,001-7,000 kWh at 0.48 SAR/kWh, 7,001-8,000 kWh at 0.54 SAR/kWh, and above 8,000 kWh at 0.60 SAR/kWh. All rates are subject to 15% VAT.' },
        { question: 'How do I check my SEC bill online?', answer: 'You can check your SEC bill online through the Saudi Electricity Company app or website (se.com.sa). Log in with your account number or registered mobile number to view current and past bills, consumption history, and make payments. Payment can also be made via SADAD through any Saudi bank.' },
        { question: 'What is the average electricity consumption for a house in Saudi Arabia?', answer: 'Average electricity consumption for a typical Saudi home ranges from 4,000 to 8,000 kWh per month depending on the season. In summer (May-September), consumption can spike to 8,000-12,000 kWh due to air conditioning. In winter, it typically drops to 2,000-4,000 kWh.' },
        { question: 'How does the SEC tiered billing system work?', answer: 'The SEC tiered billing system means different consumption blocks are charged at different rates. For example, the first 3,000 kWh are charged at the lowest rate (0.18 SAR/kWh), and as consumption increases, higher tiers apply higher rates. This encourages energy conservation — staying within lower tiers results in a lower average cost per kWh.' },
        { question: 'How much VAT is applied to SEC bills?', answer: 'A 15% Value Added Tax (VAT) is applied to the total electricity consumption charges on SEC bills. The VAT amount is calculated on the total consumption cost before any applicable subsidies. For example, on a SAR 500 consumption charge, the VAT would be SAR 75.' },
        { question: 'What is the SEC connection fee for new homes in Saudi Arabia?', answer: 'SEC connection fees for new homes vary based on the service capacity. For a standard 150-amp residential connection, the fee is approximately SAR 3,000-5,000. Additional charges apply for meter installation and inspection. These fees are paid as a single payment through SADAD.' },
        { question: 'How can I reduce my SEC bill in Saudi Arabia?', answer: 'To reduce your SEC bill: 1) Use energy-efficient AC units (inverter technology), 2) Set thermostats to 24°C, 3) Improve home insulation and use window shades, 4) Switch to LED lighting, 5) Use energy-efficient appliances, 6) Run washers during off-peak hours, 7) Maintain AC filters monthly, 8) Consider solar panels for long-term savings.' },
      ]} />
      <ToolSeoContent namespace="SecBillCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi Electricity Company (SEC) published tariff schedule</p>
      </div>
    </>
  )
}

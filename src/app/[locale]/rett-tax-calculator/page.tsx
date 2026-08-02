import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RettTaxCalculator } from '@/components/RettTaxCalculator'
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
  const t = await getTranslations({ locale, namespace: 'RettTaxCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/rett-tax-calculator` : `${baseUrl}/${l}/rett-tax-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/rett-tax-calculator` : `${baseUrl}/${locale}/rett-tax-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/rett-tax-calculator` : `${baseUrl}/${locale}/rett-tax-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function RettTaxPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/rett-tax-calculator` : `${baseUrl}/${locale}/rett-tax-calculator`
  const t = await getTranslations({ locale, namespace: 'RettTaxCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <RettTaxCalculator locale={locale} />
      <SoftwareAppJsonLd name="Real Estate RETT Tax & Agent Commission Splitter" description="Calculate the 5% Real Estate Transaction Tax (RETT) and agent commission when buying or selling property in Saudi Arabia. See buyer total cost and seller net amount." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Real Estate', url: `${baseUrl}/${isDefault ? '' : locale + '/'}real-estate-tools` }, { name: 'RETT Tax Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'What is RETT (Real Estate Transaction Tax) in Saudi Arabia?', answer: 'RETT (رسوم التصرفات العقارية) is a 5% tax on real estate transactions in Saudi Arabia, introduced in 2020. It is paid by the buyer on the property sale price. The tax applies to all residential, commercial, and land transactions unless specifically exempted.' },
        { question: 'Who pays the RETT tax in Saudi Arabia?', answer: 'The RETT (5% Real Estate Transaction Tax) is paid by the buyer of the property. The seller does not pay this tax. The tax is calculated as 5% of the total property sale price and must be paid at the time of transaction registration through the White Deed (Sak) platform.' },
        { question: 'What is the standard agent commission in Saudi Arabia?', answer: 'The standard real estate agent commission in Saudi Arabia is typically 2.5% of the property sale price, though this can be negotiated. By custom, the seller usually pays the agent commission, but this can vary — the buyer may pay, the seller may pay, or they may split it 50-50.' },
        { question: 'Are there any exemptions from RETT in Saudi Arabia?', answer: 'Yes, certain transactions are exempt from RETT: 1) Charitable endowments (Waqf), 2) Government entities, 3) Inheritance transfers, 4) Spousal transfers (gifts between spouses), 5) Property owned for more than 5 years may qualify for reduced rates under certain conditions. Always consult a real estate lawyer for your specific case.' },
        { question: 'How do I pay the RETT in Saudi Arabia?', answer: 'RETT is paid electronically through the White Deed (Sak) platform (sak.sa) or through the Ministry of Justice\'s real estate registration system. The payment must be made at the time of transaction registration. Both buyer and seller must be registered on the platform.' },
        { question: 'What is the total cost for a buyer in a Saudi real estate transaction?', answer: 'The total cost for a buyer includes: Property Sale Price + 5% RETT + Agent Commission (if the buyer pays it) + Other fees (valuation, notary, registration). For example, on a SAR 1,000,000 property, the buyer would pay SAR 50,000 RETT, and if paying agent commission (2.5%), another SAR 25,000, totaling SAR 1,075,000.' },
        { question: 'Does RETT apply to off-plan properties in Saudi Arabia?', answer: 'Yes, RETT applies to off-plan properties (properties sold before construction is complete). However, the tax is typically paid on the full sale price at the time of the sales agreement registration, not at handover. Some developers may structure payments differently, so check your sales contract.' },
      ]} />
      <ToolSeoContent namespace="RettTaxCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi RETT regulations (5% Real Estate Transaction Tax)</p>
      </div>
    </>
  )
}

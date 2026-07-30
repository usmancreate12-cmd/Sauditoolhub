import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ZakatCalculator } from '@/components/ZakatCalculator'
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
  const t = await getTranslations({ locale, namespace: 'ZakatCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/zakat-calculator` : `${baseUrl}/${l}/zakat-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/zakat-calculator` : `${baseUrl}/${locale}/zakat-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/zakat-calculator` : `${baseUrl}/${locale}/zakat-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function ZakatPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/zakat-calculator` : `${baseUrl}/${locale}/zakat-calculator`

  return (
    <>
      <ZakatCalculator locale={locale} />
      <SoftwareAppJsonLd name="Personal Zakat & Gold Savings Calculator" description="Calculate your Zakat obligation on cash savings, gold, silver, and investments based on the Nisab threshold." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Finance & Banking', url: `${baseUrl}/${isDefault ? '' : locale + '/'}finance-tools` }, { name: 'Zakat Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'What is Zakat and how is it calculated in Saudi Arabia?', answer: 'Zakat is an obligatory form of charity in Islam, calculated at 2.5% of your net wealth exceeding the Nisab threshold. Net wealth = Total assets (cash, gold, silver, investments) minus immediate debts. The Nisab threshold is based on the value of 85 grams of gold.' },
        { question: 'What is the Nisab threshold for Zakat?', answer: 'The Nisab is the minimum amount of wealth you must have before Zakat becomes obligatory. It is calculated as the value of 85 grams of gold. For example, at SAR 300 per gram, the Nisab is SAR 25,500. If your net wealth is below this, no Zakat is due.' },
        { question: 'Do I pay Zakat on gold and silver?', answer: 'Yes, gold and silver are Zakatable assets regardless of whether they are for personal use, savings, or investment. The Zakat rate of 2.5% applies to the market value of your gold and silver holdings.' },
        { question: 'Do I pay Zakat on investments and stocks?', answer: 'Yes, investments in stocks, mutual funds, and other financial instruments are subject to Zakat. You should calculate Zakat on the market value of your investment portfolio. Some scholars differ on trading vs. long-term holdings — consult a scholar for specific guidance.' },
        { question: 'Can I deduct debts before calculating Zakat?', answer: 'Yes, immediate debts (short-term obligations due within the year) can be deducted from your total assets to calculate your net Zakatable wealth. Long-term debts like mortgages are typically not deducted.' },
        { question: 'When should I pay Zakat?', answer: 'Zakat is due once a lunar year (Hijri year) has passed since your wealth first exceeded the Nisab threshold. Many people calculate and pay Zakat during Ramadan. You can also align it with your personal financial year.' },
        { question: 'What is the current price of gold for Zakat calculation?', answer: 'Gold prices fluctuate daily. The calculator defaults to SAR 300/gram (24K), but you should check the current gold price on trusted sources like the Saudi Gold Market or online gold price trackers on the day of your Zakat calculation.' },
      ]} />
      <ToolSeoContent namespace="ZakatCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Islamic Zakat rules and Saudi gold prices</p>
      </div>
    </>
  )
}

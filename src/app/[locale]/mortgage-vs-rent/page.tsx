import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { MortgageVsRentCalculator } from '@/components/MortgageVsRentCalculator'
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
  const t = await getTranslations({ locale, namespace: 'MortgageVsRentCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/mortgage-vs-rent` : `${baseUrl}/${l}/mortgage-vs-rent`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/mortgage-vs-rent` : `${baseUrl}/${locale}/mortgage-vs-rent`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/mortgage-vs-rent` : `${baseUrl}/${locale}/mortgage-vs-rent`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function MortgageVsRentPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/mortgage-vs-rent` : `${baseUrl}/${locale}/mortgage-vs-rent`

  return (
    <>
      <MortgageVsRentCalculator locale={locale} />
      <SoftwareAppJsonLd name="Mortgage vs Rent Calculator" description="Compare the total cost of buying a property with a mortgage versus renting in Saudi Arabia. See monthly payments, total costs, and a year-by-year comparison to find the best financial decision." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Real Estate', url: `${baseUrl}/${isDefault ? '' : locale + '/'}real-estate-tools` }, { name: 'Mortgage vs Rent', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'Is buying a house with a mortgage cheaper than renting in Saudi Arabia?', answer: 'It depends on many factors including property price, interest rate, down payment, and rental costs. Generally, if you plan to stay in the same property for 5+ years, buying can be more cost-effective than renting. Use this calculator to compare your specific numbers.' },
        { question: 'What is the current mortgage interest rate in Saudi Arabia?', answer: 'As of 2026, mortgage interest rates in Saudi Arabia typically range from 3% to 5% depending on your credit score, income, property type, and the bank. SAMA (Saudi Central Bank) sets the benchmark rate. First-time buyers may qualify for subsidized rates through government programs like Sakani.' },
        { question: 'What is the minimum down payment for a mortgage in Saudi Arabia?', answer: 'For Saudi nationals, the minimum down payment for a first home is 5% of the property price for properties up to SAR 1.5 million when using Sakani or similar programs. For expatriates, the minimum down payment is typically 20-30% of the property value. A higher down payment reduces your monthly payment and total interest.' },
        { question: 'How is the monthly mortgage payment calculated?', answer: 'Your monthly mortgage payment depends on: 1) Loan amount (property price minus down payment), 2) Interest rate (annual rate divided by 12), 3) Loan tenure (number of months). The payment is calculated using the standard amortization formula, which ensures you pay the same amount each month while the portion going to interest decreases over time.' },
        { question: 'What costs are included in buying a property besides the mortgage?', answer: 'In addition to the mortgage payments, buyers must pay: 1) 5% Real Estate Transaction Tax (RETT), 2) Property valuation fees (SAR 1,000-3,000), 3) Agent commission (typically 2.5%), 4) Registration fees, 5) Maintenance and insurance costs. These can add 8-12% to the purchase cost.' },
        { question: 'How many years should I compare buying vs renting?', answer: 'We recommend comparing over at least 5-10 years. In the short term (1-3 years), renting is almost always cheaper because of the high upfront costs of buying (down payment, closing costs). Buying becomes more advantageous in the long term as you build equity and property values appreciate.' },
        { question: 'Can expatriates get a mortgage in Saudi Arabia?', answer: 'Yes, expatriates can get mortgages in Saudi Arabia, but with stricter terms. Typically: 20-30% minimum down payment, shorter loan tenures (15-20 years vs 25-30 for Saudis), and higher interest rates. Some banks offer special programs for expatriates working in certain sectors like healthcare and education.' },
      ]} />
      <ToolSeoContent namespace="MortgageVsRentCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on current Saudi mortgage and rental market data</p>
      </div>
    </>
  )
}

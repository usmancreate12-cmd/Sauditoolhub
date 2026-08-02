import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SipCalculator } from '@/components/SipCalculator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import { SoftwareAppJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string }> }
const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() { return locales.map((locale) => ({ locale })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'SipCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) alternates[l] = l === 'en' ? `${baseUrl}/sip-calculator` : `${baseUrl}/${l}/sip-calculator`
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: { canonical: isDefault ? `${baseUrl}/sip-calculator` : `${baseUrl}/${locale}/sip-calculator`, languages: alternates as Record<string, string> },
    openGraph: { title: `${t('toolName')} — Sauditoolhub`, description: t('description'), url: isDefault ? `${baseUrl}/sip-calculator` : `${baseUrl}/${locale}/sip-calculator`, siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website' },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function SipPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/sip-calculator` : `${baseUrl}/${locale}/sip-calculator`
  const t = await getTranslations({ locale, namespace: 'SipCalculator' })
  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <SipCalculator locale={locale} />
      <SoftwareAppJsonLd name="Mutual Fund / SIP Return Calculator" description="Calculate returns on Systematic Investment Plans (SIP) offered by Saudi banks like Al Rajhi, SNB, and Riyad Bank." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Finance & Banking', url: `${baseUrl}/${isDefault ? '' : locale + '/'}finance-tools` }, { name: 'SIP Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'What is a Systematic Investment Plan (SIP)?', answer: 'A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly (monthly) into mutual funds. It benefits from rupee-cost averaging and compound interest over time. Saudi banks like Al Rajhi, SNB, and Riyad Bank offer SIP options in various mutual funds.' },
        { question: 'How is SIP return calculated?', answer: 'SIP returns are calculated using the future value formula: FV = P × [((1+r)^n - 1)/r] × (1+r), where P is monthly investment, r is monthly return rate (annual/12), and n is total months. This accounts for compounding on each monthly installment.' },
        { question: 'What is a good expected return rate for SIP in Saudi Arabia?', answer: 'Typical expected returns for mutual funds in Saudi Arabia range from 6-12% annually. Money market funds offer 4-6%, balanced funds 6-8%, and equity funds 8-12%. The default 8% rate is a reasonable conservative estimate for diversified portfolios.' },
        { question: 'What is the minimum SIP investment amount in Saudi banks?', answer: 'Minimum SIP investment varies by bank and fund. Al Rajhi and SNB typically require minimum SAR 500-1,000 per month. Some funds may accept as low as SAR 200-300. Check with individual banks for their specific minimum requirements.' },
        { question: 'Can I withdraw my SIP investment early?', answer: 'Yes, most mutual fund SIPs in Saudi Arabia allow early withdrawal, but there may be exit fees or penalties, especially within the first 1-2 years. Some funds have lock-in periods. Check the fund prospectus for specific terms.' },
        { question: 'What is the difference between SIP and lump sum investment?', answer: 'SIP invests a fixed amount monthly over time, reducing the impact of market volatility through rupee-cost averaging. Lump sum invests all capital at once, which can yield higher returns in a rising market but carries higher timing risk. SIP is generally recommended for long-term wealth building.' },
        { question: 'Which Saudi banks offer mutual fund SIPs?', answer: 'Major Saudi banks offering mutual fund SIPs include Al Rajhi Bank (Al Rajhi Capital), SNB (SNB Capital), Riyad Bank (Riyad Capital), SABB, and Saudi Fransi Capital. Each offers a range of local and international fund options across different asset classes.' },
      ]} />
      <ToolSeoContent namespace="SipCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4"><p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi mutual fund market data and compound interest calculations</p></div>
    </>
  )
}

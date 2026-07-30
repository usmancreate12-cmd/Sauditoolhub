import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SallaProfitCalculator } from '@/components/SallaProfitCalculator'
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
  const t = await getTranslations({ locale, namespace: 'SallaProfitCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/salla-profit-calculator` : `${baseUrl}/${l}/salla-profit-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/salla-profit-calculator` : `${baseUrl}/${locale}/salla-profit-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/salla-profit-calculator` : `${baseUrl}/${locale}/salla-profit-calculator`,
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

export default async function SallaProfitPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/salla-profit-calculator` : `${baseUrl}/${locale}/salla-profit-calculator`

  return (
    <>
      <SallaProfitCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="Salla/Zid True Profit Calculator"
        description="Calculate your actual net profit after all fees for Salla, Zid, and other e-commerce platforms in Saudi Arabia."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Business Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}business-tools` },
          { name: 'Salla/Zid Profit Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'How do Salla and Zid fees work in Saudi Arabia?',
            answer: 'Salla charges a monthly subscription of 99-299 SAR depending on your plan, while Zid charges 49-249 SAR per month. Both platforms also charge payment gateway fees (approximately 2.5% + 1 SAR per transaction) through providers like Moyasar or Stripe. COD orders have an additional 15 SAR fee per order.',
          },
          {
            question: 'What is the COD return rate for e-commerce in Saudi Arabia?',
            answer: 'The average COD (Cash on Delivery) return rate in Saudi Arabia ranges from 10% to 25%, with 15% being a common benchmark. Returns cost approximately 20 SAR per returned order in shipping and handling fees. Reducing COD orders can significantly improve your profit margins.',
          },
          {
            question: 'How do payment gateway fees affect my profit on Salla/Zid?',
            answer: 'Payment gateway fees typically add 2.5% + 1 SAR per transaction. For a 100 SAR product, that\'s 3.50 SAR in fees. COD orders have a flat 15 SAR fee per order — much higher than card payments. Encouraging credit card or Mada payments can save 10-12 SAR per order.',
          },
          {
            question: 'What is a good profit margin for e-commerce in Saudi Arabia?',
            answer: 'A healthy profit margin for e-commerce in Saudi Arabia is 15-30% after all fees. Many sellers operate at 5-10% margins due to high COD returns and shipping costs. Using this calculator helps you identify hidden costs and optimize your pricing strategy.',
          },
          {
            question: 'Does VAT affect my e-commerce profit calculation?',
            answer: 'Yes, VAT at 15% is applicable on platform subscription fees (Salla/Zid subscription). This is factored into your monthly costs. You should also charge VAT on your products if you are VAT-registered. The calculator includes VAT on platform fees automatically.',
          },
          {
            question: 'How can I reduce my e-commerce costs on Salla/Zid?',
            answer: 'To reduce costs: (1) Encourage card payments over COD to avoid the 15 SAR COD fee, (2) Negotiate better shipping rates with logistics partners, (3) Optimize product pricing to maintain 20%+ margins, (4) Reduce return rates by improving product descriptions and images, (5) Choose the right subscription plan for your order volume.',
          },
          {
            question: 'What hidden fees should e-commerce sellers watch for?',
            answer: 'Common hidden fees include: COD return shipping costs (20 SAR per return), payment gateway monthly minimums, SMS notification fees, integration/app fees, storage fees for inventory, and penalty fees for delayed fulfillment. Our calculator captures the most significant costs.',
          },
        ]}
      />
      <ToolSeoContent namespace="SallaProfitCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Salla &amp; Zid Saudi Arabia pricing (2024)
        </p>
      </div>
    </>
  )
}

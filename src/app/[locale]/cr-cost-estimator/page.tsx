import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { CrCostEstimator } from '@/components/CrCostEstimator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import { SoftwareAppJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://Sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'CrCostEstimator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/cr-cost-estimator` : `${baseUrl}/${l}/cr-cost-estimator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/cr-cost-estimator` : `${baseUrl}/${locale}/cr-cost-estimator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/cr-cost-estimator` : `${baseUrl}/${locale}/cr-cost-estimator`,
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

export default async function CrCostEstimatorPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/cr-cost-estimator` : `${baseUrl}/${locale}/cr-cost-estimator`

  return (
    <>
      <CrCostEstimator locale={locale} />
      <SoftwareAppJsonLd
        name="Commercial Registration (CR) Cost Estimator"
        description="Estimate your Saudi Arabia CR costs including government fees, chamber fees, and professional service fees."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Business Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}business-tools` },
          { name: 'CR Cost Estimator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'How much does it cost to register a Commercial Registration (CR) in Saudi Arabia?',
            answer: 'The cost varies based on business activity, company type, and city. Government fees range from SAR 100-300+, Chamber of Commerce fees from SAR 600-1,500, professional service fees from SAR 500-8,000, and municipal fees from SAR 0-800. First-year costs typically range from SAR 1,500 to SAR 12,000+.',
          },
          {
            question: 'What is the difference between a Sole Establishment and an LLC in Saudi Arabia?',
            answer: 'A Sole Establishment is owned by one person with full liability, with lower setup costs (SAR 500-1,000 professional fees). An LLC requires at least 2 shareholders with limited liability and higher setup costs (SAR 2,000+ professional fees). LLCs are more suitable for businesses with multiple owners or higher capital.',
          },
          {
            question: 'Do I need a physical office for my CR in Saudi Arabia?',
            answer: 'Yes, most business activities require a physical commercial premises. Home offices are only permitted for certain professional activities and freelancers. Rented premises require a municipal license (SAR 500/year), while owned premises require SAR 800/year.',
          },
          {
            question: 'What are the Chamber of Commerce fees for CR registration?',
            answer: 'Chamber fees depend on your city tier. Major cities like Riyadh and Jeddah (Tier 1) charge SAR 1,500 for registration and SAR 1,200 for annual renewal. Smaller cities charge less. Additional fees of SAR 100 per employee apply.',
          },
          {
            question: 'How much capital do I need for a CR in Saudi Arabia?',
            answer: 'Sole Establishments have no minimum capital requirement. LLCs require minimum SAR 500,000 capital for certain activities. Foreign company branches may require higher capital. A capital of SAR 100,000 is typical for small businesses.',
          },
          {
            question: 'Can I renew my CR annually?',
            answer: 'Yes, CRs must be renewed annually. Renewal costs are lower than first-time registration. Government renewal fees range from SAR 100-300, Chamber renewal from SAR 500-1,200, plus employee fees. Qawaem financial reporting is also required for renewal.',
          },
          {
            question: 'What is Qawaem and why is it important for CR renewal?',
            answer: 'Qawaem (قوائم) is the Saudi Ministry of Commerce financial reporting system. All companies must submit annual financial statements through Qawaem for CR renewal. Non-compliance can result in late fees and renewal delays. Submission costs may apply if using a professional accountant.',
          },
        ]}
      />
      <ToolSeoContent namespace="CrCostEstimator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Saudi Ministry of Commerce fee schedules
        </p>
      </div>
    </>
  )
}

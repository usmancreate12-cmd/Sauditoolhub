import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { NitaqatSimulator } from '@/components/NitaqatSimulator'
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
  const t = await getTranslations({ locale, namespace: 'NitaqatCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/nitaqat-simulator` : `${baseUrl}/${l}/nitaqat-simulator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/nitaqat-simulator` : `${baseUrl}/${locale}/nitaqat-simulator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/nitaqat-simulator` : `${baseUrl}/${locale}/nitaqat-simulator`,
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

export default async function NitaqatPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/nitaqat-simulator` : `${baseUrl}/${locale}/nitaqat-simulator`
  const t = await getTranslations({ locale, namespace: 'NitaqatCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <NitaqatSimulator locale={locale} />
      <SoftwareAppJsonLd
        name="Nitaqat Saudization What-If Simulator"
        description="Simulate how hiring or removing Saudi and expat employees affects your company's Nitaqat band. Free, private, instant."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Business Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}business-tools` },
          { name: 'Nitaqat Simulator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'What is the minimum Saudization percentage for IT companies in Saudi Arabia?',
            answer: 'Saudization thresholds vary by sector and company size. For low-risk sectors like IT/Consulting, the Green band typically starts around 6-10% Saudization. Platinum requires 25% or higher. Exact thresholds depend on MHRSD tables and your company\'s specific classification.',
          },
          {
            question: 'How does the Nitaqat band affect visa processing for my company?',
            answer: 'Companies in the Platinum and Green bands can issue visas freely without Nitaqat-related restrictions. Yellow-band companies face significant visa processing limitations and higher fees. Red-band companies are blocked from issuing new visas and risk suspension of existing services.',
          },
          {
            question: 'What happens if my company is in the Red Nitaqat band?',
            answer: 'Red-band companies cannot issue new work visas, renew expat employee contracts, or transfer employee sponsorship. Existing employees may face delays. MHRSD may also suspend the company\'s access to certain government services until compliance is achieved.',
          },
          {
            question: 'How many Saudis do I need to hire to move from Red to Green band?',
            answer: 'The number depends on your total headcount and sector. For example, if you have 50 total employees and 0 Saudis (0% = Red), you need to hire 3 Saudis to reach 6% (Low Green). Use this simulator to experiment with different hiring scenarios.',
          },
          {
            question: 'Does firing an expat improve my Nitaqat band?',
            answer: 'Yes, reducing non-Saudi headcount increases your Saudization percentage without hiring new Saudis. For example, with 2 Saudis and 10 expats (16.7%), removing 2 expats raises the ratio to 25% (Platinum). This simulator lets you test both hiring Saudi and removing expat scenarios.',
          },
          {
            question: 'What is the difference between Green, Yellow, and Red Nitaqat bands?',
            answer: 'Green bands (Low, Mid, High) allow normal visa processing and business operations. Yellow restricts visa issuance and increases government fee requirements. Red blocks visa services entirely and risks MHRSD enforcement actions including suspension of company services.',
          },
          {
            question: 'How often does MHRSD update Nitaqat thresholds?',
            answer: 'MHRSD (Ministry of Human Resources and Social Development) updates Nitaqat thresholds periodically, typically quarterly or when Saudization policies change. Always check the official MHRSD portal or your Qiwa account for your current band and the latest threshold tables.',
          },
        ]}
      />
      <ToolSeoContent namespace="NitaqatCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on MHRSD Nitaqat guidelines &amp; Saudi Labor Law
        </p>
      </div>
    </>
  )
}

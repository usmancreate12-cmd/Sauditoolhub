import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { FamilyVisaOptimizer } from '@/components/FamilyVisaOptimizer'
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
  const t = await getTranslations({ locale, namespace: 'FamilyVisaCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/family-visa-optimizer` : `${baseUrl}/${l}/family-visa-optimizer`
  }
  return {
    title: t('metaTitle'),
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/family-visa-optimizer` : `${baseUrl}/${locale}/family-visa-optimizer`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: t('metaTitle'),
      description: t('description'),
      url: isDefault ? `${baseUrl}/family-visa-optimizer` : `${baseUrl}/${locale}/family-visa-optimizer`,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('metaTitle'),
      description: t('description'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function FamilyVisaPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/family-visa-optimizer` : `${baseUrl}/${locale}/family-visa-optimizer`
  const t = await getTranslations({ locale, namespace: 'FamilyVisaCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <FamilyVisaOptimizer locale={locale} />
      <SoftwareAppJsonLd
        name="Family Visa & Dependent Fee Optimizer"
        description="Calculate your family visa and dependent fees in Saudi Arabia — wives, children, iqama, and exit/re-entry visas."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Expat Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expat-tools` },
          { name: 'Family Visa Optimizer', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: t('faq.q1'),
            answer: t('faq.a1'),
          },
          {
            question: t('faq.q2'),
            answer: t('faq.a2'),
          },
          {
            question: t('faq.q3'),
            answer: t('faq.a3'),
          },
          {
            question: t('faq.q4'),
            answer: t('faq.a4'),
          },
          {
            question: t('faq.q5'),
            answer: t('faq.a5'),
          },
        ]}
      />
      <ToolSeoContent namespace="FamilyVisaCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          {t('lastUpdated')} &middot; {t('legalNotice')}
        </p>
      </div>
    </>
  )
}

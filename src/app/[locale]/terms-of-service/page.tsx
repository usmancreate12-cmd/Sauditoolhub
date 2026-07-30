import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd'

type Props = {
  params: Promise<{ locale: string }>
}

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'TermsPage' })
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/terms-of-service` : `${baseUrl}/${locale}/terms-of-service`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/terms-of-service` : `${baseUrl}/${l}/terms-of-service`
  }

  return {
    title: `${t('title')} — Sauditoolhub`,
    description: t('content.acceptance'),
    alternates: {
      canonical: pageUrl,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('title')} — Sauditoolhub`,
      description: t('content.acceptance'),
      url: pageUrl,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} — Sauditoolhub`,
      description: t('content.acceptance'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function TermsOfServicePage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'TermsPage' })
  const isRtl = locale === 'ar' || locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/terms-of-service` : `${baseUrl}/${locale}/terms-of-service`

  const sections = ['acceptance', 'service', 'use', 'liability', 'changes']

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('title')} — Sauditoolhub`,
    description: t('content.acceptance'),
    url: pageUrl,
    isPartOf: { '@type': 'WebSite', url: baseUrl },
    inLanguage: locale === 'en' ? 'en-US' : locale === 'ar' ? 'ar-SA' : locale === 'ur' ? 'ur-PK' : locale,
  }

  return (
    <>
      <JsonLd data={webPageSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: t('title'), url: pageUrl },
        ]}
      />

      <div className="relative z-10">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-desert-primary uppercase tracking-wider">
                {isDefault ? 'LEGAL' : locale === 'ar' ? 'قانوني' : locale === 'ur' ? 'قانونی' : locale === 'tl' ? 'LEGAL' : locale === 'bn' ? 'আইনি' : 'LEGAL'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {t('title')}
              </h1>
              <p className="text-sm text-gray-500">{t('lastUpdated')}</p>
            </div>

            <div className="space-y-6">
              {sections.map((key) => (
                <div key={key} className="glass p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-white mb-3">{t(`sections.${key}`)}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{t(`content.${key}`)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

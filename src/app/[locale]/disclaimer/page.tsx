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
  const t = await getTranslations({ locale, namespace: 'DisclaimerPage' })
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/disclaimer` : `${baseUrl}/${locale}/disclaimer`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/disclaimer` : `${baseUrl}/${l}/disclaimer`
  }

  return {
    title: `${t('title')} — Sauditoolhub`,
    description: t('content.notAdvice'),
    alternates: {
      canonical: pageUrl,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('title')} — Sauditoolhub`,
      description: t('content.notAdvice'),
      url: pageUrl,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} — Sauditoolhub`,
      description: t('content.notAdvice'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function DisclaimerPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'DisclaimerPage' })
  const isRtl = locale === 'ar' || locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/disclaimer` : `${baseUrl}/${locale}/disclaimer`

  const sections = ['notAdvice', 'noGuarantee', 'notAffiliated', 'officialPortals', 'externalLinks']

  const portals = [
    { name: 'Absher', url: 'https://absher.sa', desc: 'MOI services & Iqama management' },
    { name: 'Muqeem', url: 'https://muqeem.sa', desc: 'Visa & residency services' },
    { name: 'ZATCA', url: 'https://zatca.gov.sa', desc: 'Tax, VAT & Zakat' },
    { name: 'Najiz', url: 'https://najiz.sa', desc: 'Ministry of Justice legal services' },
    { name: 'MHRSD', url: 'https://hrsd.gov.sa', desc: 'Labor & employment services' },
  ]

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('title')} — Sauditoolhub`,
    description: t('content.notAdvice'),
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
                  {key === 'officialPortals' ? (
                    <>
                      <p className="text-gray-300 text-sm leading-relaxed mb-4">{t(`content.${key}`)}</p>
                      <div className="space-y-2">
                        {portals.map((p) => (
                          <a
                            key={p.name}
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between glass p-3 rounded-lg text-sm text-gray-300 hover:text-desert-primary transition-colors"
                          >
                            <span className="font-medium">{p.name}</span>
                            <span className="text-xs text-gray-500">{p.desc}</span>
                          </a>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-gray-300 text-sm leading-relaxed">{t(`content.${key}`)}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

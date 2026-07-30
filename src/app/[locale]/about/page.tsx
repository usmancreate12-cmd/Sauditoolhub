import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Mail, BookOpen, Bug } from 'lucide-react'
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
  const t = await getTranslations({ locale, namespace: 'AboutPage' })
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/about` : `${baseUrl}/${l}/about`
  }

  return {
    title: `${t('title')} — Sauditoolhub`,
    description: t('subtitle'),
    alternates: {
      canonical: pageUrl,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('title')} — Sauditoolhub`,
      description: t('subtitle'),
      url: pageUrl,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('title')} — Sauditoolhub`,
      description: t('subtitle'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('AboutPage')
  const isRtl = locale === 'ar' || locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/about` : `${baseUrl}/${locale}/about`

  const sections = [
    { key: 'mission', titleKey: 'mission' },
    { key: 'whatWeOffer', titleKey: 'whatWeOffer' },
    { key: 'values', titleKey: 'values' },
    { key: 'team', titleKey: 'team' },
  ]

  const offers = ['offer1', 'offer2', 'offer3', 'offer4']
  const values = ['value1', 'value2', 'value3', 'value4']

  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${t('title')} — Sauditoolhub`,
    description: t('subtitle'),
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
                {isDefault ? 'ABOUT' : locale === 'ar' ? 'عن الشركة' : locale === 'ur' ? 'کمپنی کے بارے میں' : locale === 'tl' ? 'ABOUT' : locale === 'bn' ? 'প্রতিষ্ঠান' : 'ABOUT'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {sections.map((section) => (
                <div key={section.key} className="glass p-6 rounded-xl">
                  <h2 className="text-xl font-bold text-white mb-3">{t(section.titleKey)}</h2>
                  <div className="text-gray-300 text-sm leading-relaxed space-y-3">
                    {section.key === 'whatWeOffer' ? (
                      <ul className="list-disc list-inside space-y-1">
                        {offers.map((offer) => (
                          <li key={offer}>{t(offer)}</li>
                        ))}
                      </ul>
                    ) : section.key === 'values' ? (
                      <ul className="list-disc list-inside space-y-1">
                        {values.map((value) => (
                          <li key={value}>{t(value)}</li>
                        ))}
                      </ul>
                    ) : (
                      <p>{t(`${section.key}Text`)}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="glass p-6 rounded-xl text-center">
                <p className="text-gray-300 text-sm">{t('contactCta')}</p>
                <Link href="/contact" className="text-desert-primary hover:underline font-medium">
                  {isDefault ? 'Contact Us' : locale === 'ar' ? 'اتصل بنا' : locale === 'ur' ? 'ہم سے رابطہ کریں' : locale === 'tl' ? 'Makipag-ugnayan' : locale === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

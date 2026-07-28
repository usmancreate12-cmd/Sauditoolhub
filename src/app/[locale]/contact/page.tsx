import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { Mail, MessageSquare, BookOpen, Bug } from 'lucide-react'
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd'

type Props = {
  params: Promise<{ locale: string }>
}

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://Sauditoolhub.com'
const contactEmail = 'usman.create12@gmail.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ContactPage' })
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/contact` : `${baseUrl}/${locale}/contact`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/contact` : `${baseUrl}/${l}/contact`
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

export default async function ContactPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('ContactPage')
  const isRtl = locale === 'ar' || locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/contact` : `${baseUrl}/${locale}/contact`

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
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-desert-primary uppercase tracking-wider">
                {isDefault ? 'SUPPORT' : locale === 'ar' ? 'الدعم' : locale === 'ur' ? 'سپورٹ' : locale === 'tl' ? 'SUPPORT' : locale === 'bn' ? 'সহায়তা' : 'SUPPORT'}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {t('title')}
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {t('subtitle')}
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="glass p-8 rounded-xl">
                <h2 className="text-2xl font-bold text-white mb-6">
                  {isDefault ? 'Send Us a Message' : locale === 'ar' ? 'أرسل لنا رسالة' : locale === 'ur' ? 'ہمیں پیغام بھیجیں' : locale === 'tl' ? 'Magpadala ng Mensahe' : locale === 'bn' ? 'আমাদের বার্তা পাঠান' : 'Send Us a Message'}
                </h2>
                <form className="space-y-5" action={`mailto:${contactEmail}`} method="post" encType="text/plain">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t('nameLabel')}</label>
                    <input
                      type="text"
                      required
                      placeholder={t('namePlaceholder')}
                      className="w-full rounded-xl border border-gray-700 bg-[#0A0E1A] px-4 py-3 text-white placeholder-gray-500 focus:border-desert-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t('emailLabel')}</label>
                    <input
                      type="email"
                      required
                      placeholder={t('emailPlaceholder')}
                      className="w-full rounded-xl border border-gray-700 bg-[#0A0E1A] px-4 py-3 text-white placeholder-gray-500 focus:border-desert-primary focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t('subjectLabel')}</label>
                    <select
                      required
                      className="w-full rounded-xl border border-gray-700 bg-[#0A0E1A] px-4 py-3 text-white focus:border-desert-primary focus:outline-none"
                    >
                      <option value="">{t('subjectPlaceholder')}</option>
                      <option value="bug">{t('categories.bug')}</option>
                      <option value="guide">{t('categories.guide')}</option>
                      <option value="other">{t('categories.other')}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">{t('messageLabel')}</label>
                    <textarea
                      required
                      rows={6}
                      placeholder={t('messagePlaceholder')}
                      className="w-full rounded-xl border border-gray-700 bg-[#0A0E1A] px-4 py-3 text-white placeholder-gray-500 focus:border-desert-primary focus:outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-desert-primary px-8 py-3 text-sm font-bold text-white transition-all hover:bg-desert-primary-dim"
                  >
                    <MessageSquare className="h-4 w-4" />
                    {t('submitButton')}
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-4 text-center">{t('responseTime')}</p>
              </div>

              <div className="space-y-6">
                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-desert-primary/10 text-desert-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{t('emailDirect')}</h3>
                      <a href={`mailto:${contactEmail}`} className="text-desert-primary hover:underline break-all">
                        {contactEmail}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-desert-primary/10 text-desert-primary">
                      <Bug className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{t('reportBugs')}</h3>
                      <p className="text-sm text-gray-400">{t('reportBugsDesc')}</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-desert-primary/10 text-desert-primary">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{t('requestGuides')}</h3>
                      <p className="text-sm text-gray-400">{t('requestGuidesDesc')}</p>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-xl">
                  <h3 className="text-white font-semibold mb-3">
                    {isDefault ? 'Popular Resources' : locale === 'ar' ? 'الموارد الشائعة' : locale === 'ur' ? 'مشہور وسائل' : locale === 'tl' ? 'Mga Populadong Resource' : locale === 'bn' ? 'জনপ্রিয় সম্পদ' : 'Popular Resources'}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <Link href="/eosb-calculator" className="text-desert-primary hover:underline">EOSB Calculator</Link>
                    </li>
                    <li>
                      <Link href="/jawazat-fine-calculator" className="text-desert-primary hover:underline">Jawazat Fine Calculator</Link>
                    </li>
                    <li>
                      <Link href="/blog" className="text-desert-primary hover:underline">Sauditoolhub Blog</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { ChevronRight, Calendar, Clock } from 'lucide-react'
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd'
import { articles } from '@/data/articles'

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
  const t = await getTranslations({ locale, namespace: 'BlogPage' })
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${l}/blog`
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

export default async function BlogPage({ params }: Props) {
  const { locale } = await params
  const t = await getTranslations('BlogPage')
  const isRtl = locale === 'ar' || locale === 'ur'
  const pageUrl = locale === 'en' ? `${baseUrl}/blog` : `${baseUrl}/${locale}/blog`

  const blogPosts = articles.map(a => {
    const localizedTitle = a.title[locale as keyof typeof a.title] || a.title.en
    const localizedDescription = a.description[locale as keyof typeof a.description] || a.description.en
    return {
      title: localizedTitle,
      excerpt: localizedDescription,
      category: a.category,
      href: `/guide/${a.slug}`,
      date: a.date,
      readTime: parseInt(a.readTime) || 10,
    }
  })

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
          <div className="mx-auto max-w-6xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>
        </section>

        <section className="px-4 py-12">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post, i) => (
                <div
                  key={i}
                  className="glass p-6 transition-all duration-300 hover:border-desert-primary/20 hover:shadow-[0_0_25px_rgba(0,212,170,0.08)] flex flex-col"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-desert-primary/15 text-desert-primary">
                      {t(`categories.${post.category}`)}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <Clock className="h-3 w-3" />
                      {post.readTime} {t('minRead')}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-white mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-700/30">
                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : locale === 'ar' ? 'ar-SA' : locale === 'ur' ? 'ur-PK' : locale, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                      })}
                    </span>
                    <Link
                      href={`/${locale}${post.href}`}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-desert-primary hover:text-desert-primary-dim transition-colors"
                    >
                      {t('readMore')}
                      <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { articles } from '@/data/articles'
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd'
import { Calculator } from 'lucide-react'
import Link from 'next/link'

type Props = { params: Promise<{ locale: string; slug: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://Sauditoolhub.com'

export function generateStaticParams() {
  const params: { locale: string; slug: string }[] = []
  for (const article of articles) {
    for (const locale of locales) {
      params.push({ locale, slug: article.slug })
    }
  }
  return params
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const article = articles.find(a => a.slug === slug)
  if (!article) return {}

  const isDefault = locale === 'en'
  const titleLocale = article.title[locale as keyof typeof article.title] || article.title.en
  const descLocale = article.description[locale as keyof typeof article.description] || article.description.en
  const pageUrl = isDefault ? `${baseUrl}/guide/${slug}` : `${baseUrl}/${locale}/guide/${slug}`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/guide/${slug}` : `${baseUrl}/${l}/guide/${slug}`
  }

  return {
    title: `${titleLocale} — Sauditoolhub`,
    description: descLocale,
    alternates: { canonical: pageUrl, languages: alternates as Record<string, string> },
    openGraph: {
      title: `${titleLocale} — Sauditoolhub`,
      description: descLocale,
      url: pageUrl,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: `${titleLocale} — Sauditoolhub`, description: descLocale },
    robots: { index: true, follow: true },
  }
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params
  const article = articles.find(a => a.slug === slug)

  if (!article) notFound()

  const contentHtml = article.content[locale as keyof typeof article.content] || article.content.en
  const titleText = article.title[locale as keyof typeof article.title] || article.title.en
  const isRtl = locale === 'ar' || locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/${slug}` : `${baseUrl}/${locale}/guide/${slug}`

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: titleText,
    description: article.description[locale as keyof typeof article.description] || article.description.en,
    author: { '@type': 'Person', name: 'Sauditoolhub Team' },
    publisher: { '@type': 'Organization', name: 'Sauditoolhub', logo: { '@type': 'ImageObject', url: `${baseUrl}/logo.png` } },
    datePublished: article.date,
    dateModified: article.date,
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: locale === 'ar' ? 'الرئيسية' : locale === 'ur' ? 'ہوم' : locale === 'tl' ? 'Bahay' : locale === 'bn' ? 'হোম' : 'Home', url: baseUrl },
          { name: locale === 'ar' ? 'المدونة' : locale === 'ur' ? 'بلاگ' : locale === 'tl' ? 'Blog' : locale === 'bn' ? 'ব্লগ' : 'Blog', url: `${baseUrl}/${isDefault ? '' : locale + '/'}blog` },
          { name: titleText, url: pageUrl },
        ]}
      />

      <div className="relative z-10">
        <section className="px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <article
              className={`prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300 ${isRtl ? 'text-right' : ''}`}
              dir={isRtl ? 'rtl' : 'ltr'}
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </section>
      </div>
    </>
  )
}

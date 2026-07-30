import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { articles } from '@/data/articles'
import JsonLd, { BreadcrumbJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string; slug: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() {
  return articles.map((article) =>
    locales.map((locale) => ({ locale, slug: article.slug }))
  ).flat()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: 'Not Found' }

  const title = article.title[locale as keyof typeof article.title] || article.title.en
  const description = article.description[locale as keyof typeof article.description] || article.description.en
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/${slug}` : `${baseUrl}/${locale}/guide/${slug}`

  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/guide/${slug}` : `${baseUrl}/${l}/guide/${slug}`
  }

  return {
    title: `${title} — Sauditoolhub`,
    description,
    alternates: { canonical: pageUrl, languages: alternates },
    openGraph: {
      title: `${title} — Sauditoolhub`,
      description,
      url: pageUrl,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'article',
    },
    twitter: { card: 'summary_large_image', title: `${title} — Sauditoolhub`, description },
    robots: { index: true, follow: true },
  }
}

export default async function GuidePage({ params }: Props) {
  const { locale, slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) notFound()

  const isRtl = locale === 'ar' || locale === 'ur'
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/guide/${slug}` : `${baseUrl}/${locale}/guide/${slug}`

  const localizedTitle = article.title[locale as keyof typeof article.title] || article.title.en
  const localizedDesc = article.description[locale as keyof typeof article.description] || article.description.en
  const htmlContent = article.content[locale as keyof typeof article.content] || article.content.en

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: localizedTitle,
    description: localizedDesc,
    author: { '@type': 'Organization', name: 'Sauditoolhub' },
    datePublished: article.date,
    dateModified: article.date,
  }

  return (
    <>
      <JsonLd data={articleSchema} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Blog', url: `${baseUrl}/${isDefault ? '' : locale}/blog` },
          { name: localizedTitle, url: pageUrl },
        ]}
      />

      <div className="relative z-10 px-4 py-12" dir={isRtl ? 'rtl' : 'ltr'}>
        <div className="mx-auto max-w-4xl">
          <Link
            href={`/${locale}/blog`}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-desert-primary hover:text-desert-primary-dim transition-colors"
          >
            <ChevronRight className={`h-4 w-4 ${isRtl ? 'rotate-180' : ''}`} />
            Blog
          </Link>

          <div className="prose prose-invert max-w-none prose-headings:text-desert-primary prose-a:text-desert-primary prose-strong:text-white prose-li:text-gray-300 [&_.glass]:not-prose"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </div>
    </>
  )
}

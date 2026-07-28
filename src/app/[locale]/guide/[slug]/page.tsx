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
  const hasContent = contentHtml && contentHtml.trim().length > 0
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

  const categoryDisplay = locale === 'ar'
    ? { expat: 'أدلة المغتربين', business: 'الأعمال والضريبة', finance: 'التمويل', auto: 'السيارات والمرور', realEstate: 'العقارات' }[article.category] || article.category
    : locale === 'ur'
    ? { expat: 'غیر ملکیوں کے رہنما', business: 'کاروبار اور ٹیکس', finance: 'مالیات', auto: 'گاڑی اور ٹریفک', realEstate: 'رئیل اسٹیٹ' }[article.category] || article.category
    : locale === 'tl'
    ? { expat: 'EXPAT GUIDES', business: 'BUSINESS & TAX', finance: 'FINANCE', auto: 'AUTO & TRAFFIC', realEstate: 'REAL ESTATE' }[article.category] || article.category.toUpperCase()
    : locale === 'bn'
    ? { expat: 'প্রবাসীদের গাইড', business: 'ব্যবসা ও ভ্যাট', finance: 'অর্থনীতি', auto: 'অটো ও ট্রাফিক', realEstate: 'রিয়েল এস্টেট' }[article.category] || article.category
    : { expat: 'EXPAT GUIDES', business: 'BUSINESS & TAX', finance: 'FINANCE', auto: 'AUTO & TRAFFIC', realEstate: 'REAL ESTATE' }[article.category] || article.category.toUpperCase()

  const subtitleText = article.description[locale as keyof typeof article.description] || article.description.en

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
            <div className="text-center mb-12">
              <span className="text-sm font-semibold text-desert-primary uppercase tracking-wider">
                {categoryDisplay}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {titleText}
              </h1>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                {subtitleText}
              </p>
            </div>

            {hasContent ? (
              <div dangerouslySetInnerHTML={{ __html: contentHtml.replace(/<h1\b[^>]*>/gi, '').replace(/<\/h1>/gi, '') }} />
            ) : (
              <div className="glass p-8 rounded-xl text-center">
                <p className="text-gray-400 text-lg">
                  {locale === 'ar'
                    ? 'محتويات هذا المقال قيد التحديث حالياً. يرجى العودة لاحقاً.'
                    : locale === 'ur'
                    ? 'اس مضمون کے مندرجات فی الحال اپ ڈیٹ ہو رہے ہیں۔ براہ کرم بعد میں دوبارہ تشریف لائیں۔'
                    : locale === 'tl'
                    ? 'Ang nilalaman ng artikulong ito ay kasalukuyang ina-update. Pakibalik muli sa ibang pagkakataon.'
                    : locale === 'bn'
                    ? 'এই নিবন্ধটির বিষয়বস্তু বর্তমানে আপডেট করা হচ্ছে। অনুগ্রহ করে পরে আবার দেখুন।'
                    : 'Content for this article is currently being updated. Please check back soon.'}
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  )
}

import type { MetadataRoute } from 'next'

const baseUrl = 'https://Sauditoolhub.com'
const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const staticPages = ['privacy', 'terms', 'disclaimer'] as const

function localePath(locale: string, page: string): string {
  if (locale === 'en') return `${baseUrl}/${page}`
  return `${baseUrl}/${locale}/${page}`
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : `/${locale}`

    entries.push({
      url: `${baseUrl}${prefix}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    })

    entries.push({
      url: `${baseUrl}${prefix}/eosb-calculator`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    })

    for (const page of staticPages) {
      entries.push({
        url: `${baseUrl}${prefix}/${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.3,
      })
    }
  }

  return entries
}


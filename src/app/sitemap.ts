import type { MetadataRoute } from 'next'

const baseUrl = 'https://sauditoolhub.vercel.app'
const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const staticPages = ['privacy', 'terms', 'disclaimer'] as const

const toolRoutes = [
  '/eosb-calculator',
  '/jawazat-fine-calculator',
  '/family-visa-optimizer',
  '/final-settlement-calculator',
  '/visa-checklist-generator',
  '/zatca-vat-calculator',
  '/nitaqat-simulator',
  '/salla-profit-calculator',
  '/freelance-income-calculator',
  '/cr-cost-estimator',
  '/sama-loan-calculator',
  '/zakat-calculator',
  '/iban-validator',
  '/sip-calculator',
  '/used-car-calculator',
  '/traffic-fine-calculator',
  '/sec-bill-calculator',
  '/bill-splitter-calculator',
  '/fuel-cost-calculator',
  '/rett-tax-calculator',
  '/ejar-deposit-calculator',
  '/mortgage-vs-rent',
  '/property-valuation',
] as const

const guideRoutes = [
  '/guide/jawazat-overstay-fine-calculator-saudi-arabia-2026',
] as const

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

    for (const route of toolRoutes) {
      entries.push({
        url: `${baseUrl}${prefix}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    }

    for (const route of guideRoutes) {
      entries.push({
        url: `${baseUrl}${prefix}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      })
    }

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
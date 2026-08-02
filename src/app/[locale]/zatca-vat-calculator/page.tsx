import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { ZatcaVatCalculator } from '@/components/ZatcaVatCalculator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import { SoftwareAppJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'ZatcaCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/zatca-vat-calculator` : `${baseUrl}/${l}/zatca-vat-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/zatca-vat-calculator` : `${baseUrl}/${locale}/zatca-vat-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/zatca-vat-calculator` : `${baseUrl}/${locale}/zatca-vat-calculator`,
      siteName: 'Sauditoolhub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
    },
    robots: { index: true, follow: true },
  }
}

export default async function ZatcaPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/zatca-vat-calculator` : `${baseUrl}/${locale}/zatca-vat-calculator`
  const t = await getTranslations({ locale, namespace: 'ZatcaCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <ZatcaVatCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="ZATCA E-Invoicing Compliance & VAT Calculator"
        description="Calculate VAT for Saudi Arabia ZATCA compliance. Includes e-invoicing Phase 1 & Phase 2 checklist for B2B and B2C invoices."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Business Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}business-tools` },
          { name: 'ZATCA VAT Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'Is ZATCA e-invoicing mandatory for freelancers in Saudi Arabia?',
            answer: 'Yes, ZATCA e-invoicing is mandatory for all taxpayers registered for VAT in Saudi Arabia, including freelancers and self-employed individuals. Phase 1 (Generation) began December 2021. Phase 2 (Integration) is being rolled out in waves based on revenue thresholds.',
          },
          {
            question: 'What is the VAT rate in Saudi Arabia for 2024?',
            answer: 'The standard VAT rate in Saudi Arabia is 15%, applicable to most goods and services. Some items are zero-rated (0%) such as healthcare and education. Certain financial services are exempt from VAT.',
          },
          {
            question: 'What is the difference between ZATCA Phase 1 and Phase 2?',
            answer: 'Phase 1 (Generation) requires businesses to generate e-invoices using compliant systems and store them. Phase 2 (Integration) requires businesses to integrate their systems directly with ZATCA\'s platform for real-time reporting. Phase 2 is being implemented in phases based on company revenue.',
          },
          {
            question: 'Do I need a QR code on my invoice in Saudi Arabia?',
            answer: 'Yes, for Phase 2 compliance, all e-invoices and simplified tax invoices must include a cryptographic QR code containing specific invoice data. This allows ZATCA and buyers to verify the invoice authenticity instantly.',
          },
          {
            question: 'What happens if I do not comply with ZATCA e-invoicing rules?',
            answer: 'Non-compliance with ZATCA e-invoicing regulations can result in penalties up to SAR 50,000 per violation for specified e-invoicing offenses. ZATCA has the authority to audit and impose fines on non-compliant businesses.',
          },
          {
            question: 'How do I calculate VAT for my invoices in Saudi Arabia?',
            answer: 'VAT is calculated as: (Subtotal - Discount) × (VAT Rate / 100). The total invoice amount is Subtotal - Discount + VAT. For 15% VAT: if your subtotal is 10,000 SAR with no discount, VAT = 1,500 SAR and total = 11,500 SAR.',
          },
          {
            question: 'Is B2B and B2C invoicing different for ZATCA compliance?',
            answer: 'Yes. B2B invoices (Tax Invoices) require seller and buyer VAT numbers, buyer name, and detailed line items. B2C invoices (Simplified Tax Invoices) require seller VAT number but not buyer details. Both require a QR code for Phase 2 compliance.',
          },
        ]}
      />
      <ToolSeoContent namespace="ZatcaCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on ZATCA regulations &amp; Saudi VAT Law
        </p>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { VisaChecklistGenerator } from '@/components/VisaChecklistGenerator'
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
  const t = await getTranslations({ locale, namespace: 'VisaChecklist' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/visa-checklist-generator` : `${baseUrl}/${l}/visa-checklist-generator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/visa-checklist-generator` : `${baseUrl}/${locale}/visa-checklist-generator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/visa-checklist-generator` : `${baseUrl}/${locale}/visa-checklist-generator`,
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

export default async function VisaChecklistPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/visa-checklist-generator` : `${baseUrl}/${locale}/visa-checklist-generator`

  return (
    <>
      <VisaChecklistGenerator locale={locale} />
      <SoftwareAppJsonLd
        name="Interactive Visa Document Checklist Generator"
        description="Generate a complete document checklist for Saudi Arabia visas — Family Visit, Work, Umrah, Tourist, and Exit/Re-Entry."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Expat Tools', url: `${baseUrl}/${isDefault ? '' : locale + '/'}expat-tools` },
          { name: 'Visa Checklist Generator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'What documents are required for a family visit visa in Saudi Arabia?',
            answer: 'For a family visit visa, you need: valid passport with 6+ months validity, passport-sized photos, attested marriage certificate (if sponsoring spouse), attested birth certificates (if sponsoring children), sponsor Iqama copy, salary certificate, completed application form, and health insurance.',
          },
          {
            question: 'Is degree attestation required for a Saudi work visa?',
            answer: 'Yes, degree attestation is mandatory for a Saudi work visa. The process involves attestation from the Ministry of Foreign Affairs (MOFA) in Saudi Arabia, plus attestation from the embassy of the country where the degree was issued. Some nationalities require additional embassy attestation.',
          },
          {
            question: 'What vaccinations are needed for Umrah visa 2024?',
            answer: 'The Meningococcal (ACWY) vaccination is mandatory for Umrah. Additionally, the Saudi Ministry of Health recommends COVID-19 vaccination and seasonal flu vaccine. A valid vaccination certificate showing the required vaccines is required for visa application.',
          },
          {
            question: 'Do I need a Mahram for Umrah as a woman?',
            answer: 'Saudi Arabia lifted the Mahram requirement for women performing Umrah in 2021. Women of all ages can now perform Umrah without a Mahram, though they must travel with an organized group or have appropriate travel arrangements. Always check the latest rules before traveling.',
          },
          {
            question: 'How long does Saudi visa document attestation take?',
            answer: 'Document attestation can take 2-6 weeks depending on the process. First, documents must be notarized in your home country, then attested by the Chamber of Commerce and Ministry of Foreign Affairs there, followed by Saudi embassy attestation, and finally MOFA attestation in Saudi Arabia.',
          },
          {
            question: 'Do I need a police clearance certificate for a Saudi work visa?',
            answer: 'Yes, a police clearance certificate is generally required for work visas. It must be issued within the last 3-6 months and attested by the relevant authorities. Some countries require fingerprint-based police checks for Saudi work visa applications.',
          },
          {
            question: 'What is the difference between MOFA and embassy attestation?',
            answer: 'Embassy attestation is done by the Saudi embassy in your home country to verify your documents for use abroad. MOFA attestation is done inside Saudi Arabia by the Ministry of Foreign Affairs to recognize foreign documents. Most documents require both steps for Saudi work and family visas.',
          },
        ]}
      />
      <ToolSeoContent namespace="VisaChecklist" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">
          Last updated: July 2026 &middot; Based on Saudi visa regulations &amp; Ministry of Foreign Affairs requirements
        </p>
      </div>
    </>
  )
}

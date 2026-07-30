import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { IbanValidator } from '@/components/IbanValidator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import { SoftwareAppJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string }> }
const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() { return locales.map((locale) => ({ locale })) }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'IbanValidator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) alternates[l] = l === 'en' ? `${baseUrl}/iban-validator` : `${baseUrl}/${l}/iban-validator`
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: { canonical: isDefault ? `${baseUrl}/iban-validator` : `${baseUrl}/${locale}/iban-validator`, languages: alternates as Record<string, string> },
    openGraph: { title: `${t('toolName')} — Sauditoolhub`, description: t('description'), url: isDefault ? `${baseUrl}/iban-validator` : `${baseUrl}/${locale}/iban-validator`, siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website' },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function IbanPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/iban-validator` : `${baseUrl}/${locale}/iban-validator`
  return (
    <>
      <IbanValidator locale={locale} />
      <SoftwareAppJsonLd name="Saudi IBAN Validator & Transfer Fee Estimator" description="Validate Saudi IBAN format and estimate bank transfer fees for SARIE, Mada, and International SWIFT transfers." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Finance & Banking', url: `${baseUrl}/${isDefault ? '' : locale + '/'}finance-tools` }, { name: 'IBAN Validator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'What is a Saudi IBAN and how is it structured?', answer: 'A Saudi IBAN starts with SA followed by 22 digits (24 characters total). The first 2 digits after SA are the bank code (e.g., 80 for Al Rajhi, 10 for SNB). The remaining digits are the account number and check digits. Example: SA80 1000 0000 0000 0000 0000.' },
        { question: 'How can I identify my bank from the IBAN?', answer: 'Extract characters 3-4 of the IBAN (after SA). Common codes: 10=SNB, 20=Al Rajhi, 30=Albilad, 40=Arab National, 50=Alinma, 60=AlJazira, 65=SABB, 70=Saudi Fransi, 75=Riyad Bank, 80=Al Rajhi.' },
        { question: 'What is the difference between SARIE and SWIFT transfers?', answer: 'SARIE (Saudi Arabian Riyal Interbank Express) is the local payment system for SAR transfers between Saudi banks — free and instant. SWIFT is for international transfers — costs SAR 75-150 flat fee plus ~2% exchange margin. Mada transfers cost ~2-5 SAR.' },
        { question: 'How much do international bank transfers cost from Saudi Arabia?', answer: 'International SWIFT transfers typically cost SAR 75-150 flat fee plus approximately 2% exchange margin. For a SAR 10,000 transfer, expect total costs of SAR 275-350. Actual costs vary by bank and destination.' },
        { question: 'Is SARIE transfer really free?', answer: 'Yes, SARIE transfers between Saudi banks are free of charge. This is regulated by SAMA (Saudi Central Bank). SARIE transfers are instant and settle in real-time, making them ideal for local payments.' },
        { question: 'What is a Mada transfer fee?', answer: 'Mada transfer fees typically range from SAR 2-5 for local transfers. Mada is the Saudi national payment network and is less expensive than SWIFT but may have a small fee compared to SARIE.' },
        { question: 'How do I find my IBAN in Saudi Arabia?', answer: 'You can find your IBAN on your bank statement, through your bank\'s mobile app under account details, or by visiting your bank branch. Most Saudi banks display the IBAN prominently in their online banking platforms.' },
      ]} />
      <ToolSeoContent namespace="IbanValidator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4"><p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on SAMA regulations and Saudi bank fee schedules</p></div>
    </>
  )
}

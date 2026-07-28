import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { EjarDepositCalculator } from '@/components/EjarDepositCalculator'
import { ToolSeoContent } from '@/components/ToolSeoContent'
import { SoftwareAppJsonLd, BreadcrumbJsonLd, FAQJsonLd } from '@/components/JsonLd'

type Props = { params: Promise<{ locale: string }> }

const locales = ['en', 'ar', 'ur', 'tl', 'bn'] as const
const baseUrl = 'https://Sauditoolhub.com'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'EjarDepositCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/ejar-deposit-calculator` : `${baseUrl}/${l}/ejar-deposit-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/ejar-deposit-calculator` : `${baseUrl}/${locale}/ejar-deposit-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/ejar-deposit-calculator` : `${baseUrl}/${locale}/ejar-deposit-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function EjarDepositPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/ejar-deposit-calculator` : `${baseUrl}/${locale}/ejar-deposit-calculator`

  return (
    <>
      <EjarDepositCalculator locale={locale} />
      <SoftwareAppJsonLd name="Ejar Deposit Refund Estimator" description="Estimate your rental security deposit refund amount when moving out of a rental property in Saudi Arabia. Calculate deductions for damages, wear and tear, and cleaning fees." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Real Estate', url: `${baseUrl}/${isDefault ? '' : locale + '/'}real-estate-tools` }, { name: 'Ejar Deposit Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'How is the Ejar deposit calculated in Saudi Arabia?', answer: 'The Ejar deposit is typically equal to 1-3 months of rent, depending on the property type and landlord requirements. The deposit is held by the landlord through the Ejar platform and should be refunded at the end of the tenancy, subject to deductions for damages or unpaid bills.' },
        { question: 'Can a landlord keep my Ejar deposit?', answer: 'In Saudi Arabia, a landlord can deduct from the Ejar deposit for: 1) Property damage beyond normal wear and tear, 2) Unpaid utility bills, 3) Cleaning costs if the property is left in poor condition, 4) Missing fixtures or furniture. The landlord must provide evidence and an itemized list of deductions.' },
        { question: 'How long does it take to get the Ejar deposit refund?', answer: 'Typically, the Ejar deposit refund should be processed within 14-30 days after move-out. If there are disputes, the case may be referred to the Rental Disputes Committee, which can take longer. Always document the property condition with photos at move-in and move-out.' },
        { question: 'Can I dispute Ejar deposit deductions?', answer: 'Yes, you can file a complaint with the Rental Disputes Committee in Saudi Arabia if you believe deductions are unfair. You should have evidence such as: 1) Move-in inspection report, 2) Photos of the property, 3) Ejar contract details, 4) Communication with the landlord. The committee typically rules within 3-6 weeks.' },
        { question: 'What counts as normal wear and tear vs damage?', answer: 'Normal wear and tear includes faded paint, minor scuffs on walls, worn carpet, and small scratches on floors — these cannot be deducted. Damage includes broken windows, stained carpets, holes in walls, broken appliances, and missing items — these can be deducted from the deposit.' },
        { question: 'Is cleaning fee mandatory in Saudi rentals?', answer: 'No, there is no mandatory cleaning fee in Saudi Arabia. However, if the tenant leaves the property in an unclean state requiring professional cleaning, the landlord may deduct reasonable cleaning costs from the deposit. It is recommended to clean the property before move-out.' },
        { question: 'What is the maximum deposit a landlord can ask for?', answer: 'In Saudi Arabia, there is no strict legal limit on deposit amounts under the Ejar system, but market practice is typically 1-3 months of rent. Luxury properties may require up to 6 months. The deposit amount should be clearly stated in the Ejar contract.' },
      ]} />
      <ToolSeoContent namespace="EjarDepositCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on Saudi Ejar tenancy regulations</p>
      </div>
    </>
  )
}

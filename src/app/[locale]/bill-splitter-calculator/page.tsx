import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { BillSplitterCalculator } from '@/components/BillSplitterCalculator'
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
  const t = await getTranslations({ locale, namespace: 'BillSplitterCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/bill-splitter-calculator` : `${baseUrl}/${l}/bill-splitter-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/bill-splitter-calculator` : `${baseUrl}/${locale}/bill-splitter-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`, description: t('description'),
      url: isDefault ? `${baseUrl}/bill-splitter-calculator` : `${baseUrl}/${locale}/bill-splitter-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function BillSplitterPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/bill-splitter-calculator` : `${baseUrl}/${locale}/bill-splitter-calculator`

  return (
    <>
      <BillSplitterCalculator locale={locale} />
      <SoftwareAppJsonLd name="Bill Splitter Calculator" description="Split rent and utility bills fairly among roommates in Saudi Arabia. Supports proportional sharing based on room size or income with detailed per-person breakdown." url={pageUrl} />
      <BreadcrumbJsonLd items={[{ name: 'Home', url: baseUrl }, { name: 'Auto & Daily Life', url: `${baseUrl}/${isDefault ? '' : locale + '/'}auto-tools` }, { name: 'Bill Splitter Calculator', url: pageUrl }]} />
      <FAQJsonLd items={[
        { question: 'How does the bill splitter calculator work?', answer: 'The bill splitter divides total household bills (rent, utilities, internet) among roommates based on their share percentages. Equal shares (1 each) split everything evenly. You can customize shares — for example, give someone 0.5 who has a smaller room or 1.5 for a master bedroom. The calculator shows each person\'s total and item-by-item breakdown.' },
        { question: 'How do share percentages work in bill splitting?', answer: 'Shares represent each person\'s portion relative to others. If everyone has share 1, bills are split equally. If Person A has share 2 and Person B has share 1, A pays twice as much. This is useful when rooms are different sizes or incomes vary. The calculator automatically proportions everything based on total shares.' },
        { question: 'What bills can I split with this calculator?', answer: 'You can split any bill or expense: rent, electricity, water, gas, internet, WiFi, Netflix, cleaning services, groceries, maintenance fees, parking fees, or any custom expense. Add or remove bills as needed — each bill is itemized per person in the results.' },
        { question: 'Is this calculator free and private?', answer: 'Yes, 100% free and private. All calculations happen in your browser. No data is stored, no signup required. You can copy results or print them for sharing with roommates.' },
        { question: 'How do I split bills for more than 2 roommates?', answer: 'Use the "Add Person" button to add as many roommates as you need. Each roommate gets their own name field and share input. The calculator handles any number of people and splits bills proportionally. Results show each person independent total and bill breakdown.' },
        { question: 'Can I split utilities unevenly in Saudi Arabia?', answer: 'Yes, the share system allows uneven splits. In shared apartments in Riyadh, Jeddah, and Dammam, it is common to adjust shares based on room size (master bedroom pays more), AC usage (room with more windows), or whoever has a private bathroom. Adjust each person\'s share number accordingly.' },
        { question: 'How are shared expenses calculated in shared Saudi apartments?', answer: 'In shared Saudi apartments, common expenses include: rent (SAR 1,500-4,000 per person depending on city and area), electricity (SAR 200-800 per person in summer), water, internet/gas (SAR 100-300), and cleaning services. The bill splitter handles all these with proportional share adjustments.' },
      ]} />
      <ToolSeoContent namespace="BillSplitterCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026</p>
      </div>
    </>
  )
}

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SamaLoanCalculator } from '@/components/SamaLoanCalculator'
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
  const t = await getTranslations({ locale, namespace: 'SamaLoanCalculator' })
  const isDefault = locale === 'en'
  const alternates: Record<string, string> = {}
  for (const l of locales) {
    alternates[l] = l === 'en' ? `${baseUrl}/sama-loan-calculator` : `${baseUrl}/${l}/sama-loan-calculator`
  }
  return {
    title: `${t('toolName')} — Sauditoolhub`,
    description: t('description'),
    alternates: {
      canonical: isDefault ? `${baseUrl}/sama-loan-calculator` : `${baseUrl}/${locale}/sama-loan-calculator`,
      languages: alternates as Record<string, string>,
    },
    openGraph: {
      title: `${t('toolName')} — Sauditoolhub`,
      description: t('description'),
      url: isDefault ? `${baseUrl}/sama-loan-calculator` : `${baseUrl}/${locale}/sama-loan-calculator`,
      siteName: 'Sauditoolhub', locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale, type: 'website',
    },
    twitter: { card: 'summary_large_image', title: `${t('toolName')} — Sauditoolhub`, description: t('description') },
    robots: { index: true, follow: true },
  }
}

export default async function SamaLoanPage({ params }: Props) {
  const { locale } = await params
  const isDefault = locale === 'en'
  const pageUrl = isDefault ? `${baseUrl}/sama-loan-calculator` : `${baseUrl}/${locale}/sama-loan-calculator`
  const t = await getTranslations({ locale, namespace: 'SamaLoanCalculator' })

  return (
    <>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 pt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">{t('toolName')}</h1>
      </div>
      <SamaLoanCalculator locale={locale} />
      <SoftwareAppJsonLd
        name="SAMA Loan Eligibility Calculator"
        description="Calculate your maximum personal loan based on SAMA's 33% Debt Burden Ratio rule in Saudi Arabia."
        url={pageUrl}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: baseUrl },
          { name: 'Finance & Banking', url: `${baseUrl}/${isDefault ? '' : locale + '/'}finance-tools` },
          { name: 'SAMA Loan Calculator', url: pageUrl },
        ]}
      />
      <FAQJsonLd
        items={[
          {
            question: 'What is SAMA debt burden ratio and how does it affect my loan?',
            answer: 'The Saudi Central Bank (SAMA) mandates that your total monthly debt obligations cannot exceed 33% of your monthly salary. This is called the Debt Burden Ratio (DBR). Banks use this rule to determine your maximum loan eligibility. If your existing EMIs already consume this limit, you may not qualify for additional financing.',
          },
          {
            question: 'How do banks calculate personal loan eligibility in Saudi Arabia?',
            answer: 'Banks in Saudi Arabia calculate loan eligibility using SAMA\'s DBR formula: Maximum Allowed EMI = Monthly Salary × 33%. Subtract your existing EMIs to find the Available EMI for a new loan. The maximum loan amount is then calculated using the amortization formula based on the available EMI, interest rate, and tenure.',
          },
          {
            question: 'What is the maximum loan tenure for personal loans in Saudi Arabia?',
            answer: 'SAMA regulations allow personal loan tenures of up to 5 years (60 months) for salaried employees. Some banks may offer shorter tenures (1-3 years) at lower interest rates. Our calculator supports 1 to 5 year tenures to match SAMA guidelines.',
          },
          {
            question: 'What is the average personal loan interest rate in Saudi Arabia?',
            answer: 'Personal loan interest rates in Saudi Arabia typically range from 3.99% to 7.99% APR, depending on your salary, bank relationship, and credit history. The default rate of 5.99% in this calculator represents a typical rate for salaried employees with good credit.',
          },
          {
            question: 'Can I get a loan if my DBR is already at 33%?',
            answer: 'If your existing monthly obligations already reach or exceed 33% of your salary, you have reached your SAMA DBR limit. You will not be eligible for additional financing until you reduce your existing debt obligations. Consider debt consolidation or early settlement of existing loans.',
          },
          {
            question: 'What counts as existing deductions for DBR calculation?',
            answer: 'Existing deductions include: current personal loan EMIs, credit card monthly payments (typically 5% of outstanding balance), auto loan payments, mortgage payments, and any other registered debt obligations. Utility bills and rent are typically not included.',
          },
          {
            question: 'How can I improve my loan eligibility in Saudi Arabia?',
            answer: 'To improve loan eligibility: 1) Reduce existing debt by paying off credit cards and loans, 2) Increase your salary through career growth, 3) Choose a longer tenure (5 years) to lower EMI, 4) Maintain a good credit history with SIMAH/Saudi Credit Bureau, 5) Consider a co-signer or transfer your salary to the lending bank.',
          },
        ]}
      />
      <ToolSeoContent namespace="SamaLoanCalculator" locale={locale} />
      <div className="mx-auto mt-2 max-w-4xl px-4">
        <p className="text-right text-xs text-gray-500">Last updated: July 2026 &middot; Based on SAMA regulations for personal loans</p>
      </div>
    </>
  )
}

import type { Metadata } from 'next'

const baseUrl = 'https://hsabksa.com'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ur' }, { locale: 'tl' }, { locale: 'bn' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  return {
    title: 'Disclaimer — HsabKSA',
    alternates: {
      canonical: isDefault ? `${baseUrl}/disclaimer` : `${baseUrl}/${locale}/disclaimer`,
    },
    robots: { index: true, follow: true },
  }
}

export default function DisclaimerPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-desert-text">Disclaimer</h1>
      <p className="mb-2 text-sm text-desert-text-dim">Last updated: July 2026</p>

      <div className="space-y-6 text-sm leading-relaxed text-desert-text-muted">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">Not Legal or Financial Advice</h2>
          <p>
            The calculators and information provided on HsabKSA are for general informational and educational purposes only.
            They are not a substitute for professional legal or financial advice.
          </p>
          <p className="mt-3">
            Saudi laws and regulations are subject to change. While we strive for accuracy, we make no guarantees
            regarding the completeness, reliability, or currentness of the information. Always consult a qualified
            legal professional for advice specific to your situation.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">No Guarantee of Accuracy</h2>
          <p>
            Our calculators implement standard formulas based on published regulations. However, individual
            employment contracts, company policies, and specific circumstances may affect your actual entitlements.
            The results should be used as estimates only.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">External Links</h2>
          <p>
            Our website may contain links to external websites. We are not responsible for the content or accuracy
            of any external sites.
          </p>
        </section>
      </div>
    </div>
  )
}

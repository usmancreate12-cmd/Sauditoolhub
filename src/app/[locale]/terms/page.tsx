import type { Metadata } from 'next'

const baseUrl = 'https://hsabksa.com'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ur' }, { locale: 'tl' }, { locale: 'bn' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  return {
    title: 'Terms of Service — HsabKSA',
    alternates: {
      canonical: isDefault ? `${baseUrl}/terms` : `${baseUrl}/${locale}/terms`,
    },
    robots: { index: true, follow: true },
  }
}

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-desert-text">Terms of Service</h1>
      <p className="mb-2 text-sm text-desert-text-dim">Last updated: July 2026</p>

      <div className="space-y-6 text-sm leading-relaxed text-desert-text-muted">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">1. Acceptance of Terms</h2>
          <p>By using HsabKSA, you agree to these terms. If you do not agree, please do not use our services.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">2. Service Description</h2>
          <p>HsabKSA provides free online calculator tools for informational purposes. Results are estimates only and should not be considered as financial or legal advice.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">3. Use of Service</h2>
          <p>You agree to use our tools for lawful purposes only. You may not reproduce, distribute, or modify our tools without permission.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">4. Limitation of Liability</h2>
          <p>HsabKSA provides tools &quot;as is&quot; without any warranty. We are not liable for any damages arising from the use of our calculators or reliance on the results.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">5. Changes</h2>
          <p>We reserve the right to update these terms at any time. Changes will be posted on this page.</p>
        </section>
      </div>
    </div>
  )
}

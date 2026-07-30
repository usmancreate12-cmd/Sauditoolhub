import type { Metadata } from 'next'

const baseUrl = 'https://sauditoolhub.com'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ur' }, { locale: 'tl' }, { locale: 'bn' }]
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const isDefault = locale === 'en'
  return {
    title: 'Privacy Policy — Sauditoolhub',
    alternates: {
      canonical: isDefault ? `${baseUrl}/privacy` : `${baseUrl}/${locale}/privacy`,
    },
    robots: { index: true, follow: true },
  }
}

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-desert-text">Privacy Policy</h1>
      <p className="mb-2 text-sm text-desert-text-dim">Last updated: July 2026</p>

      <div className="space-y-6 text-sm leading-relaxed text-desert-text-muted">
        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">1. Information We Collect</h2>
          <p>Sauditoolhub does not collect, store, or transmit any personal data. All calculations are performed entirely within your browser. No information is sent to our servers.</p>
          <p className="mt-2">We use Plausible Analytics, a privacy-focused analytics tool that does not use cookies and does not collect personal data. It only tracks aggregate page views and visit durations.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">2. Data Storage</h2>
          <p>We do not store any user data. Any numbers you enter into our calculators remain in your browser&apos;s memory only and are erased when you close or refresh the page.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">3. Cookies</h2>
          <p>We do not use tracking cookies. A functional cookie may be used to remember your language preference, which expires after 30 days.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">4. Third-Party Services</h2>
          <p>Our website may contain links to external sites. We are not responsible for their privacy practices.</p>
        </section>

        <section>
          <h2 className="mb-2 text-lg font-semibold text-desert-text">5. Contact</h2>
          <p>For privacy questions, contact us at privacy@sauditoolhub.com.</p>
        </section>
      </div>
    </div>
  )
}

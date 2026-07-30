import type { Metadata } from 'next'
import { ThemeProvider } from '@/lib/theme'
import JsonLd from '@/components/JsonLd'
import './globals.css'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SaudiToolHub',
  url: 'https://sauditoolhub.com',
  logo: 'https://sauditoolhub.com/logo.png',
  description:
    'Free Saudi Arabia calculators for EOSB, Zakat, Traffic Fines, and more. Available in English, Arabic, Urdu, Tagalog, and Bengali.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SaudiToolHub',
  url: 'https://sauditoolhub.com',
  description:
    '23+ Free calculators for EOSB, Zakat, Traffic Fines, and more in Saudi Arabia.',
  inLanguage: ['en', 'ar', 'ur', 'tl', 'bn'],
}

export const metadata: Metadata = {
  metadataBase: new URL('https://sauditoolhub.com'),
  title: 'SaudiToolHub - Free Saudi Calculators & Guides 2026',
  description:
    '23+ Free calculators for EOSB, Zakat, Traffic Fines, and more in Saudi Arabia. Available in English, Arabic, Urdu, Tagalog, and Bengali.',
  verification: {
    google: 'n9K5SWrcesdymEwQgPG4m6GE6geoC6JXza1QW8xB0lE',
  },
  icons: { icon: '/favicon.ico' },
  alternates: {
    canonical: 'https://sauditoolhub.com',
    languages: {
      en: 'https://sauditoolhub.com/en',
      ar: 'https://sauditoolhub.com/ar',
      ur: 'https://sauditoolhub.com/ur',
      tl: 'https://sauditoolhub.com/tl',
      bn: 'https://sauditoolhub.com/bn',
      'x-default': 'https://sauditoolhub.com/en',
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0A0E1A] text-gray-100 antialiased">
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


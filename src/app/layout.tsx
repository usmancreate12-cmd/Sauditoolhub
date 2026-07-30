import type { Metadata } from 'next'
import Script from 'next/script'
import { ThemeProvider } from '@/lib/theme'
import JsonLd from '@/components/JsonLd'
import CookieConsent from '@/components/CookieConsent'
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
  other: { 'msvalidate.01': '3D88FCE5F49B901D1AE947C52515DE30' },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
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
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-KREVP1RPEX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KREVP1RPEX', { page_path: window.location.pathname });`,
          }}
        />
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "xukbgt4067");`,
          }}
        />
        <CookieConsent />
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { NextIntlClientProvider } from 'next-intl'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { ThemeProvider } from '@/lib/theme'
import JsonLd from '@/components/JsonLd'
import CookieConsent from '@/components/CookieConsent'
import { Poppins, Tajawal, Harmattan } from 'next/font/google'
import { cn } from '@/lib/utils'
import '../globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800'], variable: '--font-sans', display: 'swap' })
const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700', '800'], variable: '--font-arabic', display: 'swap' })
const harmattan = Harmattan({ subsets: ['arabic'], weight: ['400', '700'], variable: '--font-urdu', display: 'swap' })

const baseUrl = 'https://sauditoolhub.com'

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SaudiToolHub',
  url: baseUrl,
  logo: `${baseUrl}/logo.png`,
  description:
    'Free Saudi Arabia calculators for EOSB, Zakat, Traffic Fines, and more. Available in English, Arabic, Urdu, Tagalog, and Bengali.',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SaudiToolHub',
  url: baseUrl,
  description:
    '23+ Free calculators for EOSB, Zakat, Traffic Fines, and more in Saudi Arabia.',
  inLanguage: ['en', 'ar', 'ur', 'tl', 'bn'],
}

type Props = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ur' }, { locale: 'tl' }, { locale: 'bn' }]
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const meta = messages.Metadata
  const prefix = locale === 'en' ? '' : `/${locale}`

  const languages: Record<string, string> = {
    en: baseUrl,
    ar: `${baseUrl}/ar`,
    ur: `${baseUrl}/ur`,
    tl: `${baseUrl}/tl`,
    bn: `${baseUrl}/bn`,
    'x-default': baseUrl,
  }

  return {
    metadataBase: new URL(baseUrl),
    title: meta.title,
    description: meta.description,
    verification: {
      google: 'n9K5SWrcesdymEwQgPG4m6GE6geoC6JXza1QW8xB0lE',
    },
    other: { 'msvalidate.01': '3D88FCE5F49B901D1AE947C52515DE30' },
    robots: { index: true, follow: true },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${baseUrl}${prefix}`,
      siteName: 'SaudiToolHub',
      locale: locale === 'en' ? 'en_US' : locale === 'ar' ? 'ar_SA' : locale === 'ur' ? 'ur_PK' : locale,
      type: 'website',
      images: [{ url: `${baseUrl}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${baseUrl}/og-image.png`],
    },
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
      canonical: `${baseUrl}${prefix}`,
      languages,
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Props['params']
}) {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const isRtl = locale === 'ar' || locale === 'ur'

  return (
    <html lang={locale} dir={isRtl ? 'rtl' : 'ltr'} className="dark">
      <body className={`min-h-dvh bg-[#0A0E1A] text-gray-100 antialiased ${poppins.variable} ${tajawal.variable} ${harmattan.variable}`}>
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
          <NextIntlClientProvider locale={locale} messages={messages}>
            <CustomCursor />
            <ScrollProgress />
            <div
              className={cn(
                'relative z-10 flex min-h-dvh flex-col',
                locale === 'ar' && 'font-arabic',
                locale === 'ur' && 'font-urdu'
              )}
            >
              <Navbar locale={locale} />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

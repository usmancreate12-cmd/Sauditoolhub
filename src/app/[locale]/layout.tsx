import { NextIntlClientProvider } from 'next-intl'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { CustomCursor } from '@/components/CustomCursor'
import { ScrollProgress } from '@/components/ScrollProgress'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }, { locale: 'ur' }, { locale: 'tl' }, { locale: 'bn' }]
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const messages = (await import(`../../../messages/${locale}.json`)).default
  const isRtl = locale === 'ar' || locale === 'ur'

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <CustomCursor />
      <ScrollProgress />
      <div
        dir={isRtl ? 'rtl' : 'ltr'}
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
  )
}

import { redirect } from 'next/navigation'

const locales = ['en', 'ar', 'ur', 'tl', 'bn']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function OldPrivacyRedirect({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  redirect(locale === 'en' ? '/privacy-policy' : `/${locale}/privacy-policy`)
}

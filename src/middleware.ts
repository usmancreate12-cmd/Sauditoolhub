import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'ar', 'ur', 'tl', 'bn'],
  defaultLocale: 'en',
  localeDetection: true,
})

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}

import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    domains: ['sauditoolhub.com'],
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/:locale/privacy',
        destination: '/:locale/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-of-service',
        permanent: true,
      },
      {
        source: '/:locale/terms',
        destination: '/:locale/terms-of-service',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)

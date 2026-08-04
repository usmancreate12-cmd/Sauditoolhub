import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

// Note: No custom babel config exists and .browserslistrc only targets modern browsers
// ("> 0.5%", "last 2 versions", "not dead", "not ie <= 11"). Next.js compiles with SWC
// defaults, so Lighthouse's ~18 KiB "legacy JavaScript" polyfill warning
// (Array.prototype.at/flat, Object.hasOwn) is a minor false positive for modern browsers.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sauditoolhub.com',
      },
    ],
  },
  trailingSlash: false,
  compress: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error', 'warn'] } : false,
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
    // Inline route CSS into <style> tags in <head> to remove the render-blocking
    // stylesheet request on first load (improves FCP/LCP for first-time visitors).
    // Recommended for atomic CSS frameworks like Tailwind.
    inlineCss: true,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sauditoolhub.com' }],
        destination: 'https://sauditoolhub.com/:path*',
        permanent: true,
      },
      {
        source: '/www/:path*',
        destination: 'https://sauditoolhub.com/:path*',
        permanent: true,
      },
      {
        source: '/guide/freelance-income-tax-guide-saudi-arabia-2026',
        destination: '/guide/freelance-income-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/freelance-income-tax-guide-saudi-arabia-2026',
        destination: '/:locale/guide/freelance-income-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/iban-validator-banking-guide-saudi-arabia-2026',
        destination: '/guide/iban-validator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/iban-validator-banking-guide-saudi-arabia-2026',
        destination: '/:locale/guide/iban-validator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/nitaqat-saudization-ratios-saudi-arabia-2026',
        destination: '/guide/nitaqat-simulator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/nitaqat-saudization-ratios-saudi-arabia-2026',
        destination: '/:locale/guide/nitaqat-simulator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026',
        destination: '/guide/salla-profit-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/salla-zid-ecommerce-profit-calculator-saudi-arabia-2026',
        destination: '/:locale/guide/salla-profit-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/sama-loan-eligibility-dbr-saudi-arabia-2026',
        destination: '/guide/sama-loan-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/sama-loan-eligibility-dbr-saudi-arabia-2026',
        destination: '/:locale/guide/sama-loan-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/sip-mutual-fund-investment-guide-saudi-arabia-2026',
        destination: '/guide/sip-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/sip-mutual-fund-investment-guide-saudi-arabia-2026',
        destination: '/:locale/guide/sip-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/traffic-fine-saher-guide-saudi-arabia-2026',
        destination: '/guide/traffic-fine-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/traffic-fine-saher-guide-saudi-arabia-2026',
        destination: '/:locale/guide/traffic-fine-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
        destination: '/guide/used-car-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/used-car-naql-malikiya-guide-saudi-arabia-2026',
        destination: '/:locale/guide/used-car-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/visa-checklist-documents-saudi-visas-2026',
        destination: '/guide/visa-checklist-generator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/visa-checklist-documents-saudi-visas-2026',
        destination: '/:locale/guide/visa-checklist-generator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/guide/zatca-vat-einvoicing-compliance-saudi-arabia-2026',
        destination: '/guide/zatca-vat-calculator-saudi-arabia-2026',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/guide/zatca-vat-einvoicing-compliance-saudi-arabia-2026',
        destination: '/:locale/guide/zatca-vat-calculator-saudi-arabia-2026',
        permanent: true,
      },
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
      {
        source: '/freelance-calculator',
        destination: '/freelance-income-calculator',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/freelance-calculator',
        destination: '/:locale/freelance-income-calculator',
        permanent: true,
      },
      {
        source: '/visa-checklist',
        destination: '/visa-checklist-generator',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/visa-checklist',
        destination: '/:locale/visa-checklist-generator',
        permanent: true,
      },
      {
        source: '/settlement-calculator',
        destination: '/final-settlement-calculator',
        permanent: true,
      },
      {
        source: '/:locale(en|ar|ur|tl|bn)/settlement-calculator',
        destination: '/:locale/final-settlement-calculator',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)

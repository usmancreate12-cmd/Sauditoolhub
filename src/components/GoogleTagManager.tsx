'use client'

import { useLoadAfterIdleOrInteraction } from '@/lib/useLoadAfterIdleOrInteraction'

declare global {
  interface Window {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }
}

export default function GoogleTagManager() {
  useLoadAfterIdleOrInteraction(() => {
    if (document.getElementById('google-analytics')) return

    const script = document.createElement('script')
    script.id = 'google-analytics'
    script.async = true
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-KREVP1RPEX'
    script.setAttribute('fetchpriority', 'low')
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args)
    }
    window.gtag('js', new Date())
    window.gtag('config', 'G-KREVP1RPEX', { page_path: window.location.pathname })
  }, 4000)

  return null
}

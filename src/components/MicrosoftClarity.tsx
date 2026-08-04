'use client'

import { useLoadAfterIdleOrInteraction } from '@/lib/useLoadAfterIdleOrInteraction'

declare global {
  interface Window {
    clarity?: ClarityFn
  }
}

type ClarityFn = {
  q?: unknown[][]
  (...args: unknown[]): void
}

export default function MicrosoftClarity() {
  useLoadAfterIdleOrInteraction(() => {
    if (document.getElementById('microsoft-clarity')) return

    const clarity: ClarityFn = ((...args: unknown[]) => {
      clarity.q = clarity.q || []
      clarity.q.push(args)
    }) as ClarityFn

    window.clarity = window.clarity || clarity

    const script = document.createElement('script')
    script.id = 'microsoft-clarity'
    script.async = true
    script.src = 'https://www.clarity.ms/tag/xukbgt4067'
    document.head.appendChild(script)
  }, 5000)

  return null
}

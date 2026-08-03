'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookieConsent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookieConsent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:max-w-md">
      <div className={cn(
        'glass rounded-2xl p-5 border border-white/10',
        'shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
      )}>
        <p className="text-base text-gray-200 leading-relaxed mb-4">
          We use cookies to enhance your experience and analyze our traffic. By continuing, you agree to our use of cookies.
        </p>
        <div className="flex items-center gap-3">
          <button
            onClick={accept}
            className="flex-1 rounded-xl bg-desert-primary px-4 min-h-[44px] text-sm font-bold text-white transition-all hover:bg-desert-primary-dim hover:shadow-[0_0_20px_rgba(0,212,170,0.25)] active:scale-95"
          >
            Accept All
          </button>
          <button
            onClick={decline}
            className="rounded-xl border border-white/10 px-4 min-h-[44px] text-sm font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white active:scale-95"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  )
}

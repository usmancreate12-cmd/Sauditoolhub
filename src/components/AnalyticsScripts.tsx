'use client'

import dynamic from 'next/dynamic'

const GoogleTagManager = dynamic(() => import('@/components/GoogleTagManager'), {
  ssr: false,
  loading: () => null,
})
const MicrosoftClarity = dynamic(() => import('@/components/MicrosoftClarity'), {
  ssr: false,
  loading: () => null,
})

export default function AnalyticsScripts() {
  return (
    <>
      <GoogleTagManager />
      <MicrosoftClarity />
    </>
  )
}
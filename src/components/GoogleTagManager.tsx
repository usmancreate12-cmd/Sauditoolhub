'use client'

import Script from 'next/script'

export default function GoogleTagManager() {
  return (
    <>
      <Script
        id="google-analytics"
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-KREVP1RPEX"
        fetchPriority="low"
      />
      <Script
        id="google-analytics-config"
        strategy="lazyOnload"
        fetchPriority="low"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-KREVP1RPEX', { page_path: window.location.pathname });`,
        }}
      />
    </>
  )
}
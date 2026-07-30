import { Metadata } from 'next'

export default function Head() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link rel="preload" as="image" href="/og-image.png" />
    </>
  )
}

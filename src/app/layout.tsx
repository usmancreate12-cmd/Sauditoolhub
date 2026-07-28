import type { Metadata } from 'next'
import { ThemeProvider } from '@/lib/theme'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sauditoolhub — Saudi Calculator Hub',
  description:
    'Free Saudi Arabia calculators — EOSB, fines, ZATCA, rent, and more. 100% free, private, no data stored.',
  verification: {
    google: 'n9K5SWrcesdymEwQgPG4m6GE6geoC6JXza1QW8xB0lE',
  },
  icons: { icon: '/favicon.ico' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0A0E1A] text-gray-100 antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}


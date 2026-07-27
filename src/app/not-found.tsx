import Link from 'next/link'
import { Search, ArrowLeft, Calculator } from 'lucide-react'

const popularTools = [
  { name: 'EOSB Calculator', href: '/eosb-calculator' },
  { name: 'Jawazat Fine Estimator', href: '/jawazat-fine-calculator' },
  { name: 'ZATCA Compliance Guide', href: '/zatca-checker' },
  { name: 'RETT Tax Calculator', href: '/rett-calculator' },
]

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-desert-surface">
        <Search className="h-10 w-10 text-desert-text-muted" />
      </div>
      <h1 className="mb-2 text-6xl font-bold text-desert-primary">404</h1>
      <h2 className="mb-3 text-xl font-semibold text-desert-text">Page Not Found</h2>
      <p className="mb-8 max-w-md text-sm text-desert-text-muted">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Try one of our popular tools below.
      </p>

      <div className="mb-8 grid w-full max-w-md gap-3 sm:grid-cols-2">
        {popularTools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="glass glass-hover flex items-center gap-2.5 rounded-xl px-4 py-3 text-left text-sm font-medium text-desert-text"
          >
            <Calculator className="h-4 w-4 shrink-0 text-desert-primary" />
            {tool.name}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="flex items-center gap-2 text-sm text-desert-primary transition-colors hover:text-desert-primary-dim"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>
    </div>
  )
}

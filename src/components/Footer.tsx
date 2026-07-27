import Link from 'next/link'
import { Calculator, Globe, ExternalLink } from 'lucide-react'

const categories = [
  {
    name: 'Expat & Visa Life',
    tools: [
      { name: 'EOSB Calculator', href: 'eosb-calculator' },
      { name: 'Jawazat Overstay Fine', href: 'jawazat-fine-calculator' },
      { name: 'Family Visa Optimizer', href: '#' },
      { name: 'Final Settlement', href: '#' },
    ],
  },
  {
    name: 'Business & HR',
    tools: [
      { name: 'ZATCA Compliance', href: '#' },
      { name: 'Nitaqat Simulator', href: '#' },
      { name: 'Freelance Income', href: '#' },
      { name: 'CR Cost Estimator', href: '#' },
    ],
  },
  {
    name: 'Finance & Real Estate',
    tools: [
      { name: 'Loan Eligibility', href: '#' },
      { name: 'Zakat Calculator', href: '#' },
      { name: 'RETT Tax Splitter', href: '#' },
      { name: 'Mortgage vs Rent', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-gray-700/30 mt-auto bg-[#0A0E1A]">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Calculator className="h-6 w-6 text-desert-primary" />
              <span className="text-lg font-bold text-white">HsabKSA</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Saudi Arabia&apos;s #1 free calculator hub. 23+ tools for expats, businesses, and residents. 100% free, private, no data stored.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="p-2 text-gray-400 hover:text-desert-primary transition-colors rounded-lg hover:bg-gray-800">
                <Globe className="h-4 w-4" />
              </a>
              <a href="#" className="p-2 text-gray-400 hover:text-desert-primary transition-colors rounded-lg hover:bg-gray-800">
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2-4: Category links */}
          {categories.map((cat) => (
            <div key={cat.name}>
              <h3 className="text-sm font-semibold text-white mb-3">{cat.name}</h3>
              <ul className="space-y-2">
                {cat.tools.map((tool) => (
                  <li key={tool.name}>
                    <Link
                      href={tool.href.startsWith('#') ? tool.href : `/${tool.href}`}
                      className="text-sm text-gray-400 hover:text-desert-primary transition-colors"
                    >
                      {tool.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-gray-700/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} HsabKSA. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-desert-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-desert-primary transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-desert-primary transition-colors">Disclaimer</Link>
          </div>
          <p className="text-xs text-gray-500">
            This is an informational tool only. Not legal or financial advice.
          </p>
        </div>
      </div>
    </footer>
  )
}

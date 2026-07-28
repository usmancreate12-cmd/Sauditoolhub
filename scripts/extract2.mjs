import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const guideDir = 'R:\\My software\\SaudiToolsHub\\saudi-calc-hub\\src\\app\\[locale]\\guide'
const outputFile = 'R:\\My software\\SaudiToolsHub\\saudi-calc-hub\\src\\data\\articles.ts'

const dirs = readdirSync(guideDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort()

function extractArticle(filePath, dirName) {
  const raw = readFileSync(filePath, 'utf-8')

  // Split into lines
  const lines = raw.split('\n')
  
  // Find EnContent function range
  let enStart = -1, enEnd = -1
  let arContentStart = -1
  let depth = 0
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    
    if (line.trimStart().startsWith('function EnContent()')) {
      enStart = i
    }
    
    if (line.trimStart().startsWith('function ArContent()')) {
      arContentStart = i
      break
    }
  }

  if (enStart === -1 || arContentStart === -1) {
    console.log(`  FAIL: could not find function boundaries in ${dirName}`)
    return null
  }

  // Extract EnContent body (lines between function EnContent() { and function ArContent())
  const enLines = []
  for (let i = enStart + 1; i < arContentStart; i++) {
    enLines.push(lines[i])
  }
  
  let jsx = enLines.join('\n')
  
  // Remove the leading `return (`, the trailing `)` and closing brace
  jsx = jsx.replace(/^\s*return\s*\(/, '')
  // Remove last ) and } 
  jsx = jsx.replace(/\);?\s*$/, '')
  jsx = jsx.replace(/\}\s*$/, '')
  
  // Extract FAQ data for EN
  const faqMatch = raw.match(/const faqsEn\s*=\s*\[([\s\S]*?)\]\s*\n/)
  let faqItems = []
  if (faqMatch) {
    const faqStr = faqMatch[1]
    const qaRegex = /\{question:\s*'([^']*)',\s*answer:\s*'([^']*)'\}/g
    let m
    while ((m = qaRegex.exec(faqStr)) !== null) {
      faqItems.push({ q: m[1].replace(/\\'/g, "'").replace(/\\n/g, ' '), a: m[2].replace(/\\'/g, "'").replace(/\\n/g, ' ') })
    }
  }

  return { jsx: jsx.trim(), faqItems, dirName }
}

function jsxToHtml(jsx, faqItems) {
  let html = jsx

  // Remove import statements that may have been captured
  html = html.replace(/import\s+.*?['"].*?['"];?\s*/g, '')
  
  // Replace GlassCard with div.glass
  html = html.replace(/<GlassCard>/g, '<div class="glass p-6 rounded-xl mb-8">')
  html = html.replace(/<\/GlassCard>/g, '</div>')

  // Replace {faqsEn.map(...)} with rendered FAQ
  html = html.replace(/\{faqsEn\.map\s*\([\s\S]*?\)\}/g, () => {
    if (!faqItems.length) return ''
    return faqItems.map(faq =>
      `<div class="not-prose glass p-4 rounded-xl mb-4"><h3 class="text-white font-semibold mb-2">${faq.q}</h3><p class="text-gray-400 text-sm">${faq.a}</p></div>`
    ).join('\n          ')
  })

  // Replace {faqsAr.map, faqsUr.map, faqsTl.map, faqsBn.map} with empty
  html = html.replace(/\{faqs(?:Ar|Ur|Tl|Bn)\.map\s*\([\s\S]*?\)\}/g, '')

  // Remove Lucide icon components
  html = html.replace(/<(Calculator|CheckCircle|ChevronRight|DollarSign|Building2|FileText|AlertTriangle|TrendingUp|Users|Shield|Briefcase|CreditCard|Landmark|Calendar|Clock)\s+className="[^"]*"\s*\/>/g, '')

  // Replace <Link href="...">text</Link> → <a href="...">text</a>
  html = html.replace(/<Link\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/Link>/g, '<a href="$1">$2</a>')

  // Handle self-closing Link
  html = html.replace(/<Link\s+[^>]*\/>/g, '')

  // Replace className with class
  html = html.replace(/\bclassName=/g, 'class=')

  // Remove JSX fragments
  html = html.replace(/<>\s*/g, '')
  html = html.replace(/\s*<\/>/g, '')

  // Replace {' '} with space
  html = html.replace(/\{' '\}/g, ' ')

  // Replace other JSX expressions like {post.readTime} etc - remove them
  html = html.replace(/\{[a-zA-Z_][a-zA-Z0-9_.]*\}/g, '')

  // Clean inline JS conditionals
  html = html.replace(/\{isRtl\s*\?\s*'rotate-180'\s*:\s*''\}/g, '')

  // Fix self-closing non-void HTML elements
  html = html.replace(/<(div|span|h1|h2|h3|h4|h5|h6|p|li|ul|ol|section|article|header|footer|main|nav|aside|strong|em|pre|code|blockquote)[^>]*\/>/g, '')

  // Clean up whitespace
  html = html.replace(/\n\s*\n/g, '\n')
  html = html.trim()

  return html
}

// Blog card data (source of truth)
const blogData = [
  { slug: 'eosb-end-of-service-benefit-saudi-arabia-2026', title: 'Complete Guide to EOSB in Saudi Arabia 2026', cat: 'expat', readTime: '12 min read', date: '2026-01-15' },
  { slug: 'jawazat-overstay-fine-calculator-saudi-arabia-2026', title: 'Complete Guide to Jawazat Overstay Fines 2026', cat: 'expat', readTime: '15 min read', date: '2026-01-22' },
  { slug: 'family-visa-dependent-fee-calculator-saudi-arabia-2026', title: 'Complete Guide to Family Visa & Dependent Fees 2026', cat: 'expat', readTime: '10 min read', date: '2026-02-05' },
  { slug: 'visa-checklist-documents-saudi-visas-2026', title: 'Complete Visa Document Checklist for Saudi Arabia 2026', cat: 'expat', readTime: '16 min read', date: '2026-07-28' },
  { slug: 'zatca-vat-einvoicing-compliance-saudi-arabia-2026', title: 'Complete Guide to ZATCA VAT & E-Invoicing (Fatoora) in Saudi Arabia 2026', cat: 'business', readTime: '17 min read', date: '2026-07-28' },
  { slug: 'nitaqat-saudization-ratios-saudi-arabia-2026', title: 'Complete Guide to Nitaqat Saudization Ratios & Bands in Saudi Arabia 2026', cat: 'business', readTime: '15 min read', date: '2026-07-28' },
  { slug: 'final-settlement-air-ticket-calculator-saudi-arabia-2026', title: 'Complete Guide to Final Settlement & Air Ticket in Saudi Arabia 2026', cat: 'expat', readTime: '14 min read', date: '2026-07-28' },
  { slug: 'sama-loan-eligibility-dbr-saudi-arabia-2026', title: 'SAMA Loan Guide: How to Calculate Your Home Loan in Saudi Arabia 2026', cat: 'finance', readTime: '11 min read', date: '2026-02-18' },
  { slug: 'zakat-calculation-guide-saudi-arabia-2026', title: 'Zakat Calculator Guide: How to Calculate Zakat in Saudi Arabia 2026', cat: 'finance', readTime: '14 min read', date: '2026-03-02' },
  { slug: 'salla-zid-ecommerce-profit-calculator-saudi-arabia-2026', title: 'Salla Profit Calculator Guide for E-Commerce in Saudi Arabia 2026', cat: 'business', readTime: '8 min read', date: '2026-03-28' },
  { slug: 'freelance-income-tax-guide-saudi-arabia-2026', title: 'Freelance Income Tax Guide for Saudi Arabia 2026', cat: 'business', readTime: '10 min read', date: '2026-04-10' },
  { slug: 'cr-cost-starting-business-saudi-arabia-2026', title: 'CR Cost Guide: Starting a Business in Saudi Arabia 2026', cat: 'business', readTime: '13 min read', date: '2026-04-22' },
  { slug: 'sip-mutual-fund-investment-guide-saudi-arabia-2026', title: 'SIP Calculator Guide: Building Wealth in Saudi Arabia 2026', cat: 'finance', readTime: '9 min read', date: '2026-05-05' },
  { slug: 'iban-validator-banking-guide-saudi-arabia-2026', title: 'IBAN Validator Guide: Safe Banking in Saudi Arabia 2026', cat: 'finance', readTime: '7 min read', date: '2026-05-18' },
  { slug: 'used-car-naql-malikiya-guide-saudi-arabia-2026', title: 'Used Car Price Guide: Buying a Car in Saudi Arabia 2026', cat: 'auto', readTime: '11 min read', date: '2026-06-01' },
  { slug: 'traffic-fine-saher-guide-saudi-arabia-2026', title: 'Traffic Fine Guide: Understanding Saudi Traffic Violations 2026', cat: 'auto', readTime: '12 min read', date: '2026-06-14' },
  { slug: 'sec-electricity-bill-guide-saudi-arabia-2026', title: 'SEC Bill Guide: Electricity Bill Estimator Saudi Arabia 2026', cat: 'auto', readTime: '8 min read', date: '2026-06-28' },
  { slug: 'bill-splitter-shared-apartment-guide-saudi-arabia-2026', title: 'Bill Splitter Guide: Splitting Expenses in Saudi Arabia 2026', cat: 'auto', readTime: '6 min read', date: '2026-07-10' },
  { slug: 'fuel-cost-mileage-guide-saudi-arabia-2026', title: 'Fuel Cost Guide: Calculating Fuel Expenses in Saudi Arabia 2026', cat: 'auto', readTime: '7 min read', date: '2026-07-24' },
  { slug: 'rett-real-estate-transaction-tax-guide-saudi-arabia-2026', title: 'RETT Guide: Real Estate Tax in Saudi Arabia 2026', cat: 'realEstate', readTime: '10 min read', date: '2026-08-05' },
  { slug: 'ejar-deposit-rental-guide-saudi-arabia-2026', title: 'Ejar Deposit Guide: Rental Deposit Calculator Saudi Arabia 2026', cat: 'realEstate', readTime: '9 min read', date: '2026-08-18' },
  { slug: 'mortgage-vs-rent-guide-saudi-arabia-2026', title: 'Mortgage vs Rent Guide: Making the Right Choice in Saudi Arabia 2026', cat: 'realEstate', readTime: '14 min read', date: '2026-09-01' },
  { slug: 'property-valuation-white-deed-guide-saudi-arabia-2026', title: 'Property Valuation Guide: Real Estate in Saudi Arabia 2026', cat: 'realEstate', readTime: '11 min read', date: '2026-09-14' },
]

// Build description map
const descriptions = {
  'eosb-end-of-service-benefit-saudi-arabia-2026': 'Learn how to calculate your End of Service Benefit under Saudi Labor Law. We cover Article 84, resignation rules, and common mistakes expats make when leaving their job.',
  'jawazat-overstay-fine-calculator-saudi-arabia-2026': 'Everything you need to know about Iqama and visa overstay fines in Saudi Arabia. Includes daily rates, flat penalties, and how to check your status online.',
  'family-visa-dependent-fee-calculator-saudi-arabia-2026': 'Plan your family sponsorship costs in Saudi Arabia. We break down Iqama fees, dependent fees, exit/re-entry visas, and work permit costs for families.',
  'visa-checklist-documents-saudi-visas-2026': 'Everything you need for your Saudi visa application: Family Visit, Work, Umrah, and Tourist visa document lists, attestation steps, application process, and common rejection reasons.',
  'zatca-vat-einvoicing-compliance-saudi-arabia-2026': 'Master ZATCA VAT and e-invoicing compliance: 15% VAT calculation, Phase 2 Fatoora rules, B2B vs B2C invoice requirements, and how to file VAT returns in Saudi Arabia.',
  'nitaqat-saudization-ratios-saudi-arabia-2026': 'Understand the Nitaqat color band system: Platinum, Green, Yellow, and Red. Learn how to calculate Saudization ratios, improve your company classification, and avoid compliance penalties.',
  'final-settlement-air-ticket-calculator-saudi-arabia-2026': 'Everything about final settlement when leaving your job in Saudi Arabia: EOSB, unpaid salary, unused leave pay, air ticket entitlement, and step-by-step calculation examples.',
  'sama-loan-eligibility-dbr-saudi-arabia-2026': 'Understand Saudi Arabia mortgage rules, SAMA interest rate guidelines, and how to estimate your monthly payments before applying for a home loan.',
  'zakat-calculation-guide-saudi-arabia-2026': 'A complete walkthrough of Zakat calculation for cash, gold, investments, and property. Learn nisab thresholds and common exemptions under Saudi law.',
  'salla-zid-ecommerce-profit-calculator-saudi-arabia-2026': 'Maximize your Salla store profitability. We cover commission structures, payment gateway fees, shipping costs, and hidden expenses new sellers miss.',
  'freelance-income-tax-guide-saudi-arabia-2026': 'How freelance income is taxed in Saudi Arabia, what deductions you can claim, and how to stay compliant with ZATCA as an independent contractor.',
  'cr-cost-starting-business-saudi-arabia-2026': 'Breakdown of commercial registration fees, chamber of commerce costs, professional licenses, and government fees for new businesses in KSA.',
  'sip-mutual-fund-investment-guide-saudi-arabia-2026': 'How Systematic Investment Plans work in Saudi Arabia. Compare mutual fund SIPs, expected returns, and how inflation impacts long-term savings.',
  'iban-validator-banking-guide-saudi-arabia-2026': 'Why IBAN validation matters for SAR transfers, how to spot fake IBANs, and what to do if your bank details are rejected during payments.',
  'used-car-naql-malikiya-guide-saudi-arabia-2026': 'Negotiation tips, market prices for popular models, registration fees, and inspection costs when buying a used car in Riyadh, Jeddah, or Dammam.',
  'traffic-fine-saher-guide-saudi-arabia-2026': 'Complete list of traffic violation codes, fine amounts, points system, and how to pay or appeal tickets through Absher and Najiz platforms.',
  'sec-electricity-bill-guide-saudi-arabia-2026': 'How SEC electricity tariffs work in Saudi Arabia, peak vs off-peak rates, and how to estimate your monthly bill before it arrives.',
  'bill-splitter-shared-apartment-guide-saudi-arabia-2026': 'Fair methods for splitting rent, utilities, and group trip costs among roommates and friends in Saudi Arabia. Includes templates and examples.',
  'fuel-cost-mileage-guide-saudi-arabia-2026': 'How to budget for fuel in Saudi Arabia, current petrol prices, fuel efficiency tips for expats, and long-distance travel cost estimates.',
  'rett-real-estate-transaction-tax-guide-saudi-arabia-2026': 'Who pays real estate transfer tax, current rates, exemptions for first-time buyers, and how to calculate the tax when buying property in KSA.',
  'ejar-deposit-rental-guide-saudi-arabia-2026': 'How Ejar deposit calculations work, standard deposit amounts by city, how to get your deposit back, and legal protections for tenants in Saudi Arabia.',
  'mortgage-vs-rent-guide-saudi-arabia-2026': 'Compare the true cost of buying vs renting in Riyadh, Jeddah, and Dammam. We break down mortgage payments, maintenance costs, and opportunity cost.',
  'property-valuation-white-deed-guide-saudi-arabia-2026': 'Factors that affect property values in Saudi Arabia, how to get an accurate valuation, and what buyers and sellers need to know in 2026.',
}

const results = []
let slugIndex = 0

for (const dir of dirs) {
  const filePath = join(guideDir, dir, 'page.tsx')
  if (!existsSync(filePath)) {
    console.log(`SKIP: ${dir} (no page.tsx)`)
    continue
  }

  // Find blog data for this dir
  const bd = blogData.find(b => b.slug === dir)
  if (!bd) {
    console.log(`SKIP: ${dir} (no blog data)`)
    continue
  }

  const article = extractArticle(filePath, dir)
  if (!article) {
    console.log(`FAIL: ${dir}`)
    continue
  }

  const html = jsxToHtml(article.jsx, article.faqItems)
  const desc = descriptions[dir] || `Complete guide to ${bd.title.toLowerCase()}`
  
  results.push({
    slug: dir,
    title: bd.title,
    cat: bd.cat,
    readTime: bd.readTime,
    date: bd.date,
    description: desc,
    html
  })
  console.log(`OK: ${dir} (${html.length} chars)`)
}

// Generate articles.ts
let tsContent = `export type Article = {
  slug: string
  category: string
  readTime: string
  date: string
  title: { en: string; ar: string; ur: string; tl: string; bn: string }
  description: { en: string; ar: string; ur: string; tl: string; bn: string }
  content: { en: string; ar: string; ur: string; tl: string; bn: string }
}

export const articles: Article[] = [
`

for (const r of results) {
  const safeHtml = r.html
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')

  const safeTitle = r.title.replace(/'/g, "\\'")
  const safeDesc = r.description.replace(/'/g, "\\'")

  tsContent += `  {
    slug: '${r.slug}',
    category: '${r.cat}',
    readTime: '${r.readTime}',
    date: '${r.date}',
    title: { en: '${safeTitle}', ar: '', ur: '', tl: '', bn: '' },
    description: { en: '${safeDesc}', ar: '', ur: '', tl: '', bn: '' },
    content: { en: \`${safeHtml}\`, ar: '', ur: '', tl: '', bn: '' }
  },
`
}

tsContent += `]\n`

writeFileSync(outputFile, tsContent, 'utf-8')
console.log(`\nDONE: ${results.length} articles written to ${outputFile}`)

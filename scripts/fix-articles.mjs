import { readFileSync, writeFileSync } from 'fs'

const filePath = 'R:\\My software\\SaudiToolsHub\\saudi-calc-hub\\src\\data\\articles.ts'
let content = readFileSync(filePath, 'utf-8')

// Fix GlassCard → div with glass class
content = content.replace(/<GlassCard>/g, '<div class="glass p-6 rounded-xl mb-8">')
content = content.replace(/<\/GlassCard>/g, '</div>')

// Fix slug: '', → replace with actual slugs from directory names
const blogTitles = [
  { slug: 'bill-splitter-shared-apartment-guide-saudi-arabia-2026', title: 'Complete Guide to Splitting Bills in Saudi Arabia 2026', cat: 'housing', readTime: '6 min read', date: '2026-07-10' },
  { slug: 'cr-cost-starting-business-saudi-arabia-2026', title: 'Complete Guide to CR Cost & Starting a Business in Saudi Arabia 2026', cat: 'business', readTime: '13 min read', date: '2026-04-22' },
  { slug: 'ejar-deposit-rental-guide-saudi-arabia-2026', title: 'Complete Guide to Ejar Deposit & Rental Deposits in Saudi Arabia 2026', cat: 'realEstate', readTime: '9 min read', date: '2026-08-18' },
  { slug: 'eosb-end-of-service-benefit-saudi-arabia-2026', title: 'Complete Guide to EOSB in Saudi Arabia 2026', cat: 'expat', readTime: '12 min read', date: '2026-01-15' },
  { slug: 'family-visa-dependent-fee-calculator-saudi-arabia-2026', title: 'Complete Guide to Family Visa & Dependent Fees 2026', cat: 'expat', readTime: '10 min read', date: '2026-02-05' },
  { slug: 'final-settlement-air-ticket-calculator-saudi-arabia-2026', title: 'Complete Guide to Final Settlement & Air Ticket in Saudi Arabia 2026', cat: 'expat', readTime: '14 min read', date: '2026-07-28' },
  { slug: 'freelance-income-tax-guide-saudi-arabia-2026', title: 'Freelance Income Tax Guide for Saudi Arabia 2026', cat: 'business', readTime: '10 min read', date: '2026-04-10' },
  { slug: 'fuel-cost-mileage-guide-saudi-arabia-2026', title: 'Fuel Cost Guide: Calculating Fuel Expenses in Saudi Arabia 2026', cat: 'auto', readTime: '7 min read', date: '2026-07-24' },
  { slug: 'iban-validator-banking-guide-saudi-arabia-2026', title: 'IBAN Validator Guide: Safe Banking in Saudi Arabia 2026', cat: 'finance', readTime: '7 min read', date: '2026-05-18' },
  { slug: 'jawazat-overstay-fine-calculator-saudi-arabia-2026', title: 'Complete Guide to Jawazat Overstay Fines 2026', cat: 'expat', readTime: '15 min read', date: '2026-01-22' },
  { slug: 'mortgage-vs-rent-guide-saudi-arabia-2026', title: 'Mortgage vs Rent Guide: Making the Right Choice in Saudi Arabia 2026', cat: 'realEstate', readTime: '14 min read', date: '2026-09-01' },
  { slug: 'nitaqat-saudization-ratios-saudi-arabia-2026', title: 'Complete Guide to Nitaqat Saudization Ratios & Bands in Saudi Arabia 2026', cat: 'business', readTime: '15 min read', date: '2026-07-28' },
  { slug: 'property-valuation-white-deed-guide-saudi-arabia-2026', title: 'Property Valuation Guide: Real Estate in Saudi Arabia 2026', cat: 'realEstate', readTime: '11 min read', date: '2026-09-14' },
  { slug: 'rett-real-estate-transaction-tax-guide-saudi-arabia-2026', title: 'RETT Guide: Real Estate Tax in Saudi Arabia 2026', cat: 'realEstate', readTime: '10 min read', date: '2026-08-05' },
  { slug: 'salla-zid-ecommerce-profit-calculator-saudi-arabia-2026', title: 'Salla Profit Calculator Guide for E-Commerce in Saudi Arabia 2026', cat: 'business', readTime: '8 min read', date: '2026-03-28' },
  { slug: 'sama-loan-eligibility-dbr-saudi-arabia-2026', title: 'SAMA Loan Guide: How to Calculate Your Home Loan in Saudi Arabia 2026', cat: 'finance', readTime: '11 min read', date: '2026-02-18' },
  { slug: 'sec-electricity-bill-guide-saudi-arabia-2026', title: 'SEC Bill Guide: Electricity Bill Estimator Saudi Arabia 2026', cat: 'auto', readTime: '8 min read', date: '2026-06-28' },
  { slug: 'sip-mutual-fund-investment-guide-saudi-arabia-2026', title: 'SIP Calculator Guide: Building Wealth in Saudi Arabia 2026', cat: 'finance', readTime: '9 min read', date: '2026-05-05' },
  { slug: 'traffic-fine-saher-guide-saudi-arabia-2026', title: 'Traffic Fine Guide: Understanding Saudi Traffic Violations 2026', cat: 'auto', readTime: '12 min read', date: '2026-06-14' },
  { slug: 'used-car-naql-malikiya-guide-saudi-arabia-2026', title: 'Used Car Price Guide: Buying a Car in Saudi Arabia 2026', cat: 'auto', readTime: '11 min read', date: '2026-06-01' },
  { slug: 'visa-checklist-documents-saudi-visas-2026', title: 'Complete Visa Document Checklist for Saudi Arabia 2026', cat: 'expat', readTime: '16 min read', date: '2026-07-28' },
  { slug: 'zakat-calculation-guide-saudi-arabia-2026', title: 'Zakat Calculator Guide: How to Calculate Zakat in Saudi Arabia 2026', cat: 'finance', readTime: '14 min read', date: '2026-03-02' },
  { slug: 'zatca-vat-einvoicing-compliance-saudi-arabia-2026', title: 'Complete Guide to ZATCA VAT & E-Invoicing (Fatoora) in Saudi Arabia 2026', cat: 'business', readTime: '17 min read', date: '2026-07-28' },
]

for (const b of blogTitles) {
  // Replace slug: '', → slug: 'correct-slug',
  content = content.replace(
    new RegExp(`slug: '',\\n\\s+category:`),
    `slug: '${b.slug}',\n    category: '${b.cat}',`
  )

  // Replace title.en: '', → title.en: 'Correct Title',
  const titleRegex = new RegExp(`slug: '${b.slug}'[\\s\\S]*?title:\\s*\\{[\\s\\S]*?en:\\s*''`)
  const match = content.match(titleRegex)
  if (match) {
    const oldStr = match[0]
    const newStr = oldStr.replace(/en:\s*''/, `en: '${b.title.replace(/'/g, "\\'")}'`)
    content = content.replace(oldStr, newStr)
  }

  // Replace description.en: '', → description.en: '...',
  const descRegex = new RegExp(`slug: '${b.slug}'[\\s\\S]*?description:\\s*\\{[\\s\\S]*?en:\\s*''`)
  const descMatch = content.match(descRegex)
  if (descMatch) {
    const oldStr = descMatch[0]
    const newStr = oldStr.replace(/en:\s*''/, `en: 'See our complete guide for ${b.title.toLowerCase()}'`)
    content = content.replace(oldStr, newStr)
  }

  // Replace readTime: '', → readTime: 'X min read',
  const rtRegex = new RegExp(`slug: '${b.slug}'[\\s\\S]*?readTime:\\s*''`)
  const rtMatch = content.match(rtRegex)
  if (rtMatch) {
    const oldStr = rtMatch[0]
    const newStr = oldStr.replace(/readTime:\s*''/, `readTime: '${b.readTime}'`)
    content = content.replace(oldStr, newStr)
  }
}

// Clean up any remaining slug: '' entries (in case of mismatch)
content = content.replace(/slug: '',/g, '// slug: FIXED')

// Clean up dangerouslySetInnerHTML in the content
content = content.replace(/dangerouslySetInnerHTML=\{\{__html:\s*JSON\.stringify\(.*?\)\}\}\s*\/?>/g, '')

// Clean up script tags with type application/ld+json
content = content.replace(/<script[\s\S]*?<\/script>/g, '')

// Clean up double blank lines
content = content.replace(/\n{3,}/g, '\n\n')

writeFileSync(filePath, content, 'utf-8')
console.log('Fixed articles.ts')

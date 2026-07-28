import { readFileSync } from 'fs'

const data = readFileSync('src/data/articles.ts', 'utf-8')
const slugs = [
  'sec-electricity-bill-guide-saudi-arabia-2026',
  'rett-real-estate-transaction-tax-guide-saudi-arabia-2026',
  'property-valuation-white-deed-guide-saudi-arabia-2026',
  'bill-splitter-shared-apartment-guide-saudi-arabia-2026',
  'mortgage-vs-rent-guide-saudi-arabia-2026',
  'fuel-cost-mileage-guide-saudi-arabia-2026',
  'ejar-deposit-rental-guide-saudi-arabia-2026',
]

for (const slug of slugs) {
  const idx = data.indexOf(`slug: '${slug}'`)
  if (idx === -1) { console.log(slug + ': NOT FOUND'); continue }
  
  const chunk = data.substring(idx, idx + 3000)
  
  // Find content.en value
  const contentStart = chunk.indexOf("content: { en: `")
  if (contentStart === -1) {
    console.log(slug + ': content.en NOT FOUND')
    continue
  }
  
  const contentValStart = contentStart + "content: { en: `".length
  const contentValEnd = chunk.indexOf("`", contentValStart)
  if (contentValEnd === -1) {
    console.log(slug + ': content.en unclosed template literal')
    continue
  }
  
  const enContent = chunk.substring(contentValStart, contentValEnd)
  console.log(`${slug}: content.en length = ${enContent.length} chars`)
  console.log(`  First 100 chars: ${enContent.substring(0, 100)}`)
  if (enContent.trim().length === 0) {
    console.log(`  *** EMPTY CONTENT ***`)
  }
  console.log()
}

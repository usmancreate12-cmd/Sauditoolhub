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

// Find each article block
for (const slug of slugs) {
  const idx = data.indexOf(`slug: '${slug}'`)
  if (idx === -1) { console.log(slug + ': NOT FOUND'); continue }
  
  // Find the next "slug:" after this to mark the end
  const nextIdx = data.indexOf("\n  {\n    slug:", idx + 10)
  const blockEnd = nextIdx === -1 ? data.length : nextIdx
  const block = data.substring(idx, blockEnd)
  
  // Find content.en template literal
  const enMatch = block.match(/content:\s*\{[\s\S]*?en:\s*`([\s\S]*)`\s*,/);
  if (!enMatch) {
    // Try without trailing comma
    const enMatch2 = block.match(/en:\s*`([\s\S]*)`\s*\n/);
    if (enMatch2) {
      console.log(`${slug}: content.en length = ${enMatch2[1].length} chars`)
      if (enMatch2[1].trim().length === 0) console.log(`  *** EMPTY ***`)
      else console.log(`  OK - has content`)
    } else {
      console.log(`${slug}: could not match content.en template literal`)
      // Show end of block
      console.log(`  Block ends: ...${block.substring(block.length - 200)}`)
    }
  } else {
    console.log(`${slug}: content.en length = ${enMatch[1].length} chars`)
    if (enMatch[1].trim().length === 0) console.log(`  *** EMPTY ***`)
    else console.log(`  OK - has content`)
  }
}

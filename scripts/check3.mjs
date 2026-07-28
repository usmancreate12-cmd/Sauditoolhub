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
  
  const nextIdx = data.indexOf("\n  {\n    slug:", idx + 10)
  const blockEnd = nextIdx === -1 ? data.length : nextIdx
  const block = data.substring(idx, blockEnd)
  
  // Check for unescaped backticks or ${} inside template literals
  // First find content.en block
  const enMatch = block.match(/en:\s*`([\s\S]*)`\s*,/)
  if (!enMatch) {
    console.log(`${slug}: cannot parse content.en`)
    continue
  }
  
  const rawContent = enMatch[1]
  
  // Check for issues
  const hasUnescapedBacktick = (rawContent.match(/[^\\]`/g) || []).length > 0
  const hasDollarBrace = rawContent.includes('${')
  
  console.log(`${slug}: ${rawContent.length} chars`)
  if (hasUnescapedBacktick) console.log(`  WARNING: unescaped backtick`)
  if (hasDollarBrace) console.log(`  WARNING: unescaped \${}`)
  
  // Check what the article content starts with
  console.log(`  Starts: ${rawContent.substring(0, 100).replace(/\n/g, '\\n')}`)
  console.log(`  Ends:   ${rawContent.substring(rawContent.length - 100).replace(/\n/g, '\\n')}`)
  console.log()
}

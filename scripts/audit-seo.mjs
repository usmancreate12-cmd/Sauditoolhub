import { readFileSync, writeFileSync } from 'fs'

const data = readFileSync('src/data/articles.ts', 'utf-8')

// Find all article blocks by their slug positions
function getArticleBlock(slug) {
  const idx = data.indexOf(`slug: '${slug}'`)
  if (idx === -1) return null
  const nextIdx = data.indexOf('\n  {\n    slug:', idx + 10)
  return data.substring(idx, nextIdx === -1 ? undefined : nextIdx)
}

// Analyze headings used in an article block
function analyzeHeadings(block) {
  const contentMatch = block.match(/en:\s*`([\s\S]*)`\s*,/)
  if (!contentMatch) return null
  const content = contentMatch[1]
  
  const h1s = content.match(/<h1[^>]*>/g) || []
  const h2s = content.match(/<h2[^>]*>/g) || []
  const h3s = content.match(/<h3[^>]*>/g) || []
  const h4s = content.match(/<h4[^>]*>/g) || []
  
  // Find pseudo-headings (p or strong used as headings)
  const strongAsH = content.match(/<(p|strong)[^>]*>\s*(?:<strong[^>]*>)?\s*(What|How|Why|When|Where|Who|The |Understanding|A Complete|FAQs?|Conclusion|Introduction|Overview|Types?|Steps?|Benefits?|Example|Examples?|Common |Key |Tips?|Best |Guide|Everything|Learn|Master|Compare)/gi) || []
  
  return {
    h1Count: h1s.length,
    h2Count: h2s.length,
    h3Count: h3s.length,
    h4Count: h4s.length,
    pseudoHeadings: strongAsH.length,
    contentLength: content.length
  }
}

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
  const block = getArticleBlock(slug)
  if (!block) { console.log(`${slug}: NOT FOUND`); continue }
  const analysis = analyzeHeadings(block)
  if (!analysis) { console.log(`${slug}: CANNOT PARSE`); continue }
  
  console.log(`${slug}:`)
  console.log(`  Content length: ${analysis.contentLength} chars`)
  console.log(`  <h1>: ${analysis.h1Count}, <h2>: ${analysis.h2Count}, <h3>: ${analysis.h3Count}, <h4>: ${analysis.h4Count}`)
  console.log(`  Pseudo-headings (<p>/<strong> used as heading): ${analysis.pseudoHeadings}`)
  console.log()
}

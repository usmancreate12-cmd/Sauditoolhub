import { readFileSync } from 'fs'

const data = readFileSync('src/data/articles.ts', 'utf-8')

const slug = 'sec-electricity-bill-guide-saudi-arabia-2026'
const idx = data.indexOf(`slug: '${slug}'`)
const nextIdx = data.indexOf('\n  {\n    slug:', idx + 10)
const block = data.substring(idx, nextIdx === -1 ? undefined : nextIdx)

console.log('=== First 500 chars ===')
console.log(block.substring(0, 500))
console.log('\n=== Last 300 chars ===')
console.log(block.substring(block.length - 300))

console.log('\nHas <script tag:', /<script/i.test(block))
console.log('Has dangerouslySetInnerHTML:', /dangerouslySetInnerHTML/i.test(block))
console.log('Has JSX fragment <>:', /<>/.test(block))

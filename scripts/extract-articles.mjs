import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs'
import { join } from 'path'

const guideDir = 'R:\\My software\\SaudiToolsHub\\saudi-calc-hub\\src\\app\\[locale]\\guide'
const outputFile = 'R:\\My software\\SaudiToolsHub\\saudi-calc-hub\\src\\data\\articles.ts'

const dirs = readdirSync(guideDir, { withFileTypes: true })
  .filter(d => d.isDirectory())
  .map(d => d.name)
  .sort()

function extractEnContent(filePath) {
  const content = readFileSync(filePath, 'utf-8')

  // Find EnContent function start
  const enMatch = content.match(/function EnContent\(\)\s*\{[\s\S]*?(?=\nfunction (?:Ar|Ur|Tl|Bn)Content)/)
  if (!enMatch) return null

  let jsx = enMatch[0]
  
  // Remove the "function EnContent() {" header and trailing brace
  jsx = jsx.replace(/^function EnContent\(\)\s*\{/, '')
  // Remove the last closing brace (that belongs to the function)
  jsx = jsx.replace(/\}\s*$/, '')

  // Extract FAQ data for EN
  const faqMatch = content.match(/const faqsEn\s*=\s*\[([\s\S]*?)\]\s*\n\s*(?:const faqsAr|const articleSchemaEn|function)/)
  let faqItems = []
  if (faqMatch) {
    const faqStr = faqMatch[1]
    const qaRegex = /\{question:\s*'([^']*)',\s*answer:\s*'([^']*)'\}/g
    let m
    while ((m = qaRegex.exec(faqStr)) !== null) {
      faqItems.push({ q: m[1].replace(/\\'/g, "'"), a: m[2].replace(/\\'/g, "'") })
    }
  }

  // Find metadata
  const metaMatch = content.match(/const title.*?\n.*?(?=const description|const isDefault)/)
  const titleEnMatch = content.match(/title\s*=\s*isAr\s*\?.*?\s*:\s*isUr\s*\?.*?\s*:\s*isTl\s*\?.*?\s*:\s*isBn\s*\?.*?\s*:\s*'([^']+)'/)
  const descEnMatch = content.match(/description\s*=\s*isAr\s*\?.*?\s*:\s*isUr\s*\?.*?\s*:\s*isTl\s*\?.*?\s*:\s*isBn\s*\?.*?\s*:\s*'([^']+)'/)

  const title = titleEnMatch ? titleEnMatch[1]
    : content.match(/headline:\s*'Complete Guide[^']*'/)?.toString().replace(/.*?'/, '').replace(/'.*$/, '') || ''
  const description = descEnMatch ? descEnMatch[1]
    : content.match(/description:\s*'[^']*?'/)?.toString().replace(/.*?: '/, '').replace(/',?$/, '') || ''

  // Extract slug from canonical
  const slugMatch = content.match(/canonical.*?guide\/([^'"]+)/)
  const slug = slugMatch ? slugMatch[1] : ''

  // Extract publishedTime
  const dateMatch = content.match(/publishedTime:\s*'([^']+)'/)
  const publishedDate = dateMatch ? dateMatch[1] : '2026-01-01'

  // Get category and readTime from the file content
  const categoryMatch = content.match(/category:\s*'([^']+)'/)
  const readTimeMatch = content.match(/readTime:\s*(\d+)/)

  // Convert JSX to HTML
  let html = jsx

  // Remove import statements that got captured
  html = html.replace(/import\s+.*?['"].*?['"];?\s*/g, '')
  
  // Replace {faqsEn.map(...)} with actual FAQ items rendered
  html = html.replace(/\{faqsEn\.map\s*\(.*?\)\}/gs, () => {
    if (!faqItems.length) return ''
    return faqItems.map(faq =>
      `<div class="not-prose glass p-4 rounded-xl mb-4"><h3 class="text-white font-semibold mb-2">${faq.q}</h3><p class="text-gray-400 text-sm">${faq.a}</p></div>`
    ).join('\n          ')
  })

  // Replace Lucide icon components with text
  html = html.replace(/<Calculator\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<CheckCircle\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<ChevronRight\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<DollarSign\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Building2\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<FileText\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<AlertTriangle\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<TrendingUp\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Users\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Shield\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Briefcase\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<CreditCard\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Landmark\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Calendar\s+className="[^"]*"\s*\/>/g, '')
  html = html.replace(/<Clock\s+className="[^"]*"\s*\/>/g, '')

  // Replace <Link href="...">text</Link> with <a href="...">text</a>
  html = html.replace(/<Link\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/Link>/g, '<a href="$1">$2</a>')

  // Replace className with class
  html = html.replace(/\bclassName=/g, 'class=')

  // Remove JSX fragments
  html = html.replace(/<>\s*/g, '')
  html = html.replace(/\s*<\/>/g, '')

  // Replace {' '} with space
  html = html.replace(/\{' '\}/g, ' ')

  // Replace JS curly brace expressions that aren't JSX
  html = html.replace(/\{([^{}]+)\}/g, (match, expr) => {
    const trimmed = expr.trim()
    if (trimmed.startsWith('faqs')) return match // Skip FAQ map expressions
    if (trimmed.includes('key=')) return '' // Remove key props
    if (/^\d+$/.test(trimmed)) return trimmed // Numbers
    return match // Leave others
  })

  // Clean up self-closing tags that aren't void elements in HTML
  html = html.replace(/<\/div>\s*<\/div>/g, '</div>')

  // Clean up excessive whitespace
  html = html.replace(/\n\s*\n/g, '\n')
  html = html.trim()

  return { html, title, description, slug, publishedDate, category: '', readTime: '' }
}

const articles = []
let id = 1

for (const dir of dirs) {
  const filePath = join(guideDir, dir, 'page.tsx')
  if (!existsSync(filePath)) {
    console.log(`SKIP: ${dir} (no page.tsx)`)
    continue
  }
  const result = extractEnContent(filePath)
  if (!result) {
    console.log(`FAIL: ${dir}`)
    continue
  }
  articles.push({
    id: id++,
    slug: dir,
    ...result
  })
  console.log(`OK: ${dir} (${result.html.length} chars)`)
}

// Generate articles.ts
let tsContent = `import { Calculator, DollarSign, Building2, FileText, AlertTriangle, CheckCircle, TrendingUp, Users, Shield, Briefcase, CreditCard, Landmark, Calendar, Clock } from 'lucide-react'

export type Article = {
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

for (const a of articles) {
  const safeHtml = a.html
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\${/g, '\\${')

  tsContent += `  {
    slug: '${a.slug}',
    category: '${a.category || ''}',
    readTime: '${a.readTime || ''}',
    date: '${a.publishedDate}',
    title: {
      en: '${a.title.replace(/'/g, "\\'")}',
      ar: '', ur: '', tl: '', bn: ''
    },
    description: {
      en: '${a.description.replace(/'/g, "\\'")}',
      ar: '', ur: '', tl: '', bn: ''
    },
    content: {
      en: \`${safeHtml}\`,
      ar: '', ur: '', tl: '', bn: ''
    }
  },
`
}

tsContent += `]\n`

writeFileSync(outputFile, tsContent, 'utf-8')
console.log(`\\nDONE: ${articles.length} articles written to ${outputFile}`)

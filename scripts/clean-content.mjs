import { readFileSync, writeFileSync } from 'fs'

let data = readFileSync('src/data/articles.ts', 'utf-8')

// Remove all script tags from content (JSON-LD is handled by the dynamic route component)
data = data.replace(/<script\b[^<]*(?:<\/script>|\/>)/gi, '')

// Remove dangerouslySetInnerHTML JSX artifacts
data = data.replace(/\sdangerouslySetInnerHTML=\{\{[^}]*\}\}\s*\/?>/g, '>')

// Remove empty script remnants
data = data.replace(/<script[^>]*>\s*<\/script>/g, '')

// Fix self-closing div tags (invalid HTML)
data = data.replace(/<(div|span|section|article|header|footer|nav|aside|main)>([^<]*)<\/\1>/g, '<$1>$2</$1>')

// Remove JSX fragments <>
data = data.replace(/<>\s*/g, '')
data = data.replace(/\s*<\/>/g, '')

// Clean up double blank lines
data = data.replace(/\n{3,}/g, '\n\n')

writeFileSync('src/data/articles.ts', data)
console.log('Cleaned up JSX artifacts from articles.ts')

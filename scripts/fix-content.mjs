import { readFileSync, writeFileSync } from 'fs'

let data = readFileSync('src/data/articles.ts', 'utf-8')

// Remove trailing ) right before closing template literal
data = data.replace(/\)`\s*,/g, '`,')

// Remove leading <article> and trailing </article> since the page already wraps in <article>
data = data.replace(/`<article>(\s*)/g, '`$1')
data = data.replace(/(\s*)<\/article>\s*`/g, '$1`')

// Remove empty script/handlebar remnants
data = data.replace(/^\s*\n/gm, '')

writeFileSync('src/data/articles.ts', data)
console.log('Fixed article wrappers and trailing )')

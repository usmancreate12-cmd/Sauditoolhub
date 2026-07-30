import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const output = join(__dirname, '..', 'public', 'og-image.png')

const width = 1200
const height = 630

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0A0E1A"/>
      <stop offset="50%" style="stop-color:#0f1525"/>
      <stop offset="100%" style="stop-color:#1a1a2e"/>
    </linearGradient>
    <linearGradient id="glow" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#00D4AA;stop-opacity:0.15"/>
      <stop offset="100%" style="stop-color:#FF6B35;stop-opacity:0.08"/>
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)"/>
  <rect width="${width}" height="${height}" fill="url(#glow)"/>
  
  <circle cx="200" cy="150" r="250" fill="#00D4AA" opacity="0.04"/>
  <circle cx="1000" cy="500" r="300" fill="#FF6B35" opacity="0.04"/>
  
  <text x="600" y="220" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="800" fill="#FFFFFF">
    SaudiToolHub
  </text>
  <text x="600" y="280" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="22" fill="#8B95A8">
    Free Saudi Calculators &amp; Guides 2026
  </text>
  
  <line x1="400" y1="310" x2="800" y2="310" stroke="#00D4AA" stroke-width="2" opacity="0.3"/>
  
  <text x="600" y="360" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="15" fill="#6B7280">
    EOSB · ZATCA VAT · Traffic Fines · Loan · Zakat · RETT · Iqama
  </text>
  <text x="600" y="390" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#6B7280">
    English · العربية · اردو · Tagalog · বাংলা
  </text>

  <rect x="460" y="430" width="280" height="50" rx="25" fill="#00D4AA" opacity="0.9"/>
  <text x="600" y="462" text-anchor="middle" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="600" fill="#0A0E1A">
    sauditoolhub.com
  </text>
</svg>
`

await sharp(Buffer.from(svg)).png().toFile(output)
console.log('OG image created at', output)

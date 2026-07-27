# DESIGN.md — HsabKSA UI/UX, SEO & Technical Architecture

---

## DESIGN SYSTEM: "Desert Aurora"

---

## 1. COLOR PALETTE

### Dark Mode: "Midnight Desert" (Primary)
| Token | Hex | Usage |
|---|---|---|
| Background Base | `#0A0E1A` | Page background |
| Surface Cards | `#131825` | Cards, modals, dropdowns (subtle gradient overlay) |
| Primary Accent | `#00D4AA` | Electric Teal — buttons, links, active states |
| Secondary Accent | `#FF6B35` | Desert Sunset Orange — energy, action elements |
| Gold Highlight | `#FFD700` | Holographic shimmer effect on premium elements |
| Text Primary | `#E8EEF2` | Soft white body text |
| Text Secondary | `#8B95A8` | Muted blue-gray for secondary text |
| Gradient Mesh | `#00D4AA → #8B5CF6 → #FF6B35` | Animated background blobs (opacity 15%, blur 100px, 20s loop) |

### Light Mode: "Golden Sand"
| Token | Hex | Usage |
|---|---|---|
| Background Base | `#FAF9F6` | Warm off-white page background |
| Surface Cards | `#FFFFFF` | Cards with subtle sand texture overlay |
| Primary Accent | `#0891B2` | Deep Ocean Teal — professional |
| Secondary Accent | `#EA580C` | Burnt Orange — warm and inviting |
| Gold Highlight | `#D97706` | Rich amber gold |
| Text Primary | `#1C1917` | Warm black |
| Text Secondary | `#78716C` | Warm gray |
| Gradient Mesh | `#D97706 → #0891B2 → #E11D48` | Subtle sand dune waves (opacity 8%, blur 80px) |

### Unique: Holographic Gold
Gold elements (`#FFD700` / `#D97706`) use a moving gradient that shifts based on mouse position, creating a premium Saudi gold-souq feel.

---

## 2. CUSTOM CURSOR INTERACTIONS

### Default Cursor
- 8px teal circle, `mix-blend-mode: difference`
- Smooth trailing effect (200ms delay)

### 5 Hover States
| Element | Cursor Behavior |
|---|---|
| Buttons | Expands to 40px, fills teal, shows "CLICK" text |
| Links | Becomes arrow with magnetic pull |
| Input Fields | Becomes blinking vertical line |
| Result Cards | Becomes sparkle icon with particle trail |
| Sliders | Becomes grip icon with haptic animation |

### Magnetic Effect
Buttons and cards shift 10px toward cursor within 50px radius — creates a living, breathing interface.

### Mouse Trail
5 fading dots, each a different palette color, fade over 1s. Desktop only.

---

## 3. BUTTON ANIMATIONS

| Variant | Behavior |
|---|---|
| Primary (Calculate) | `#00D4AA` bg, white text, liquid-fill hover (bottom→top, 0.4s bounce) |
| Secondary (Reset/Share) | Glassmorphism (`backdrop-blur: 10px`), border `rgba(255,255,255,0.2)`, hover fills 20% opacity |
| Click Ripple | Orange-colored ripple from click point |

**Unique — Liquid Fill:** On hover, button fills from bottom to top like liquid rising (0.4s cubic-bezier bounce).

---

## 4. CARD & COMPONENT ANIMATIONS

### Glassmorphism
```css
.glass {
  background: rgba(19, 24, 39, 0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
}
```

### 3D Tilt Effect
- All cards tilt based on mouse position (max 5deg on X/Y)
- Resets smoothly on mouse leave
- Creates depth and interactivity

### Input Cards
Fade in with stagger. Focus state: glow ring with `#00D4AA`.

### Result Cards
Scale in with bounce. Number counter ticks up on appear.

---

## 5. SCROLL ANIMATIONS (Cinematic)

| Section | Animation |
|---|---|
| Hero | Word-by-word text reveal (0.1s stagger). Gradient mesh loops 20s. Floating geometric shapes with parallax. |
| Category Grid | Cards fade-in from bottom, 0.15s stagger. Hover: lift + shadow deepen + icon 360° rotate. |
| Tool Pages | Input slides in from left, result from right — meet with "handshake" animation. |

### Scroll Progress Indicator
Thin gradient bar (teal → orange → gold) across top of page. Pulses at 100%.

---

## 6. CULTURAL ELEMENTS

- **Islamic Geometric Patterns:** 3% opacity animated patterns in background, only visible on hover/scroll
- **Arabic Calligraphy Accents:** Section headers with calligraphy-inspired underlines, stroke-dasharray draw-on-scroll
- **Desert-Inspired Gradients:** Warm sand (light mode), cool night sky (dark mode)

---

## 7. MICRO-INTERACTIONS

| Event | Animation |
|---|---|
| Number Counter | Counts 0 → value over 1.5s, cubic-bezier(0.4, 0, 0.2, 1), adds "SAR" fade-in |
| Tooltips | Spring physics appearance, slide up 10px→0, blur background |
| Loading | Gradient bar fill OR pulsing dots OR skeleton shimmer |
| Success | Green checkmark SVG draw + confetti burst (20 particles, gravity) |
| Error | Card shakes 3× horizontally (0.3s), border pulses red, warning icon slides in |

---

## 8. TYPOGRAPHY & SPACING

| Usage | Font |
|---|---|
| Headings | `"Plus Jakarta Sans"` — modern, geometric, professional |
| Body | `"Inter"` — clean, readable |
| Arabic | `"IBM Plex Sans Arabic"` — elegant, modern |
| Numbers | `"JetBrains Mono"` — technical calculations |

**Spacing:** Base unit 4px. Card padding 24px. Section gaps 80px desktop / 40px mobile.

---

## 9. UNIQUE FEATURES

- **Breathing Background:** Gradient mesh slowly morphs shapes (20s loop, 15% opacity)
- **Gravity Cards:** Cards tilt away on fast mouse movement, settle on slow — fluid water-like interaction
- **Sound Design (Optional):** Button click (soft pop), calculation complete (gentle chime), error (soft buzz). Mutable.

---

## 10. PERFORMANCE OPTIMIZATION

- CSS transforms only (GPU accelerated)
- `will-change` for heavy animations
- Lazy load below-fold animations
- Disable cursor/trail on touch devices via `matchMedia('(hover: none)')`
- `prefers-reduced-motion` fallback to simpler animations

---

## SEO & TECHNICAL ARCHITECTURE

---

## 11. FRAMEWORK

Two options under evaluation. Final decision pending user confirmation.

| Concern | Next.js 14+ (App Router) | Astro |
|---|---|---|
| Build output | SSR + static hybrid | Static-first, pure HTML |
| JS overhead | React runtime required | Zero JS by default |
| SEO | Good (needs configuration) | Excellent (built-in) |
| Multi-language | next-intl | Built-in i18n + sitemap |
| Lighthouse | 90-100 | 100/100 achievable |
| Ideal for | Heavy interactivity | Content + tools (our use case) |

---

## 12. SEO FOUNDATION

### Meta Tag Template
```html
<title>{tool_name} - Free {category} Calculator | HsabKSA</title>
<meta name="description" content="{150-160 chars with primary keyword}" />
<meta name="keywords" content="{5-8 relevant keywords}" />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://hsabksa.com/{current-url}" />
```

### Open Graph
```html
<meta property="og:title" content="{tool_name} Calculator" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="https://hsabksa.com/og-images/{tool-slug}.png" />
<meta property="og:type" content="website" />
<meta property="og:locale" content="en_US" />
<meta property="og:locale:alternate" content="ar_SA" />
<meta property="og:locale:alternate" content="ur_PK" />
```

### Twitter Card
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{tool_name} Calculator" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="https://hsabksa.com/og-images/{tool-slug}.png" />
```

### Hreflang Tags
```html
<link rel="alternate" hreflang="en" href="https://hsabksa.com/{tool-slug}" />
<link rel="alternate" hreflang="ar" href="https://hsabksa.com/ar/{tool-slug}" />
<link rel="alternate" hreflang="ur" href="https://hsabksa.com/ur/{tool-slug}" />
<link rel="alternate" hreflang="tl" href="https://hsabksa.com/tl/{tool-slug}" />
<link rel="alternate" hreflang="bn" href="https://hsabksa.com/bn/{tool-slug}" />
<link rel="alternate" hreflang="x-default" href="https://hsabksa.com/{tool-slug}" />
```

---

## 13. STRUCTURED DATA (JSON-LD Schema)

Every tool page injects the following schemas:

### SoftwareApplication
```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "End of Service Benefit Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "description": "Free EOSB calculator for Saudi Arabia.",
  "url": "https://hsabksa.com/eosb-calculator",
  "offers": { "@type": "Offer", "price": "0", "priceCurrency": "SAR" },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "ratingCount": "1250"
  },
  "author": { "@type": "Organization", "name": "HsabKSA" }
}
```

### Article (for blog pages)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Complete Guide to Saudi Labor Law 2024",
  "description": "Everything about Saudi Labor Law including EOSB, notice period, employee rights.",
  "author": { "@type": "Person", "name": "HsabKSA Team" },
  "publisher": {
    "@type": "Organization",
    "name": "HsabKSA",
    "logo": { "@type": "ImageObject", "url": "https://hsabksa.com/logo.png" }
  },
  "datePublished": "2024-01-15",
  "dateModified": "2024-01-20"
}
```

### FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How is EOSB calculated in Saudi Arabia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "EOSB is calculated as 1/2 month salary per year for the first 5 years, and 1 full month salary per year after 5 years."
      }
    }
  ]
}
```

### BreadcrumbList
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://hsabksa.com" },
    { "@type": "ListItem", "position": 2, "name": "Expat Tools", "item": "https://hsabksa.com/expat-tools" },
    { "@type": "ListItem", "position": 3, "name": "EOSB Calculator", "item": "https://hsabksa.com/eosb-calculator" }
  ]
}
```

---

## 14. KEYWORD STRATEGY

| Tier | Volume | Example |
|---|---|---|
| Primary | 800-2,500/mo | "EOSB calculator Saudi Arabia", "حساب مكافأة نهاية الخدمة" |
| Secondary | 200-800/mo | "Saudi labor law EOSB", "how to calculate final settlement Saudi" |
| Long-tail | 50-200/mo | "EOSB calculator for resignation Saudi", "end of service benefit after 10 years" |

### Per-Page Keyword Map
| Page | Primary | Secondary | Long-tail |
|---|---|---|---|
| Homepage | Saudi Arabia calculator tools | free calculators Saudi | Saudi financial tools |
| EOSB | EOSB calculator Saudi Arabia | end of service benefit calculator | calculate EOSB resignation Saudi |
| Jawazat | Jawazat overstay fine calculator | Saudi overstay fine | Iqama expiry fine |

---

## 15. PAGE CONTENT STRUCTURE

Every tool page follows this exact hierarchy:

```
1. Hero Section (Above Fold)
   H1 with primary keyword
   2-3 sentence description
   Trust badges: "100% Free", "No Signup", "Accurate"

2. Calculator Tool
   Input form → Result display → "How to use" instructions

3. How It Works (H2)
   Step-by-step explanation + formula breakdown + example

4. Related Information (H2)
   Saudi Law reference + common scenarios + tips

5. FAQ Section (H2)
   5-7 questions with Schema markup + links to blog posts

6. Related Tools (H2)
   3-4 similar calculators with internal links

7. Blog Posts (H2)
   3-5 related articles with thumbnails + internal links
```

### Title Tag Format
```
{Primary Keyword} - Free {Tool Type} | HsabKSA
```
Example: "EOSB Calculator Saudi Arabia - Free End of Service Tool | HsabKSA"
Length: 50-60 chars.

### Meta Description Format
```
{Action verb} your {primary keyword} instantly with our free {tool type}. {Key benefit}. {CTA}
```
Length: 150-160 chars.

---

## 16. TECHNICAL SEO

- **Images:** WebP format, lazy load below fold, width/height attributes, srcset
- **Code:** Minified CSS/JS (Astro default), PurgeCSS, deferred non-critical JS, inlined critical CSS
- **Caching:** 1-year cache headers for static assets, CDN, service worker for offline
- **robots.txt:** Allow `/`, Disallow `/api/` and `/admin/`
- **Sitemap:** Auto-generated, includes all language variants, weekly tools / daily blogs
- **Internal Linking:** Tool ↔ blog cross-links, breadcrumbs, "Related Tools" section
- **404 Page:** Custom search bar, popular tools links, suggested content

---

## 17. PERFORMANCE BUDGET

| Metric | Target |
|---|---|
| Lighthouse Score | 95+ all metrics |
| First Contentful Paint | < 1.5s |
| Largest Contentful Paint | < 2.5s |
| Cumulative Layout Shift | < 0.1 |

---

## 18. MOBILE OPTIMIZATION

- Mobile-first responsive design
- Touch-friendly buttons (min 44×44px)
- Readable font sizes (min 16px)
- No horizontal scrolling
- Disable heavy animations on mobile
- Simplified cursor effects
- Fast tap response

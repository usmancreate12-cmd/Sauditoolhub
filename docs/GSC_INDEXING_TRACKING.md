# GSC Indexing & Performance Tracking Report

Track indexing status, rankings, and traffic for SaudiToolHub in Google Search Console.

## How to Pull Data (GSC)

1. Open [Google Search Console](https://search.google.com/search-console) > Property: `https://sauditoolhub.com/`
2. **Performance**: Reports > Performance. Set date range, filter by page/query/country/device.
3. **Indexing**: Indexing > Pages. Check "Why isn't my page indexed?" for any `Excluded` pages.
4. **URL Inspection**: Paste a URL to check its live state and request indexing.
5. **Sitemaps**: Sitemaps > confirm `https://sauditoolhub.com/sitemap.xml` shows **Success** and expected URL count (currently 115 guide URLs + 23 tools + 5 locale homes + 15 static).

## Baseline Snapshot (3-day window)

| Page | Type | Priority | Clicks | Impr. | CTR | Avg Pos |
|------|------|----------|--------|-------|-----|---------|
| /jawazat-fine-calculator | Tool | HIGH (performer) | – | – | – | 10.6 |
| /guide/sip-calculator-saudi-arabia-2026 | Guide | HIGH (performer) | – | – | 50% | 7.5 |
| /guide/property-valuation-white-deed-guide-saudi-arabia-2026 | Guide | HIGH (performer) | – | – | – | 10 |
| /family-visa-optimizer | Tool | LOW (fix) | 0 | 8 | – | 23.6 |
| /eosb-calculator | Tool | LOW (fix) | 0 | 2 | – | 26.5 |
| /visa-checklist-generator | Tool | LOW (fix) | 0 | 2 | – | 32.5 |

Countries of note: Saudi Arabia (28.6% CTR), United States (15 impr.), Pakistan (avg pos 5.5).

## Tracking Table (fill in each week)

| Date | URL | Locale | GSC Status | Reason (if excluded) | Clicks | Impr. | CTR | Avg Pos | Re-requested? |
|------|-----|--------|-----------|----------------------|--------|-------|-----|---------|---------------|
| 2026-08-02 | /jawazat-fine-calculator | en | – | – | – | – | – | – | – |
| 2026-08-02 | /guide/sip-calculator-saudi-arabia-2026 | en | – | – | – | – | – | – | – |
| 2026-08-02 | /guide/property-valuation-white-deed-guide-saudi-arabia-2026 | en | – | – | – | – | – | – | – |
| 2026-08-02 | /family-visa-optimizer | en | – | – | – | – | – | – | – |
| 2026-08-02 | /eosb-calculator | en | – | – | – | – | – | – | – |
| 2026-08-02 | /visa-checklist-generator | en | – | – | – | – | – | – | – |

> Add rows per locale (`/ar/...`, `/ur/...`, `/tl/...`, `/bn/...`) and per new cluster article.

## Request Indexing Checklist

- [ ] Deploy latest build (canonicals/hreflang now point to live `/en/...` URLs; unprefixed English serves 200 directly).
- [ ] Confirm `https://sauditoolhub.com/sitemap.xml` re-crawled (Resubmit sitemap in GSC).
- [ ] URL Inspection > Request Indexing for each HIGH + LOW page and each new article.
- [ ] Wait 24–72h; verify status flips from "Discovered – currently not indexed" to "Indexed".
- [ ] Log results in the tracking table above.

## Goals (revisit weekly)

- EOSB Calculator: impressions > 100/week and avg pos < 20.
- Family Visa Optimizer: impressions > 50/week and avg pos < 20.
- Visa Checklist Generator: impressions > 50/week and avg pos < 25.
- New cluster articles reach "Indexed" within 2 weeks.
- No page shows "Duplicate without user-selected canonical" or "Excluded by 'noindex' tag" reasons.

## Notes / Changes Log

- 2026-08-02: Fixed `localePrefix` to `as-needed` — unprefixed English now serves 200 directly; `/en/...` 307→unprefixed; canonicals/hreflang/sitemap URLs now resolve to live pages.
- 2026-08-02: Added internal links high→low: SIP guide→EOSB; Property guide→EOSB + Final Settlement; Jawazat guide→Visa Checklist Generator.
- 2026-08-02: Added cluster articles (see `src/data/articles.ts`).

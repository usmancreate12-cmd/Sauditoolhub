<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:design-system-rules -->
# DESIGN SYSTEM: "Desert Aurora" (Dark Mode Only)

## CRITICAL RULES
- **NO design changes without user approval.** Always ask before changing anything visual.
- **Dark mode only.** Light mode has been removed. NO `light:` or day-mode Tailwind classes.
- **Always consult `DESIGN.md`** for color palette, component specs, and animations.

## COLOR PALETTE (Dark Mode)
- Background: `#0A0E1A` (use `bg-[#0A0E1A]`)
- Surface/Cards: `rgba(19, 24, 39, 0.6)` (use `.glass` class)
- Primary Accent (Teal): `#00D4AA` (use `text-desert-primary` / `bg-desert-primary`)
- Secondary Accent (Orange): `#FF6B35` (use `text-desert-accent` / `bg-desert-accent`)
- Gold Highlight: `#FFD700` (use `text-desert-gold` / `bg-desert-gold`)
- Text Primary: `#E8EEF2` (use `text-gray-100` or `text-white`)
- Text Secondary: `#8B95A8` (use `text-gray-400`)
- Text Muted: `#6B7280` (use `text-gray-500`)

## REQUIRED COMPONENTS
Every tool MUST use:
- `GlassCard` — glassmorphism card component
- `MagneticButton` — magnetic hover effect button
- `NumberTicker` — animated number counter
- `AnimatedBackground` — gradient mesh canvas
- `CustomCursor` — custom cursor with hover states
- `ScrollProgress` — gradient scroll indicator

## NO-NO LIST
- NO light/dark mode toggle
- NO `dark:` Tailwind variant classes (html always has class `dark`)
- NO inline style colors that don't match the palette
- NO layout changes without approval
- NO button order changes without approval
- NO removing the `.glass` class from cards
<!-- END:design-system-rules -->

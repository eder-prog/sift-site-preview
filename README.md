# sift-site-preview (Next.js)

Sift — Customer success layer for B2B on WhatsApp. Manifesto / brand landing.

Bilingual (PT default at `/`, EN at `/en/`) Next.js variant of the same site shipped as vanilla HTML in `../preview`.

## Stack

- Next.js 15 (App Router) + React 19 + TypeScript
- Tailwind 3 (only for theme tokens; layout uses ported vanilla CSS for parity)
- lucide-react (icons available, not currently used — inline SVG kept)
- Google Fonts via `next/font` (Inter + JetBrains Mono)

## Setup

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build

```bash
npm run build
npm run start
```

## Structure

```
preview-nextjs/
├── app/
│   ├── layout.tsx           # root layout + fonts + lang-detect script
│   ├── page.tsx             # PT root (renders <Landing t={pt} />)
│   ├── globals.css          # full design system + cursor effects
│   └── en/
│       └── page.tsx         # EN (/en/ — renders <Landing t={en} />)
├── components/
│   ├── landing.tsx          # composes Header + sections + Footer
│   ├── header.tsx           # client (scroll-aware glass-blur + logo morph)
│   ├── hero.tsx             # client (cursor-responsive sieve mesh + card/mock effects)
│   ├── manifesto-extended.tsx
│   ├── product-glimpses.tsx # CSS-rendered UI mockups (no images)
│   ├── delivers.tsx         # 3-card grid (cursor spotlight handled by hero.tsx)
│   ├── voice.tsx
│   ├── demo.tsx             # client (form submit handler)
│   ├── footer.tsx
│   ├── reveal.tsx           # client (IntersectionObserver for .reveal)
│   ├── html-lang-sync.tsx   # client (updates <html lang> per page)
│   ├── lang-toggle.tsx      # client (BR | EN switch with localStorage persist)
│   └── sift-mark.tsx        # shared SVG symbol
└── lib/
    └── i18n.ts              # PT + EN translation dicts (strict TS type)
```

## How translations work

`lib/i18n.ts` exports two `Translations` objects (`pt`, `en`) matching the same TypeScript shape. Each `page.tsx` imports the dict for its language and passes it to `<Landing t={...} />`. Every section component is language-agnostic — it just renders fields off the `t` prop.

To edit copy, change `lib/i18n.ts` only.

## Cursor-responsive hero

Single client-side effect in `components/hero.tsx`:

- Tracks `pointermove` globally, lerps to smooth coords
- Sets CSS vars `--mx`/`--my` (% relative to hero rect) for mesh masks
- Sets `--mxpx`/`--mypx` (viewport px) for the custom cursor's fixed position
- Sets `--nx`/`--ny` (-1..1 normalized) for parallax on `.hero-center` and grain drift
- Generates 70 drifting grains (CSS keyframe `grainDrift`)
- Custom cursor (`.cursor-fx`) shows only when pointer is over the hero (re-evaluated on scroll)
- Touch: removes cursor entirely + restores normal cursor
- `prefers-reduced-motion`: disables custom cursor, grains, mockup tilt; keeps mesh-follow (the metaphor)
- Card spotlight (Section 4): per-card pointermove updates `--cx`/`--cy` (local px) + `--card-active` toggle
- Mockup tilt (Section 3): per-mock `rotateX/Y` based on cursor position in the mock rect (±6°/±8°)

## Bilingual routing

`app/layout.tsx` injects a small inline `<script>` in `<head>` that runs before render:

1. If `localStorage.sift-lang` is set → redirect (via `location.replace`) to that lang's page if different from current
2. Else, detect `navigator.language`. If `pt*` → ensure `/`, else `/en/`
3. Toggle clicks in `LangToggle` save to localStorage so future visits respect the choice

## Patterns inherited

Matches the vanilla `../preview/index.html` 1:1 visually. Inherits validated patterns from the State Roofing run (header glass-blur + logo morph + reveal-on-scroll), and the bilingual MPA pattern from the Stone run (PT root + /en/ subdir + localStorage persist).

## Deploy

Vercel: import the repo at `vercel.com/import`, no env vars needed. `vercel.json` not required — defaults work.

## Repo

[github.com/eder-prog/sift-site-preview](https://github.com/eder-prog/sift-site-preview)

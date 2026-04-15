# Solvix Website — Project Context

> This file is auto-loaded by Claude Code at the start of every session.
> Identical copies live at `.cursorrules` (Cursor/Windsurf) and `GEMINI.md` (Gemini tools).
> **CRITICAL RULE**: Whenever this file is updated, apply the exact same updates to `.cursorrules` and `GEMINI.md` to keep them 100% in sync.

---

## Project Identity

| Key | Value |
|-----|-------|
| Name | Solvix — AI Business Solutions Agency |
| Audience | B2B (open to individuals) |
| Live URL | https://solvix-website.vercel.app |
| Repo | https://github.com/OmarTDS/Solvix-website |
| Deployment | Vercel — auto-deploys on push to `main` |
| Vercel add-ons | Speed Insights (`@vercel/speed-insights/react`) |

---

## Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Vanilla CSS (custom design system — no Tailwind, no component libraries)
- **Language**: JSX (no TypeScript)
- **Fonts**: Google Fonts — Space Grotesk (headings) + Inter (body)
- **Backend**: Supabase — form submissions stored in `contact_submissions` table

---

## Design System (`src/index.css`)

### Colors
```
--clr-bg:          #050505   (page background)
--clr-bg-2:        #0d0d0d
--clr-bg-3:        #111111
--clr-surface:     #161616
--clr-surface-2:   #1c1c1c

--clr-white:       #ffffff
--clr-white-80/60/40/10: rgba alphas

--clr-green:            #39FF14  (Electric Green — primary accent)
--clr-green-dim:        #2bcc10
--clr-green-glow:       rgba(57,255,20,0.15)
--clr-green-glow-strong:rgba(57,255,20,0.35)
```

### Typography
```
--font-display: 'Space Grotesk'  (h1–h6, buttons)
--font-body:    'Inter'          (paragraphs, UI text)

Scale: --fs-xs(0.75rem) → --fs-6xl(6.5rem)
Headings: font-weight 800, letter-spacing -0.03em
```

### Spacing
```
--space-1(0.25rem) through --space-32(8rem)
--container-max: 1280px
--container-pad: clamp(1.25rem, 5vw, 3rem)
```

### Radii & Transitions
```
--radius-sm/md/lg/xl/full: 6px / 12px / 20px / 32px / 9999px
--ease-out: cubic-bezier(0.16, 1, 0.3, 1)
--dur-fast/normal/slow: 200ms / 350ms / 600ms
```

### Shadows
```
--shadow-green:    0 0 40px rgba(57,255,20,0.2)
--shadow-green-sm: 0 0 20px rgba(57,255,20,0.12)
--shadow-card:     0 4px 40px rgba(0,0,0,0.6)
```

---

## UI Pattern — Liquid Glassmorphism

Every panel/card uses one of three glass utility classes defined in `src/index.css`:

| Class | Use case | Background |
|-------|----------|------------|
| `.glass` | Standard panels | rgba(255,255,255,0.04) + blur(20px) |
| `.glass-strong` | Cards, modals | rgba(255,255,255,0.08) + blur(32px) |
| `.glass-green` | Accent panels | rgba(57,255,20,0.05) + green border |

All glass variants:
- `backdrop-filter: blur(Xpx) saturate(180%)`
- `border: 1px solid rgba(255,255,255,0.10)`
- Inset top-left shimmer via `::before` pseudo-element
- Green glow on hover via `.glass-hover` modifier

---

## Global Background (`src/App.css`)

Four fixed morphing blobs render behind everything in `App.jsx`:

```jsx
<div className="global-scene" aria-hidden="true">
  <div className="g-blob g-blob--1"></div>   {/* large, top-right */}
  <div className="g-blob g-blob--2"></div>   {/* medium, bottom-left */}
  <div className="g-blob g-blob--3"></div>   {/* mid-page accent */}
  <div className="g-blob g-blob--4"></div>   {/* lower-right subtle */}
  <div className="g-grid"></div>             {/* dot-grid overlay */}
</div>
```

**Mobile performance** (`≤768px`): blobs 3 & 4 are `display:none`, blobs 1 & 2 are scaled down, blur reduced. At `≤480px` blobs shrink further.

**Scroll lock classes** (in `App.css`):
- `body.menu-open` — locked when mobile nav is open
- `body.demo-open` — locked when "Try It Live" iframe modal is open

---

## Scroll Animations (`src/hooks/useScrollReveal.js`)

Custom `useScrollReveal()` hook uses `IntersectionObserver`. Add class to any element to animate on scroll:

| Class | Effect |
|-------|--------|
| `.reveal` | Fade in + slide up (translateY 40px → 0) |
| `.reveal-left` | Fade in + slide from left (translateX -50px → 0) |
| `.reveal-right` | Fade in + slide from right (translateX 50px → 0) |
| `.reveal-scale` | Fade in + scale (0.92 → 1) |

Stagger with `.delay-1` through `.delay-6` (100ms–600ms increments).

---

## Component Map

All components live under `src/components/`. Each has its own `ComponentName.jsx` + `ComponentName.css`.

### `Navbar/Navbar.jsx`
- Scroll-aware: transparent → frosted glass header on scroll
- Tracks active section via scroll position
- Mobile: full-screen glass overlay, staggered slide-in links
- Body scroll lock (`body.menu-open` toggled in `App.css`)
- Click-outside + ESC to close, ARIA-accessible

### `Hero/Hero.jsx`
- Uses global blob background (no local background)
- Animated floating particles
- 3-column stats row (e.g. "50+ AI Systems Deployed")
- Primary + outline CTA buttons

### `Services/Services.jsx`
- 3-column glass card grid
- Each card: SVG icon, title, description, tag pills
- `.glass-hover` on cards for green border/glow on hover

### `Work/Work.jsx`
- 7 case study cards (4 real, 3 concept):
  - **BladeHaus** — barbershop booking platform (has live demo URL)
  - **AI Career School** — Arabic EdTech platform (no demo URL)
  - **Trend Predictor** — market intelligence engine (has live demo URL)
  - **Loqta** — Egyptian real estate platform (has live demo URL)
  - Nexora, Meridian, Vantage — concept case studies (no demo URLs)
- Cards with a `url` property show a **"Try It Live"** button
- Clicking opens a full-screen iframe modal (`demo-modal-overlay`)
- Modal: ESC key closes, body scroll locked via `body.demo-open`, 48px close button on mobile
- Mobile modal: `100dvh`, full-screen, header `flex-shrink:0` so close button never scrolls away

### `Process/Process.jsx`
- Vertical timeline layout
- Connecting glowing green line
- Glass-orb step markers with icons
- Steps describe engagement flow (Discovery → Delivery)

### `Contact/Contact.jsx`
- Form fields: Full Name, Phone, Business Email, Service (select), Message
- **Submits to Supabase** — `contact_submissions` table via `src/lib/supabase.js`
- States: idle | sending | sent | error
- Real contact details: phone `+201099641622`, email `omar@solvix.solutions`
- Data Flow accordion: explains what happens to submitted data
- "24-Hour Response Guarantee" promise card

### `Footer/Footer.jsx`
- Dark glass background
- Brand: `<SolvixLogo height={30} />` + tagline
- Social links: LinkedIn + Twitter/X (placeholder hrefs)
- Sitemap: Services, Company, Get Started columns
- Privacy Policy + Terms of Service links (currently `href="#"`)

### `SolvixLogo/SolvixLogo.jsx`
- Custom SVG React component
- Icon: Electric Green stylized "S" with crossing arrows
- Text: "SOLVI" (white) + "X" (green) using `<tspan>` for correct kerning
- Props: `height` (default 36), `iconOnly` (boolean — hides text, used for favicon)

---

## Pending Tasks

Update this list as work is completed:

- [x] ~~Wire form submission~~ — done via Supabase (`src/lib/supabase.js`)
- [x] ~~Replace placeholder phone/email~~ — real details in `Contact.jsx`
- [x] ~~Try It Live modal~~ — iframe modal with mobile close button done
- [ ] **Custom domain** — connect domain (e.g. `solvix.io`) in Vercel dashboard
- [ ] *(Optional)* **Marquee banner** — scrolling tech stack / client logo strip
- [ ] *(Optional)* **Privacy Policy page** — link from footer's `href="#"` Privacy Policy anchor

---

## Key File Index

| File | Purpose |
|------|---------|
| `src/App.jsx` | Root layout, global blob scene |
| `src/index.css` | All design tokens + glass utilities + scroll animations |
| `src/App.css` | Blob keyframe animations, scroll-lock body classes |
| `src/lib/supabase.js` | Supabase client (form submissions) |
| `src/hooks/useScrollReveal.js` | IntersectionObserver scroll hook |
| `src/components/Contact/Contact.jsx` | Form — Supabase submit, real contact details |
| `src/components/Work/Work.jsx` | Case studies + "Try It Live" iframe modal |
| `src/components/Footer/Footer.jsx` | Placeholder social hrefs here |
| `src/components/SolvixLogo/SolvixLogo.jsx` | Brand SVG component |

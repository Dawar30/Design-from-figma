# Maktab-e-Jahan

A pixel-faithful, responsive front-end built with **Next.js (App Router)**, **JavaScript**, and **Tailwind CSS**, recreated from the provided Figma design.

The app contains three screens:

| Route      | Screen                          |
| ---------- | ------------------------------- |
| `/`        | Landing (marketing) page        |
| `/signup`  | Create account (split-screen)   |
| `/feed`    | Home feed (logged-in dashboard) |

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint (next/core-web-vitals)
```

> **Note:** dependencies were not installed in the environment where this code
> was authored (no registry access), so run `npm install` first. There are no
> `.ts`/`.tsx` files — the project is plain JavaScript.

## Tech & conventions

- **Next.js App Router** with Server Components by default. `"use client"` is
  used only where interactivity is required (mobile menu, tabs, signup form,
  subject filter).
- **Tailwind CSS** with a small theme extension (`brand` cyan + `navy` scales,
  custom shadows) in `tailwind.config.js`, plus two shared component classes
  (`.container-page`, `.focus-ring`) in `globals.css`.
- **lucide-react** for iconography. The brand logo is the supplied
  `public/logo.png`; a mark-only cutout (`public/logo-mark.png`) and a white
  variant for dark backgrounds (`public/logo-mark-white.png`) are rendered via
  `next/image` in `components/icons/Logo.jsx`, with the wordmark kept as live
  text. Google/Apple marks are hand-authored SVGs in
  `components/icons/BrandIcons.jsx` because lucide no longer ships third-party
  logos. The browser tab icon lives at `app/icon.png`.
- **Poppins** loaded via `next/font/google`.

## Folder structure

```text
src/
├── app/
│   ├── layout.js            # root layout, fonts, metadata
│   ├── page.js              # Landing page
│   ├── globals.css
│   ├── loading.js           # global loading UI
│   ├── not-found.js         # 404
│   ├── signup/page.js       # Create account
│   └── feed/page.js         # Home feed
│
├── components/
│   ├── ui/                  # Button, Badge, Avatar, Input, Card, Tabs, SearchBar, IconButton
│   ├── layout/              # SiteHeader, SiteFooter, MobileNav
│   ├── icons/               # Logo, BrandIcons
│   ├── signup/              # SignupHero, SignupForm
│   ├── feed/                # NoteCard, TrendingSubjects, RecommendedCreators, PremiumCard
│   └── landing/             # Hero, ShowcaseCards, TrustedBy, DiscoverSection, MaterialCard
│
├── data/                    # navigation, feed, materials (content separated from UI)
├── hooks/                   # useToggle
└── utils/                   # cn (class-name helper)
```

## Design decisions & assumptions

- **Colors/typography** were sampled from the exported PNGs (Figma links are not
  reachable from the build environment). `brand` ≈ the cyan accent, `navy` ≈ the
  dark panels/buttons/footer.
- **Institution logos** in the "Trusted by" band are rendered as neutral
  grayscale placeholder crests, since the original logo assets were not
  provided. Drop real logos into `public/` and swap `CrestPlaceholder` for
  `next/image` when available.
- **Avatars** are initials-based (matching the design) rather than photos.
- Forms are UI-only (no backend); submit handlers are stubbed for wiring later.

## Responsiveness

Layouts adapt rather than shrink:

- **Header** collapses primary nav into an accessible slide-down mobile menu;
  the resource search hides on small screens.
- **Signup** stacks the promo panel above the form on mobile, split 50/50 on `lg`.
- **Feed** stacks the sidebar below the feed on small screens; note cards flow
  from 1 → 2 columns across breakpoints.
- **Landing** hides the decorative floating cards on small screens, and the
  hero search stacks vertically.

## Accessibility

Semantic landmarks (`header`/`main`/`footer`/`nav`/`aside`), a single `h1` per
page with ordered headings, `aria-current` on the active nav item, ARIA tablist
for the feed tabs, labelled inputs (visually-hidden labels on search),
icon-only buttons carry `aria-label`, and a consistent visible focus ring.

# Modern Learning App – Landing Page (Next.js + Tailwind v4)

A modern, responsive landing page for a learning app built with Next.js 15 (App Router) and Tailwind CSS v4. It showcases an animated hero, video teaser, feature highlights, stats, testimonials, and a footer with store buttons. UI is composed with Radix primitives and utility helpers for clean, type-safe components.

## Features

- Animated sections with intersection-based reveals powered by Framer Motion
- Responsive `Navbar` with a Radix `DropdownMenu` for mobile
- Polished `Hero` with device imagery and CTA buttons
- `VideoIntro` section with overlay play icon
- `Feature` highlights using reusable `FeatureCard`
- `MobileConvenience` stats using `InfoCard`
- `Testimonials` with avatar support
- Reusable UI primitives: `Button`, `Avatar`, `DropdownMenu`
- Tailwind CSS v4 with CSS variables theme and `tw-animate-css`
- Path aliases (`@/*`) and strict TypeScript config

## Tech Stack

- Next.js 15, React 19, TypeScript
- Tailwind CSS v4 (via `@tailwindcss/postcss`) + PostCSS
- Framer Motion 12 for animations
- Radix UI primitives (`@radix-ui/react-avatar`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-slot`)
- Styling utilities: `class-variance-authority`, `tailwind-merge`, `clsx`
- Icons: `react-icons`, `lucide-react`
- Fonts: `next/font` (Google `Roboto`)

## Getting Started

### Prerequisites

- Node.js >= 18.18 (Node 20+ recommended)
- npm (or yarn/pnpm/bun)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
# App will be available at http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
modernsite/
  app/
    layout.tsx           # Root layout, global font & styles
    page.tsx             # Home page composing all sections
    globals.css          # Tailwind v4 config, CSS variables, base layers
  components/
    navbar.tsx           # Top navigation with Radix DropdownMenu
    hero.tsx             # Animated hero section with CTAs
    videoIntro.tsx       # Video teaser with overlay play icon
    feature.tsx          # Features grid (uses FeatureCard)
    featureCard.tsx
    mobileConvenience.tsx# Stats + image (uses InfoCard)
    infoCard.tsx
    testimonials.tsx     # Testimonials grid (uses TestimonialCard)
    testimonialCard.tsx
    footer.tsx           # Footer with store buttons
    ui/
      button.tsx         # Variant-based button (CVA)
      avatar.tsx         # Radix Avatar wrappers
      dropdown-menu.tsx  # Radix DropdownMenu wrappers
  lib/
    utils.ts             # `cn` helper (clsx + tailwind-merge)
  public/
    image/, logos/       # Local assets
  next.config.ts
  postcss.config.mjs     # Tailwind v4 via @tailwindcss/postcss
  tsconfig.json          # Path aliases: @/*
  eslint.config.mjs
  package.json
```

## Configuration Notes

- Tailwind v4 is configured through `app/globals.css` with `@import "tailwindcss"` and theme tokens using CSS variables. No `tailwind.config.js` is required.
- PostCSS loads Tailwind via `@tailwindcss/postcss` (see `postcss.config.mjs`).
- Fonts are provided by `next/font/google` (`Roboto`) in `app/layout.tsx`.
- TypeScript path aliases are defined in `tsconfig.json` (`@/*`).

## Key Components

- `components/ui/button.tsx`: Variant-based `Button` using `class-variance-authority` and the project’s design tokens. Example:

```tsx
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <Button variant="secondary" size="lg">
      Get Started
    </Button>
  );
}
```

- `components/ui/dropdown-menu.tsx`: Thin wrappers over Radix primitives for accessible menus.
- `components/ui/avatar.tsx`: Radix Avatar with project styles.

## The Home Page Composition

The landing page is composed in `app/page.tsx`:

```tsx
<>
  <Navbar />
  <Hero />
  <VideoIntro />
  <Feature />
  <MobileConvenience />
  <Testimonials />
  <Footer />
</>
```

## Deployment

- Any Node-compatible platform works (Vercel recommended for Next.js). Build with `npm run build` and serve with `npm start`.
- Ensure the platform supports Next.js App Router and React 19.

## Assets and Credits

- Icons from `react-icons` and `lucide-react`.
- Radix UI primitives for accessible components.
- Apple/Google logos and device imagery are placeholders for demo purposes. Respect brand guidelines and replace with your own assets if needed.

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit changes: `git commit -m "feat: add your feature"`
4. Push: `git push origin feat/your-feature`
5. Open a Pull Request

## License

MIT License. See `LICENSE` (add one if missing).

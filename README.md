# Fully Animated Landing Page (Next.js + Framer Motion)

A responsive, animated landing page for a fictional learning app, built with Next.js 15, React 19, Tailwind CSS v4 and Framer Motion.

![Next.js](https://img.shields.io/badge/Next.js-15.4-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.1-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)
![Radix UI](https://img.shields.io/badge/Radix_UI-primitives-161618?logo=radixui&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-new--york-000000?logo=shadcnui&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Animation Approach](#animation-approach)
- [Configuration Notes](#configuration-notes)
- [Deployment](#deployment)
- [Project Status and Roadmap](#project-status-and-roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

This project is a single-page marketing site for a mobile learning app called "Your Perfect Learning App". It is a front-end showcase: the goal is to show how to build a clean, component-based landing page with the Next.js App Router and add scroll-triggered motion with Framer Motion.

Every section is its own React component. Sections fade, slide and scale into view as you scroll, and cards react to hover with small micro-interactions. The UI primitives (`Button`, `Avatar`, `DropdownMenu`) come from the shadcn/ui setup (Radix UI + `class-variance-authority`). Styling uses Tailwind CSS v4 with CSS-variable design tokens.

It suits developers who want a reference for:

- Composing a landing page from small, reusable sections
- Using Framer Motion `variants`, staggered children and `useInView` reveals
- Using Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`) with shadcn/ui components

There is no back end, API or environment configuration. All content is static data defined inside the components.

---

## Features

**Layout and sections**
- Fixed dark navbar. On large screens it shows the menu links, social icons and a CTA button. On small screens it switches to a hamburger menu built on Radix `DropdownMenu`.
- Hero section with a headline, App Store / Google Play buttons, a device mockup image and an overlapping "Learning App" info card
- Video-intro teaser: a large preview image with a centered play icon
- "Diverse Learning Resources" feature grid with four icon cards
- "Mobile Convenience" section that pairs a phone image with a 2x2 stats grid (courses, instructors, support, rating)
- "What Clients Say" testimonials with avatar images and initial-letter fallbacks
- Dark footer with quick links and App Store / Google Play buttons

**Animations (Framer Motion)**
- Staggered entrance animation for the hero content when the page loads
- Scroll-triggered reveals with `useInView` (`once: true`, `-100px` margin), so each section animates once as it enters the viewport
- Directional slide-ins (left/right), a rotating play-button entrance and a 3D-style `rotateY` entrance for the hero image
- Hover micro-interactions on feature cards, icon badges and testimonial cards (`whileHover` scale/lift/rotate)
- The same cubic-bezier easing (`[0.25, 0.46, 0.45, 0.94]`) across the whole page for a consistent feel

**Developer experience**
- Strict TypeScript with the `@/*` path alias
- shadcn/ui configuration (`components.json`, "new-york" style, neutral base color, CSS variables)
- `cn()` helper (`clsx` + `tailwind-merge`) for conditional class names
- ESLint via `eslint-config-next`
- Optimized fonts (Google Roboto via `next/font`) and statically imported images through `next/image`

---

## Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Next.js 15.4](https://nextjs.org/) (App Router) |
| UI library | [React 19.1](https://react.dev/) |
| Language | [TypeScript 5](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/postcss`, [`tw-animate-css`](https://github.com/Wombosvideo/tw-animate-css) |
| Animation | [Framer Motion 12](https://motion.dev/) |
| UI primitives | [Radix UI](https://www.radix-ui.com/) (`react-avatar`, `react-dropdown-menu`, `react-slot`) via [shadcn/ui](https://ui.shadcn.com/) |
| Styling utilities | `class-variance-authority`, `clsx`, `tailwind-merge` |
| Icons | [`react-icons`](https://react-icons.github.io/react-icons/), [`lucide-react`](https://lucide.dev/) |
| Fonts | `next/font/google` (Roboto 300–900) |
| Linting | ESLint 9 + `eslint-config-next` |

---

## Project Structure

```text
FullyLandingPageFramerMotion/
├── app/
│   ├── globals.css            # Tailwind v4 imports, theme tokens (CSS variables), base layer
│   ├── layout.tsx             # Root layout: Roboto font, global styles, metadata
│   └── page.tsx               # Home page that composes all sections
├── components/
│   ├── navbar.tsx             # Fixed top navigation + mobile dropdown menu
│   ├── hero.tsx               # Animated hero with store buttons and device mockup
│   ├── videoIntro.tsx         # Video teaser image with animated play icon
│   ├── feature.tsx            # Features grid (data + layout)
│   ├── featureCard.tsx        # Single feature card with hover effects
│   ├── mobileConvenience.tsx  # Phone image + stats grid
│   ├── infoCard.tsx           # Single stat card
│   ├── testimonials.tsx       # Testimonials grid (data + layout)
│   ├── testimonialCard.tsx    # Single testimonial with avatar
│   ├── footer.tsx             # Footer with links and store buttons
│   └── ui/                    # shadcn/ui primitives
│       ├── avatar.tsx
│       ├── button.tsx         # CVA-based Button with variants and sizes
│       └── dropdown-menu.tsx
├── lib/
│   └── utils.ts               # cn() helper (clsx + tailwind-merge)
├── public/
│   ├── favicon.png
│   ├── image/                 # Hero/phone mockups, video background, avatars
│   └── logos/                 # Apple and Google store logos
├── components.json            # shadcn/ui configuration
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs         # Loads Tailwind v4 via @tailwindcss/postcss
├── tsconfig.json              # Strict mode, @/* path alias
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** 18.18 or newer (Node 20 LTS recommended)
- **npm** (yarn, pnpm or bun also work)

### Installation

```bash
# Clone the repository
git clone https://github.com/hamdiwerhanii/FullyLandingPageFramerMotion.git
cd FullyLandingPageFramerMotion

# Install dependencies
npm install
```

### Environment Variables

None. The project does not read any environment variables.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the development server at [http://localhost:3000](http://localhost:3000) |
| `npm run build` | Creates an optimized production build |
| `npm start` | Serves the production build (run `npm run build` first) |
| `npm run lint` | Runs ESLint with the Next.js config |

---

## Page Sections

`app/page.tsx` stacks the sections in this order:

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

| Section | Component | Content source |
| --- | --- | --- |
| Navigation | `navbar.tsx` | Hard-coded links: Home, About Us, Contact Us, Docs |
| Hero | `hero.tsx` | Headline, subtitle, store buttons, `public/image/iphones.png` |
| Video intro | `videoIntro.tsx` | `public/image/Background.png` + play icon |
| Features | `feature.tsx` → `featureCard.tsx` | `FEATURES` array (4 items) |
| Mobile convenience | `mobileConvenience.tsx` → `infoCard.tsx` | `OPTIONS` array (4 stats) |
| Testimonials | `testimonials.tsx` → `testimonialCard.tsx` | `TESTIMONIALS` array (3 items, `avatar1–3.jpg`) |
| Footer | `footer.tsx` | `LINKS` array + store buttons |

To change the copy, edit the data arrays at the top of each section component.

### Using the Button primitive

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

Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`. Sizes: `default`, `sm`, `lg`, `icon`.

---

## Animation Approach

Each animated section follows the same pattern:

```tsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: "-100px" });

<motion.div
  ref={ref}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
  variants={containerVariants} // uses staggerChildren
>
  {items.map((item) => (
    <motion.div key={item.id} variants={cardVariants}>…</motion.div>
  ))}
</motion.div>
```

- The parent `containerVariants` use `staggerChildren` / `delayChildren`, so child cards animate one after another.
- Child variants animate `opacity`, `y`/`x` and `scale` from a "hidden" to a "visible" state.
- Animated components are marked `"use client"` because Framer Motion runs in the browser.

---

## Configuration Notes

- **Tailwind v4** is configured CSS-first in `app/globals.css` (`@import "tailwindcss"`, `@theme inline`, CSS variables). There is no `tailwind.config.js`.
- **PostCSS** loads Tailwind through `@tailwindcss/postcss` (`postcss.config.mjs`).
- **shadcn/ui** settings live in `components.json`. You can add more components with the shadcn CLI and they will land in `components/ui`.
- **Path alias**: `@/*` maps to the project root (`tsconfig.json`).

---

## Deployment

The repository has no platform-specific deployment config. As a standard Next.js app, it can be deployed to [Vercel](https://vercel.com/) by importing the repo, or to any Node.js host with:

```bash
npm run build
npm start
```

---

## Project Status and Roadmap

This is a front-end demo/template. Some parts are placeholders:

- [ ] Update the page metadata in `app/layout.tsx` (it still says "Create Next App")
- [ ] Replace placeholder branding ("Tailwind UI" in the navbar, "Material Tailwind" in the footer)
- [ ] Turn navbar and footer items into real links/anchors (they are currently plain text with no `href`)
- [ ] Link the App Store / Google Play buttons to real store pages
- [ ] Make the video section play a real video (it currently shows a static image with a play icon)
- [ ] Fix image `alt` texts (store logos use `"metamask"` / `"ios"`) to improve accessibility
- [ ] Respect `prefers-reduced-motion` for users who disable animations
- [ ] Add a dark-mode toggle (dark theme tokens already exist in `globals.css`)

---

## Contributing

Contributions and suggestions are welcome.

1. Fork the repository
2. Create a branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push the branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## License

No license file is currently included; all rights reserved by the author.

Apple and Google logos and the device images are for demonstration only. Follow the respective brand guidelines if you reuse them.

---

## Author

**Hamdi Werhani**: GitHub [@hamdiwerhanii](https://github.com/hamdiwerhanii)

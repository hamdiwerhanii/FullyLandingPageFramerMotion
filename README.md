# Learning App — Animated Landing Page

A responsive, animated landing page for a mobile learning app, built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** and **Framer Motion**.

![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-14-0055FF?logo=framer&logoColor=white)
![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Page Sections](#page-sections)
- [Animation System](#animation-system)
- [Customization](#customization)
- [Testing and Quality](#testing-and-quality)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [License](#license)
- [Author](#author)

---

## Overview

A single-page marketing site that presents a learning app: hero with store buttons, showcase banner, feature grid, statistics, testimonials and a download footer. It is a portfolio project that demonstrates:

- A **feature-module architecture**: each section lives in `src/modules/<Area>/<Section>/` with separate `components`, `constants` (content) and `types`
- **Server Components by default**: sections render on the server, and only small animation wrappers (`RevealGroup`, `RevealItem`, `HoverMotion`) ship JavaScript to the browser
- A **shared animation system** built on Framer Motion variants, with automatic support for "reduce motion"
- Accessible, semantic markup and working in-page navigation
- Unit tests with Vitest + Testing Library and a GitHub Actions CI pipeline

## Features

- **Scroll-triggered animations**: sections fade, slide and stagger into view once, using Framer Motion `whileInView`
- **Hover micro-interactions** on feature icons, statistics and testimonial cards
- **Respects reduced motion**: a root `MotionConfig reducedMotion="user"` disables transforms for users who ask their OS to reduce motion, and smooth scrolling is turned off too
- **Sticky header** with anchor navigation, active-section highlighting and an accessible mobile menu (closes on link click, `Escape` or resize; locks page scroll)
- **Store buttons** (App Store / Google Play) as real, safe external links, shared by the hero and the footer
- **SEO**: title template, description, Open Graph and Twitter metadata via the Next.js Metadata API, a generated **social preview image** (`opengraph-image.tsx`), `robots.txt`, `sitemap.xml` and the app icon via the `app/icon.png` convention
- **Optimized images**: source images are pre-compressed WebP (about 200 KB in total instead of 4.8 MB) and served through `next/image` (AVIF/WebP, responsive `sizes`, `priority` on the hero image); the Roboto font is self-hosted through `next/font`
- **Security headers** on every response: Content-Security-Policy, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy and (in production) Strict-Transport-Security
- **Custom 404 page** with a link back home; navigation links use `/#section` so they work from any page
- **Static output**: the page is pre-rendered at build time

## Tech Stack

| Category     | Technology                                                                  |
| ------------ | --------------------------------------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, React Compiler)   |
| UI library   | [React 19](https://react.dev/)                                              |
| Language     | [TypeScript 5](https://www.typescriptlang.org/) (strict)                    |
| Styling      | [Tailwind CSS 4](https://tailwindcss.com/)                                  |
| Animation    | [Framer Motion 14](https://motion.dev/)                                     |
| UI utilities | `class-variance-authority`, `clsx`, `tailwind-merge`, `@radix-ui/react-slot` |
| Icons        | [React Icons](https://react-icons.github.io/react-icons/)                   |
| Testing      | [Vitest](https://vitest.dev/), Testing Library, jsdom                       |
| Linting      | ESLint 10 with `eslint-config-next` (Core Web Vitals + TypeScript)          |
| CI           | GitHub Actions                                                              |

## Project Structure

```
FullyLandingPageFramerMotion/
├── .github/
│   ├── workflows/ci.yml              # Lint, typecheck, test and build on every push / PR
│   └── dependabot.yml                # Weekly dependency and GitHub Actions update PRs
├── __tests__/unit/                   # Vitest unit + axe-core accessibility tests
├── public/
│   ├── image/                        # Hero, phone, showcase and avatar images (WebP)
│   └── logos/                        # App Store / Google Play logos
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Metadata, font, skip link, Header, <main>, Footer
│   │   ├── page.tsx                  # Composes the page sections
│   │   ├── not-found.tsx             # Custom 404 page
│   │   ├── opengraph-image.tsx       # Generated social preview image (1200×630)
│   │   ├── robots.ts / sitemap.ts    # robots.txt and sitemap.xml
│   │   ├── globals.css               # Tailwind import, theme tokens, base styles
│   │   └── icon.png                  # Favicon (Next.js file convention)
│   ├── modules/
│   │   ├── Home/
│   │   │   ├── Hero/                 # components/ constants/
│   │   │   ├── Showcase/             # components/ constants/
│   │   │   ├── Features/             # components/ constants/ types/
│   │   │   ├── MobileConvenience/    # components/ constants/ types/
│   │   │   └── Testimonials/         # components/ constants/ types/
│   │   └── Shared/
│   │       └── Footer/               # components/ constants/
│   └── shared/
│       ├── components/               # Header, HeaderMobileMenu, NavLink, Logo, Button, Container,
│       │                             # Section, SectionHeading, IconBadge, StoreButtons,
│       │                             # Reveal, HoverMotion, MotionProvider
│       ├── constants/                # site.ts, nav.ts, motion.ts (shared animation variants)
│       ├── hooks/                    # useActiveSection, useLockBodyScroll
│       └── utils/                    # cn.ts, sectionTitleId.ts
├── .env.example                      # NEXT_PUBLIC_SITE_URL
├── components.json                   # shadcn/ui CLI config
├── eslint.config.mjs
├── LICENSE                           # MIT
├── next.config.ts                    # React Compiler, image formats, security headers
├── tsconfig.json                     # Strict TS, `@/` → `src/`
├── vitest.unit.config.mts
└── vitest.setup.ts
```

**Conventions**

- Section content lives in `constants/*.data.ts`, types in `types/*.types.ts`, UI in `components/`.
- Every list item has a stable `id` used as the React `key`; constants are `UPPER_SNAKE_CASE`.
- Components are Server Components unless they need the browser; client components are marked with `"use client"` and kept as small as possible.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 24 LTS recommended (minimum 20.9)
- npm

### Installation

```bash
git clone https://github.com/hamdiwerhanii/FullyLandingPageFramerMotion.git
cd FullyLandingPageFramerMotion
npm install
```

### Environment variables

Optional. Copy `.env.example` to `.env.local` to override the defaults.

| Variable               | Description                                                                 | Default                 |
| ---------------------- | --------------------------------------------------------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public URL of the site, used for absolute links in social previews, `robots.txt` and `sitemap.xml` | `http://localhost:3000` |

### Available scripts

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `npm run dev`       | Start the dev server at http://localhost:3000        |
| `npm run build`     | Create an optimized production build                 |
| `npm start`         | Serve the production build                           |
| `npm run lint`      | Run ESLint                                           |
| `npm run typecheck` | Run the TypeScript compiler without emitting         |
| `npm test`          | Run unit tests in watch mode                         |
| `npm run test:unit` | Run unit tests once (used in CI)                     |

## Page Sections

| Section       | Anchor          | Module                     | Content                                                   |
| ------------- | --------------- | -------------------------- | --------------------------------------------------------- |
| Hero          | `#home`         | `Home/Hero`                | Headline, store buttons, phones image, intro card         |
| Showcase      | –               | `Home/Showcase`            | Full-width banner image                                   |
| Features      | `#features`     | `Home/Features`            | Four features with icons                                  |
| Mobile        | `#mobile`       | `Home/MobileConvenience`   | Phone image and four statistics                           |
| Testimonials  | `#testimonials` | `Home/Testimonials`        | Three client quotes with photos                           |
| Download      | `#download`     | `Shared/Footer`            | Store buttons, footer links, social links, copyright     |

## Animation System

All animations are defined once in `src/shared/constants/motion.ts` and reused:

| Name               | Effect                                        |
| ------------------ | --------------------------------------------- |
| `STAGGER`          | Reveals children one after another            |
| `FADE_UP`          | Fades in while moving up                      |
| `SLIDE_FROM_LEFT`  | Slides in from the left                       |
| `SLIDE_FROM_RIGHT` | Slides in from the right                      |
| `HOVER_EFFECTS`    | `lift`, `tilt` and `grow` hover interactions  |

Usage inside any (server) component:

```tsx
<RevealGroup as="ul" className="grid gap-8">
  {ITEMS.map((item) => (
    <RevealItem as="li" key={item.id}>…</RevealItem>
  ))}
</RevealGroup>
```

`RevealGroup` animates when it scrolls into view (`playOnMount` animates immediately, used by the hero).

## Customization

- **Content:** edit the module's `constants/*.data.ts` file (for example `src/modules/Home/Features/constants/features.data.ts`).
- **App name, description, store and social links:** `src/shared/constants/site.ts`.
- **Navigation:** `src/shared/constants/nav.ts`; the active-section highlight works for any item whose `href` matches a section `id`.
- **Colors and font:** the `@theme` block in `src/app/globals.css` (`--color-ink`) and the `Roboto` import in `src/app/layout.tsx`.
- **Animations:** tweak durations, distances and easing in `src/shared/constants/motion.ts`.

## Testing and Quality

Unit tests in `__tests__/unit/` cover:

- `cn()` class merging
- Header mobile menu: toggle, `Escape`, close on link click, body scroll lock, anchor links
- Store buttons: correct, safe external links
- Sections: features list and headings, statistics as `<dt>`/`<dd>` pairs, testimonial photos labelled by name
- `robots.txt` and `sitemap.xml` output
- **Accessibility**: every section, the header, the footer and the 404 page are scanned with [axe-core](https://github.com/dequelabs/axe-core) against WCAG 2.1 AA and best-practice rules (color contrast is checked manually, since jsdom has no layout engine)

The CI workflow runs lint, typecheck, unit tests and a production build on every push to `main` and every pull request. Dependabot opens weekly pull requests for dependency and GitHub Actions updates, so CI tests every upgrade before it is merged. `npm audit` reports 0 vulnerabilities; `package.json` uses an npm `overrides` entry so Next's ESLint plugin uses `tinyglobby` instead of `fast-glob`, avoiding an unpatched advisory in the `braces` package.

## Deployment

The page is fully static, so it deploys anywhere Next.js runs. The simplest option is [Vercel](https://vercel.com/new): import the repository, set `NEXT_PUBLIC_SITE_URL` to the production URL and deploy with the default settings.

## Roadmap

- Deploy and add a live demo link to this README
- Add a real intro video to the showcase section
- Point the store buttons to real app listings once the app is published

## License

Released under the [MIT License](LICENSE).

## Author

**Hamdi Werhani** — GitHub [@hamdiwerhanii](https://github.com/hamdiwerhanii)

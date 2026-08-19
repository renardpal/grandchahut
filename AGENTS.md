# AGENTS.md

Overview of the project structure for developers and AI agents working on this codebase.

## Présentation

Grand Chahut is a marketing site for a neighborhood art and music studio for kids. It presents the studio's story, a filterable class schedule, a news feed, and a contact form. Built with TanStack Start and deployed on Netlify.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory Structure

```
├── public
│   ├── contact-form.html   # Static skeleton so Netlify's build bot registers the contact form
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.tsx      # Sticky nav with mobile menu
│   │   └── Footer.tsx      # Site footer with address and quick links
│   ├── data
│   │   ├── classes.ts      # Class catalog: name, discipline, age range, day/time, instructor, spots left
│   │   └── news.ts         # News/announcement posts
│   ├── routes
│   │   ├── __root.tsx      # Root layout: Header, Footer, global styles, SEO meta
│   │   ├── index.tsx       # Home page
│   │   ├── schedule.tsx    # Filterable class schedule (Art / Music / All)
│   │   ├── news.tsx        # News feed
│   │   └── contact.tsx     # Contact form (Netlify Forms via AJAX)
│   ├── router.tsx          # TanStack Router setup
│   └── styles.css          # Tailwind import, Google Fonts, CSS custom properties
├── netlify.toml             # Build command, publish dir, dev server settings
├── tsconfig.json             # `@/*` path alias for `src/*`
└── vite.config.ts            # TanStack Start, Tailwind, Netlify plugins
```

## Key Concepts

### File-Based Routing

Routes are files in `src/routes/`. `__root.tsx` is the shared layout; each other file maps to a URL path (`schedule.tsx` → `/schedule`).

### Content

Class and news content lives in plain TypeScript data files (`src/data/classes.ts`, `src/data/news.ts`) rather than a CMS or database — this is static marketing content that the studio owner is expected to edit directly and redeploy. If this grows into something an owner needs to edit without touching code, revisit with the `netlify-database` or `content-collections` approach.

### Contact Form

The contact form uses Netlify Forms. Because TanStack Start renders the form client-side, `public/contact-form.html` exists purely so Netlify's build-time scanner registers the form — it is never shown to users. The real form in `src/routes/contact.tsx` submits via `fetch('/contact-form.html', ...)` with `application/x-www-form-urlencoded` body. Form submissions land in the Netlify UI under Forms, not in this repo.

## Conventions

### Styling
- Tailwind utility classes throughout
- CSS custom properties in `styles.css` for the color palette (`--color-cream`, `--color-ink`, `--color-marigold`, `--color-terracotta`, `--color-teal`)
- `font-display` utility class applies the Baloo 2 display font; body text uses Karla

### TypeScript
- Strict mode enabled
- Import paths use the `@/` alias for `src/*`

## Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
```

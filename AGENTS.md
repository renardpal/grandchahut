# AGENTS.md

Overview of the project structure for developers and AI agents working on this codebase.

## Présentation

Grand Chahut is a marketing site for a neighborhood art and music studio for kids. It presents the studio's story, a filterable class schedule, and a contact page. Built with TanStack Router as a client-side SPA and deployed on GitHub Pages.

### Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Router (SPA mode) |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Contact | Plain `mailto:` link |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | GitHub Pages (via GitHub Actions) |

## Directory Structure

```
├── index.html               # SPA shell, loads src/main.tsx
├── public
│   └── favicon.ico
├── src
│   ├── main.tsx             # React entry point, mounts the router
│   ├── components
│   │   ├── Header.tsx       # Sticky nav with mobile menu
│   │   └── Footer.tsx       # Site footer with address and quick links
│   ├── data
│   │   └── classes.ts       # Class catalog: name, discipline, age range, day/time, instructor, spots left
│   ├── routes
│   │   ├── __root.tsx       # Root layout: Header, Footer, Outlet
│   │   ├── index.tsx        # Home page
│   │   ├── schedule.tsx     # Filterable class schedule (Acrobatie / Musique / Théâtre / Tout)
│   │   ├── project.tsx      # About/project page
│   │   └── contact.tsx      # Contact page (mailto link)
│   ├── router.tsx           # TanStack Router setup
│   └── styles.css           # Tailwind import, Google Fonts, CSS custom properties
├── .github/workflows/deploy.yml  # Build + publish to GitHub Pages on push to main
├── tsconfig.json             # `@/*` path alias for `src/*`
└── vite.config.ts            # TanStack Router codegen, Tailwind plugins
```

## Key Concepts

### File-Based Routing

Routes are files in `src/routes/`. `__root.tsx` is the shared layout; each other file maps to a URL path (`schedule.tsx` → `/schedule`).

### Content

Class content lives in a plain TypeScript data file (`src/data/classes.ts`) rather than a CMS or database — this is static marketing content that the studio owner is expected to edit directly and redeploy.

### Contact

The site no longer runs on Netlify, so the contact page (`src/routes/contact.tsx`) is a simple `mailto:` link rather than a hosted form. To bring back an in-page form without a server, a service like Formspree can be dropped in.

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
npm run preview  # Preview the production build locally
```

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`:
1. Installs dependencies
2. Computes the correct Vite `base` path for GitHub Pages (root for a `<owner>.github.io` repo, `/repo-name/` otherwise)
3. Builds the site
4. Publishes `dist/` to GitHub Pages

One-time repo setup: **Settings → Pages → Source → GitHub Actions**.

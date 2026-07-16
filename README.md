# Grand Chahut

A marketing site for a neighborhood art and music studio for kids: a home page introducing the studio, a filterable class schedule, and a contact page.

## Tech stack

- [TanStack Router](https://tanstack.com/router) (React 19), running as a client-side SPA
- Tailwind CSS 4
- Deployed on GitHub Pages via GitHub Actions

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`.

## Editing content

Class content lives in a plain data file, not a database — edit it directly and redeploy:

- `src/data/classes.ts` — the class catalog (name, discipline, ages, day/time, instructor, spots left)

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with `npm run preview`.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. One-time setup in the repo:
**Settings → Pages → Source → GitHub Actions**.

The contact form was previously wired to Netlify Forms; it's now a simple
`mailto:` link since the site no longer runs on Netlify. If you want a real
in-page form again, a service like Formspree works without needing a server.

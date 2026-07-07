# Marigold & Sound

A marketing site for a neighborhood art and music studio for kids: a home page introducing the studio, a filterable class schedule, a news feed, and a contact form.

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Tailwind CSS 4
- Netlify Forms for the contact form
- Deployed on Netlify

## Running locally

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:3000`. To test with full Netlify emulation (including forms), use the Netlify CLI instead:

```bash
netlify dev
```

## Editing content

Classes and news posts are plain data files, not a database — edit them directly and redeploy:

- `src/data/classes.ts` — the class catalog (name, discipline, ages, day/time, instructor, spots left)
- `src/data/news.ts` — news and announcement posts

## Build

```bash
npm run build
```

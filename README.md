# Grow My Therapy

A Next.js 15 App Router site for Dr. Maya Reynolds, PsyD. Warm, professional, and fully responsive with Tailwind CSS, optimized images, and clear CTAs.

## Tech Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS
- TypeScript
- ESLint (Next core-web-vitals + typescript)

## Getting Started

Prerequisites:
- Node.js 18+
- npm 9+

Install and run:

```bash
npm install
npm run dev
```

Useful scripts:
- `npm run dev` — start local development
- `npm run build` — production build
- `npm run start` — run the built app
- `npm run lint` — lint the project

## Project Notes

- Images are optimized via Next.js. Local images are in `public/images`. Remote image domains are configured in `next.config.mjs`.
- Styles live in `app/globals.css`. Tailwind is configured in `tailwind.config.ts`.
- App layout and pages live under `app/` (App Router).

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

## Deploy (Recommended: Vercel)

Vercel provides first‑class support for Next.js, automatic image optimization, and simple previews.

### Option A — Deploy from GitHub

1. Push code to a new GitHub repo:
   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo>.git
   git push -u origin main
   ```
2. Go to https://vercel.com and create a project.
3. Import the GitHub repo.
4. Framework should auto‑detect: Next.js.
5. Build settings:
   - Build Command: `npm run build`
   - Output: auto (Vercel handles Next.js outputs)
6. Deploy. You’ll get a live URL and can add a custom domain.

### Option B — Vercel CLI (no GitHub required)

```bash
npm i -g vercel
vercel           # link or create project, deploy preview
vercel --prod    # deploy production
```

## Alternative: Netlify (optional)

1. Push to GitHub.
2. In Netlify, “Add new site” → “Import from GitHub”.
3. Build Command: `npm run build`
4. Netlify auto‑detects Next.js and configures server functions.

## Production Checklist

- `next.config.mjs` has `images.unoptimized` set to `false` for production.
- Verify remote image domains under `images.remotePatterns` if using external images.
- Run `npm run build` and review output for warnings.

## Loom Walkthrough (optional)

Record a short demo for stakeholders with Loom (https://loom.com). Show desktop and mobile, explain choices in plain language, and share the link.


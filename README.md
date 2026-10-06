# SentinelOps World

Public website for SentinelOps and the Provability Fabric research programme.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- Supabase for newsletter subscriptions
- Vercel for production hosting

## Local development

```bash
npm ci
npm run dev
```

The development server runs on port 8080 by default.

## Production build

```bash
npm run build
npm run preview
```

The build output is written to `dist/`. The prebuild step regenerates `public/sitemap.xml`.

## Deployment

Production deploys from `main` through Vercel. The canonical domain is `https://sentinelops.world`.

The site uses client-side routing. `vercel.json` rewrites application routes to `index.html` and preserves static assets.

## Environment

The Supabase client expects the environment variables referenced in `src/integrations/supabase/client.ts`. Keep local credentials in an untracked `.env` file and configure production values through the deployment platform.

# RevLytics

A static Astro + Tailwind CSS website for Wade Olcott's fractional Revenue Operations practice. No backend, database, CMS, analytics, or client-side framework. Site URL: https://rev-lytics.com.

## Local development

Use Node.js 22.12+ (Node 24 LTS recommended).

```sh
npm ci
npm run dev
```

Astro serves the site at http://localhost:4321. Build and inspect the production output:

```sh
npm run build
npm run preview
```

The build writes all pages and assets to `dist/`.

## Content and configuration

- `src/config.ts`: the single location for verified email, booking URL, and LinkedIn URL. Empty values hide their links. **Add at least one real contact method before launch**; the initial contact page explicitly says details are coming soon. There is no nonfunctional form or invented address.
- `src/pages/index.astro`: complete homepage.
- `src/pages/{how-i-work,experience,about,contact,404}.astro`: supporting pages and custom error page.
- `src/layouts/Layout.astro`: shared header, native HTML mobile menu, footer, canonical URLs and Open Graph metadata.
- `src/styles/global.css`: Tailwind and shared visual styles.
- `public/images/wade-portrait.webp`: add Wade's actual portrait at this exact path and rebuild. Until then, the shared Portrait component shows a neutral monogram, never a stock face. Use a roughly 4:4.5 image; review the crop after adding it.
- `public/images/social-card.png`: static Open Graph image.
- `public/favicon.svg`: favicon.

Only the supplied professional history is represented. No client endorsements, project outcomes, or testimonials are implied. Introductory About and engagement copy can be refined before launch.

## Cloudflare Pages (manual, when ready)

This implementation does not deploy anything or change DNS.

1. Review and merge the website pull request.
2. Configure contact information and supply the portrait if desired.
3. Create a Cloudflare Pages project and connect this GitHub repository.
4. Select Astro (or no preset), repository root `/`, production branch `main`, build command `npm run build`, and output directory `dist`.
5. Set `NODE_VERSION` to `24` in the Pages build environment. No application secrets or runtime variables are required.
6. Review the generated `pages.dev` URL, including all routes, mobile navigation, contact links, metadata, and the custom 404.
7. Only after separate authorization, attach the live domain through Cloudflare's custom-domain workflow. Do not change DNS as part of this initial implementation.

Cloudflare Pages serves `dist/404.html` for missing routes. No adapter, Worker, redirects, or SPA fallback is needed. If deploying to another domain permanently, update `site` in `astro.config.mjs` and `src/config.ts`.

## Accessibility and delivery

Semantic landmarks, skip link, visible keyboard focus, responsive typography, native keyboard-operable navigation, and descriptive portrait alternative text are included. No custom browser JavaScript is required. Before public launch, inspect at mobile and desktop sizes, navigate with a keyboard, and verify your real contact destinations.

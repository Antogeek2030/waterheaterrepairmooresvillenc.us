# Water Heater Repair Mooresville NC — Astro Website

Production-ready, SEO-optimized Astro site for a local water heater business.

## Features

- 20 unique service pages with process, pricing guidance, and FAQs
- Service areas for Mooresville and nearby Lake Norman communities
- Accessible contact form with honeypot (Web3Forms)
- Blog with 2 sample posts
- Custom 404, privacy policy, terms
- Full SEO: unique titles/descriptions, canonicals, Open Graph, Twitter cards
- `sitemap.xml` via `@astrojs/sitemap`
- `robots.txt` allowing major search & AI crawlers
- `llms.txt` for AI discovery
- Sticky mobile click-to-call button
- Semantic HTML, skip link, WCAG AA-oriented styling
- Cloudflare Pages compatible

## Setup

```bash
npm install
```

### Web3Forms

1. Sign up at [web3forms.com](https://web3forms.com)
2. Create an access key
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY` in `src/pages/contact.astro`

### Phone Number

A placeholder phone number `(704) 555-0123` is used throughout. Search-and-replace with your real number.

## Development

```bash
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to Cloudflare Pages

1. Connect the repository to Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node version: 18 or higher recommended

Or use Wrangler:

```bash
npx wrangler pages deploy dist
```

## Project Structure

```
src/
  components/   Header, Footer
  data/         services.ts, areas.ts
  layouts/      BaseLayout.astro
  pages/        All routes including dynamic [slug] pages
  styles/       global.css
public/         robots.txt, llms.txt, favicon.svg
```

## Notes

- No fake licenses, statistics, or credentials are claimed.
- Reviews are presented as general customer feedback without fabricated metrics.
- All copy is original and written for natural readability.

# Cllr John Morris — Website

Campaign/representative website for **Cllr John Morris**, councillor for **Canning Town South** on the
**London Borough of Newham**. Built with [Astro](https://astro.build) as a fast, static, component-based site.

## Getting started

```bash
npm install
npm run dev       # start local dev server — open http://localhost:4321/John-Morris-Website-/
npm run build     # type-check + build the static site to dist/
npm run preview   # preview the production build locally
```

Requires Node 18.20.8+ / 20.3.0+ / 22+.

Note the `/John-Morris-Website-/` path segment — the site is configured (see `astro.config.mjs`) to run
under that subpath so it works on GitHub Pages; visiting bare `localhost:4321` will 404.

## Deployment (GitHub Pages)

The site auto-deploys via `.github/workflows/deploy.yml` on every push to
`claude/website-creation-0is8ji`, or on demand via the "Run workflow" button under the Actions tab.

**One-time setup required:** in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
Until that's done, the workflow will build successfully but the deploy step will fail with a "Pages site
not found" style error.

Once enabled, the live site will be at:

```
https://morrisjj1988-commits.github.io/John-Morris-Website-/
```

### Moving to a custom domain later

When a real domain (e.g. `cllrjohnmorris.co.uk`) is ready:

1. Update `site` in `astro.config.mjs` to the new domain and remove the `base` option entirely
   (a custom domain serves from the root, so the base-path helper is no longer needed).
2. Update `public/robots.txt`'s `Sitemap:` line to match.
3. Add a `public/CNAME` file containing the domain name.
4. Configure the custom domain in **Settings → Pages**, and set up the DNS records GitHub provides.

## Project structure

```
src/
  components/     Header, Footer, SocialBar, TopSocialStrip, Hero, NewsCard,
                   ContactForm, Newsletter, PlaceholderPhoto
  layouts/
    BaseLayout.astro   Shared <head>/SEO meta, header, footer
  content/
    news/*.md       News posts (see "Adding a news post" below)
  content.config.ts  Schema for the news collection
  lib/
    site.ts          Single source of truth for social links, nav, contact
                      details, surgery info, and "how can I help" categories
  pages/
    index.astro
    find-help/index.astro
    news/index.astro, news/[slug].astro
    about/index.astro
    contact/index.astro
    legal/privacy-policy/, cookie-policy/, terms-of-use/
    404.astro
public/            Static assets (favicon, robots.txt, placeholder images)
```

## Adding a new news post

1. Add a new Markdown file to `src/content/news/`, e.g. `src/content/news/my-new-update.md`.
   The filename becomes the URL slug (`/news/my-new-update/`).
2. Add frontmatter matching the schema in `src/content.config.ts`:

   ```md
   ---
   title: "Headline for the update"
   date: 2026-08-01
   category: Housing   # one of: Housing, Community, Environment, Council, Transport
   excerpt: "One or two sentence summary shown on cards and previews."
   image: "/images/news/placeholder.svg"
   imageAlt: "Description of the photo — used until a real photo is added"
   draft: false          # set true to hide it from all listings until ready
   ---

   Body copy goes here in Markdown — headings, paragraphs, lists and links all work.
   ```

3. Save the file — it will automatically appear on the homepage (if recent), the `/news/` listing
   (with category filtering), and get its own page at `/news/<filename>/`.
4. To add a new category, extend the `category` enum in `src/content.config.ts` and add a matching
   entry to `toneByCategory` in `src/components/NewsCard.astro` if you want a distinct accent colour.

Real photography can replace the `PlaceholderPhoto` component in `NewsCard.astro` and `news/[slug].astro`
with a normal `<img>` tag once photos are available — keep the `imageAlt` field as the `alt` text.

## Updating social links

All social media links live in one place: `src/lib/site.ts`, in the `socialLinks` array. Each entry has:

```ts
{ platform: 'X (Twitter)', handle: '@Plaistovian', url: 'https://x.com/Plaistovian', icon: 'simple-icons:x' }
```

- `icon` is a [Simple Icons](https://simpleicons.org/) name in the form `simple-icons:<slug>` (rendered via
  `astro-icon`) — this gives official brand icons rather than generic ones.
- Editing, adding, or removing an entry here automatically updates the top social strip, the header, and
  the footer everywhere on the site — they all read from this same array.
- All social links open in a new tab with `rel="noopener noreferrer"` for security.

**Before launch:** confirm the exact registered handle URLs for Threads and Bluesky in particular, as noted
in the original project brief — the assumed URL pattern may not match the real profile URL.

## Content still needed from the client

Several things in this build are realistic placeholders, flagged in code comments, ready to be swapped for
real content:

- **Photos** — every photo on the site (`PlaceholderPhoto` component) is currently a labelled placeholder
  graphic, not a real image. Replace with real headshots/community photos once supplied.
- **Contact details** — email, phone, and office address in `src/lib/site.ts` (`site.email`, `site.phone`,
  `site.officeAddress`) are placeholders.
- **Ward surgery details** — `site.surgery` in `src/lib/site.ts` needs a confirmed time/venue.
- **Imprint / promoter wording** — `site.imprint` in `src/lib/site.ts` must be reviewed and confirmed for
  compliance with UK political communication rules before launch.
- **Party affiliation & colour palette** — the current palette (navy/red) is a neutral civic placeholder;
  confirm official party branding with the client if applicable.
- **Newham Council profile link** — `site.newhamProfileUrl` in `src/lib/site.ts` should point to John's real
  council.newham.gov.uk profile page once known.
- **Forms** — the contact and casework enquiry forms, and the newsletter sign-up, currently show an inline
  confirmation on submit but don't send data anywhere (see comments in `ContactForm.astro` and
  `Newsletter.astro`). Wire these up to a real form backend (e.g. Formspree, Netlify Forms) or mailing list
  provider (e.g. Mailchimp) before launch.
- **Legal pages** — `privacy-policy`, `cookie-policy`, and `terms-of-use` are drafted starting points and
  are marked `noindex` until reviewed; they should be checked (ideally by someone with a data protection
  background) before launch, and un-flagged as noindex once approved.
- **OG image** — `public/images/og-default.svg` is a placeholder social-share image; consider replacing
  with a JPG/PNG version, since some platforms don't render SVG Open Graph images.

## SEO

Every page sets its own `<title>`, meta description, canonical URL, and Open Graph / Twitter card tags via
`BaseLayout.astro`. A sitemap is generated automatically at build time (`@astrojs/sitemap`) and referenced
from `public/robots.txt`.

## Accessibility

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, and visible focus states.
- All interactive icons (social links, mobile nav toggle) have accessible names.
- Colour choices target WCAG AA contrast; light/dark colour-scheme variants are included.
- Forms use associated `<label>`s, and required fields are marked appropriately.

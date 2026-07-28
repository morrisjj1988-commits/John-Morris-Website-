# Cllr John Morris — Website

Campaign/representative website for **Cllr John Morris**, councillor for **Canning Town South** on the
**London Borough of Newham**. Built with [Astro](https://astro.build) as a fast, static, component-based site.

## Getting started

```bash
npm install
npm run dev       # start local dev server at http://localhost:4321
npm run build     # type-check + build the static site to dist/
npm run preview   # preview the production build locally
```

Requires Node 18.20.8+ / 20.3.0+ / 22+.

## Deployment (GitHub Pages)

The site auto-deploys via `.github/workflows/deploy.yml` on every push to
`claude/website-creation-0is8ji`, or on demand via the "Run workflow" button under the Actions tab.

The live site is at **https://johnmorris.uk** (custom domain configured via **Settings → Pages**, with
DNS records at the domain registrar and a `public/CNAME` file so it survives redeploys). Before the custom
domain was set up, the site ran at `https://morrisjj1988-commits.github.io/John-Morris-Website-/` — if the
domain or DNS ever needs redoing, that fallback URL still works as long as `astro.config.mjs`'s `base`
option isn't reintroduced.

## Forms

`ContactForm.astro` supports two ways to wire a form instance up for real (see comment at the top of that
file); pick per-instance via props.

**Live now — Formspree.** The Contact page's "Get in touch" form
(`src/pages/contact/index.astro`) submits via `fetch()` to a
[Formspree](https://formspree.io) endpoint (`formspreeEndpoint` prop), shown inline as JSON so the page
never navigates away — success shows the existing "thanks" confirmation message, failure shows an inline
error with a mailto fallback. This works regardless of hosting platform (GitHub Pages, Netlify, anywhere),
since it's a plain client-side API call, not something tied to the host. Submissions and the endpoint are
managed at formspree.io (free tier: 50 submissions/month).

**Available but unused — Netlify Forms.** Pass `netlify` + a unique `netlifyFormName` instead of
`formspreeEndpoint` to use [Netlify Forms](https://docs.netlify.com/manage/forms/setup/) — no external
account needed beyond Netlify itself, but it **only captures submissions on a site actually built and
served by Netlify** (Netlify's build process has to detect the `data-netlify="true"` form at deploy time).
Since the live site is on GitHub Pages, this path isn't active, but the code and a branded
`/contact/thanks/` redirect page are in place if hosting ever moves to Netlify.

The Find Help casework form, the newsletter sign-up, and the Road Safety Campaign petition form
(`PetitionForm.astro`) are still unwired (working preview only) — apply either of the above patterns to
`ContactForm.astro`'s casework instance, `Newsletter.astro`, or `PetitionForm.astro`'s `formspreeEndpoint`
prop to connect them the same way.

## Analytics

The site can report page views per page/article, aggregate visitor location (country/city, not individual
IP addresses — Google Analytics never exposes raw IPs to site owners), and traffic source (search, social,
referral, direct) via Google Analytics 4.

**Currently disabled.** `site.googleAnalyticsId` in `src/lib/site.ts` is blank, so no tracking script or
cookie banner renders at all — nothing loads until this is set.

**To enable:**

1. Create a GA4 property at [analytics.google.com](https://analytics.google.com) and copy its Measurement ID
   (`G-XXXXXXXXXX`).
2. Set `googleAnalyticsId` in `src/lib/site.ts` to that ID.
3. Rebuild and deploy. A cookie consent banner (`CookieConsent.astro`) will now appear on first visit — GA
   only loads if a visitor clicks "Accept"; "Reject" (or no choice) means nothing loads. This is required
   under UK PECR since GA sets cookies.
4. View reports at analytics.google.com — realtime and historical data only starts accumulating from when
   the script goes live; there's no way to backfill past visits.

The Cookie Policy and Privacy Policy pages already describe this behaviour and link to Google's own privacy
policy, so no further legal-copy changes are needed when you turn it on.

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

**Adding a real photo to a post:** drop an image file at `src/assets/images/news/<slug>.jpg` (same
filename as the post, `.jpg`/`.jpeg`/`.png`/`.webp` all work) — it's picked up automatically by both the
news card and the post page, replacing the placeholder graphic. No code changes needed; this is handled by
`src/lib/newsImages.ts`. Keep the `imageAlt` field in the post's frontmatter as the photo's `alt` text.

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

- **Photos** — the homepage hero headshot and the "in his own words" photo are real (see `SitePhoto`
  component and `src/assets/images/`). Everything else (`PlaceholderPhoto` component: About page photo,
  and every news post's header image) is still a labelled placeholder graphic. To add a real photo, drop
  the file in `src/assets/images/`, import it in the relevant `.astro` file, and swap `PlaceholderPhoto`
  for `SitePhoto` (see `Hero.astro` or `index.astro` for the pattern) — Astro automatically compresses and
  resizes it at build time.
- **Contact details** — email, phone, and office address in `src/lib/site.ts` (`site.email`, `site.phone`,
  `site.officeAddress`) are placeholders.
- **Ward surgery details** — `site.surgery` in `src/lib/site.ts` needs a confirmed time/venue.
- **Imprint / promoter wording** — `site.imprint` in `src/lib/site.ts` must be reviewed and confirmed for
  compliance with UK political communication rules before launch.
- **Party affiliation & colour palette** — the current palette (navy/red) is a neutral civic placeholder;
  confirm official party branding with the client if applicable.
- **Newham Council profile link** — `site.newhamProfileUrl` in `src/lib/site.ts` should point to John's real
  council.newham.gov.uk profile page once known.
- **Forms** — the Contact page's "Get in touch" form is wired up to **Formspree** (see "Forms" section
  above). The Find Help casework enquiry form, the newsletter sign-up, and the Road Safety Campaign
  petition form still just show an inline confirmation on submit without sending data anywhere (see
  comments in `ContactForm.astro`, `Newsletter.astro`, and `PetitionForm.astro`) — wire these up the same
  way, or to a different backend/mailing list provider, before launch.
- **Legal pages** — `privacy-policy`, `cookie-policy`, and `terms-of-use` are drafted starting points and
  are marked `noindex` until reviewed; they should be checked (ideally by someone with a data protection
  background) before launch, and un-flagged as noindex once approved.
- **OG image** — `public/images/og-default.png` is the default social-share image (1200×630 PNG, rendered
  from `public/images/og-default.svg`) so it previews reliably on Facebook, Twitter/X, and LinkedIn.

## SEO

Every page sets its own `<title>`, meta description, canonical URL, and Open Graph / Twitter card tags via
`BaseLayout.astro`. A sitemap is generated automatically at build time (`@astrojs/sitemap`) and referenced
from `public/robots.txt`.

## Accessibility

- Semantic HTML landmarks (`header`, `nav`, `main`, `footer`), skip-to-content link, and visible focus states.
- All interactive icons (social links, mobile nav toggle) have accessible names.
- Colour choices target WCAG AA contrast; light/dark colour-scheme variants are included.
- Forms use associated `<label>`s, and required fields are marked appropriately.

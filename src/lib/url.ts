// Prefixes an absolute site path (e.g. "/about/") with the configured Astro
// `base` (see astro.config.mjs), so internal links work when the site is
// deployed under a subpath — as GitHub Pages project sites are.
export function withBase(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/?$/, '/');
  if (path === '/') return base;
  return `${base}${path.replace(/^\//, '')}`;
}

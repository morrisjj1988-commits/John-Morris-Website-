import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Placeholder GitHub Pages URL until a custom domain (e.g. cllrjohnmorris.co.uk) is
  // confirmed and configured — see README.md for how to switch over.
  site: 'https://morrisjj1988-commits.github.io',
  base: '/John-Morris-Website-/',
  integrations: [icon(), sitemap()],
});

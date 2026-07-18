import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cllrjohnmorris.co.uk',
  integrations: [icon(), sitemap()],
});

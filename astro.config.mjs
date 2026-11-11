import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://waterheaterrepairmooresvillenc.us',
  integrations: [sitemap()],
  build: {
    format: 'directory',
  },
  compressHTML: true,
  vite: {
    build: {
      cssMinify: true,
    },
  },
});

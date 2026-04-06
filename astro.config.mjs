import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://innovaconsult.ai',
  integrations: [tailwind({ applyBaseStyles: false })]
});

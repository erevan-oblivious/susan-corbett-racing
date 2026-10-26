// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // <-- Add 'site: 'https://www.greenpage.uk',' - which is required for canonical url configuration.
  output: 'server', // <-- Required for API endpoints to work
  adapter: cloudflare()
});
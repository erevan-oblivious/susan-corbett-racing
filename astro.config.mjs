// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.susancorbettracing.co.uk',
  output: 'server', // <-- Required for API endpoints to work
  adapter: cloudflare()
});
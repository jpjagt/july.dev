import { defineConfig } from 'astro/config';
import path from 'path';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://july.dev',
  // base: '/july.dev',
  vite: {
    resolve: {
      alias: {
        // Set up '@' to point to the 'src' directory
        '@': path.resolve('./src')
      }
    }
  }
});
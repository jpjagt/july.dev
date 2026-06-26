import { defineConfig } from 'astro/config';
import path from 'path';
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import { satteri } from '@astrojs/markdown-satteri';

const stripUserContentPrefix = {
  name: "strip-user-content-prefix",
  element: {
    filter: ["a", "li"],
    visit(node, ctx) {
      const props = node.properties ?? {}

      if (typeof props.id === "string" && props.id.startsWith("user-content-")) {
        ctx.setProperty(node, "id", props.id.slice("user-content-".length))
      }

      if (typeof props.href === "string" && props.href.startsWith("#user-content-")) {
        ctx.setProperty(node, "href", "#" + props.href.slice("#user-content-".length))
      }
    }
  }
}

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), alpinejs()],
  site: 'https://july.dev',
  // base: '/july.dev',
  markdown: {
    processor: satteri({
      hastPlugins: [stripUserContentPrefix]
    })
  },
  vite: {
    resolve: {
      alias: {
        // Set up '@' to point to the 'src' directory
        '@': path.resolve('./src')
      }
    }
  }
});

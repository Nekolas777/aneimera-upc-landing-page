import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server',
  env: {
    schema: {
      ANEIMERA_API: envField.string({
        context: 'client',
        access: 'public',
        optional: false
      })
    }
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
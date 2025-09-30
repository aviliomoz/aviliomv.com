// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from "astro-icon";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aviliomv.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon(), react(), sitemap()]
});
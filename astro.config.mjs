// @ts-check
import { defineConfig } from "astro/config";
import vue from "@astrojs/vue";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://ugis.upbir.ch",
  output: "static",
  integrations: [vue(), sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});

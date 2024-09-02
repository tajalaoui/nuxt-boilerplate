import path from "path";
import Aura from "@primevue/themes/aura";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@primevue/nuxt-module",
    "@nuxtjs/tailwindcss",
    "@nuxt/fonts",
    "@nuxt/image",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/seo",
  ],
  primevue: {
    autoImport: true,
    options: {
      ripple: true,
      theme: {
        preset: Aura,
      },
    },
    // importPT: { from: path.resolve(__dirname, "./presets/aura/") },
    importPT: { as: "Aura", from: "~/presets/aura" }, // for windows
  },
  css: ["primeicons/primeicons.css", "./assets/css/tailwind.css"],
  image: {
    quality: 80,
  },
  site: {
    url: "https://example.com",
    name: "Awesome Site",
    description: "Welcome to my awesome site!",
    defaultLocale: "en",
  },
});

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
    "nuxt-security",
    "@nuxt/icon",
    // "@nuxtjs/i18n",
    "nuxt-delay-hydration",
    "@nuxtjs/partytown",
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
  css: ["./assets/css/base.scss", "primeicons/primeicons.css", "./assets/css/tailwind.css"],
  image: {
    defaults: {
      loading: "lazy",
      quality: 80, // Adjust image quality
      format: "webp", // Use WebP for smaller image sizes
    },
  },
  site: {
    url: "https://example.com",
    name: "Nuxt.js",
    description: "Welcome to my awesome site!",
    defaultLocale: "en",
  },
  // i18n: {
  //   lazy: true,
  //   langDir: "locales",
  //   locales: [
  //     { code: "en", language: "en-US", name: "English", file: "en-US.json" },
  //   ],
  //   defaultLocale: "en-US",
  //   strategy: "no_prefix",
  //   detectBrowserLanguage: {
  //     useCookie: true,
  //     cookieKey: "i18n_redirected",
  //     alwaysRedirect: true,
  //     fallbackLocale: "en",
  //   },
  // },
  security: {
    headers: {
      crossOriginEmbedderPolicy:
        // TODO Add .env var
        process.env.NODE_ENV === "development" ? "unsafe-none" : "require-corp",
    },
  },
});
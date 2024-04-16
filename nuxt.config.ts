import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

const sw = process.env.SW === "true";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  build: {
    transpile: ["vuetify"],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
    "@nuxtjs/fontaine",
    "@nuxt/eslint",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  // pwa: {
  //   strategies: sw ? "injectManifest" : "generateSW",
  //   srcDir: sw ? "service-worker" : undefined,
  //   filename: sw ? "sw.ts" : undefined,
  //   registerType: "autoUpdate",
  //   manifest: {
  //     name: "Nuxt Vite PWA",
  //     short_name: "NuxtVitePWA",
  //     theme_color: "#1e1e1e",
  //     icons: [
  //       {
  //         src: "pwa-192x192.png",
  //         sizes: "192x192",
  //         type: "image/png",
  //       },
  //       {
  //         src: "pwa-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //       },
  //       {
  //         src: "pwa-512x512.png",
  //         sizes: "512x512",
  //         type: "image/png",
  //         purpose: "any maskable",
  //       },
  //     ],
  //   },
  //   workbox: {
  //     globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  //   },
  //   injectManifest: {
  //     globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
  //   },
  //   client: {
  //     installPrompt: true,
  //     // you don't need to include this: only for testing purposes
  //     // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
  //     periodicSyncForUpdates: 20,
  //   },
  //   devOptions: {
  //     enabled: true,
  //     suppressWarnings: true,
  //     navigateFallback: "/",
  //     navigateFallbackAllowlist: [/^\/$/],
  //     type: "module",
  //   },
  // },
});

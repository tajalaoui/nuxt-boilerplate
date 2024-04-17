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
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          // Raleway: {
          //   wght: [100, 400],
          //   ital: [100],
          // },
          Inter: "300..700",
          Syne: "400..700",
        },
      },
    ],
    "@nuxtjs/fontaine",
    "@nuxt/eslint",
    // "@nuxtjs/stylelint-module",
    // "@nuxt/image",
  ],
  // image: {
  //   quality: 80,
  // },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});
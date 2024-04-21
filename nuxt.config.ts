import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import { pwa } from "./config/pwa";
import { appDescription } from "./constants/index";

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
    "@vite-pwa/nuxt",
    "@nuxtjs/partytown",
    // "@nuxtjs/stylelint-module",
    // "@nuxt/image",
  ],
  // image: {
  //   quality: 80,
  // },
  pwa,
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
});

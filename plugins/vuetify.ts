import "vuetify/styles";
import { createVuetify } from "vuetify";

// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure your project is capable of handling css files

import { aliases, md } from "vuetify/iconsets/md";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
      },
    },
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            white: "#FFFFFF",
            black: "#000000",
            primary: "#1e1e1e",
            secondary: "#424242",
          },
        },
      },
    },
    defaults: {
      VTextField: {
        variant: "outlined",
        color: "darkGreen",
        density: "compact",
        clearable: true,
      },
      VSelect: {
        variant: "outlined",
        color: "white",
        density: "compact",
      },
      VDataTable: {
        color: "#040E18",
      },
      VBtn: {
        style: [{ fontWeight: "500" }],
      },
    },
  });
  app.vueApp.use(vuetify);
});

# 🚀 Nuxt Boilerplate Project  

This is a boilerplate project setup for a **Nuxt.js** application with various integrated modules and security best practices.  

## ✨ Features  

- 🎨 **PrimeVue** – UI components with auto-import and ripple effects.  
- 🎨 **Tailwind CSS** – Utility-first CSS styling.  
- 🗂️ **Nuxt Image** – Optimized image handling.  
- 🔒 **Nuxt Security** – Security headers and best practices.  
- 🌍 **Nuxt i18n** – Internationalization and localization.  
- 📈 **Nuxt SEO** – SEO optimization.  
- 🛠️ **VueUse** – Useful Vue composition API utilities.  
- ⚡ **Nuxt Booster** – Performance enhancements.  
- 🏷️ **Nuxt Icons** – Icon management.  

## ⚙️ Configuration  

### 📝 `nuxt.config.js`  

This file contains the configuration for the Nuxt.js application. Key sections:  

- 📦 **Modules** – Integrates various Nuxt.js modules like `@primevue/nuxt-module`, `@nuxtjs/tailwindcss`, `@nuxt/fonts`, `@nuxt/image`, and more.  
- 🎨 **PrimeVue** – Configures PrimeVue with auto-import, ripple effects, and the **Aura** theme.  
- 🖌️ **CSS** – Includes global CSS files like **PrimeIcons** and **Tailwind CSS**.  
- 🗂️ **Image** – Sets the default image quality to **80%**.  
- 🌐 **Site** – Defines site details like URL, name, and description.  
- 🌍 **i18n** – Configures internationalization with lazy loading and browser language detection.  
- 🔐 **Security** – Sets up security headers with a cross-origin embedder policy based on the environment.  

## 🛠️ Setup  

Install dependencies before running the project:  

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 🏃‍♂️ Development Server  

Start the development server at `http://localhost:3000`:  

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## 🚀 Production  

Build the application for production:  

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

Preview the production build locally:  

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

📖 Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more details.


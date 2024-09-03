# Nuxt Boilerplate Project

This is a boilerplate project setup for a Nuxt.js application with various integrated modules and security best practices.

## Features

- **PrimeVue**: For UI components with auto-import and ripple effects.
- **Tailwind CSS**: For utility-first CSS styling.
- **Nuxt Image**: For optimized image handling.
- **Nuxt Security**: For security headers and practices.
- **Nuxt i18n**: For internationalization and localization.
- **Nuxt SEO**: For SEO optimization.
- **VueUse**: For useful Vue composition API utilities.
- **Nuxt Booster**: For performance enhancements.
- **Nuxt Icons**: For icon management.

## Configuration

### `nuxt.config.js`

This file contains the configuration for the Nuxt.js application. Here are the key sections:

- **Modules**: Integrates various Nuxt.js modules such as `@primevue/nuxt-module`, `@nuxtjs/tailwindcss`, `@nuxt/fonts`, `@nuxt/image`, and others.
- **PrimeVue**: Configures PrimeVue with auto-import, ripple effects, and the Aura theme.
- **CSS**: Includes global CSS files, such as PrimeIcons and Tailwind CSS.
- **Image**: Sets the image quality to 80%.
- **Site**: Configures basic site information like URL, name, and description.
- **i18n**: Configures internationalization with lazy loading of locales and browser language detection.
- **Security**: Configures security headers with a cross-origin embedder policy based on the environment.

## Setup

Make sure to install the dependencies:

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

## Development Server

Start the development server on `http://localhost:3000`:

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

## Production

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

Locally preview production build:

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

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

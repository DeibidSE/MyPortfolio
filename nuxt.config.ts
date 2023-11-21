// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  eslint: { lintOnStart: false },
  ssr: false,
  app: {
    baseURL: '/MyPortfolio/',
    buildAssetsDir: 'assets',
    head: {
      title: 'Portfolio - David Simón',
      meta: [
        {
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        {
          hid: 'description',
          name: 'description',
          content: "Welcome to my portfolio! I'm David, a full stack web developer. Explore my work and projects here."
        },
        {
          name: 'author',
          content: 'David Simón - @DeibidSE'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/MyPortfolio/favicon.ico' }
      ],
      htmlAttrs: {
        lang: 'en'
      }
    }
  },
  runtimeConfig: {
    public: {
      BASE_URL: '/MyPortfolio'
    }
  },
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon'
  ],
  css: ['@/assets/css/tailwind.css']
})

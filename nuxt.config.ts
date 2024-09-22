// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  eslint: { lintOnStart: false },
  ssr: false,
  app: {
    baseURL: '/MyPortfolio/',
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
          content:
            "Welcome to my portfolio! I'm David, a full stack web developer. Explore my work and projects here."
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
    '@pinia-plugin-persistedstate/nuxt',
    '@pinia/nuxt',
    'nuxt-icons',
    '@nuxtjs/i18n'
  ],
  i18n: {
    strategy: 'no_prefix',
    defaultLocale: 'en',
    locales: [
      { code: 'es', name: 'Español', file: 'es.json' },
      { code: 'en', name: 'English', file: 'en.json' }
    ],
    lazy: true,
    langDir: 'lib/locales/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    }
  },
  css: ['@/assets/css/tailwind.css', '@/assets/css/index.css'],
  compatibilityDate: '2024-08-10'
})

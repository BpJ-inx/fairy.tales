// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['./src',],
  css: ['~/src/assets/css/main.scss'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      title: 'Волшебный Сказочник',
      meta: [
        { name: 'description', content: 'An application that generates fairy tales according to your preferences using YandexGPT' }, 
        { name: 'keywords', content: 'YandexGPT,fairy tales' }, 
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }, 
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  }
})


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: '/vendors/preline.js', body: true }
      ]
    }
  },
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss"
  ],

})

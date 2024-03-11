// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css : [
      '@tabler/icons-webfont/tabler-icons.css'
  ],
  app: {
    head : {
      titleTemplate: '%s - Nuxt Training',
      htmlAttrs : {
        'data-theme':'retro'
      }
    }
  },
  runtimeConfig : {
    public : {
      apiUrl : process.env.NUXT_API_URL,
      company : process.env.NUXT_COMPANY
    }
  },
  modules: ["@nuxtjs/tailwindcss"]
})
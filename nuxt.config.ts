// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['normalize.css/normalize.css'],
  modules: ['nuxt-icons'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/src/assets/scss/style.scss" as *;'
        }
      }
    }
  }
})

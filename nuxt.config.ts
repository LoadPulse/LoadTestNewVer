// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"], 
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "~/assets/scss/mixins.scss"; @import "~/assets/scss/variables.scss";',
            },
        },
    },
  },
  css: [
    "~/assets/scss/main.scss", 
  ],
  tailwindcss: {
    cssPath: ['~/assets/scss/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900]
    }
  }
})
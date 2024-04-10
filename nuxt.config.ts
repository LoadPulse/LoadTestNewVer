// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"], 
  css: [
    // SCSS file in the project
    "~/assets/scss/main.scss", // you should add main.scss somewhere in your app
  ],
  tailwindcss: {
    cssPath: ['~/assets/scss/tailwind.css', { injectPosition: "first" }],
    configPath: 'tailwind.config',
    exposeConfig: {
      level: 2
    },
    config: {},
    viewer: true,
  }
})
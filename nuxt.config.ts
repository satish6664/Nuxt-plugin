
export default defineNuxtConfig({
devtools: {enabled: true},

  plugins: ['~/plugins/timeLogger.js'],

  router: {
    middleware: ['logRoute'],
  },
})

// https://nuxt.com/docs/api/configuration/nuxt-config
// eslint-disable-next-line no-undef
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
  modules: ['@nuxtjs/tailwindcss'],
  postcss: {
    plugins: {
      'postcss-import': {},
      autoprefixer: {},
      tailwindcss: {},
    },
  },
  tailwindcss: {
    viewer: false,
  },
})

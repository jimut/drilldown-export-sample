require('dotenv').config();

const url = require('url');
const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
    script: [
      { src: 'https://cdn.fusioncharts.com/fusioncharts/latest/fusioncharts.js' },
      { src: 'https://cdn.fusioncharts.com/fusioncharts/latest/maps/fusioncharts.usa.js' },
      { src: 'https://csm.fusioncharts.com/files/assets/fusion-theme/fusioncharts.theme.fusion.js' },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    baseURL: process.env.BASE_URL,
  },

  /*
  ** Build configuration
  */
  build: {
  /*
  ** You can extend webpack config here
  */
    extend(config, ctx) {
      config.output.publicPath = url.resolve(process.env.BASE_URL, '_nuxt/');

      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },

  router: {
    base: process.env.BASE_URL,
  },
};

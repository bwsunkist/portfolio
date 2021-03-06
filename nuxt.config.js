import colors from 'vuetify/es5/util/colors'

export default {
  mode: 'spa',
  /*
   ** Headers of the page
   */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    // title: process.env.npm_package_name || '',
    titleTemplate: 'bwsunkist - portfolio',
    title: 'bwsunkist - portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { 
        rel: 'icon', type: 'image/jpeg', href: '/prof.jpg' 
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.6.1/css/all.css'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: 'blue',
    height: '5px'
  },
  loadingIndicator: '@/assets/loadingind.html',
  //   name: 'pulse',
  //   color: '#FFF',
  //   background: '#004D40'
  // },
  /*
   ** Global CSS
   */
  css: ['@/assets/main'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/vue-scrollto', '~/plugins/vue-typed'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-fontawesome', '@nuxtjs/axios', '@nuxtjs/proxy'],
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      light: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  proxy: {
    '/api': {
      target: 'scrapbox.io/',
      pathRewrite: {
        '^/api/pages/itall' : '/api/pages/itall'
        }
      }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.devtool = 'inline-cheap-module-source-map'
      }
    }
  }
}

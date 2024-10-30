export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
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
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel:'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css'},
    { rel:'stylesheet', href:'https://fonts.googleapis.com/icon?family=Material+Icons'}
    ],

    script: [
      {
        src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
        type: "text/javascript"
      },
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
        type: "text/javascript"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],

  router:{

    middleware:["clearValidationError"]

  },
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [

    "./plugins/mixins/user.js",
    "./plugins/axios.js",
    "./plugins/mixins/validation.js"

  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {

    baseURL: 'http://127.0.0.1:8000/api'

  },

  //Definindo os endpoints
  auth:{

    strategies: {

    local: {

        endpoints:{

          login: { url: 'login', method: 'post', propertyName: 'meta.token' },
          logout: { url: 'logout', method: 'post' },
          user: { url: 'user', method: 'get', propertyName: 'data' }
        }
        // tokenRequired: true,
        // tokenType: 'bearer'

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
    extend(config, ctx) {}
  }
}

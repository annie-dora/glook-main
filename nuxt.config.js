
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href:"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"}
    ],
    script:[
      
        {
          src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
          type: "text/javascript"
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js",
          type: "text/javascript"
        },
        {
          src:"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
          type: "text/javascript"
        },
        {
          src : "/css/fontawesome-all.min.css"
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
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "@/plugins/aos", ssr: false },
    {
      src: "./plugins/element-ui.js",
      ssr: false
    },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
//  router:{
//   middleware:['auth']
//  },
 
  modules: [
    '@nuxtjs/font-awesome',
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas']
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['fab']
          }
        ]
      }
    ],
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: "AIzaSyDfux4fKi6owO1NMSluiz1hZsFRM78V9fc",
          authDomain: "glook-dashboard.firebaseapp.com",
          projectId: "glook-dashboard",
          storageBucket: "glook-dashboard.appspot.com",
          messagingSenderId: "1025776722772",
          appId: "1:1025776722772:web:9b738f62d2b44ccaea5ec1",
          measurementId: "G-9PN8R14SVQ"
        },
        services: {
          persistence: 'local', // default
          initialize: {
           
            onAuthStateChangedAction: 'onAuthStateChangedAction',
            subscribeManually: false
          },
          ssr: false, // default
           // Just as example. Can be any other service.
        }
      }]
    
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

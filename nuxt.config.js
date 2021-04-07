
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
      { href: 'https://fonts.googleapis.com/css2?family=Italiana&display=swap' ,rel: 'stylesheet'},
      { href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap' ,rel: 'stylesheet'},
      { href: 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400&display=swap' ,rel: 'stylesheet'}
    ],
    script: [
      {
        src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
        type: "text/javascript"
      },
      {
        src: "https://player.vimeo.com/api/player.js",
      },
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
    '~/assets/scss/_typography.scss',
    '~/assets/scss/_layouts.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
    { src: '~/plugins/both.js' },
    { src: '~/plugins/client.js', mode: 'client' },
    { src: '~/plugins/server.js', mode: 'server' },
    { src: '~/plugins/vimeo-player.js'},
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
      '@nuxtjs/style-resources',
  ],
  /*
  ** Build configuration
  */
  build: {
    vendor: [
      'vue-vimeo-player'
    ],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}

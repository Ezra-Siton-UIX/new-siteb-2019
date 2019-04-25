// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import navbar from '~/components/navbar.vue'
import footerG from '~/components/footerG.vue'

export default function(Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Set Global Components
  Vue.component('navbar', navbar)
  Vue.component('footerG', footerG)

  head.htmlAttrs = {
    lang: 'en',
    dir: "ltr"
  }

  head.bodyAttrs = {
    metaInfo: {
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        }
      ],
    },
  }
  
}

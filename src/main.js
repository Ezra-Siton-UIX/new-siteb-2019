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
  // Set Global Component
  Vue.component('navbar', navbar)
  Vue.component('footerG', footerG)

  head.bodyAttrs = {
    metaInfo: {
      meta: [{
          charset: 'utf-8'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
    },
  }
  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/css/uikit.min.css'
  })
  // Add an external Script Before Body
  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit.min.js',
    body: true
  })


}

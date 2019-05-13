// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import footerg from '~/components/footerg.vue'

export default function(Vue, {
  router,
  head,
  isClient
}) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  // Set Global Components
  Vue.component('footerg', footerg)

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


  // Add an external CSS file
  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/css/uikit.min.css'
  }, {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700'
  },{
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Maven+Pro:400,500,700,900'
  }
)
  // Add an external Script Before Body
  head.script.push({
      src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit.min.js',
      body: true
    }, {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/uikit/3.1.4/js/uikit-icons.min.js',
      body: true
    }, {
      src: 'https://unpkg.com/infinite-scroll@3/dist/infinite-scroll.pkgd.min.js',
      body: true
    }
  )
}

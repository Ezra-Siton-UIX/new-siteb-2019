// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Studio',
  plugins: [{
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',/* vue file in src/templates must match the GraphQL typeName to have a template for it */
      path: 'content/posts/*.md',/* Where to look for files. Should be a glob path */
      route: '/:slug',/* Define a dynamic route */
    }
  }],
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...local plugins
      ]
    }
  },

}

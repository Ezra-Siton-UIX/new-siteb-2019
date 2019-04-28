<!-- src/templates/Post.vue -->
<template>
<layout :sidebar="false" class="container">

  <div class="uk-card uk-padding uk-position-sticky" style="z-index: 10;" uk-sticky="bottom: #offset; animation: uk-animation-slide-top;show-on-up: true">
    <g-link to="/work#main" class="uk-button uk-button-primary"> <span data-uk-icon="arrow-left"></span> Back</g-link>
  </div>



  <hgroup class="post uk-position-top">

    <!-- overlay -->
    <g-link to="/work#main" title="Back" class=" uk-position-cover uk-position-sticky" style="z-index:1;position:fixed; cursor: zoom-out; background:#f8f8f8"></g-link>

    <!-- content -->
      <nav class="uk-container uk-container-small uk-section uk-section-xsmall uk-position-relative uk-position-z-index" style="z-index:15;">
        <ul class="uk-breadcrumb">
          <li>
            <g-link to="/">Home</g-link>
          </li>
          <li>
            <g-link to="/work">Work</g-link>
          </li>
          <li class="uk-disabled"><a>{{ $page.post.title }}</a></li>
        </ul>
      </nav>

      <header class="uk-container uk-container-small  uk-position-relative uk-position-z-index">
        <!-- INFO -->
        <div class="uk-section uk uk-section-xsmall">
          <div class="uk-container">
            <div class="uk-grid uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
              <div class="uk-width-auto">
                <img src="https://unsplash.it/64/64/?random" alt="" class="uk-border-circle">
              </div>
              <div class="uk-width-expand">
                <h1 class="uk-h2 uk-margin-remove"> {{ $page.post.title }}</h1>
                <i class="uk-text-muted uk-text-small">{{ $page.post.date }}</i>
              </div>
              <button v-if="$page.post.website" class="uk-button uk-button-danger">
                  VISIT WEBSITE <span uk-icon="link"></span>
              </button>

            </div>
          </div>
        </div>
        <!-- /INFO -->

        <!-- if "view website" אם יש לי לינק לאתר -->
          <table class="uk-table uk-table-middle" v-if="$page.post.website">
            <tbody>
              <tr>
                <td class="uk-table-shrink">Technology:</td>
                <td class="uk-table-expand"><g-image width="20" alt="webflow icon" src="~/assets/images/webflow-icon.png" /> <span style="line-height:1;position:relative;top:1px; left:3px;"> Webflow</span></td>
              </tr>

            </tbody>
          </table>
      </header>

      <!-- content -->
      <main class="uk-container uk-container-small uk-section uk-section-xsmall ">
        <g-link to="/work" class="uk-position-z-index uk-position-relative">
          <g-image quality="100" fit="contain" src="~/assets/images/browser-top.png" />
          <g-image quality="100" :src="$page.post.image" fit="contain" />
        </g-link>
        <div class="uk-card uk-card-body">
          <div class="post-content" v-html="$page.post.content" />
        </div>
      </main>
  </hgroup>
</layout>
</template>


<script>
var elem = document.querySelector('.container');
var infScroll = new InfiniteScroll(elem, {
  // options
  path: '.pagination__next',
  append: '.post',
  history: false,
});

// element argument can be a selector string
//   for an individual element
var infScroll = new InfiniteScroll('.container', {
  // options
});
</script>



<script>
export default {

  metaInfo() {
    return {
      title: this.$page.post.title,
      meta: [{
        name: 'description',
        content: this.$page.post.description
      }]
    }
  }
}
</script>

<page-query>
query queryName ($path: String!){
  post: post (path: $path){
    title
    date (format: "MMMM YYYY")
    description
    content
    image
    website
  }
}
</page-query>

<style scoped>
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

img {

  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}
</style>

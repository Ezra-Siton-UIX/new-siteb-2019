<!-- src/templates/Post.vue -->
<template>
<layout :sidebar="false" class="container">


  <hgroup class="post uk-position-top">

    <!-- overlay -->
    <a @click="$router.go(-1)" title="Back" class="uk-link-reset uk-position-cover uk-position-sticky" style="z-index:0; position:fixed; cursor: zoom-out; background:#f8f8f8"></a>

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

    <header class="uk-container uk-container-small  uk-position-relative uk-position-z-index" style="z-index:444;">


       <a @click="$router.go(-1)">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g class="nc-icon-wrapper" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill="#333" stroke="#333"><line data-color="color-2" fill="none" stroke-miterlimit="10" x1="23" y1="12" x2="10" y2="12"/> <polygon fill="none" stroke="#000000" stroke-miterlimit="10" points="10,7 10,17 3,12 "/></g></svg>
        <span> Back</span>
         </a>



      <!-- INFO -->
      <div class="uk-section uk-section-xsmall">
        <div class="uk-container">
          <div class="uk-grid uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
            <div class="uk-width-auto">
              <img src="https://unsplash.it/64/64/?random" alt="" class="uk-border-circle">
            </div>
            <div class="uk-width-expand ">
              <h1 class="uk-h2 uk-margin-remove"> {{ $page.post.title }}</h1>
              <i class="uk-text-muted uk-text-small">{{ $page.post.date }}</i>
            </div>

            <div class="uk-width-auto@m uk-width-1-1@s uk-text-center uk-margin-top">
              <a v-if="$page.post.website" class="uk-button uk-button-danger" style="z-index:300;" target="_blank" href="https://webflow.com/" :title="$page.post.title">
                VISIT WEBSITE <span uk-icon="link"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <!-- /INFO -->

      <!-- if "view website" אם יש לי לינק לאתר -->
      <table class="uk-table uk-table-middle" v-if="$page.post.website">
        <tbody>
          <tr>
            <td class="uk-table-shrink">Technology:</td>
            <td class="uk-table-expand">
              <g-image width="20" alt="webflow icon" src="~/assets/images/webflow-icon.png" /> <span style="line-height:1;position:relative;top:1px; left:3px;"> Webflow</span></td>
          </tr>

        </tbody>
      </table>
    </header>

    <!-- content -->
    <main class="uk-container uk-container-small uk-section uk-section-xsmall uk-position-z-index uk-position-relative">
      <a @click="$router.go(-1)">
        <g-image quality="100" fit="contain" src="~/assets/images/browser-top.png" />
        <g-image quality="100" :src="$page.post.image" fit="contain" />
      </a>
      <div class="uk-card uk-card-body">
        <div class="post-content" v-html="$page.post.content" />
      </div>
    </main>
  </hgroup>
</layout>
</template>


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
  box-shadow: 0 2px 8px rgba(0, 0, 0, .11);
}
</style>

<!-- src/templates/Post.vue -->
<template>
<layout :sidebar="false" class="container" style="background: black;">



  <a @click="$router.go(-1)" class="uk-padding" style="z-index: 980;" uk-sticky="show-on-up: true; animation: uk-animation-slide-top; bottom: #bottom">

    <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 64 64">
      <g class="nc-icon-wrapper" fill="#1e87f0">
        <path fill="#1e87f0"
          d="M32,1C14.9,1,1,14.9,1,32s13.9,31,31,31s31-13.9,31-31S49.1,1,32,1z M50,33H16.4l12.3,12.3 c0.4,0.4,0.4,1,0,1.4C28.5,46.9,28.3,47,28,47s-0.5-0.1-0.7-0.3l-14-14c-0.1-0.1-0.2-0.2-0.2-0.3c-0.1-0.2-0.1-0.5,0-0.8 c0.1-0.1,0.1-0.2,0.2-0.3l14-14c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4L16.4,31H50c0.6,0,1,0.4,1,1S50.6,33,50,33z" />
      </g>
    </svg>


    <span> Back</span>
  </a>




  <hgroup class="post uk-position-top">

    <!-- overlay -->
    <a @click="$router.go(-1)" title="Back" class="uk-link-reset uk-position-cover" style="z-index:0; position:fixed; cursor: zoom-out; background:#f8f8f8"></a>

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
    <main style="max-width:1000px;" class="uk-container uk-position-z-index uk-position-relative uk-margin-top">
      <a @click="$router.go(-1)" style="cursor: zoom-out;">
        <g-image quality="100" fit="contain" src="~/assets/images/browser-top.png" />
        <g-image quality="100" :src="$page.post.image" />
      </a>
      <div class="uk-card uk-card-body">
        <a @click="$router.go(-1)" style="cursor: zoom-out;">
          <div class="post-content" v-html="$page.post.content" />
        </a>
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

img img.shadow{
  box-shadow: 0 2px 8px rgba(0, 0, 0, .11);
    border: 1px solid #021a40 !important;
}

p img {
  border: 1px solid #021a40 !important;
}
</style>

<!-- src/templates/Post.vue -->
<template>
<layout :ordered="false">

  <div class="uk-container uk-container-small uk-padding" style="position:relative;z-index:1;">
    <ul class="uk-breadcrumb">
      <li>
        <g-link to="/">Home</g-link>
      </li>
      <li>
        <g-link to="/work">Work</g-link>
      </li>
      <li class="uk-disabled"><a>{{ $page.post.title }}</a></li>
    </ul>


  </div>

  <main class="uk-container uk-container-small">


    <!-- INFO -->
    <header class="uk-section uk uk-section-xsmall">


      <div class="uk-container">
        <div class="uk-grid uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
          <div class="uk-width-auto">
            <img src="https://unsplash.it/64/64/?random" alt="" class="uk-border-circle">
          </div>
          <div class="uk-width-expand">
            <h1 class="uk-h2 uk-margin-remove"> {{ $page.post.title }}</h1>
            <i class="uk-text-muted uk-text-small">{{ $page.post.date }}</i>
          </div>


          <div class="uk-width-auto@m uk-visible@m">
            <g-link to="/work" class="uk-button uk-button-primary"> <span data-uk-icon="arrow-left"></span> Back</g-link>
          </div>
        </div>
      </div>
    </header>
    <!-- /INFO -->

    <g-link to="/work" style="cursor: zoom-out;">
      <g-image quality="100" fit="contain" src="~/assets/images/browser-top.png" />
      <g-image quality="100" :src="$page.post.image" fit="contain" />
    </g-link>
    <div class="uk-card uk-card-body">
      <div class="post-content" v-html="$page.post.content" />
    </div>
  </main>

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
  }
}
</page-query>

<style>
<style lang="scss">.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}

img {

  box-shadow: 0 2px 8px rgba(0, 0, 0, .08);
}
</style>

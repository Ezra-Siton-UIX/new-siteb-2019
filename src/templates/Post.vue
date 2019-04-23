<!-- src/templates/Post.vue -->
<template>
  <Layout>
    <article>
      <header>
        <g-link class="nav__link" to="/works">&larr; see all</g-link>

        <h1 class="post-title">
          {{ $page.post.title }}
        </h1>
      </header>
      <g-image  quality="100" class="responsive" :src="$page.post.image" fit="contain" />

      <time>{{ $page.post.date }}</time>
      <p>{{ $page.post.description }}</p>
      <div class="post-content" v-html="$page.post.content"/>
    </article>
  </Layout>
</template>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      meta: [
        {
          name: 'description',
          content: this.$page.post.description
        }
      ]
    }
  }
}
</script>

<page-query>
query queryName ($path: String!){
  post: post (path: $path){
    title
    date (format: "D. MMMM YYYY")
    description
    content
    image
  }
}
</page-query>

<style>
<style lang="scss">
.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
  text-align: center;
}
</style>

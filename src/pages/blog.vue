<template>
<Layout>
  <h1>Blog</h1>

  <ul class="posts">
    <li v-for="edge in $page.posts.edges" :key="edge.node.id">
      <article>
        <h2>{{ edge.node.title }}</h2>
        <div>{{ edge.node.date }}</div>
        <p>{{ edge.node.description }}</p>
        <g-image quality="100" width="200" class="responsive" :src="edge.node.image" fit="contain" />
        <g-link :to="edge.node.path">Read Article</g-link>
      </article>
    </li>
  </ul>
</Layout>
</template>

<page-query>
  {
    posts: allPost {
      edges {
        node {
          title
          date (format: "D. MMMM YYYY")
          description
          image
          path
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Blog'
  }
}
</script>


<style>
img.responsive{
  width:100%;
  height: auto;
}
.layout {
  max-width: 1220px;
  margin: 0 auto;
  padding-left: 20px;
  overflow: hidden;
  padding-right: 20px;
}
</style>

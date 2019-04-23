<template>
<Layout>
  <h1>Blog</h1>
  <ul class="posts">
    <li v-for="edge in $page.posts.edges" :key="edge.node.id">
      <article>
        <h2>{{ edge.node.title }}</h2>
        <div>{{ edge.node.date }}</div>
        <p>{{ edge.node.description }}</p>
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

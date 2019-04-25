<template>
<Layout class="uk-container">
  <h1>works</h1>

  <ul class="posts">
    <li v-for="edge in $page.posts.edges" :key="edge.node.id">
      <article>
        <h2>{{ edge.node.title }}</h2>
        <div>{{ edge.node.date }}</div>
        <p>{{ edge.node.description }}</p>
        <g-link :to="edge.node.path">
          <!--
        <g-image quality="100" style="width:300px;" :src="edge.node.image" width="222" height="500" fit="contain" />
      -->
        </g-link>
        <br>
        <g-link :to="edge.node.path">See More</g-link>
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
    title: 'Works'
  }
}
</script>


<style>

</style>

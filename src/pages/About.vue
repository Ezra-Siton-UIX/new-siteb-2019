<template>
<Layout>
  <h1>About us</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
    Iusto.
  </p>
</Layout>
</template>

<script>
export default {
  metaInfo: {
    script: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js', body:true
    },
    {
      src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', body:true
    }

    ],
    title: 'About us',
    meta: [{
      name: 'author',
      content: 'John Doe'
    }],
  }
}
</script>

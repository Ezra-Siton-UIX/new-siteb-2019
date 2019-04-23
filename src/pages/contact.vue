<template>
<Layout>
  <h1>Contact us</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
    Iusto.
  </p>

  <form action="/action_page.php">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form>
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
    title: 'Contact us',
    meta: [{
      name: 'author',
      content: 'John Doe'
    }],
  }
}
</script>

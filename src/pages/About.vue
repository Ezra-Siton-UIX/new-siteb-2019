<template>
<Layout class="uk-container">
  <h1>About us</h1>

  <div class="uk-child-width-1-2@s uk-grid-collapse uk-text-center" uk-grid>
    <div>
        <div class="uk-tile uk-tile-default">
            <p class="uk-h4">Default</p>
        </div>
    </div>
    <div>
        <div class="uk-tile uk-tile-muted">
            <p class="uk-h4">Muted</p>
        </div>
    </div>
    <div>
        <div class="uk-tile uk-tile-primary">
            <p class="uk-h4">Primary</p>
        </div>
    </div>
    <div>
        <div class="uk-tile uk-tile-secondary">
            <p class="uk-h4">Secondary</p>
        </div>
    </div>
</div>

  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur rerum illum odit fugit assumenda rem dolores inventore iste reprehenderit maxime!
    Iusto.
  </p>

  <beforeBodyScripts />
</Layout>
</template>

<script>
import beforeBodyScripts from '~/components/beforeBodyScripts.vue'

export default {
  components: {
    beforeBodyScripts
  },
  metaInfo: {
    script: [{
        src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js',
        body: true
      },
      {
        src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js',
        body: true
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

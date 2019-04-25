<template>
  <h1>hello </h1>

</template>

<script>
export default {
  name: 'beforeBodyScripts',
  data () {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
.card {
  padding: 20px;
  background: #FFF;
}
</style>

<template>
<div id="app">
  <navbar />
  <transition name="fade" appear>
    <div>
      <slot />
    </div>
  </transition>

  <footerG v-if="sidebar" />
</div>
</template>


<script>
export default {
  props: [
    'sidebar',
    'postTitle'
  ]

}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

a.active--exact.active, a.active--exact.active:hover{

  color:#1e87f0;
}

.uk-h1,
.uk-h2,
.uk-h3,
.uk-h4,
.uk-h5,
.uk-h6,
.uk-heading-2xlarge,
.uk-heading-large,
.uk-heading-medium,
.uk-heading-small,
.uk-heading-xlarge,
h1,
h2,
h3,
h4,
h5,
h6,
html,
body,
a.nav__link {
  font-family: 'Open Sans', sans-serif !important;
}
</style>

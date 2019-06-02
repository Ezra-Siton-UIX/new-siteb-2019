<template>
<div id="app" data-id="wow">
  <navbar v-if="sidebar" :footer="true" />
  <transition name="fade" appear>
    <div>
      <slot />
    </div>
  </transition>

  <footerg v-if="footer" />
</div>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  props: [
    'sidebar',
    'footer',
    'postTitle'
  ],
  components: {
    navbar
  }
}
</script>

<style>
.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
}

a.active--exact.active,
a.active--exact.active:hover {

  color: #1e87f0;
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
  font-family: 'Maven Pro', sans-serif !important;


}
</style>

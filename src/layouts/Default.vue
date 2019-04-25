<template>
<div>
  <navbar v-if="ordered == true" />
  <transition name="fade" appear>
    <div>
      <slot />
    </div>
  </transition>
  <!-- FOOTER -->
  <footerG />
  <!-- /FOOTER -->

</div>
</template>


<script>
  export default {
    props: {
        ordered: {
            type: Boolean,
            required: false,
            default: true
        }
    }
  }
</script>



<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>
header {
  position: relative;
  z-index: 300;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-enter {
  opacity: 0;
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

<template>
<div class="uk-position-top" id="top">
  <header class="uk-navbar-transparent">

<nav style="z-index:33;" class="uk-navbar-container uk-navbar-transparent " uk-navbar="dropbar: false;" data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-section-primary uk-light; bottom: #scrollup-dropdown">

      <g-link class="uk-navbar-item uk-logo" to="/">{{ $static.metaData.siteName }}</g-link>
      <div class="uk-navbar-center uk-light">
        <ul class="uk-navbar-nav">
          <li>
            <g-link class="nav__link" to="/work/">עבודות</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/about/">אודות</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/contact/">צור קשר</g-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  name: 'navbar',
  data() {
    return {
      message: 'Try change me!'
    }
  },
  methods: {
    onClick() {
      this.message = 'Here you go :)'
    }
  }
}
</script>

<style>
a.nav__link.active--exact.active,
a.nav__link.active--exact.active:hover {
  color: white;
}

.uk-navbar-container{
  transition: background-color 0.5s ease;
}


</style>

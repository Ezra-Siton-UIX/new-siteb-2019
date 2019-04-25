<template>
<div class="uk-position-top" id="top">
  <header class="uk-navbar-transparent">
    <nav style="z-index:33;" class="uk-navbar-container uk-navbar-transparent"
      data-uk-sticky="show-on-up: true; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky uk-section-primary uk-light; bottom: #scrollup-dropdown">

      <g-link class="uk-navbar-item uk-logo" to="/">{{ $static.metaData.siteName }}</g-link>
      <div class="uk-navbar-center uk-light">
        <ul class="uk-navbar-nav">
          <li>
            <g-link to="/work">work</g-link>
          </li>
          <li>
            <g-link to="/about">about</g-link>
          </li>
          <li>
            <g-link to="/contact">contact</g-link>
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
  }
}
</script>

<style>

.uk-navbar-container {
  transition: background-color 0.5s ease;
}
</style>

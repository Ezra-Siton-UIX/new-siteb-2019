<template>
  <header class="header uk-position-top uk-navbar-transparent uk-light">
    <nav uk-navbar>
      <g-link class="uk-navbar-item uk-logo" to="/">{{ $static.metaData.siteName }}</g-link>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <g-link class="nav__link" to="/work">Work</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/about">About</g-link>
          </li>
          <li>
            <g-link class="nav__link" to="/contact">Contact</g-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
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
a.nav__link.active--exact.active, a.nav__link.active--exact.active:hover {
  color: #1e87f0;
}
</style>

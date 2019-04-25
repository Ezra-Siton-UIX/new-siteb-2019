<template>
<header>
  <nav class="uk-navbar-container uk-position-top uk-navbar-transparent" style="z-index:5;" uk-navbar>
    <div class="uk-navbar-right">
      <g-link class="uk-navbar-item uk-logo" to="/">{{ $static.metaData.siteName }}</g-link>
    </div>

    <div class="uk-navbar-center">
      <ul class="uk-navbar-nav">
        <li>
          <g-link to="/work">work</g-link>
        </li>
        <li>
          <g-link to="/about">about</g-link>
        </li>
        <li>
          <g-link class="uk-hidden@s" to="/contact">contact</g-link>
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
  }
}
</script>

<style>
.uk-navbar-container {
  transition: background-color 0.5s ease;
}
</style>

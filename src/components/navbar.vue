<template>
  <nav class="uk-navbar-container uk-position-top uk-navbar-transparent" style="z-index:5;" uk-navbar>
    <div class="uk-navbar-left">



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
          <g-link class="uk-visible@s" to="/contact">contact</g-link>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <span class="uk-margin-small-right" uk-icon="check">Call Now</span>
        <a href="" uk-icon="heart"></a>
      </div>

    </div>

  </nav>
  <!--
    <button class="blue" :class="{red:isActive}">Test</button>
  -->
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
  props: {
    isActive: {
      type: Boolean,
    }
  },
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

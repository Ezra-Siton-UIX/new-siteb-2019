<template>
<header>
  <nav class="uk-navbar-container uk-position-top uk-navbar-transparent" style="z-index:5;" uk-navbar>
    <div class="uk-navbar-left white">
      <g-link title="Back To Homepage" class="uk-navbar-item uk-logo" to="/">

        <span class="uk-hidden2">{{ $static.metaData.siteName }}</span>
      </g-link>
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
          <g-link to="/contact">contact</g-link>
        </li>
      </ul>
    </div>
    <div class="uk-navbar-right">
      <div class="uk-navbar-item">
        <button class="uk-visible@m uk-button uk-button-primary" href="#"><span uk-icon="receiver"></span> 0523408910</button>
      </div>
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
  props:   ['postTitle'],
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

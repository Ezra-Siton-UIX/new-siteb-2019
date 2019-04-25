<template>
<div class="container">
  <header class="header">
    <strong>

    </strong>

      <nav class="uk-navbar-container" uk-navbar>
          <g-link class="uk-navbar-item uk-logo" to="/">{{ $static.metaData.siteName }}</g-link>
          <div class="uk-navbar-left">

              <ul class="uk-navbar-nav">
                <li><g-link class="nav__link" to="/work">Work</g-link></li>
                <li><g-link class="nav__link" to="/about">About</g-link></li>
                <li><g-link class="nav__link" to="/contact">Contact</g-link></li>
              </ul>

          </div>
      </nav>


  </header>
  <slot />
</div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>




</style>

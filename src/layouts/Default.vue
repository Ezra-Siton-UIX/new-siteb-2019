<template>
<div>
  <navbar />
  <slot />
  <!-- FOOTER -->
  <footerG />
  <!-- /FOOTER -->

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
header {
  position: relative;
  z-index: 300;
}
</style>

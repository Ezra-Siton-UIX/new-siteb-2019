<template>
<Layout>
  <section class="uk-section uk-section-large uk-section-secondary">
    <div class="uk-container uk-container-small uk-text-center">
      <h1>Album example</h1>
      <p class="uk-text-large">This is a text that describes the album, its creator and something that you want to tell that is attractive.</p>
      <div data-uk-margin>
        <a class="uk-button uk-button-primary" href="#modal-center" data-uk-toggle>  CALL TO ACTION</a>
      </div>
    </div>
  </section>
  <!--/HERO-->
  <!-- INFO -->
  <section class="uk-section uk-section-default uk-box-shadow-small uk-section-xsmall">
    <div class="uk-container">
      <div class="uk-grid uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
        <div class="uk-width-auto">
          <img src="https://unsplash.it/65/65/?random" alt="" class="uk-border-circle">
        </div>
        <div class="uk-width-expand">
          <h4 class="uk-margin-remove">Curabitur consequat lectus a dolor interdum semper.</h4>
          <i class="uk-text-muted uk-text-small">Created on 12th May 2017</i>
        </div>
        <div class="uk-width-1-2 uk-width-1-5@m uk-visible@m">
          <span class="uk-text-primary" data-uk-icon="icon:calendar; ratio: 0.8"></span><span class="uk-text-small uk-text-muted uk-text-bottom"> Member since:</span><br>
          <span class="uk-text-large uk-text-primary">13th May 2015</span>
        </div>
        <div class="uk-width-1-2 uk-width-1-5@m uk-visible@m">
          <span class="uk-text-success" data-uk-icon="icon:user; ratio: 0.8"></span><span class="uk-text-small uk-text-muted  uk-text-bottom"> Last Login:</span><br>
          <span class="uk-text-large uk-text-success">18th Feb 2017</span>
        </div>

        <div class="uk-width-auto@m uk-visible@m">
          <a class="uk-button uk-button-default">Back</a>
        </div>
      </div>
    </div>
  </section>
  <!-- /INFO -->

  <!-- CONTENT -->
  <section class="uk-section uk-section-muted">
    <div class="uk-container">
      <div class="uk-grid uk-grid-small uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l uk-grid-match" data-uk-lightbox="toggle:a.uk-position-cover" data-uk-grid>

        <!-- item -->
        <div v-for="edge in $page.posts.edges" :key="edge.node.id">
          <g-link :to="edge.node.path">
            <section class="uk-card uk-card-default uk-card-small">
              <div class="uk-card-media-top">
                <div class="uk-inline-clip uk-transition-toggle uk-light">
                  <g-image quality="44" style="width:300px;" :src="edge.node.image" width="222" height="500" fit="contain" />

                  <div class="uk-transition-fade uk-position-cover uk-overlay uk-overlay-primary uk-flex uk-flex-center uk-flex-middle">
                    <div data-uk-margin class="uk-transition-slide-bottom-small">
                      <span data-uk-icon="icon: plus; ratio: 1.3"></span>
                    </div>
                  </div>

                </div>

              </div>
              <div class="uk-card-header">
                <div class="uk-grid-small uk-flex uk-flex-middle" data-uk-grid>
                  <div class="uk-width-expand">
                    <h5 class="uk-margin-remove-bottom">{{ edge.node.title }}</h5>
                    <p class="uk-text-meta uk-margin-remove"><time datetime="2016-04-01T19:00">Taken: April 01, 2016</time></p>
                  </div>

                </div>
              </div>
            </section>

          </g-link>
        </div>
      </div>
    </div>
  </section>
  <!-- /CONTENT -->
  <!--FOOTER-->
  <footer class="uk-section uk-section-default uk-section-small">
    <div class="uk-container">
      <p class="uk-text-small uk-text-center">Copyright 2017 - Lorem ipsum dolor sit amet. <a href="https://github.com/zzseba78/Kick-Off">
        Created by {{ $static.metaData.siteName }}</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank"
          data-uk-tooltip><span data-uk-icon="uikit"></span></a></p>
    </div>
  </footer>
  <!--/FOOTER-->
  <!-- OFFCANVAS -->
  <div id="offcanvas-nav" data-uk-offcanvas="flip: true; overlay: true">
    <div class="uk-offcanvas-bar uk-offcanvas-bar-animation uk-offcanvas-slide">
      <button class="uk-offcanvas-close uk-close uk-icon" type="button" data-uk-close></button>
      <ul class="uk-nav uk-nav-default">
        <li class="uk-active"><a href="#">Active</a></li>
        <li class="uk-parent">
          <a href="#">Parent</a>
          <ul class="uk-nav-sub">
            <li><a href="#">Sub item</a></li>
            <li><a href="#">Sub item</a></li>
          </ul>
        </li>
        <li class="uk-nav-header">Header</li>
        <li><a href="#js-options"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: table"></span> Item</a></li>
        <li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: thumbnails"></span> Item</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#"><span class="uk-margin-small-right uk-icon" data-uk-icon="icon: trash"></span> Item</a></li>
      </ul>
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
  <!-- /OFFCANVAS -->
  <!-- MODALS -->
  <div id="modal-center" class="uk-flex-top" data-uk-modal>
    <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
      <button class="uk-modal-close-default" type="button" data-uk-close></button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    </div>
  </div>

  <div id="modal-media-vimeo" class="uk-flex-top" data-uk-modal>
    <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
      <button class="uk-modal-close-outside" type="button" data-uk-close></button>
      <iframe src="//player.vimeo.com/video/87816089" width="500" height="281" data-uk-video></iframe>
    </div>
  </div>
  <!-- /MODALS -->

</Layout>
</template>

<page-query>
  {
    posts: allPost {
      edges {
        node {
          title
          date (format: "D. MMMM YYYY")
          description
          image
          path
        }
      }
    }
  }
</page-query>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<script>
export default {
  metaInfo: {
    title: 'Works'
  }
}
</script>


<style>

</style>

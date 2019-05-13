<template>
<Layout :sidebar="true">

  <main class="uk-light wrap uk-background-norepeat uk-background-cover uk-background-center-center uk-cover-container uk-background-secondary">
    <img data-srcset="https://picsum.photos/640/700/?image=482 640w,
		             https://picsum.photos/960/700/?image=482 960w,
		             https://picsum.photos/1200/900/?image=482 1200w,
		             https://picsum.photos/2000/1000/?image=482 2000w" sizes="100vw" data-src="https://picsum.photos/1200/900/?image=482" alt="" data-uk-cover data-uk-img>
    <div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative" data-uk-height-viewport="min-height: 400">

      <!-- TEXT -->
      <div class="uk-container uk-container-small uk-flex-auto uk-text-center" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
        <h1 class="uk-heading-primary animate uk-invisible" style="font-weight: 700;">{{ message}}.</h1>
        <div class="uk-width-4-5@m uk-margin-auto animate uk-invisible">
          <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, reiciendis maxime, facilis nam natus incidunt provident.</p>
        </div>

        <div class="uk-margin-medium-top animate uk-invisible" data-uk-margin data-uk-scrollspy-class="uk-animation-fade uk-invisible">
          <g-link to="/about" class="uk-button uk-button-default uk-button-large uk-width-2-3 uk-width-auto@s" title="Learn More About Us" data-uk-tooltip> <span data-uk-icon="info"> </span> About Us</g-link>
          <g-link to="/work" class="uk-button uk-button-primary uk-button-large uk-width-2-3 uk-width-auto@s" title="See our works" data-uk-tooltip> <span data-uk-icon="image"> </span> Portfolio</g-link>
        </div>
      </div>
      <!-- /TEXT -->
      <!-- FOOT -->
      <div class="uk-position-bottom-center uk-position-small">
        <span class="uk-text-small uk-text-center">© 2019 | <a href="https://github.com/zzseba78/Kick-Off" title="Created by KickOff">Created by
            {{ $static.metaData.siteName }}
          </a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit"></span></a></span>
      </div>
      <!-- /FOOT -->
    </div>


  </main>




<section class="uk-section uk-container">

  <div class="uk-column-1-2@s uk-column-1-3@m uk-column-1-4@l">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
</div>


<section class="uk-section">
  <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slider>

      <ul class="uk-slider-items uk-grid">
          <li class="uk-width-4-5">
              <div class="uk-panel">
                  <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                  <div class="uk-position-center uk-text-center">
                      <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                      <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
          </li>
          <li class="uk-width-4-5">
              <div class="uk-panel">
                  <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                  <div class="uk-position-center uk-text-center">
                      <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                      <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
          </li>
          <li class="uk-width-4-5">
              <div class="uk-panel">
                  <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                  <div class="uk-position-center uk-text-center">
                      <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                      <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
          </li>
          <li class="uk-width-4-5">
              <div class="uk-panel">
                  <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                  <div class="uk-position-center uk-text-center">
                      <h2 uk-slider-parallax="x: 100,-100">Heading</h2>
                      <p uk-slider-parallax="x: 200,-200">Lorem ipsum dolor sit amet.</p>
                  </div>
              </div>
          </li>

      </ul>
  <ul class="uk-slider-nav uk-dotnav"></ul>
      <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
      <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>



  </div>


</section>
<br><br>




<div uk-slider>

    <div class="uk-position-relative">

        <div class="uk-slider-container uk-light">
            <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m">
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>1</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>2</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>3</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>1</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>2</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>3</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>1</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>2</h1></div>
                </li>
                <li>
                    <img src="https://getuikit.com/docs/images/photo.jpg" alt="">
                    <div class="uk-position-center uk-panel"><h1>3</h1></div>
                </li>
            </ul>
        </div>

        <div class="uk-hidden@s uk-light">
            <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>

        <div class="uk-visible@s">
            <a class="uk-position-center-left-out uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
            <a class="uk-position-center-right-out uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>

    </div>

    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>


<div uk-slideshow="animation: push">

    <div class="uk-position-relative uk-visible-toggle " tabindex="-1">

        <ul class="uk-slideshow-items">
            <li>
              <img src="https://getuikit.com/docs/images/photo.jpg" alt="" uk-cover>
            </li>
            <li>
              <img src="https://getuikit.com/docs/images/photo.jpg" alt="" uk-cover>
            </li>
            <li>
              <img src="https://getuikit.com/docs/images/photo.jpg" alt="" uk-cover>
            </li>
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

    </div>

    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center uk-margin"></ul>

</div>




</section>


</Layout>
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
  data() {
    return {
      isActive: false,
      message: 'Try change me!'
    }
  },
  metaInfo: {
    title: 'Swipe - The Best Studio For You!'
  },
}
</script>

<style>

.color{
  display:none;
}


    .wrap::before {
      position: absolute;
      height: 100vh;
      width: 100vw;
      content: '';
      z-index: 1;
      background-color: rgba(0,0,0,0.5);
    }
    .lead {
      font-size: 1.175em;
      font-weight: 300;
    }

  </style>

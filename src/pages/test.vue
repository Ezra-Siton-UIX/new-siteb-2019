<template>
<Layout  :sidebar="true">
  <main class="uk-height-1-1 uk-cover-container uk-background-secondary">

    <div id="a" class="uk-cover-container uk-light uk-flex uk-flex-middle top-wrap-height">
      <!-- TOP CONTAINER -->
      <div class="uk-container uk-flex-auto top-container uk-position-relative uk-margin-medium-top" data-uk-parallax="y: 0,50; easing:0; opacity:0.2">
        <div class="uk-width-1-2@s" data-uk-scrollspy="cls: uk-animation-slide-right-medium; target: > *; delay: 150">
          <h6 class="uk-text-primary uk-margin-small-bottom">RESEARCH</h6>
          <h1 class="uk-margin-remove-top">Innovation in your hands.</h1>
          <p class="subtitle-text uk-visible@s">Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco </p>
          <a href="#" title="Learn More" class="uk-button uk-button-primary uk-border-pill" data-uk-scrollspy-class="uk-animation-fade">LEARN MORE</a>
        </div>
      </div>



      <!-- /TOP CONTAINER -->
      <!-- TOP IMAGE -->
      <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://picsum.photos/640/700/?image=816 640w,
            https://picsum.photos/960/700/?image=816 960w,
            https://picsum.photos/1200/900/?image=816 1200w,
            https://picsum.photos/2000/1000/?image=816 2000w" data-sizes="100vw" data-src="https://picsum.photos/1200/900/?image=816" alt="" data-uk-cover data-uk-img data-uk-parallax="opacity: 1,0.1; easing:0">
      <!-- /TOP IMAGE -->
    </div>

    <div class="uk-position-bottom-center uk-position-medium uk-position-z-index uk-text-center">
      <a href="#content" data-uk-scroll="duration: 500" data-uk-icon="icon: arrow-down; ratio: 2"></a>
    </div>
    </div>
    <!-- /TOP -->


    <div style="position:relative;z-index:200;" class="uk-container uk-z-index">
      <ul class="uk-breadcrumb uk-padding-small">
        <li><g-link to="/">Home</g-link></li>
        <li class="uk-disabled"><g-link to="/About">About</g-link></li>
      </ul>


    </div>





      <section id="b"  class="uk-section uk-section-default">
        <div class="uk-container">
          <div class="uk-section uk-section-small uk-padding-remove-top">
            <ul class="uk-subnav uk-subnav-pill uk-flex uk-flex-center" data-uk-switcher="connect: .uk-switcher; animation: uk-animation-fade">
              <li><a class="uk-border-pill" href="#">גלה</a></li>
              <li><a class="uk-border-pill" href="#">יתרונות</a></li>
              <li><a class="uk-border-pill" href="#">טכנולוגיה</a></li>
            </ul>
          </div>
          <ul class="uk-switcher uk-margin">
            <li>
              <div class="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                <div>
                  <g-image src="~/assets/images/test-1.png" data-uk-image  />
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                  <h6 class="uk-text-primary">MAIN REASONS</h6>
                  <h2 class="uk-margin-small-top">Take decisions with real time data based on users interaction.</h2>
                  <p class="subtitle-text">
                    לורם איפסום אמת דולור לורם איפסום אמת דולור לורם איפסום אמת דולור לורם איפסום אמת דולור לורם איפסום אמת דולור
                  </p>
                  <div class="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>Great stuff</h4>
                      <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation.</p>
                    </div>
                    <div>
                      <h4>Data analysis</h4>
                      <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                <div>
                  <g-image src="~/assets/images/test-2.png" data-uk-image  />
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                  <h6 class="uk-text-primary">MAIN REASONS</h6>
                  <h2 class="uk-margin-small-top">קח את ההחלטות שלך צעד קדימה.</h2>
                  <p class="subtitle-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.
                  </p>
                  <div class="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>Great stuff</h4>
                      <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation.</p>
                    </div>
                    <div>
                      <h4>Data analysis</h4>
                      <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="uk-grid uk-child-width-1-2@l uk-flex-middle" data-uk-grid data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-medium">
                <div>
                  <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" alt="" data-uk-img>
                </div>
                <div data-uk-scrollspy-class="uk-animation-slide-right-medium">
                  <h6 class="uk-text-primary">MAIN REASONS</h6>
                  <h2 class="uk-margin-small-top">Take decisions with real time data based on users interaction.</h2>
                  <p class="subtitle-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation.
                  </p>
                  <div class="uk-grid uk-child-width-1-2@s" data-uk-grid>
                    <div>
                      <h4>Great stuff</h4>
                      <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation.</p>
                    </div>
                    <div>
                      <h4>Data analysis</h4>
                      <p>Ut enim ad minim veniam, quis nostrud magna aliqua exercitation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>


        </div>
      </section>



        <section id="c" class="uk-section uk-section-primary uk-section-large">
          <div class="uk-container">
            <div class="" uk-grid>
              <div class="uk-width-expand@m">
                <h6 class="">SIMPLIFY THINGS</h6>
                <h2 class="uk-margin-small-top uk-h1">Manage all your data from one place only.</h2>
                <p class="subtitle-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                  tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a href="#" class="uk-button uk-button-primary uk-border-pill" data-uk-icon="arrow-right">LEARN MORE</a>
              </div>
              <div class="uk-width-expand@m" data-uk-scrollspy="cls: uk-animation-fade">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
              </div>
            </div>
          </div>
        </section>



        <section  id="d" class="uk-cover-container overlay-wrap">
          <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-srcset="https://picsum.photos/640/650/?image=770 640w,
        			https://picsum.photos/960/650/?image=770 960w,
        			https://picsum.photos/1200/650/?image=770 1200w,
        			https://picsum.photos/2000/650/?image=770 2000w" data-sizes="100vw" data-src="https://picsum.photos/1200/650/?image=770" alt="" data-uk-cover data-uk-img>
          <div class="uk-container uk-position-z-index uk-position-relative uk-section uk-section-xlarge uk-light">
            <div class="uk-grid uk-flex-right">

              <div class="uk-width-2-5@m" data-uk-parallax="y: 50,-50; easing: 0; media:@l">
                <h6>TESTIMONIALS</h6>
                <div class="uk-position-relative uk-visible-toggle uk-light" data-uk-slider="easing: cubic-bezier(.16,.75,.47,1)">
                  <ul class="uk-slider-items uk-child-width-1-1">
                    <li>
                      <div data-uk-slider-parallax="opacity: 0.2,1,0.2">
                        <h2 class="uk-margin-small-top">"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"</h2>
                        <p class="uk-text-meta">Lorena Smith, founder of Some Cool Startup</p>
                      </div>
                    </li>
                    <li>
                      <div data-uk-slider-parallax="opacity: 0.2,1,0.2">
                        <h2 class="uk-margin-small-top">"Aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"</h2>
                        <p class="uk-text-meta">Lorena Smith, founder of Some Cool Startup</p>
                      </div>
                    </li>
                    <li>
                      <div data-uk-slider-parallax="opacity: 0.2,1,0.2">
                        <h2 class="uk-margin-small-top">"Irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"</h2>
                        <p class="uk-text-meta">Lorena Smith, founder of Some Cool Startup</p>
                      </div>
                    </li>
                  </ul>
                  <ul class="uk-slider-nav uk-dotnav uk-margin-top">
                    <li></li>
                  </ul>

                </div>
              </div>

            </div>
          </div>
        </section>



        <!-- BOTTOM -->
        <section  id="e" class="uk-section uk-section-default" style="overflow-x:hidden;">
          <div class="uk-container uk-container-xsmall uk-text-center uk-section uk-padding-remove-top">
            <h5 class="uk-text-primary">ANALYTICS</h5>
            <h2 class="uk-margin-remove uk-h1">Know the behavior of your potential customers.</h2>
          </div>
          <div class="uk-container">
            <div class="uk-grid uk-grid-large uk-child-width-1-3@m" data-uk-grid data-uk-scrollspy="target: > div; delay: 150; cls: uk-animation-slide-bottom-medium">
              <div class="uk-text-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
                <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">Lorem ipsum dolor sit amet</h4>
                <p>24/7 support. We’re always here for you no matter what time of day.</p>
              </div>
              <div class="uk-text-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
                <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">Lorem ipsum dolor sit amet</h4>
                <p>24/7 support. We’re always here for you no matter what time of day.</p>
              </div>
              <div class="uk-text-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
                <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">Lorem ipsum dolor sit amet</h4>
                <p>24/7 support. We’re always here for you no matter what time of day.</p>
              </div>
              <div class="uk-text-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
                <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">Lorem ipsum dolor sit amet</h4>
                <p>24/7 support. We’re always here for you no matter what time of day.</p>
              </div>
              <div class="uk-text-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
                <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">Lorem ipsum dolor sit amet</h4>
                <p>24/7 support. We’re always here for you no matter what time of day.</p>
              </div>
              <div class="uk-text-center">
                <img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" data-src="https://zzseba78.github.io/Kick-Off/img/marketing-1.svg" data-uk-img alt="Image">
                <h4 class="uk-margin-small-bottom uk-margin-top uk-margin-remove-adjacent">Lorem ipsum dolor sit amet</h4>
                <p>24/7 support. We’re always here for you no matter what time of day.</p>
              </div>

            </div>
          </div>
        </section>
        <!-- BOTTOM -->
        <!-- LOGOS -->
        <div  id="f" class="uk-section uk-section-small uk-section-muted" style="overflow-x:hidden">
          <div class="uk-container uk-container-small">
            <div class="uk-grid uk-child-width-1-4 uk-child-width-expand@m logos-grid" data-uk-grid data-uk-scrollspy="cls: uk-animation-scale-down; target: > div > img; delay: 100">
              <div>
                  <g-image src="~/assets/images/logo.png"  alt="Image" />
              </div>
              <div>
                  <g-image src="~/assets/images/logo.png"  alt="Image" />
              </div>
              <div>
                  <g-image src="~/assets/images/logo.png"  alt="Image" />
              </div>
              <div>
                  <g-image src="~/assets/images/logo.png"  alt="Image" />
              </div>
              <div>
                  <g-image src="~/assets/images/logo.png"  alt="Image" />
              </div>
              <div>
                  <g-image src="~/assets/images/logo.png"  alt="Image" />
              </div>
            </div>
          </div>
        </div>
        <!-- /LOGOS -->




  	</main>
</Layout>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar
  }
}
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>


<style scoped="">
.top-wrap::before, .overlay-wrap::before {
	position: absolute;
	top:0;
	right:0;
	left: 0;
	bottom: 0;
	content: '';
	z-index: 1;
	background-color: rgba(0,0,0,0.5);
}
.top-wrap-height {
	height: 80vh;
	min-height: 460px;
	transition: height 0.25s;
}
.uk-subnav-pill > * > :first-child {
    padding: 0.5rem 1rem;
    background-color: rgba(0, 0, 0, 0.04);
}
.top-container {
	z-index: 2;
}
.uk-logo img {
	height: 38px;
}
.subtitle-text {
	font-size: 1.2em;
	opacity: 0.7;
	font-weight: 300;
}
.logos-grid img {
	display: block;
	width: 60px;
	margin: 0 auto;
	filter:  grayscale(100%);
	transition: filter 0.25s;
}
.logos-grid img:hover {
	display: block;
	width: 60px;
	margin: 0 auto;
	filter:  grayscale(0);
}
</style>

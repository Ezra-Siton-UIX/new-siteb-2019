<template>
<Layout  :sidebar="true" :isActive="false">

  <main class="uk-light wrap uk-background-norepeat uk-background-cover uk-background-center-center uk-cover-container uk-background-secondary">
		<img data-srcset="https://picsum.photos/640/700/?image=482 640w,
		             https://picsum.photos/960/700/?image=482 960w,
		             https://picsum.photos/1200/900/?image=482 1200w,
		             https://picsum.photos/2000/1000/?image=482 2000w"
		     sizes="100vw"
		     data-src="https://picsum.photos/1200/900/?image=482" alt="" data-uk-cover data-uk-img
		>
		<div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-position-z-index uk-position-relative" data-uk-height-viewport="min-height: 400">


			<!-- TEXT -->
			<div class="uk-container uk-container-small uk-flex-auto uk-text-center" data-uk-scrollspy="target: > .animate; cls: uk-animation-slide-bottom-small uk-invisible; delay: 300">
				<h1 class="uk-heading-primary animate uk-invisible" style="font-weight: 700;">{{ message}}.</h1>
				<div class="uk-width-4-5@m uk-margin-auto animate uk-invisible">
					<p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad, reiciendis maxime, facilis nam natus incidunt provident.</p>
				</div>


				<div class="uk-margin-medium-top animate uk-invisible" data-uk-margin data-uk-scrollspy-class="uk-animation-fade uk-invisible">
					<g-link to="/about" class="uk-button uk-button-default uk-button-large uk-width-2-3 uk-width-auto@s" title="Learn More About Us" data-uk-tooltip>  <span  data-uk-icon="info"> </span> About Us</g-link>
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
  data () {
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
.uk-subnav-pill>.uk-active>a {
    background-color: #1e87f0;
    color: #fff;
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
    .uk-logo img {
      height: 28px;
    }
  </style>

<template>
<Layout  :sidebar="true" :footer="false">
  <main class="uk-height-1-1 uk-cover-container uk-background-secondary">


  		<img data-srcset="https://picsum.photos/640/700/?image=1044 640w,
  		             https://picsum.photos/960/700/?image=1044 960w,
  		             https://picsum.photos/1200/900/?image=1044 1200w,
  		             https://picsum.photos/2000/1000/?image=1044 2000w"
  		     sizes="100vw"
  		     data-src="https://picsum.photos/1200/900/?image=1044" alt="" data-uk-cover data-uk-img
  		>

  		<div class="uk-position-cover uk-overlay-primary"></div>

  		<div class="uk-flex uk-flex-center uk-flex-middle uk-height-viewport uk-light uk-position-relative uk-position-z-index">
  			<div class="uk-position-bottom-center uk-position-small uk-visible@m">
  				<span class="uk-text-small uk-text-muted">© 2019 Company Name - <a href="https://github.com/zzseba78/Kick-Off">Created by {{ $static.metaData.siteName }}</a> | Built with <a href="http://getuikit.com" title="Visit UIkit 3 site" target="_blank" data-uk-tooltip><span data-uk-icon="uikit">UIKIT</span></a></span>
  			</div>
  			<div class="uk-width-medium uk-padding-small" uk-scrollspy="cls: uk-animation-fade">
  				<div class="uk-text-center uk-margin">
            {{ $static.metaData.siteName }}
  				  <h1>keep in Touch</h1>
  				</div>
  				<form action="login-dark.html">
  					<fieldset class="uk-fieldset">
  						<div class="uk-margin">
  							<div class="uk-inline uk-width-1-1">
  								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
  								<input class="uk-input uk-border-pill" required placeholder="Phone" type="tel">
  							</div>
  						</div>
  						<div class="uk-margin">
  							<div class="uk-inline uk-width-1-1">
  								<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
  								<input class="uk-input uk-border-pill" required placeholder="Email" type="email">
  							</div>
  						</div>

  						<div class="uk-margin">
  							<button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">Send</button>
  						</div>
  					</fieldset>
  				</form>
  				<div>
  					<div class="uk-text-center">
  						<a class="uk-link-reset uk-text-small" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">-or- call 0523408</a>
  					</div>
  					<div class="uk-margin-small-top" id="recover" hidden>
  						<form action="login-dark.html">

  							<div class="uk-margin-small">
  								<div class="uk-inline uk-width-1-1">
  									<span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
  									<input class="uk-input uk-border-pill" placeholder="E-mail" required type="text">
  								</div>
  							</div>
  							<div class="uk-margin-small">
  								<button type="submit" class="uk-button uk-button-primary uk-border-pill uk-width-1-1">SEND PASSWORD</button>
  							</div>

  						</form>
  					</div>
  				</div>
  			</div>
  		</div>

  	</main>
</Layout>
</template>

<script>
import navbar from '~/components/navbar.vue'

export default {
  components: {
    navbar,
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

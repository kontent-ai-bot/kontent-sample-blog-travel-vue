<template>
  <div class="post-share">
    <a
      class="twitter"
      :href="`https://twitter.com/share?text=${twitterText}&url=${url}`"
      onclick="window.open(this.href, 'twitter-share', 'width=550,height=235');return false;"
    >
      <i class="ic ic-twitter"></i><span class="hidden">Twitter</span>
    </a>
    <a
      class="facebook"
      :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`"
      onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
    >
      <i class="ic ic-facebook"></i><span class="hidden">Facebook</span>
    </a>
    <a
      class="googleplus"
      :href="`https://plus.google.com/share?url=${url}`"
      onclick="window.open(this.href, 'google-plus-share', 'width=490,height=530');return false;"
    >
      <i class="ic ic-googleplus"></i><span class="hidden">Google+</span>
    </a>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'buttons-social-sharing',
  props: {
    twitterText: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  }
}
</script>

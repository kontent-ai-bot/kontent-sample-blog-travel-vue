<template>
  <base-header :is-home="true">
      <h1 class="blog-name">
        Blog name
      </h1>
      <span class="blog-description">
        Blog description
      </span>
      <div
        class="blog-cover cover"
        style="background-image: url('https://source.unsplash.com/random/1920x900')"
      ></div>
  </base-header>
</template>

<script>
import BaseHeader from './base-header'

export default {
  name: 'the-header-home',
  components: {
    BaseHeader
  }
}
</script>

<template>
  <base-header :is-home="true">
      <h1 class="blog-name">
        {{name}}
      </h1>
      <span class="blog-description">
        {{description}}
      </span>
      <div
        class="blog-cover cover"
        :style="`background-image: url('${coverImageUrl}')`"
      ></div>
  </base-header>
</template>

<script>
import BaseHeader from './base-header'

export default {
  name: 'the-header-home',
  components: {
    BaseHeader
  },
  props: {
    name: {
      type: String,
      required: true,
      default: 'name'
    },
    description: {
      type: String,
      required: true,
      default: 'description'
    },
    coverImageUrl: {
      type: String,
      required: true,
      default: 'cover-image-url'
    }
  }
}
</script>

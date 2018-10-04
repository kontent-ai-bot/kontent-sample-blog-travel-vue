<template>
  <base-header>
      <h1 class="post-title">
        {{title}}
      </h1>
      <span class="post-meta">
        {{subtitle}}
      </span>
      <slot />
      <div
        class="blog-cover cover"
        :style="coverStyle"
      ></div>
  </base-header>
</template>

<script>
import BaseHeader from './base-header'

export default {
  name: 'the-header-generic',
  components: {
    BaseHeader
  },
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    coverImageUrl: {
      type: String
    }
  },
  computed: {
    coverStyle: function () {
      return `background-image: url('${this.coverImageUrl || 'https://source.unsplash.com/random/1920x900?generic'}')`
    }
  }
}
</script>

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
import { loadBlogConfiguration } from '../mixins/load-blog-configuration'
import BaseHeader from './base-header'

export default {
  name: 'the-header-generic',
  components: {
    BaseHeader
  },
  mixins: [loadBlogConfiguration],
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
      const imageUrl = this.coverImageUrl ||
      (this.blogConfiguration ? this.blogConfiguration.featureImageUrl : '')

      return imageUrl
        ? `background-image: url('${imageUrl}')`
        : ''
    }
  }
}
</script>

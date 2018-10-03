<template>
  <span class="post-meta">
    <base-author-link :slug="author.slug">{{ author.name }}</base-author-link>

    <template v-if="date">
      |
      <time v-if="date" :datetime="date.toISOString()">{{ displayDate }}</time>
    </template>
  </span>
</template>

<script>
import BaseAuthorLink from './base-author-link'

export default {
  name: 'base-post-meta',
  components: {
    BaseAuthorLink
  },
  props: {
    author: {
      type: Object,
      required: true
    },
    date: {
      type: Date
    }
  },
  computed: {
    displayDate: function () {
      const options = {
        weekday: 'long',
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        timeZone: 'UTC'
      }

      return this.date ? this.date.toLocaleDateString(undefined, options) : ''
    }
  }
}
</script>

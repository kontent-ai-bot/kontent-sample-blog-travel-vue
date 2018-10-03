<template>
  <span class="post-meta">
    {{author.name}}
    <template v-if="date">
      |
      <time v-if="date" :datetime="date.toISOString()">{{ displayDate }}</time>
    </template>
  </span>
</template>

<script>
export default {
  name: 'base-post-meta',
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

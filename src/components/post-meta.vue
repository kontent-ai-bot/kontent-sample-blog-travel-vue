<template>
  <span class="post-meta">
    <base-link-author :slug="author.slug">{{ author.name }}</base-link-author>
    <activity-list-inline :activities="activities" />
    <template v-if="date">
      |
      <time v-if="date" :datetime="date.toISOString()">{{ displayDate }}</time>
    </template>
  </span>
</template>

<script>
import ActivityListInline from './activity-list-inline'
import BaseLinkAuthor from './base-link-author'

export default {
  name: 'post-meta',
  components: {
    ActivityListInline,
    BaseLinkAuthor
  },
  props: {
    activities: {
      type: Array
    },
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
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
      }

      return this.date ? this.date.toLocaleDateString(undefined, options) : ''
    }
  }
}
</script>

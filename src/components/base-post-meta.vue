<template>
  <span class="post-meta">
    <base-link-author :slug="author.slug">{{ author.name }}</base-link-author>
    <template v-if="activities && activities.length > 0">
      in
    </template>
    <base-link-activity
      v-for="(activity, index) in activities"
      :key="activity.slug"
      :slug="activity.slug"
      :count="activities.length"
      :index="index"
    >{{activity.name}}</base-link-activity>
    <template v-if="date">
      |
      <time v-if="date" :datetime="date.toISOString()">{{ displayDate }}</time>
    </template>
  </span>
</template>

<script>
import BaseLinkActivity from './base-link-activity'
import BaseLinkAuthor from './base-link-author'

export default {
  name: 'base-post-meta',
  components: {
    BaseLinkActivity,
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

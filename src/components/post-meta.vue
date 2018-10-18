<template>
  <span class="post-meta">
    <inline-list-author :authors="authors" />
    <template v-if="activities && activities.length > 0">
      |
    </template>
    <inline-list-activity :activities="activities" />
    <template v-if="date">
      |
      <time v-if="date" :datetime="date.toISOString()">{{ displayDate }}</time>
    </template>
  </span>
</template>

<script>
import InlineListActivity from './inline-list-activity'
import InlineListAuthor from './inline-list-author'
import BaseLinkAuthor from './base-link-author'

export default {
  name: 'post-meta',
  components: {
    BaseLinkAuthor,
    InlineListActivity,
    InlineListAuthor
  },
  props: {
    activities: {
      type: Array
    },
    authors: {
      type: Array,
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

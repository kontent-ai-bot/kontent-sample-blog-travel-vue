<template>
  <ul :class="`${title ? 'tag-tree' : ''}`">
    <li v-if="title" class="root">{{title}}</li>
    <li v-for="activity in activities" :key="activity.slug">
      <div class="tag-node">
        <base-link-activity :slug="activity.slug">
          {{activity.title}}
        </base-link-activity>
        <p v-if="activity.description">
          {{activity.description}}
        </p>
      </div>
      <activity-tree
        v-if="activity.children && activity.children.length > 0"
        :activities="activity.children"
      />
    </li>
  </ul>
</template>

<script>
import BaseLinkActivity from './base-link-activity'

export default {
  name: 'activity-tree',
  components: {
    BaseLinkActivity
  },
  props: {
    activities: {
      type: Array,
      default: function () {
        return []
      }
    },
    title: {
      type: String
    }
  }
}
</script>

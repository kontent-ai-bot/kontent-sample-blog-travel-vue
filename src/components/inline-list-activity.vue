<template>
  <span>
    <template
      v-for="(activity, index) in activities"
      :slug="activity.slug"
      :count="activities.length"
      :index="index"
    >
      <base-link-activity
        :key="activity.slug"
        :slug="activity.slug"
      ><!-- Comment allows formatting without adding spacing to output
      -->{{activity.title}}<!-- Comment allows formatting without adding spacing to output
      --></base-link-activity><!-- Comment allows formatting without adding spacing to output
      --><template v-if="(index + 1) < activities.length">,&nbsp;</template>
    </template>
  </span>
</template>

<script>
import BaseLinkActivity from './base-link-activity'

export default {
  name: 'inline-list-activity',
  components: {
    BaseLinkActivity
  },
  props: {
    activities: {
      type: Array,
      required: true
    }
  }
}
</script>

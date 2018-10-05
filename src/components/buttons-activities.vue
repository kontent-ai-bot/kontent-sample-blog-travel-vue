<template>
  <aside class="post-tags">
    <router-link
      v-for="activity in activities"
      :key="activity.slug"
      :to="{
        name: 'activity-detail',
        params: { slug: activity.slug }
      }"
    >
      {{activity.name}}
    </router-link>
  </aside>
</template>

<script>
export default {
  name: 'buttons-activities',
  props: {
    activities: {
      type: Array,
      required: true
    }
  }
}
</script>

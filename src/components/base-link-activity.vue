<template>
  <span>
    <router-link
      :to="{
        name: 'activity-detail',
        params: {
          slug
        }
      }"
    >
      <slot />
    </router-link>
  </span>
</template>

<script>
export default {
  name: 'base-link-activity',
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

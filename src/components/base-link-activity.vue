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
    </router-link><template v-if="addComma">,&nbsp;</template>
  </span>
</template>

<script>
export default {
  name: 'base-activity-link',
  props: {
    count: {
      type: Number,
      default: 0
    },
    index: {
      type: Number,
      default: 0
    },
    slug: {
      type: String,
      required: true
    }
  },
  computed: {
    addComma: function () {
      return (this.index + 1) < this.count
    }
  }
}
</script>

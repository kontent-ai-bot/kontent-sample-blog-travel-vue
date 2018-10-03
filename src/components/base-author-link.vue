<template>
  <router-link
    :to="{
      name: 'author-detail',
      params: {
        slug
      }
    }"
  >
    <slot />
  </router-link>
</template>

<script>
export default {
  name: 'base-author-link',
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

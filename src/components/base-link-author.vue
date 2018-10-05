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
  name: 'base-link-author',
  props: {
    slug: {
      type: String,
      required: true
    }
  }
}
</script>

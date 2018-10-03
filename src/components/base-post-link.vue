<template>
  <router-link
    :to="{
      name: 'post-detail',
      params: {
        slug,
        year,
        month,
        date,
        postData: post
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
    published: {
      type: Date,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    post: {
      type: Object
    }
  },
  computed: {
    date: function () {
      return this.published.getUTCDate().toString()
    },
    month: function () {
      return (this.published.getUTCMonth() + 1).toString()
    },
    year: function () {
      return this.published.getUTCFullYear().toString()
    }
  }
}
</script>

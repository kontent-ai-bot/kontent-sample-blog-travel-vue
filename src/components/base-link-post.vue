<template>
  <router-link
    :to="{
      name: 'post-detail',
      params: {
        slug,
        year: dateUrlObject.year,
        month: dateUrlObject.month,
        date: dateUrlObject.date,
        postData: post
      }
    }"
  >
    <slot />
  </router-link>
</template>

<script>
import { getDateUrlObject } from '../api/helpers'

export default {
  name: 'base-link-post',
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
    dateUrlObject: function () {
      return getDateUrlObject(this.published)
    }
  }
}
</script>

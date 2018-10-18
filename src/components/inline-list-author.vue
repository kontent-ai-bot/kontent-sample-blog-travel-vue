<template>
  <span>
    <template
      v-for="(author, index) in authors"
      :slug="author.slug"
      :count="authors.length"
      :index="index"
    >
      <base-link-author
        :key="author.slug"
        :slug="author.slug"
      ><!-- Comment allows formatting without adding spacing to output
      -->{{author.name}}<!-- Comment allows formatting without adding spacing to output
      --></base-link-author><!-- Comment allows formatting without adding spacing to output
      --><template v-if="(index + 1) < authors.length">,&nbsp;</template>
    </template>
  </span>
</template>

<script>
import BaseLinkAuthor from './base-link-author'

export default {
  name: 'author-list-inline',
  components: {
    BaseLinkAuthor
  },
  props: {
    authors: {
      type: Array,
      required: true
    }
  }
}
</script>

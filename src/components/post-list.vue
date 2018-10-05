<template>
    <div class="container">
      <post-list-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </div>
</template>

<script>
import PostListItem from './post-list-item'

export default {
  name: 'post-list',
  components: {
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

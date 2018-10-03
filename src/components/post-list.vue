<template>
  <div
    id="index"
    class="container"
  >
    <main
      class="content"
      role="main"
      style="min-height: 75px"
    >
      <post-list-item
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </main>
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

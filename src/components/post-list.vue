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
      <div
        class="post"
        v-if="posts.length == 0"
      >
        <div class="inner">No posts found.</div>
      </div>

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
  data: function () {
    return {
      posts: [{
        title: 'Post Title',
        excerpt: 'Post Excerpt',
        published: new Date(Date.now()),
        author: {
          name: 'John Smith',
          slug: 'john-smith'
        },
        slug: 'post-slug'
      }, {
        title: 'Post Title',
        excerpt: 'Post Excerpt',
        published: new Date(Date.now()),
        author: {
          name: 'John Smith',
          slug: 'john-smith'
        },
        slug: 'post-slug'
      }, {
        title: 'Post Title',
        excerpt: 'Post Excerpt',
        published: new Date(Date.now()),
        author: {
          name: 'John Smith',
          slug: 'john-smith'
        },
        slug: 'post-slug'
      }]
    }
  }
}
</script>

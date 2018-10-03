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
      <base-pagination
        v-if="pagingDetails.currentPage > 1"
        :pagingDetails="pagingDetails"
      />
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

      <base-pagination :pagingDetails="pagingDetails" />
    </main>
  </div>
</template>

<script>
import BasePagination from './base-pagination'
import PostListItem from './post-list-item'

export default {
  name: 'post-list',
  components: {
    BasePagination,
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
      }],
      pagingDetails: {
        currentPage: 2,
        perPage: 3,
        maxPage: 3,
        totalCount: 10
      }
    }
  }
}
</script>

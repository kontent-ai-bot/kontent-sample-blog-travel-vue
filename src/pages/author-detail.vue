<template>
  <div class="post-template">
    <the-header-generic />
    <section id="blog-author" class="has-cover">
        <div class="inner">
          <summary-author :author="author" :show-link="false" :post-count="posts.length" />
        </div>
      </section>
      <post-list :posts="posts" />
  </div>
</template>

<script>
import { authorService } from '../api/services/author-service'
import { postService } from '../api/services/post-service'

import PostList from '@/components/post-list'
import SummaryAuthor from '@/components/summary-author'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'author-detail',
  components: {
    PostList,
    SummaryAuthor,
    TheHeaderGeneric
  },
  props: {
    slug: {
      type: String
    }
  },
  data: function () {
    return {
      author: {},
      posts: []
    }
  },
  watch: {
    '$route': {
      handler: 'loadPage',
      immediate: true
    }
  },
  methods: {
    loadPage: function () {
      authorService.getItem(this.slug).then(author => {
        this.author = author
      })

      postService.getItems({ type: 'author', value: this.slug }).then(posts => {
        this.posts = posts
      })
    }
  }
}
</script>

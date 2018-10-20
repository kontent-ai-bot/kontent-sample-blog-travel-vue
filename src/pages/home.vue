<template>
  <div class="home-template">
    <the-header-home
      v-if="blogConfiguration"
      :name="blogConfiguration.title"
      :description="blogConfiguration.tagline"
      :cover-image-url="blogConfiguration.featureImageUrl"
    />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { loadBlogConfiguration } from '../mixins/load-blog-configuration'
import { postService } from '../api/services/post-service'

import PostList from '@/components/post-list'
import TheHeaderHome from '@/components/the-header-home'

export default {
  name: 'home',
  components: {
    PostList,
    TheHeaderHome
  },
  data: function () {
    return {
      posts: []
    }
  },
  mixins: [loadBlogConfiguration],
  watch: {
    '$route': {
      handler: 'loadPage',
      immediate: true
    }
  },
  methods: {
    loadPage: function () {
      postService.getItems().then(posts => {
        this.posts = posts
      })
    }
  }
}
</script>

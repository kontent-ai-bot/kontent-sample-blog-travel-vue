<template>
  <div class="home-template">
    <the-header-home
      v-if="blogConfiguration.loaded"
      :name="blogConfiguration.name"
      :description="blogConfiguration.description"
      :cover-image-url="blogConfiguration.coverImageUrl"
    />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { configurationService } from '../api/services/configuration-service'
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
      posts: [],
      blogConfiguration: {
        loaded: false,
        name: '',
        description: '',
        coverImageUrl: ''
      }
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
      configurationService.getItem().then(configuration => {
        this.blogConfiguration = {
          name: configuration.title,
          description: configuration.tagline,
          coverImageUrl: configuration.featureImageUrl,
          loaded: true
        }
      })

      postService.getItems().then(posts => {
        this.posts = posts
      })
    }
  }
}
</script>

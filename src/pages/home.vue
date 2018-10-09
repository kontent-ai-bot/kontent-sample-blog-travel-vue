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
      posts: [
        {
          id: 1,
          title: 'Post Title',
          slug: 'post-slug',
          excerpt: 'Post Excerpt',
          published: new Date(Date.now()),
          author: {
            name: 'John Smith',
            slug: 'john-smith'
          },
          activities: [
            {
              title: 'Hiking',
              slug: 'hiking'
            },
            {
              title: 'Sightseeing',
              slug: 'sightseeing'
            }
          ]
        }, {
          id: 2,
          title: 'Post Title',
          slug: 'post-slug',
          excerpt: 'Post Excerpt',
          published: new Date(Date.now()),
          author: {
            name: 'John Smith',
            slug: 'john-smith'
          },
          activities: [
            {
              title: 'Hiking',
              slug: 'hiking'
            }
          ]
        }, {
          id: 3,
          title: 'Post Title',
          slug: 'post-slug',
          excerpt: 'Post Excerpt',
          published: new Date(Date.now()),
          author: {
            name: 'John Smith',
            slug: 'john-smith'
          },
          activities: []
        }],
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
    }
  }
}
</script>

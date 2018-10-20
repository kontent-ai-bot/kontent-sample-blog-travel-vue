<template>
  <div class="tag-template">
    <the-header-generic
      v-if="activity"
      :title="activity.title"
      :subtitle="activity.description"
      :cover-image-url="activity.featureImageUrl"
    />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import { taxonomyService } from '../api/services/taxonomy-service'
import { postService } from '../api/services/post-service'

import PostList from '@/components/post-list'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'activity-detail',
  components: {
    PostList,
    TheHeaderGeneric
  },
  props: {
    slug: {
      type: String
    }
  },
  data: function () {
    return {
      activity: null,
      posts: []
    }
  },
  computed: {
    subtitle: function () {
      return `All posts in ${this.activity.title.toLowerCase()}`
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
      taxonomyService.getItemDetails({ slug: this.slug })
        .then(activity => {
          this.activity = activity
        })

      postService.getItems({ type: 'activity', value: this.slug })
        .then(posts => {
          this.posts = posts
        })
    }
  }
}
</script>

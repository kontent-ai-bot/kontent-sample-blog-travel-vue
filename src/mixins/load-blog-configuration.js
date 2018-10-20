import { configurationService } from '../api/services/configuration-service'

export const loadBlogConfiguration = {
  data: function () {
    return {
      blogConfiguration: null
    }
  },
  watch: {
    '$route': {
      handler: '$_loadBlogConfiguration_loadPage',
      immediate: true
    }
  },
  methods: {
    $_loadBlogConfiguration_loadPage: function () {
      if (!this.coverImageUrl) {
        configurationService.getItem().then(configuration => {
          this.blogConfiguration = configuration
        })
      }
    }
  }
}

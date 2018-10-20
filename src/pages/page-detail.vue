<template>
  <div v-if="page" class="page-template">
    <the-header-generic :title="page.title" :cover-image-url="page.featureImageUrl" />
    <base-layout-page>
      <div v-html="page.body"></div>
    </base-layout-page>
  </div>
</template>

<script>
import { pageService } from '../api/services/page-service'

import BaseLayoutPage from '@/components/base-layout-page'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'page-detail',
  components: {
    BaseLayoutPage,
    TheHeaderGeneric
  },
  props: {
    slug: {
      type: String
    }
  },
  data: function () {
    return {
      page: null
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
      pageService.getItem({ slug: this.slug }).then(page => {
        if (page) {
          this.page = page
        } else {
          // this.$router.replace({ name: 'not-found', query: { url: this.$route.fullPath } })
        }
      })
    }
  }
}
</script>

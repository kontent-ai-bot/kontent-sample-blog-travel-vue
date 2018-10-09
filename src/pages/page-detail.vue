<template>
  <div class="page-template">
    <the-header-generic :title="page.title" :cover-image-url="page.featureImageUrl" />
    <base-layout-page>
      <div v-html="page.body"></div>
    </base-layout-page>
  </div>
</template>

<script>
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
      page: {
        slug: 'about',
        title: 'About Page Title',
        featureImageUrl: 'https://source.unsplash.com/1600x900/?page',
        body: '<p>Body copy <em>as HTML</em>.</p>'
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
      if (this.slug !== this.page.slug) {
        this.$router.replace({ name: 'not-found', query: { url: this.$route.fullPath } })
      }
    }
  }
}
</script>

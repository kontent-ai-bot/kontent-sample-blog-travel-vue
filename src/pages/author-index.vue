<template>
  <div class="tag-template">
    <the-header-generic title="Our Authors" />
    <base-layout-page>
      <summary-author
        v-for="author in authors"
        :key="author.slug"
        :author="author"
      />
    </base-layout-page>
  </div>
</template>

<script>
import { authorService } from '../api/services/author-service'

import BaseLayoutPage from '@/components/base-layout-page'
import SummaryAuthor from '@/components/summary-author'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'author-index',
  components: {
    BaseLayoutPage,
    SummaryAuthor,
    TheHeaderGeneric
  },
  data: function () {
    return {
      authors: []
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
      authorService.getItems().then(authors => {
        this.authors = authors
      })
    }
  }
}
</script>

<template>
  <div
    v-if="post"
    class="post-template"
  >
    <the-header-generic :title="post.title" :cover-image-url="post.featureImageUrl">
      <post-meta :authors="post.authors" :date="post.published" :activities="post.activities" />
    </the-header-generic>
    <base-layout-page>
      <div v-html="post.body"></div>
      <section class="post-info">
        <buttons-social-sharing :twitter-text="post.title" :url="currentUrl" />
        <buttons-activities :activities="post.activities" />
        <div class="clear"></div>
        <summary-author
         v-for="author in post.authors"
         :key="author.slug"
         :author="author"
        />
      </section>
    </base-layout-page>
  </div>
</template>

<script>
import { postService } from '../api/services/post-service'

import BaseLayoutPage from '@/components/base-layout-page'
import ButtonsActivities from '@/components/buttons-activities'
import ButtonsSocialSharing from '@/components/buttons-social-sharing'
import PostMeta from '@/components/post-meta'
import SummaryAuthor from '@/components/summary-author'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'post-detail',
  components: {
    BaseLayoutPage,
    ButtonsActivities,
    ButtonsSocialSharing,
    PostMeta,
    SummaryAuthor,
    TheHeaderGeneric
  },
  props: {
    year: {
      type: String,
      required: true
    },
    month: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    postData: {
      type: Object
    }
  },
  data: function () {
    return {
      post: undefined
    }
  },
  computed: {
    currentUrl: function () {
      return window.location.href
    }
  },
  watch: {
    '$route': {
      handler: 'loadPage',
      immediate: true
    }
  },
  methods: {
    loadPage () {
      console.log(this.postData)
      if (this.postData) {
        this.post = this.postData
      } else {
        postService.getItem({
          year: this.year,
          month: this.month,
          date: this.date,
          slug: this.slug
        })
          .then(post => {
            this.post = post
          })
      }
    }
  }
}
</script>

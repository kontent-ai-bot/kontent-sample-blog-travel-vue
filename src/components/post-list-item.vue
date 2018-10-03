<template>
  <article class="post">
    <div class="inner">
      <header class="post-header">
        <h2 class="post-title">
          <base-link-post
            :published="post.published"
            :slug="post.slug"
            :post="post"
          >
            {{post.title}}
          </base-link-post>
        </h2>
        <base-post-meta
          :author="post.author"
          :activities="post.activities"
          :date="post.published"
        />
        <div class="clear"></div>
      </header>
      <section class="post-excerpt">
        <p>{{post.excerpt}}</p>
      </section>
    </div>
  </article>
</template>

<script>
import BaseLinkPost from './base-link-post'
import BasePostMeta from './base-post-meta'

export default {
  components: {
    BaseLinkPost,
    BasePostMeta
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>

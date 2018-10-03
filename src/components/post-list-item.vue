<template>
  <article class="post">
    <div class="inner">
      <header class="post-header">
        <h2 class="post-title">
          <base-post-link
            :published="post.published"
            :slug="post.slug"
            :post="post"
          >
            {{post.title}}
          </base-post-link>
        </h2>
        <base-post-meta
          :author="post.author"
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
import BasePostLink from './base-post-link'
import BasePostMeta from './base-post-meta'

export default {
  components: {
    BasePostLink,
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

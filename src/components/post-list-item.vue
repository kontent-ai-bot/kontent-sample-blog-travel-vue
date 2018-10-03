<template>
  <article class="post">
    <div class="inner">
      <header class="post-header">
        <h2 class="post-title">
          <a href="#">{{post.title}}</a>
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
import BasePostMeta from './base-post-meta'

export default {
  components: {
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

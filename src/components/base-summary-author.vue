<template>
  <aside class="post-author">
    <figure class="post-author-avatar avatar">
      <img :src="author.avatarUrl" :alt="author.name" />
    </figure>
    <div class="post-author-bio">
      <h4 v-if="showLink" class="post-author-name">
        <router-link :to="{name: 'author', params: { slug: author.slug }}">{{author.name}}</router-link>
      </h4>
      <h2 v-else class="post-author-name">{{author.name}}</h2>
      <p class="post-author-about">{{author.bio}}</p>
      <span v-if="postCount > -1" class="post-author-stats"><i class="ic ic-pencil"></i> {{ postCountDisplay }}</span>
      <span v-if="author.location" class="post-author-location"><i class="ic ic-location"></i> {{author.location}}</span>
      <span v-if="author.website" class="post-author-website"><i class="ic ic-link"></i> <a :href="author.website">Website</a></span>
      <span v-if="author.twitter" class="post-author-twitter"><i class="ic ic-twitter"></i> <a target="_blank" :href="`https://twitter.com/${author.twitter}`">Twitter</a></span>
      <span v-if="author.facebook" class="post-author-facebook"><i class="ic ic-facebook"></i> <a target="_blank" :href="`https://facebook.com/${author.facebook}`">Facebook</a></span>
    </div>
    <div class="clear"></div>
  </aside>
</template>

<script>
export default {
  name: 'base-summary-author',
  props: {
    author: {
      type: Object,
      required: true
    },
    postCount: {
      type: Number,
      default: -1
    },
    showLink: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    postCountDisplay () {
      return this.postCount === 0 ? 'No Posts' : this.postCount === 1 ? '1 Post' : `${this.postCount} Posts`
    }
  }
}
</script>

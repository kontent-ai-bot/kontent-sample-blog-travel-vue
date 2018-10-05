<template>
  <div class="post-template">
    <the-header-generic :title="post.title" :cover-image-url="post.featureImageUrl">
      <base-post-meta :author="post.author" :date="post.published" />
    </the-header-generic>
    <main class="content" role="main">
        <article class="post">
          <div class="inner">
            <section class="post-content" v-html="post.body"></section>

            <section class="post-info">
              <buttons-social-sharing :twitter-text="post.title" :url="currentUrl" />
              <buttons-activities :activities="post.activities" />
              <div class="clear"></div>
              <summary-author :author="post.author" />
            </section>
          </div>
        </article>
    </main>
  </div>
</template>

<script>
import ButtonsActivities from '@/components/buttons-activities'
import ButtonsSocialSharing from '@/components/buttons-social-sharing'
import PostMeta from '@/components/post-meta'
import SummaryAuthor from '@/components/summary-author'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'post-detail',
  components: {
    ButtonsActivities,
    ButtonsSocialSharing,
    PostMeta,
    SummaryAuthor,
    TheHeaderGeneric
  },
  data: function () {
    return {
      post: {
        id: 1,
        title: 'Post Title',
        featureImageUrl: 'https://source.unsplash.com/1600x900/?post',
        slug: 'post-slug',
        excerpt: 'Post Excerpt',
        published: new Date(Date.now()),
        author: {
          name: 'John Smith',
          slug: 'john-smith',
          avatarUrl: 'https://source.unsplash.com/100x100/?avatar',
          bio: 'Short author biography here.',
          location: 'The World',
          website: 'http://example.com',
          twitter: 't_handle',
          facebook: 'fb_handle'
        },
        activities: [
          {
            name: 'Hiking',
            slug: 'hiking'
          },
          {
            name: 'Sightseeing',
            slug: 'sightseeing'
          }
        ],
        body: '<p>Body copy <em>as HTML</em>.</p>'
      }
    }
  },
  computed: {
    currentUrl: function () {
      return window.location.href
    }
  }
}
</script>

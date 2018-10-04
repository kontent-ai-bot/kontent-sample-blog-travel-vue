<template>
  <div class="post-template">
    <the-header-generic />
    <section id="blog-author" class="has-cover">
        <div class="inner">
          <base-summary-author :author="author" :show-link="false" :post-count="posts.length" />
        </div>
      </section>
      <post-list :posts="posts" />
  </div>
</template>

<script>
import BaseSummaryAuthor from '@/components/base-summary-author'
import PostList from '@/components/post-list'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'author-detail',
  components: {
    BaseSummaryAuthor,
    PostList,
    TheHeaderGeneric
  },
  data: function () {
    return {
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
      posts: [
        {
          id: 1,
          title: 'Post Title',
          slug: 'post-slug',
          excerpt: 'Post Excerpt',
          published: new Date(Date.now()),
          author: {
            name: 'John Smith',
            slug: 'john-smith'
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
          ]
        }, {
          id: 2,
          title: 'Post Title',
          slug: 'post-slug',
          excerpt: 'Post Excerpt',
          published: new Date(Date.now()),
          author: {
            name: 'John Smith',
            slug: 'john-smith'
          },
          activities: [
            {
              name: 'Hiking',
              slug: 'hiking'
            }
          ]
        }, {
          id: 3,
          title: 'Post Title',
          slug: 'post-slug',
          excerpt: 'Post Excerpt',
          published: new Date(Date.now()),
          author: {
            name: 'John Smith',
            slug: 'john-smith'
          },
          activities: []
        }]
    }
  }
}
</script>

<template>
  <div class="home-template">
    <the-header-home />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/post-list'
import TheHeaderHome from '@/components/the-header-home'

export default {
  name: 'home',
  components: {
    PostList,
    TheHeaderHome
  },
  data: function () {
    return {
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

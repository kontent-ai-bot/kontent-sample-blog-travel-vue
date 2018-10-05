<template>
  <div class="home-template">
    <the-header-home :name="blogName" :description="blogDescription" :cover-image-url="defaultCoverImageUrl" />
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
              title: 'Hiking',
              slug: 'hiking'
            },
            {
              title: 'Sightseeing',
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
              title: 'Hiking',
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
        }],
      blogName: 'Title',
      blogDescription: 'Description',
      defaultCoverImageUrl: 'https://source.unsplash.com/random/1920x900?journal'
    }
  }
}
</script>

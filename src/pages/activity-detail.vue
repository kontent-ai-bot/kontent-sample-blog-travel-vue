<template>
  <div class="tag-template">
    <the-header-generic :title="activity.name" :subtitle="subtitle" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from '@/components/post-list'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'activity-detail',
  components: {
    PostList,
    TheHeaderGeneric
  },
  data: function () {
    return {
      activity: {
        name: 'Activity name',
        slug: 'activity-slug'
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
  },
  computed: {
    subtitle: function () {
      return `All posts in ${this.activity.name.toLowerCase()}`
    }
  }
}
</script>

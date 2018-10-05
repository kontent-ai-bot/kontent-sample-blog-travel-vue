<template>
  <div class="tag-template">
    <the-header-generic :title="activity.title" :subtitle="subtitle" />
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
        title: 'Activity title',
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
        }]
    }
  },
  computed: {
    subtitle: function () {
      return `All posts in ${this.activity.title.toLowerCase()}`
    }
  }
}
</script>

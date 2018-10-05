<template>
  <div class="tag-template">
    <the-header-generic title="Our Authors" />
    <base-layout-page>
      <summary-author
        v-for="author in authors"
        :key="author.slug"
        :author="author"
      />
    </base-layout-page>
  </div>
</template>

<script>
import BaseLayoutPage from '@/components/base-layout-page'
import SummaryAuthor from '@/components/summary-author'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'activity-index',
  components: {
    BaseLayoutPage,
    SummaryAuthor,
    TheHeaderGeneric
  },
  data: function () {
    return {
      authors: [
        {
          name: 'John Smith',
          slug: 'john-smith',
          avatarUrl: 'https://source.unsplash.com/100x100/?avatar',
          bio: 'Short author biography here.',
          location: 'The World',
          website: 'http://example.com',
          twitter: 't_handle',
          facebook: 'fb_handle'
        },
        {
          name: 'John Smith',
          slug: 'john-smith',
          avatarUrl: 'https://source.unsplash.com/100x100/?avatar',
          bio: 'Short author biography here.',
          location: 'The World',
          website: 'http://example.com',
          twitter: 't_handle',
          facebook: 'fb_handle'
        },
        {
          name: 'John Smith',
          slug: 'john-smith',
          avatarUrl: 'https://source.unsplash.com/100x100/?avatar',
          bio: 'Short author biography here.',
          location: 'The World',
          website: 'http://example.com',
          twitter: 't_handle',
          facebook: 'fb_handle'
        }
      ]
    }
  }
}
</script>

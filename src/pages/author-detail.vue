<template>
  <div class="post-template">
    <the-header-generic title="Author Name" subtitle="Posts by Author" cover-image-url="https://source.unsplash.com/random/1920x900?author" />
  </div>
</template>

<script>
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'author-detail',
  components: {
    TheHeaderGeneric
  }
}
</script>

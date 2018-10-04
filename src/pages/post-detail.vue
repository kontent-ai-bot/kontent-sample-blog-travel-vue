<template>
  <div class="post-template">
    <the-header-generic title="Post title" subtitle="Post subtitle" cover-image-url="https://source.unsplash.com/random/1920x900?post">
      <base-post-meta :author="{name:'Au thor', slug:'au-thor'}" :date="new Date(Date.now())" />
    </the-header-generic>
  </div>
</template>

<script>
import BasePostMeta from '@/components/base-post-meta'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'post-detail',
  components: {
    BasePostMeta,
    TheHeaderGeneric
  }
}
</script>

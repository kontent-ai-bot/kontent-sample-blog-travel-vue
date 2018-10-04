<template>
  <div class="post-template">
    <the-header-generic title="Activity Name" subtitle="Posts in activity" cover-image-url="https://source.unsplash.com/random/1920x900?activity" />
  </div>
</template>

<script>
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'activity-detail',
  components: {
    TheHeaderGeneric
  }
}
</script>

<template>
  <div class="home-template">
    <the-header-home />
    <post-list />
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
  }
}
</script>

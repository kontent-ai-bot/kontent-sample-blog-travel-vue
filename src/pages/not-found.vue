<template>
  <div class="tag-template">
    <the-header-generic title="Page not found" />
    <base-layout-page>
      <p>Sorry, this page doesn't exist.</p>
    </base-layout-page>
  </div>
</template>

<script>
import BaseLayoutPage from '@/components/base-layout-page'
import TheHeaderGeneric from '@/components/the-header-generic'

export default {
  name: 'not-found',
  components: {
    BaseLayoutPage,
    TheHeaderGeneric
  }
}
</script>

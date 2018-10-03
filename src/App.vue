<template>
  <div id="app">
    <section id="wrapper">
      <router-view/>
      <the-footer/>
    </section>
  </div>
</template>

<script>
import '@/theme/sass/style.scss'

import TheFooter from '@/components/the-footer'

export default {
  name: 'app',
  components: {
    TheFooter
  }
}
</script>

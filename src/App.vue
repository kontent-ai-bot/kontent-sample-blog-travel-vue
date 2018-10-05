<template>
  <div id="app">
    <the-main-menu />
    <section id="wrapper">
      <router-view/>
      <the-footer/>
    </section>
  </div>
</template>

<script>
import '@/theme/sass/style.scss'

import TheFooter from '@/components/the-footer'
import TheMainMenu from '@/components/the-main-menu'

export default {
  name: 'app',
  components: {
    TheFooter,
    TheMainMenu
  }
}
</script>

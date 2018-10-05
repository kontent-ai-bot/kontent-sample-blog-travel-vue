<template>
  <header
    :id="headerId"
    class="has-cover"
  >
    <div class="inner">
      <nav id="navigation">
        <span
          v-if="!isHome"
          id="home-button"
          class="nav-button"
        >
          <router-link to="/" class="home-button" title="Home"><i class="ic ic-arrow-left"></i> Home</router-link>
        </span>
        <button-menu />
      </nav>
      <slot/>
    </div>
  </header>
</template>

<script>
import ButtonMenu from './button-menu'
export default {
  name: 'base-header',
  components: {
    ButtonMenu
  },
  props: {
    isHome: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    headerId: function () {
      return this.isHome ? 'blog-header' : 'post-header'
    }
  }
}
</script>

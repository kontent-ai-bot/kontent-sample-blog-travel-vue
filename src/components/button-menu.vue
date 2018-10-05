<template>
  <span id="menu-button" class="nav-button">
    <a class="menu-button" @click="triggerMenuOpen"><i class="ic ic-menu"></i> Menu</a>
  </span>
</template>

<script>
export default {
  methods: {
    triggerMenuOpen: function () {
      this.$eventBus.$emit('menu-open')
    }
  }
}
</script>

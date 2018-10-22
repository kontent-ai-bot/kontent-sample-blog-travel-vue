<script>
import InlineComponents from './inline-components'
import Vue from 'vue'

export default {
  name: 'base-dynamic-render',
  props: {
    dynamicTemplate: {
      type: String,
      required: true
    }
  },
  render (createElement) {
    const dynamicComponent = Vue.component('AppDynamicRenderInner', {
      template: `<span>${this.dynamicTemplate}</span>`,
      components: InlineComponents
    })

    return createElement('div', [createElement(dynamicComponent)])
  }
}
</script>

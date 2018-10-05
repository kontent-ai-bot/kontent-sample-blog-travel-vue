import Vue from 'vue'
import App from './app.vue'
import router from './router'

Vue.config.productionTip = false

// Simple Global Event bus
Vue.prototype.$eventBus = new Vue()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

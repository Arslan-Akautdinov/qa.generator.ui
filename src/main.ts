import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VueClipboard)
Vue.use(VModal)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

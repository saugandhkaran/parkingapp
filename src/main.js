import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './filters'

import { mockServer } from "./mockServer"

if (process.env.NODE_ENV === "development") {
  mockServer()
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'assets/bootstrap/css/bootstrap.min.css'
import store from './store'

Vue.config.productionTip = false
const isMock = true
if (isMock) {
  require('@/api-mock/vue-mock')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: {App}
})

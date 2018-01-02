// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './app/App'
import VeeValidate from 'vee-validate'
import router from './app/router/app-router'
import store from './app/store'

Vue.config.productionTip = false
Vue.use(Vuetify)
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

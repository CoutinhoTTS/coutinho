// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import VueRouter from 'vue-router'
import 'vant/lib/index.css'
import './../static/font-awesome-4.7.0/css/font-awesome.css'
import axios from 'axios'
import store from './store/store'
import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)
Vue.use(VueRouter)
Vue.use(Vant)
Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

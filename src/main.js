// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import lodash from 'lodash'
import router from './router'
import Element from 'element-ui'
import store from '@/store/index'
import config from '@/config/encapsulatesRequest'
import '~/wathet_theme/index.css'
import '@/assets/styles/style.scss'

Vue.use(lodash)
Vue.prototype.$myPost = config.post
Vue.prototype.$myget = config.get
Vue.config.productionTip = false
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

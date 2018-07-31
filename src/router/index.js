import Vue from 'vue'
import 'babel-polyfill'
import Router from 'vue-router'
import home from '@/components/common/home'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})

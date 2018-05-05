import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import city from '@/pages/city/City.vue'
import detail from '@/pages/detail/detail.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: city
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: detail
    }
  ]
})

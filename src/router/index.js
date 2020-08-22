import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../views/login.vue'
import echart from '../views/echart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/chart'
  },
  {
    path: '/login',
    component: login
  },
  {
    path: '/chart',
    component: echart
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router

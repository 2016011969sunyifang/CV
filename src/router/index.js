import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import jianli from '../views/jianli.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'jianli',
    component: jianli
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

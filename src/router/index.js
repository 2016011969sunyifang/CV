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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

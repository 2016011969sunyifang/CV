import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import jianli from '../views/jianli.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'jianli',
    component: jianli,
    meta: { title: "sunyifang.cv" }
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: { title: "sunyifang.cv1" }
    // meta: { hidden: true, title: "助销员申请" }
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

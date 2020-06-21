import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import hurdleLeft from "@/views/hurdleLeft"
import hurdletype from "@/views/hurdletype"
const routes = [
  { 
    path: '/',
    name: 'hurdleLeft',
    component: hurdleLeft
  },
  {
    path: '/hurdletype',
    name: 'hurdletype',
    component: hurdletype
  }
]

const router = new VueRouter({
  routes
})

export default router

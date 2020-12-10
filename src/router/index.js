import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login/login.vue'
Vue.use(VueRouter)

const routes = [
  {
    name:'login',
    path: '/login',
    component:Login
  }
]

const router = new VueRouter({
  routes
})

export default router

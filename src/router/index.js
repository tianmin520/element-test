import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/login/login.vue'
import Home from '@/components/home/home.vue'
import User from '@/components/user/users.vue'
Vue.use(VueRouter)

const routes = [
  {
    name:'login',
    path: '/login',
    component:Login
  },
  {
    name:'home',
    path: '/home',
    component:Home,
    // 开启在home组件中开启子组件
    children:[
      {
        name:'users',
        path:'/users',
        component:User
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

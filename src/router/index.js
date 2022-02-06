import Vue from 'vue'
import VueRouter from 'vue-router'
import UserList from '@/views/UserList.vue'
import UserDetail from "@/views/UserDetail";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path: '/userDetail/:userId',
    name: 'UserDetail',
    component: UserDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

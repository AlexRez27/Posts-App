import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '.././views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PostDetail',
    name: 'PostDetail',
    component: () => import('.././views/PostDetail.vue')
  },
  {
    path: '/PostForm',
    name: 'PostForm',
    component: () => import('.././views/PostForm.vue')
  },
  {
    path: '/UserTable',
    name: 'UserTable',
    component: () => import('.././views/UserTable.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

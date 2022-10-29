import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/base',
    name: 'base',
    component: () => import(/* webpackChunkName: "base" */ '../views/base/index.vue')
  },
  {
    path: '/extends1',
    name: 'extends1',
    component: () => import(/* webpackChunkName: "base" */ '../views/base/extends1/index.vue')
  },
  {
    path: '/extends2',
    name: 'extends2',
    component: () => import(/* webpackChunkName: "base" */ '../views/base/extends2/index.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/service',
    name: 'service',
    component: () => import(/* webpackChunkName: "about" */ '../views/ServiceView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventsListView.vue')
  },
  {
    path: '/event',
    name: 'event',
    component: () => import(/* webpackChunkName: "about" */ '../views/EventView.vue')
  },
  {
    path: '/applications',
    name: 'applications',
    component: () => import(/* webpackChunkName: "about" */ '../views/ApplicationsView.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

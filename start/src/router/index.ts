import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'app',
    component: () => import('../App.vue')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../App.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

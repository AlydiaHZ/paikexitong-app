import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/TabLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: 'home',
        component: () => import('@/views/tabs/TabHome.vue'),
      },
      {
        path: 'messages',
        component: () => import('@/views/tabs/TabMessages.vue'),
      },
      {
        path: 'profile',
        component: () => import('@/views/tabs/TabProfile.vue'),
      },
    ],
  },
  {
    path: '/test',
    component: () => import('@/views/TestPage.vue'),
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

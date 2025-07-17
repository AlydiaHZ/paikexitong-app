import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from '@ionic/vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/layout/StatusLayout.vue'),
    children: [
      {
        path: '',
        redirect: '/test',
      },
      {
        path: 'home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'messages',
        name: 'Messages',
        component: () => import('@/views/messages/index.vue'),
      },
      {
        path: 'profile',
        name: 'Profile',
        component: () => import('@/views/profile/index.vue'),
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/TestPage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/schedule/:id',
    name: 'ScheduleDetail',
    component: () => import('@/views/schedule/index.vue'),
  },
  {
    path: '/notification/:id',
    name: 'NotificationDetail',
    component: () => import('@/views/message/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

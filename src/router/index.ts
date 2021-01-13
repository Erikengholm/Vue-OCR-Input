/* eslint-disable linebreak-style */
import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../components/LoginForm.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import(/* webpackChunkName: "home" */ '../components/OCR.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import(/* webpackChunkName: "user" */ '../components/User.vue'),
  },
  {
    path: '/registration',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "about" */ '../components/RegistrationForm.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

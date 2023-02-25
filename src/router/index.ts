import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router';
import { basicRoutes } from './routes';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: basicRoutes as unknown as RouteRecordRaw[],
})

export default router

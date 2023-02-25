import type { AppRouteRecordRaw, AppRouteModule } from '@/router/types';


// 根路由
export const RootRoute: AppRouteRecordRaw = {
    path: '/',
    name: 'Root',
    redirect: '/login',
    meta: {
      title: 'Root',
    },
  };

export const LoginRoute: AppRouteRecordRaw= {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: '登录',
    },
  };

  export const basicRoutes = [
    LoginRoute,
    RootRoute
  ];
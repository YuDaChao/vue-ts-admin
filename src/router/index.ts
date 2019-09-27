import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { IRouterConfig } from './interface';

import Layout from '@/layout/index/index.vue';

Vue.use(Router);

export const constantRouterMap: IRouterConfig[] & RouteConfig[] = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [{
      path: '/home',
      component: () => import('@/views/Home.vue'),
    }],
  },
];

export default new Router({
  routes: constantRouterMap,
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

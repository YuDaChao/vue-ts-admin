import Vue from 'vue';
import Router, { RouteConfig } from 'vue-router';
import { IRouterConfig } from './types';

import Layout from '@/layout/index.vue';

Vue.use(Router);

export const constantRouterMap: IRouterConfig[] & RouteConfig[] = [
  {
    path: '/',
    name: 'home',
    component: Layout,
    meta: { title: '概览', icon: 'guide' },
    children: [{
      path: '/',
      component: () => import('@/views/Home.vue'),
      meta: { title: '概览', icon: 'icon' },
    }],
  },
  {
    path: '/show',
    name: 'show',
    component: Layout,
    children: [{
      path: '/show',
      component: () => import('@/views/About.vue'),
      meta: { title: '网络播放表现', icon: 'chart' },
    }],
  },
];

export default new Router({
  routes: constantRouterMap,
  scrollBehavior: () => ({ x: 0, y: 0 }),
});

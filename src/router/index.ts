import Vue from "vue";
import Router, { RouteConfig } from "vue-router";
import { IRouterConfig } from "./types";

import Layout from "@/layout/index.vue";

Vue.use(Router);

export const constantRouterMap: IRouterConfig[] = [
  {
    path: "/",
    name: "home",
    component: Layout,
    children: [{
      path: "/",
      name: "概览",
      component: () => import("@/views/Home.vue"),
      meta: { title: "概览", icon: "dashboard" }
    }]
  },
  {
    path: "/show",
    name: "show",
    component: Layout,
    meta: { title: "报表统计", icon: "chart" },
    children: [{
      path: "index",
      name: "网络播放表现",
      hidden: true,
      component: () => import("@/views/About.vue"),
      meta: { title: "网络播放表现", icon: "chart" }
    }, {
      path: "second",
      name: "销售统计",
      component: () => import("@/views/About.vue"),
      meta: { title: "销售统计", icon: "chart" }
    }, {
      path: "second2",
      name: "销售统计2",
      component: () => import("@/views/About.vue"),
      meta: { title: "销售统计2", icon: "chart" }
    }]
  }
];

const router = new Router({
  routes: constantRouterMap,
  scrollBehavior: () => ({ x: 0, y: 0 })
})

export default router;

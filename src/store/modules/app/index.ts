import { Module } from "vuex";
import { IAppState } from "./types";
import { constantRouterMap } from "@/router";

const namespaced: boolean = true;

const app: Module<IAppState, any> = {
  namespaced,
  state: {
    sidebarOpen: true,
    menuList: constantRouterMap
  },
  mutations: {
    toggleSidebar: (state: IAppState) => {
      state.sidebarOpen = !state.sidebarOpen;
    }
  },
  actions: {}
};

export default app;

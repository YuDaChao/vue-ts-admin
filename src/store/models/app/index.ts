import { Module } from 'vuex';
import { IAppState } from '@/store/types';

const namespaced: boolean = true;

const app: Module<IAppState, any> = {
  namespaced,
  state: {
    sidebarOpen: true,
  },
  mutations: {
    toggleSidebar: (state: IAppState) => {
      state.sidebarOpen = !state.sidebarOpen
    },
  },
  actions: {},
};

export default app

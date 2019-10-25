import { Module } from "vuex";
import { IUserState } from "./types";

const namespaced: boolean = true;

const user: Module<IUserState, any> = {
  namespaced,
  state: {
    permissions: ["admin"]
  },
  mutations: {
    setPermissions(state, permissions: any[]) {
      state.permissions = permissions
    }
  }
}

export default user

import { GetterTree } from "vuex";
import { IRootState } from "@/store/types";

const getters: GetterTree<IRootState, any> = {
  sidebarOpen: (state: IRootState) => state.app.sidebarOpen,
  menuList: (state: IRootState) => state.app.menuList
}

export default getters

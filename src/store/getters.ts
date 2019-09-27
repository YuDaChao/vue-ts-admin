import { GetterTree } from 'vuex';
import { IRootState } from '@/store/types';

const getters: GetterTree<IRootState, any> = {
  sidebarOpen: (state: IRootState) => state.app.sidebarOpen,
}

export default getters

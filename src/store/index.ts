import Vue from 'vue';
import Vuex from 'vuex';

import * as models from './models';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: models,
  getters,
});

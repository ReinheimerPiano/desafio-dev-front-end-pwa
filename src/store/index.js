import Vue from 'vue';
import Vuex from 'vuex';

import api from '@/store/modules/api';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    api,
  },
});

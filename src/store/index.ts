import Vue from 'vue';
import { RootState } from './types';
import Vuex, { StoreOptions } from 'vuex';

// Modules
import { stream } from './stream/index';
 
Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: '1.0.0' // a simple property
  },
  modules: {
    stream
  }
};

export default new Vuex.Store<RootState>(store);
import { MutationTree } from 'vuex';
import { StreamState, Stream } from './types';

export const mutations: MutationTree<StreamState> = {

  streamsLoaded(state, payload: Array<Stream>) {
    state.streams = payload;
    state.error = false;
  },

  streamsError(state) {
    state.stream = undefined;
    state.error = true;
  }

};
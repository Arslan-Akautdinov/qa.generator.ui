import { Module } from 'vuex';

import { StreamState, Stream} from './types';
import { RootState } from '../types';

import { actions } from './actions';
import { getters } from './getters';
import { mutations } from './mutations';


const state: StreamState = {
  streams: new Array<Stream>(),
  stream: undefined,
  error: false
};

const namespaced = true;

export const stream: Module<StreamState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
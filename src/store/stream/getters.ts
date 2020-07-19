import { GetterTree } from 'vuex';
import { RootState } from '../types';
import { StreamState, Stream} from './types';

export const getters: GetterTree<StreamState, RootState> = {
  getStreams(state): Array<Stream>
  {
    return (state.streams);
  }
};
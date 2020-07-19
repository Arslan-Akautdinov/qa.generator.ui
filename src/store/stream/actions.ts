import axios from 'axios';
import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { StreamState, Stream } from './types';


export const actions: ActionTree<StreamState, RootState> = {
  setStreams({ commit }): any
  {
    axios({
      url: 'http://127.0.0.1:5500/api/v1/streams'
    }).then((response) => {
      const payload: Array<Stream> = response.data;
      console.log(response.data)
      commit('streamsLoaded', payload);
    }, (error) => {
      console.log(error);
      commit('streamsError');
    });
  }
};
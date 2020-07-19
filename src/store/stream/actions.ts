import axios from 'axios';
import { ActionTree } from 'vuex';
import { RootState } from '../types';
import { StreamState} from './types';

const head = { ContentType: "application/json" }
  

function addStreams(stream: any)
{
  return axios.post(`${process.env.VUE_APP_API_URL}/api/v1/streams`, stream, { headers: head}).then((response) => response.data);
}

function getStreams()
{
  console.log(process.env.VUE_APP_API_URL)
  return axios.get(`${process.env.VUE_APP_API_URL}/api/v1/streams`).then((response) => response.data);
}

function delStreams(uuid: string)
{
  return axios.delete(`${process.env.VUE_APP_API_URL}/api/v1/streams/${uuid}`).then((response) => response.data);
}


export const actions: ActionTree<StreamState, RootState> = {

  streamSelect({ commit }): any
  {
    getStreams()
    .then(data => { commit('streamsLoaded', data); })
    .catch(err => { commit('streamsError'); })
  },

  streamCreate({commit}, stream): any
  {
    return addStreams(stream)
    .then(() => {
      getStreams()
      .then(data => { commit('streamsLoaded', data); })
     })
  },

  streamDelete({commit}, uuid): any
  {
    return delStreams(uuid)
    .then(() => {
      getStreams()
      .then(data => { commit('streamsLoaded', data); })
     })
  }

};
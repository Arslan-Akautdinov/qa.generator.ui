import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Streams from '@/views/Streams.vue'
import StreamItem from '@/views/StreamItem.vue'
import Pushgen from '@/views/Pushgen.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/streams',
    name: 'RTSP',
    alias: "menu",
    component: Streams
  },
  {
    path: '/pushgen',
    name: 'Pushgen',
    alias: "menu",
    component: Pushgen
  },
  {
    path: '/streams/:stream_uuid',
    name: 'stream',
    component: StreamItem
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export const menuRoutes = () => 
{
  const menues = new Array<RouteConfig>()
  routes.forEach(function(route)
  {
    if (route.alias == "menu")
    {
      menues.push(route)
    }
  });
  return menues
}

export default router


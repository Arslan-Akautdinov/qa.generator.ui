<template>
  <div id="app">
    <headers />
    <main>
      
        <router-view />
      
    </main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Headers from '@/components/Headers.vue'

@Component({
  components: {
    Headers
  }
})
export default class App extends Vue {}

</script>

<style lang="less">

body, html
{
  background-color: #FAFAFA;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  font-family: 'Ubuntu';
}

.wrapper
{
    height: 100%;
    margin: 0 auto;
    max-width: 1100px;
    padding: 0px 20px;
}

ul
{
  margin: 0px;
  padding: 0px;
}

li
{
  list-style: none;
}

a
{
  text-decoration: none;
}

</style>

<template>
    <div class="wrapper">
        <ModalStream />
        <content class="content">
            <PageTitle :title="'Пушер потоков (Скоро)'" />
        </content>
        <Sidebar />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageTitle from '@/components/PageTitle.vue'


const namespace = "stream";

@Component({components: {PageTitle}})
export default class Streams extends Vue 
{
    
}

</script>

<style scoped lang="less">


</style>

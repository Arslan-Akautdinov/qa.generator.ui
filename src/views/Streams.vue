<template>
    <div class="wrapper">
        <ModalStreamCreate />
        <content class="content">
            <PageTitle :title="'Список потоков'" />
            <StreamList :streams="this.streamList" />
        </content>
        <Sidebar />
    </div>
</template>

<script lang="ts">
import ModalStreamCreate from '@/components/ModalStreamCreate.vue'
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from "vuex-class";
import PageTitle from '@/components/PageTitle.vue'
import StreamList from '@/components/StreamList.vue'
import Sidebar from '@/components/Sidebar.vue'
import { Stream } from '../store/stream/types';

const namespace = "stream";

@Component({components: {PageTitle, StreamList, Sidebar, ModalStreamCreate}})
export default class Streams extends Vue 
{
    @Action("streamSelect", { namespace })
    setStreams: any

    @Getter("getStreams", { namespace })
    streamList!: Array<Stream>;

    mounted() {
        this.setStreams();
    }
}

</script>

<style scoped lang="less">

    .wrapper
    {
        display: flex;
        justify-content: space-between;
    }

    .content
    {
        width: 790px;
    }

  

</style>

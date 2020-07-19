<template>
    <div class="wrapper">
        <content class="content">
            <PageTitle :title="'Поток ' + this.streamItem.file_name + '.' + this.streamItem.file_type" />
            <p>Качество видео: {{this.streamItem.quality}}</p>
            <p>Битрейт: {{this.streamItem.bit_rate}}</p>
            <p>Кадров в секудну: {{this.streamItem.fps}}</p>
            <p>Аудио кодек: {{this.streamItem.audio_codec}}</p>
            <p>Видеокодек: {{ this.streamItem.video_codec }}</p>
            <p>RTSP адрес {{ this.streamItem.rtsp_url }}</p>
            <p>Продолжительность {{ this.streamItem.play_time }}</p>
        </content>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from "vuex-class";
import PageTitle from '@/components/PageTitle.vue'
import {Route} from "vue-router"
import { Stream } from '../store/stream/types';

const namespace = "stream";

@Component({components: {PageTitle}})
export default class StreamItem extends Vue 
{
    @Prop()
    public streamItem!: Stream

    @Getter("getStreams", { namespace })
    streamList!: Array<Stream>;

    mounted()
    {
        this.streamList.forEach(stream => {
            if (stream.uuid == this.$route.params.stream_uuid)
            {
                this.streamItem = stream
            }
        });
    }
}

</script>

<style scoped lang="less">


</style>

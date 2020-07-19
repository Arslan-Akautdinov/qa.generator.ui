<template>
     <div class="modal__container">
        <PageTitle :title="'Поток ' + this.streamItem.file_name + '.' + this.streamItem.file_type" />
        <div><p>Качество видео:</p>  {{this.streamItem.quality}}</div>
        <div><p>Битрейт:</p> {{this.streamItem.bit_rate}}</div>
        <div><p>Кадров в секудну:</p> {{this.streamItem.fps}}</div>
        <div><p>Аудио кодек:</p> {{this.streamItem.audio_codec}}</div>
        <div><p>Видеокодек:</p> {{ this.streamItem.video_codec }}</div>
        <div><p>RTSP адрес: </p> {{ this.streamItem.rtsp_url }}</div>
        <div><p>Продолжительность: </p> {{ this.streamItem.play_time }}</div>
        <button @click="deleteStreamSubmit(streamItem.uuid)" class="delete_btn">Удалить поток</button>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { State, Action, Getter } from "vuex-class";
import {Route} from "vue-router"
import { Stream } from '../store/stream/types';

import PageTitle from '@/components/PageTitle.vue'

const namespace = "stream";

@Component({components: {PageTitle}})
export default class ModalStreamSelect extends Vue 
{
    @Prop()
    public streamItem!: Stream

    @Action("streamDelete", { namespace })
    streamDelete: any

    deleteStreamSubmit(uuid: string)
    {
        this.streamDelete(uuid)
        this.$modal.hideAll()
    }

}

</script>

<style scoped lang="less">

    .modal__container
    {
        padding: 40px;

        div
        {
            p
            {
                margin: 0;
            }
            display: flex;
            justify-content: space-between;
            border-bottom:1px solid #EFEFEF;
            margin: 0px;
            padding: 10px;
        }
    }

    .delete_btn
    {
        margin-top: 25px;
        background-color: #d63031;
        border: none;
        cursor: pointer;
        font-size: 16px;
        color:white;
        padding: 10px 30px;
        border-radius:5px;
    }

</style>

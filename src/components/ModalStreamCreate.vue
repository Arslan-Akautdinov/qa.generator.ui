<template>
    <modal  name="my-first-modal"
        :width="400"
        :height="850"
        :adaptive="true">
        <form @submit.prevent="getFormValues" class="modal-stream">

            <p>Наименование файла (без расширения)</p>
            <input required type="text" name="file_name">

            <p>Расширение файла</p>
            <select type="text" name="file_type">
                <option value="mp4">mp4</option>
                <option value="mkv">mkv</option>
            </select>
            
            <p>Аудио кодек</p>
            <select type="text" name="audio_codec">
                <option value="aac">aac</option>
            </select>

            <p>Видео кодек</p>
            <select type="text" name="video_codec">
                <option value="libx264">libx264</option>
            </select>

            <p>Битрейт</p>
            <select type="text" name="bit_rate">
                <option value="512K">512K</option>
                <option value="1M">1M</option>
                <option value="2M">2M</option>
                <option value="4M">4M</option>
            </select>

            <p>Качество</p>
            <select type="text" name="quality">
                <option value="640x480">640x480</option>
                <option value="1280x720">1280x720</option>
                <option value="1920x1080">1920x1080</option>
            </select>

            <p>FPS</p>
            <select type="text" name="fps">
                <option value="15">15</option>
                <option value="20">20</option>
                <option value="25">25</option>
                <option value="30">30</option>
                <option value="60">60</option>
            </select>

            <input type="hidden" name="play_time" value="10">            

            <button :class="{ active: activeBtn }" :disabled="this.activeBtn" >Создать</button>

        </form>
    </modal>
</template>

<script lang="ts">

import { Component,  Vue } from 'vue-property-decorator';
import { Action, Getter } from 'vuex-class';
import { Stream } from '@/store/stream/types';
import VueJSModal from 'vue-js-modal'


const namespace = "stream";

@Component
export default class ModalStreamCreate extends Vue  
{
    activeBtn = false

    @Action("streamCreate", { namespace })
    streamCreate: any

    @Getter("getStreams", { namespace })
    streamList!: Array<Stream>;

    public getFormValues(submitEvent: any): void
    {   
        this.activeBtn = true
        const streamsNames: Array<string> = [];
        const arr: Array<any> = submitEvent.target.elements
        const data: any = {}
        let error = false;
        this.streamList.forEach(element => { streamsNames.push(element.file_name) });

        arr.forEach(element => 
        {
            if (element.name == "file_name" && streamsNames.includes(element.value)){ error = true }
            if (element.name != ""){ data[element.name] = element.value }
        });

        if (error)
        {
            alert("Поток с таким именем уже сущевствует.")
        }
        else
        {
            this.streamCreate(data)
            .then(() => 
            {
                this.$modal.hide('my-first-modal');
                this.activeBtn = false
            })
        }
    }
}
</script>

<style lang="less">
    .modal-stream
    {
        padding: 40px;
        display: flex;
        flex-direction: column;
        input, select
        {
            margin-bottom: 10px;
            color:#424242;
            padding: 10px;
            font-size: 16px;
            border:1px solid #EFEFEF;
            outline: none;
        }

        button
        {
            background-color: #5352ed;
            color:white;
            width: 100%;
            padding: 10px;
            border:none;
            margin-top: 20px;
            cursor: pointer;
            font-size: 16px;
        }

        button:disabled,
        button[disabled]{
            background-color: #5352ed8a;
        }
    }
</style>
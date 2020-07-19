<template>
    <div class="stream">
        <div class="stream__container">
            <div class="stream__item" v-for="stream in this.streams" :key="stream.id">
                <p class="stream__name">{{ `${stream.file_name}.${stream.file_type}` }}</p>
                <div class="tools">
                    <button @click="$copyText(stream.rtsp_url)" class="tools__item">Копировать</button>
                    <button @click="openStream(stream.uuid)" class="tools__item">Перейти</button>
                </div>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Stream } from '../store/stream/types';
import { Getter } from 'vuex-class';

import ModalStreamSelect from './ModalStreamSelect.vue';
import VueJSModal from 'vue-js-modal'

const namespace = "stream";

@Component
export default class StreamList extends Vue 
{
    @Prop()
    public streams!: Array<Stream>

    @Getter("getStreams", { namespace })
    streamList!: Array<Stream>;

    public openStream(uuid: string): void
    {
        let str: any = null
        this.streamList.forEach(stream => {
            if (stream.uuid == uuid)
            {
                str = stream
            }
        })
        this.$modal.show(
            ModalStreamSelect,
            {streamItem: str},
            {maxHeight:660, maxWidth:760, minHeight:550, minWidth:760, adaptive: true}
        )
    }
}
</script>




<style lang="less" scoped>

    .stream
    {

        &__item
        {
            height: 50px;
            align-items: center;
            width: 100%;
            background-color: #fff;
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            border:1px solid #F3F3F3;
        }

        &__name
        {
            margin: 0px 0px 0px 20px;
            font-size: 16px;
            color: #424242;
        }
        
    }

    .tools
    {
        display: flex;

        &__item
        {
            margin-right: 15px;
            background-color: #fff;
            border: none;
            cursor: pointer;
            font-size: 16px;
            color:#5352ed;
        }
    }


</style>
<template>
    <div class="sidebar">
            <PageTitle :title="'Фильтр'" />
            <div class="sidebar__search">
                <input type="text" placeholder="найти поток">
                <select name="quality" id="quality">
                    <option>1920x1080</option>
                </select>
            </div>
            <button @click="met()" class="sidebar__add">Добавить поток</button>
    </div>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import PageTitle from '@/components/PageTitle.vue'
import VueJSModal from 'vue-js-modal'

@Component({components: {PageTitle}})
export default class Sidebar extends Vue 
{
    public met(): void
    {
        this.$modal.show('my-first-modal');
    }
}

</script>

<style lang="less" scoped>

      .sidebar
    {
        width: 280px;
        margin-left: 20px;

        &__search
        {
            width: 100%;
            display: flex;
            flex-direction: column;


            input, select
            {
                margin-bottom: 10px;
                color:#424242;
                padding: 10px;
                font-size: 16px;
                border:1px solid #F3F3F3;
                outline: none;
            }
        }

        &__add
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
    }

</style>
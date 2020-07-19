<template>
    <header class="header">
        <div class="wrapper">
            <nav class="navigation">
                <router-link class="navigation__item"
                            v-for="route in this.menu()"
                            :key="route.path"
                            :to="route.path">
                {{ route.name }}
                </router-link>
            </nav>
            <div class="header__logotype">
                GENERATOR
            </div>
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { menuRoutes } from '@/router/index'
import { RouteConfig } from 'vue-router';


@Component
export default class Headers extends Vue 
{
    menu: () => Array<RouteConfig> = menuRoutes
}
</script>

<style scoped lang="less">

.header
{
    width: 100%;
    height: 60px;
    background-color: #54A0FF;

    .wrapper
    {
        display: flex;
        justify-content: space-between;
    }

    &__logotype
    {
        padding: 0px 30px;
        background-color: #418FF1;
        display:flex;
        justify-content: center;
        align-items: center;
        color:white;
        font-weight: bolder;
    }
}

.navigation
{
    height: 100%;
    display: flex;
    &__item
    {
        color:#CAE6FF;
        font-size: 18px;
        font-weight: bold;
        margin-right: 50px;
        display: block;
        height: 100%;
        line-height: 60px;
        transition: color 0.3s;

        &:hover
        {
            color:white;
        }
    } 

    .router-link-active
    {
        color:white !important;
    }
}



</style>

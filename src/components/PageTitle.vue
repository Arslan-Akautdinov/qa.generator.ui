<template>
    <h1 class="page-title">{{ this.title }}</h1>
</template>


<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PageTitle extends Vue 
{
    @Prop()
    public title!: string
}
</script>


<style lang="less" scoped>

.page-title
{
    margin:40px 0px;
    color:#525252;
    font-weight: lighter;
}

</style>
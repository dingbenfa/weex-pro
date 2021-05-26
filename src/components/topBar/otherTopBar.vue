<template>
    <!--其他的顶部返回-->
    <div class="top-tab">
        <image class="top-tab-img" src="./imgs/easyRent/order/topLeftIcon.png"
               @click="goUrl"></image>
        <div>
            <slot name="right">

            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "otherTopBar",
        methods:{
            goUrl() {
                this.goBack();
            },
        }
    }
</script>

<style scoped>
    .top-tab {
        width: 750px;
        height: 48px;
        position: absolute;
        top: 108px;
        padding: 0 32px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .top-tab-img {
        height: 48px;
        width: 48px;
    }

</style>
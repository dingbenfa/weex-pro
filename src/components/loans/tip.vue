<template>
    <div class="container">
        <div class="wrap">
            <div class="dian"></div>
            <text v-if="tip" class="text color">{{tip}}</text>
            <text v-if="num" class="text">{{numberTip}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tip",
        props: ['tip', 'numberTip', 'num']
    }
</script>

<style scoped>
    .container {
        align-items: center; /* 垂直居中 */
    }

    .wrap {
        width: 700px;
        flex-direction: row;
        border-radius: 5px;
        padding: 25px;
        background-color: rgb(248, 243, 236);
    }

    .dian {
        margin-top: 10px;
        height: 12px;
        width: 12px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        border-radius: 6px;
        margin-right: 26px;
        background-color: #FC8922;
    }

    .text {
        width: 600px;
        font-size: 22px;
        color: #777;
    }

    .color {
        color: #FC8922;
    }
</style>
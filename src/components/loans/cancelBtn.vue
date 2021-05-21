<template>
    <div class="btn">
        <!--<image class="btn_bg" src="./imgs/bigBtnBg.png"></image>-->
        <div class="btn_bg">
            <text class="btn_text">{{cancelBtnText}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bigBtn",
        props: ['cancelBtnText'],
        components: {},
        data() {
            return {}
        },
        methods: {
            mpBarLeftBtnClick() {
                this.goBack();
            },
        }
    }
</script>

<style scoped>
    .btn {
        width: 750px;
        height: 100px;
        justify-content: center;
        align-items: center;
    }

    .btn_bg {
        height: 90px;
        width: 640px;
        position: absolute;
        left: 58px;
        top: 10px;
        border: 1px solid #ECA156;
        background-color: white;
    }

    .btn_text {
        height: 90px;
        line-height: 90px;
        text-align: center;
        font-size: 34px;
        color: #ECA156;
    }
</style>


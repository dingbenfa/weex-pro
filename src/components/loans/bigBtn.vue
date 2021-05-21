<template>
    <div class="btn">
        <image class="btn_bg" src="./imgs/bigBtnBg.png"></image>
        <text class="btn_text">{{btnText}}</text>
    </div>
</template>

<script>
    export default {
        name: "bigBtn",
        props: ['btnText'],
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
        height: 142px;
        justify-content: center;
        align-items: center;
    }

    .btn_bg {
        height: 142px;
        width: 690px;
        position: absolute;
        left: 30px;
        top: 10px;
    }

    .btn_text {
        font-size: 34px;
        color: #FFFFFF;
    }
</style>

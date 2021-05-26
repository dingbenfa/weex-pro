<template>
    <!--单个btn（安心租）-->
    <div>
        <div class="btn" @click="sureClick()">
            <text class="btnFont">{{title}}</text>
        </div>
    <!--    <div class="btn" @click="sureClick()">
            <image class="loginBgimg" src="./imgs/securityCenter/loginBg.png"></image>
            <text class="btnFont">{{title}}</text>
        </div>-->
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            title: {
                type: String,
                default: ""
            },
        },
        methods: {
            sureClick() {
                this.$emit('sureClick')
            },
        }

    }
</script>

<style scoped>
    .btn {
        width: 686px;
        height: 80px;
        background-image: linear-gradient(to right, #F9C300, #F89531);
        border-radius: 2px;
        justify-content: center;
        align-items: center;
        margin-top: 16px;
        margin-bottom: 16px;
    }

    .loginBgimg {
        height: 112px;
        width: 690px;
        position: absolute;
        left: 30px;
        top: 0;
    }

    .btnFont {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
    }

</style>
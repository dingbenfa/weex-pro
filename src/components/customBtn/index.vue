<template>
    <!--btn-->
    <div>
        <div class="btn" @click="sureClick()">
            <image class="loginBgimg" src="./imgs/securityCenter/loginBg.png"></image>
            <text class="btnFont">{{title}}</text>
        </div>
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
        width: 750px;
        height: 142px;
        justify-content: center;
        align-items: center;
    }

    .loginBgimg {
        height: 142px;
        width: 690px;
        position: absolute;
        left: 30px;
        top: 0;
    }

    .btnFont {
        font-size: 32px;
        color: #FFFFFF;
        font-weight: 700;
        margin-top: -30px;
    }

</style>
<template>
    <div class="wrap">
        <div class="leftBtn">
            <text class="font color">{{leftText}}</text>
        </div>
        <div class="rightBtn">
            <image class="btnBgimg" src="./imgs/smallBtnBg.png"></image>
            <text class="font">{{rightText}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bigBtn",
        props: ['btnText', 'rightText', 'leftText'],
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
    .wrap {
        margin-top: 30px;
        width: 750px;
        padding: 0 30px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .leftBtn {
        width: 314px;
        height: 95px;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border-width: 1px;
        border-color: #F8993A;
    }

    .rightBtn {
        width: 314px;
        height: 95px;
        align-items: center;
        justify-content: center;
    }

    .btnBgimg {
        position: absolute;
        top: 0;
        left: 0;
        width: 314px;
        height: 95px;
    }

    .font {
        font-size: 36px;
        color: white;
    }

    .color {
        color: #F8993A;
    }
</style>
<template>
    <div class="wrap">
        <div class="left_btn" @click="clickLeftBtn">
            <image class="btnBgimg" src="./imgs/smallBtnBg.png"></image>
            <text class="font">{{leftText}}</text>
        </div>
        <div class="right_btn" @click="clickRightBtn">
            <text class="font color">{{rightText}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "reverseSmallBtn",
        props: ['btnText', 'rightText', 'leftText'],
        components: {},
        data() {
            return {}
        },
        methods: {
            mpBarLeftBtnClick() {
                this.goBack();
            },
            clickLeftBtn(path) {
                this.jump(path)
            },
            clickRightBtn() {
                this.alertMsg('暂无常见问题界面')
            }
        }
    }
</script>

<style scoped>
    .wrap {
        margin-top: 30px;
        width: 750px;
        padding: 0 30px;
        flex-direction: row;
        justify-content: center;
    }

    .left_btn {
        margin-right: 50px;
        width: 240px;
        height: 80px;
        align-items: center;
        justify-content: center;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .right_btn {
        width: 240px;
        height: 80px;
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border-color: #F8993A;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .btnBgimg {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 80px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
    }

    .font {
        font-size: 32px;
        color: white;
    }

    .color {
        color: #F8993A;
    }
</style>
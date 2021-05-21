<template>
    <!--双按钮-->
    <div class="center-rent-btn">
        <div class="normal-btn" @click="leftBtnClick()">
            <text class="normal-btn-font">{{leftTitle}}</text>
        </div>
        <div class="normal-btn-bc" @click="rightBtnClick()">
            <text class="normal-btn-bc-font">{{rightTitle}}</text>
        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        props: {
            leftTitle: {
                type: String,
                default: ''
            },
            rightTitle: {
                type: String,
                default: ''
            },
        },
        data() {
            return {
                leftBtnClick() {
                    this.$emit("leftBtnClick");
                },
                rightBtnClick() {
                    this.$emit("rightBtnClick");
                }
            }
        }
    }
</script>

<style scoped>
    .center-rent-btn {
        width: 750px;
        padding: 16px 32px;
        background-color: #fff;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        bottom: 0;
    }

    .normal-btn {
        width: 336px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #F89531;
        border-radius: 4px;
    }

    .normal-btn-font {
        color: #F89531;
        font-size: 32px;
        font-weight: 700;
    }

    .normal-btn-bc {
        width: 336px;
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-width: 1px;
        border-color: #F89531;
        background-color: #F89531;
        border-radius: 4px;
    }

    .normal-btn-bc-font {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFF;
    }
</style>
<template>
    <!-- 顶部返回加title-->
    <div>
        <mp-bar
                :title="title"
                :titleStyle="titleStyle"
                :barStyle="barStyle"
                :leftBtn="leftBtn"
                :leftBtnStyle="leftBtnStyle"
                @mpBarLeftBtnClick="mpBarLeftBtnClick"
                :rightTxt="rightTxt"
                @mpBarRightBtnClick="mpBarRightBtnClick"
                :rightTxtStyle="rightTxtStyle"></mp-bar>
    </div>
</template>

<script>
    import {MpBar} from "madp-ui";

    export default {
        name: "index",
        components: {
            MpBar
        },
        props: {
            title: {
                type: String,
                default: ""
            },
            barStyle: {
                type: Object,
                default: function () {
                    return {
                        'height': '150px',
                        'padding-top': '60px'
                    }
                },
                required: false
            },
            leftBtn: {
                type: String,
                default: "./imgs/back.png",
                required: false
            },
            leftBtnStyle: {
                type: Object,
                default: function () {
                    return {
                        width: "40px",
                        height: "40px"
                    }
                },
                required: false
            },
            titleStyle: {
                type: Object,
                default: function () {
                    return {
                        "font-family": "PingFangSC-Semibold",
                        "font-size": "36px",
                        "color": "rgb(51,51,51)",
                        "letter-spacing": "-0.64px"
                    }
                },
                required: false
            },
            rightTxtStyle: {
                type: Object,
                default: function () {
                    return {
                        "font-size": "26px",
                        "font-family": "PingFangSc-Regular",
                        "color": "rgb(116, 116, 116)"
                    }
                },
            },
            rightTxt: {
                type: String,
                default: ""
            }
        },
        methods: {
            mpBarLeftBtnClick() {
                this.goBack();
            },
            /**
             * @event mpBarRightBtnClick
             * @description 点击右部区域触发事件
             * @param {Object} event  event
             */
            mpBarRightBtnClick(event) {
                this.$emit("mpBarRightBtnClick", event);
            },
        }
    }
</script>

<style scoped>

</style>
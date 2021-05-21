<template>
   <!-- 顶部返回加title-->
    <div>
        <mp-bar :title="title"
                :barStyle="barStyle"
                :titleStyle="titleStyle"
                :leftBtn="leftBtn"
                :leftBtnStyle="leftBtnStyle"
                @mpBarLeftBtnClick="mpBarLeftBtnClick"></mp-bar>
    </div>
</template>

<script>
    import { MpBar } from "madp-ui";
    export default {
        name: "index",
        components:{
            MpBar
        },
        props: {
            title: {
                type: String,
                default: ""
            },
            barStyle:{
                type: Object,
                default: function () {
                    return {
                        'height': '150px',
                        'padding-top': '60px'
                    }
                },
                required: false
            },
            leftBtn:{
                type: String,
                default: "./imgs/back.png",
                required: false
            },
            leftBtnStyle:{
                type: Object,
                default: function () {
                    return {
                        width: "40px",
                        height: "40px"
                    }
                },
                required: false
            },
            titleStyle:{
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
        },
        methods:{
            mpBarLeftBtnClick(){
                this.goBack();
            },
        }
    }
</script>

<style scoped>

</style>
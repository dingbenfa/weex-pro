<template>
    <div class="wrapper">
        <wxc-overlay v-if="show" v-show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="bg">
            <div class="container">
                <web-view class="web" ref="webView" style="flex:1;" @sendMessage='sendMessage' :src="url"></web-view>
                <div class="b-box" @click="tyClick">
                    <text v-if="!isTimeStop" class="time">我已阅读并同意({{time}})</text>
                    <text v-else class="time-sel">我已完成阅读</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { WxcOverlay} from "weex-ui";

export default {
    props:{
        show: {
            type: Boolean,
            default: false
        },
        url:{
            type:String,
            default: ''
        },
        dataDic:{
            type:Object,
            default:{}
        }
    },
    components : {
        WxcOverlay
    },
    data(){
        return {
            time:0,
            isTimeStop:false
        }
    },
    methods:{
        tyClick(){
            if(this.isTimeStop) {
                this.$emit("confirm");
            }
        },
        postMessage() {
            var webElement = this.$refs.webView;
            webElement.postMessage(this.dataDic);
        },
        sendMessage(data){
            if(data.type == 'xy') {
                this.postMessage();
            }
        },
        //验证码倒计时
        timeBuide() {
            var timer = setInterval(() => {
                if(this.time == 0) {
                    this.time = 10;
                    this.isTimeStop = true;
                    clearInterval(timer);
                } else {
                    this.isTimeStop = false;
                    this.time --;
                }
            }, 1000);
        },
    },
    watch:{
        show(val){
            if(val == true){
                this.time = 10;
                this.timeBuide();
            }
        }
    }
}
</script>

<style>
    .wrapper {
        position: fixed;
        width: 750px;
        /*兼容H5异常*/
        z-index: 9999999;
    }
    .bg {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .container {
        width: 650px;
        height: 950px;
        background-color:#ffffff;
        border-radius: 24px;
        align-items: center;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
        padding-top: 20px;
    }
    .b-box {
        height: 60px;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 650px;
    }
    .time {
        font-size: 26px;
        color:#666666;
    }
    .time-sel{
        font-size: 26px;
        color: #FC8109;
    }
    .web {
        width: 610px;
    }
</style>
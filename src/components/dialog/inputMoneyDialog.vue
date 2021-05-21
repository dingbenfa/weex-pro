<template>
    <div class="wrapper">
        <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="bg">
            <div class="container">
                <div class="content">
                    <text class="title">{{title}}</text>
                    <div class="inputBox">
                        <weex-money ref="weexMoney" type="number" :placeholder="placeholder" class="input" @change="getMoeny"></weex-money>
                    </div>
                </div>
                <div class="bottom">
                    <div class="bottom-left" @click="cancel">
                        <text class="bottom-left-text">{{left}}</text>
                    </div>
                    <div class="bottom-right" @click="confirm">
                        <text class="bottom-right-text">{{right}}</text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { WxcOverlay } from "weex-ui";

export default {
    components : {
        WxcOverlay
    },
    props:{
        show: {
            type: Boolean,
            default: false
        },
        title:{
            type:String,
            default:""
        },
        left:{
            type:String,
            default:"取消"
        },
        right:{
            type:String,
            default:"确认"
        },
        placeholder:{
            type:String,
            default:'请输入金额'
        },
    },
    mounted() {
        this.getHeight();
    },
    data() {
        return {
            money:'',
        }
    },
    methods:{
        confirm() {
            this.$refs.weexMoney.getMoney(data=>{
                this.$emit("confirm",data);
            });
        },
        cancel() {
            this.$emit("cancel");
        },
        getMoeny(event){
            this.money = event.value;
        },
    }
}
</script>

<style scoped>
    .wrapper {
        position: fixed;
        width: 750px;
        /*兼容H5异常*/
        z-index: 99999;
    }
    .container {
        width: 568px;
        height: 360px;
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
    }
    .content {
        height: 260px;
        width: 568px;
        align-items: center;
    }
    .title{
        color: #222;
        font-weight: 700;
        font-size: 36px;
        margin-top: 43px;
        margin-bottom: 50px;
    }
    .bottom {
        width: 568px;
        height: 99px;
        border-top-width: 1px;
        border-top-color: #ddd;
        border-top-style: solid;
        justify-content: center;
        flex-direction: row;
    }
    .bottom-left {
        width: 283px;
        height: 99px;
        margin-right: 10px;
        border-right-color: #ddd;
        border-right-style: solid;
        border-right-width: 1px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
    }
    .bottom-right {
        width: 284px;
        height: 99px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
    }
    .bottom-left-text {
        font-size: 32px;
        color: #999;
    }
    .bottom-right-text {
        font-size: 32px;
        color: #3277fa;
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
    .inputBox {
        width: 450px;
        height: 89px;
        border-width: 1px;
        border-color: #9D9D9D;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .input {
        margin-left: 15px;
        font-size: 28px;
        flex: 1;
        height: 80px;
        width: 420px;
    }
    
</style>
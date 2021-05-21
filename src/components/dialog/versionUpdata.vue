<template>
  <div class="wrapper">
      <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
      <div v-if="show" class="bg">
            <div class="container">
                <div class="content">
                    <div class="listbox" >
                        <text class="c-t">{{content}}</text>
                    </div>
                </div>
                <div @click='confirm' class="bottom">
                    <text class="bottom-right-text">{{rightText}}</text>
                </div>
          </div>
      </div>
  </div>
</template>

<script>

import { WxcOverlay ,WxcSpecialRichText} from "weex-ui";

const context = weex.requireModule("context");

export default {
    components:{
        WxcOverlay,
        WxcSpecialRichText
    },
    props:{
        show: {
            type: Boolean,
            default: false
        },
        content:{
            type: String,
            default: '强制更新'
        }
    },
    data(){
        return {
            rightText:'立即更新',
        }
    },
    methods:{
        confirm(){
            this.$emit("confirm");
        }
    }
}
</script>

<style>
    .wrapper {
        position: fixed;
        width: 750px;
        /*兼容H5异常*/
        z-index: 999999999;
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
        width: 600px;
        /* height: 700px; */
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
    }
    .content {
        align-items: center;
        justify-content: center;
        flex: 1;
    }
    .title{
        color: #222;
        font-weight: 500;
        font-size: 30px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .bottom {
        height: 99px;
        width: 600px;
        border-top-width: 1px;
        border-top-color: #ddd;
        border-top-style: solid;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin-top: 50px;
    }
    .bottom-left {
        width: 325px;
        height: 90px;
        border-right-color: #ddd;
        border-right-style: solid;
        border-right-width: 1px;
        justify-content: center;
        align-items: center;
    }
    .bottom-right {
        flex: 1;
        height: 90px;
        justify-content: center;
        align-items: center;
    }
    .bottom-left-text {
        font-size: 32px;
        color: #999;
        text-align: center;
    }
    .bottom-right-text {
        font-size: 32px;
        color: #3277fa;
        text-align: center;
    }
    .listbox {
        width: 500px;
        flex: 1;
        justify-content: center;
        padding-bottom: 20px;
        margin-top: 60px;
    }
    .text-box {
        justify-content: flex-start;
        align-items:flex-start;
        margin-left: 10px;
    }
    .c-t {
        font-size: 28px;
        color: #373737;
        font-family: PingFangSC-Regular;
        text-align: center;

    }
    .xy-c {
        font-size: 28px;
        color:#3277fa;
        font-family: PingFangSC-Regular;
    }

</style>
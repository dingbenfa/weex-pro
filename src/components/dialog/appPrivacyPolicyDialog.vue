<template>
  <div class="wrapper">
      <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
      <div v-if="show" class="bg">
            <div class="container">
                <div class="content">
                    <text class="title">{{title}}</text>
                    <div class="listbox" >
                        <div class="text-box">
                            <text class="c-t">      感谢您使用贵阳农商银行手机银行，为了</text>
                            <text class="c-t">更好的服务，我们可能会对您的个人信息进行</text>
                            <text class="c-t">收集、使用、共享和保护。我们深知个人隐私</text>
                            <text class="c-t">的重要性，不会向任何第三方提供您的信息，</text>
                            <text class="c-t">除非得到您的授权。若我们将信息用于您未授</text>
                            <text class="c-t">权用途或目的，我们会事先再次征求您的同意。</text>
                            <text class="c-t">      为了您更好的了解并使用相关服务，请在</text>
                            <text class="c-t">使用前认真阅读</text>
                            <text @click="ysClick" class="xy-c">《贵阳农商银行手机银行用户</text>
                            <text @click="ysClick" class="xy-c">隐私政策》</text>
                            <text class="c-t">。您点击“同意”后即视为您接受本</text>
                            <text class="c-t">隐私政策，我行将按照相关法律法规及本政策</text>
                            <text class="c-t">来合法使用和保护您的个人信息。</text>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="bottom-left" @click="cancel">
                        <text class="bottom-left-text">{{leftText}}</text>
                    </div>
                    <div class="bottom-right" @click="confirm">
                        <text class="bottom-right-text">{{rightText}}</text>
                    </div>
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
    },
    data(){
        return {
            title:'温馨提示',
            leftText:'不同意',
            rightText:'同意',
            name_2:'手机银行用户隐私政策',
            url_2:this.$store.state.serveApi + 'static/htmls/Protocol/AppPrivacyPolicy.html',
        }
    },
    methods:{
        ysClick(){
            const param = {
                "name":this.name_2,
                "url": this.url_2,
                'dataDic':{
                    'type':'xy',
                    'isShowBtn':false,
                    'data':{
                        'UserName':context.sessionGetString("cifName"),
                        'SysTime':context.sessionGetString("SysTime")
                    }
                }
            };
            context.sessionSetString("ProtocolInfo",JSON.stringify(param));
            context.launchStage("main.utilProtocol1");
        },
        listener(foo){
            this.alertMsg('My pseudoRef is '+foo.pseudoRef);
        },
        confirm(){
            this.$emit("confirm");
        },
        cancel(){
            this.$emit("cancel");
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
        width: 650px;
        /* height: 700px; */
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
    }
    .content {
        align-items: center;
        flex: 1;
    }
    .title{
        color: #222;
        font-weight: 500;
        font-size: 34px;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .bottom {
        height: 99px;
        border-top-width: 1px;
        border-top-color: #ddd;
        border-top-style: solid;
        justify-content: center;
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
        width: 325px;
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
        width: 580px;
        flex: 1;
        padding-bottom: 20px;
    }
    .text-box {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items:flex-start;
        margin-left: 10px;
    }
    .c-t {
        font-size: 28px;
        color: #373737;
        font-family: PingFangSC-Regular;
    }
    .xy-c {
        font-size: 28px;
        color:#3277fa;
        font-family: PingFangSC-Regular;
    }

</style>
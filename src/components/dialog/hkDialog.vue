<template>
    <div class="wrapper">
        <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="container" :style="{top:top}">
            <div class="content">
                <text class="title">温馨提示</text>
                <text class="content-text">
            抱歉您有逾期未归还的贷款，请选择返回进行逾期还款或继续还款当前贷款。
                </text>
                <!--<text class="content-text">-->
                <!--为了您更好地了解并使用相关服务，请在使用前认真阅读 <span class="font2" @click="gotoProtocol1('1')">《手机银行服务协议》</span>和<span-->
                <!--class="font2" @click="gotoProtocol1('2')">《贵阳农商银行手机银行用户隐私政策》</span>-->
                <!--。您点击"同意"后即视为您接受本隐私协议政策，我行将按照相关法律法规及本政策来合法使用和保护您的个人信息。-->
                <!--</text>-->
            </div>
            <div class="bottom">
                <div class="bottom-left" @click="cancel">
                    <text class="bottom-left-text">返回</text>
                </div>
                <div class="bottom-right" @click="confirm">
                    <text class="bottom-right-text">继续还款</text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {WxcOverlay} from "weex-ui";

    export default {
        components: {WxcOverlay},
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            },
            left: {
                type: String,
                default: "确认"
            },
            right: {
                type: String,
                default: "取消"
            },
        },
        data() {
            return {
                top: "0px"
            };
        },
        mounted() {
            this.getHeight();
        },
        methods: {
            //继续还款
            confirm() {
                this.jump("/successRepayment");
            },
            //返回去逾期还款
            cancel() {
                // this.$emit("cancel");
               this.jump("/overdue")
            },
            
        }
    };
</script>

<style scoped>
    .wrapper {
        position: fixed;
        width: 750px;
        /*兼容H5异常*/
        z-index: 99999;
    }

    .container {
        position: fixed;
        left: 91px;
        width: 568px;
        height: 950px;
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
        margin-top:200px;
    }

    .content {
        height: 850px;
        width: 568px;
        align-items: center;
    }

    .title {
        color: #222;
        font-weight: 700;
        font-size: 36px;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #eaeaea;
        width: 568px;
        text-align: center;
    }

    .content-text {
        width: 460px;
        /*text-align: center;*/
        font-size: 30px;
        color: #666;
    }

    .bottom {
        width: 568px;
        height: 99px;
        border-top-width: 1px;
        border-top-color: #eaeaea;
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
        color: orange;
    }

    .font2 {
        /*font-family: PingFangSC-Regular;*/
        display: inline;
        font-size: 22px;
        letter-spacing: 1px;
        line-height: 40px;
        color: rgb(51, 142, 218);
    }
</style>

<template>
    <div class="wrapper">
        <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="container" :style="{top:top}">
            <div class="content">
                <text class="title">{{title}}</text>
                <text class="content-text">{{content}}</text>
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
</template>

<script>
    import { WxcOverlay } from "weex-ui";
    export default {
        components: { WxcOverlay },
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title:{
                type:String,
                default:""
            },
            content:{
                type:String,
                default:""
            },
            left:{
                type:String,
                default:"确认"
            },
            right:{
                type:String,
                default:"取消"
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
            confirm() {
                this.$emit("confirm");
            },
            cancel() {
                this.$emit("cancel");
            },
            getHeight() {
                var pageHeight = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight-360;
                this.top = pageHeight / 2 + "px";
            }
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
    .content-text {
        width: 360px;
        text-align: center;
        font-size: 30px;
        color: #666;
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
</style>

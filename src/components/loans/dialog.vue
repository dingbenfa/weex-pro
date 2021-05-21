<template> 
    <div class="wrapper">
        <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="container" :style="{top:top}">
            <div class="content">
                <text class="title">{{dialogTitle}}</text>
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
    import {WxcOverlay} from "weex-ui";

    export default {
        components: {WxcOverlay},
        props: {
            show: {
                type: Boolean,
                default: false
            },
            dialogTitle: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            },
            left: {
                type: String,
                default: "返回"
            },
            right: {
                type: String,
                default: "确定"
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
                var pageHeight = 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 360;
                this.top = pageHeight / 3 + "px";
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
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
    }

    .title {
        color: #666;
        font-size: 32px;
        margin: 30px 0;
    }

    .content {
        width: 670px;
        align-items: center;
    }

    .content-text {
        width: 460px;
        text-align: center;
        font-size: 30px;
        color: #666;
    }

    .bottom {
        width: 568px;
        height: 86px;
        border-top-width: 1px;
        border-top-color: #ddd;
        border-top-style: solid;
        justify-content: center;
        flex-direction: row;
        margin-top: 30px;
    }

    .bottom-left {
        width: 283px;
        height: 86px;
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
        height: 86px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
    }

    .bottom-left-text {
        font-size: 30px;
        color: #999;
    }

    .bottom-right-text {
        font-size: 30px;
        color: #f8972f;
    }
</style>

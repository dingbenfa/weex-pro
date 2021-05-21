<template>
    <div class="wrapper">
        <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="container" :style="{top:top}">
            <text class="title">账户别名设置</text>
            <div class="fontBox">
                <text class="font">别名</text>
                <input type="text" class="input" maxLength="10" v-model="acAlias" placeholder="请输入您的账户别名" @input="getAcAlias"/>
            </div>

            <div class="bottom">
                <div class="bottom-left" @click="cancel">
                    <text class="bottom-left-text">取消</text>
                </div>
                <div class="bottom-right" @click="confirm">
                    <text class="bottom-right-text">确认</text>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {WxcOverlay} from "weex-ui";

    const modal = weex.requireModule('modal')
    const stream = weex.requireModule('stream')
    const context = weex.requireModule('context')
    const picker = weex.requireModule("picker");
    export default {
        props: {
            show: {
                type: Boolean,
                default: true
            },
            showPeidduiDialog: {
                type: Boolean,
                default: true
            },
            acAlias:{
                type:String,
                default:''
            }
        },
        components: {
            WxcOverlay
        },
        data() {
            return {
                top: "0px",
            };
        },
        mounted() {
            this.getHeight();
        },
        created() {
        },
        methods: {
            getAcAlias(event) {
                this.acAlias = event.value;
            },
            cancel() {
                this.$emit("cancel");
            },
            confirm() {
                if (this.acAlias === "") {
                    this.alertMsg("账户别名不能为空");
                    return;
                }
                this.$emit("confirm", this.acAlias);
            },
            getHeight() {
                var pageHeight = 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 360;
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
        height: 345px;
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
        /*justify-content: center;*/
    }

    .title {
        font-size: 30px;
        color: rgb(51, 51, 51);
        margin-top: 40px;
    }

    .font {
        font-size: 28px;
        color: rgb(51, 51, 51);
        width: 100px;
        text-align: center;
        margin-left: 10px;
    }

    .fontBox {
        width: 500px;
        height: 70px;
        margin-top: 50px;
        border-radius: 5px;
        background-color: rgb(240, 240, 240);
        flex-direction: row;
        align-items: center;
    }

    .input {
        height: 60px;
        width: 300px;
        margin-left: 20px;
        font-size: 28px;
        color: rgb(51, 51, 51);
        placeholder-color: rgb(163, 163, 163);
        background-color: rgb(240, 240, 240);

    }

    .bottom {
        width: 568px;
        height: 89px;
        border-top-width: 1px;
        border-top-color: #ddd;
        border-top-style: solid;
        justify-content: center;
        flex-direction: row;
        margin-top: 50px;
    }

    .bottom-left {
        width: 283px;
        height: 89px;
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
        height: 89px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
    }

    .bottom-right-text {
        font-size: 28px;
        color: #ECA156;
    }

    .bottom-left-text {
        font-size: 28px;
        color: #999;
    }
</style>

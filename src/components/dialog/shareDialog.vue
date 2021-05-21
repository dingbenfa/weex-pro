<template>
    <div class="wrapper">
<!--        <div class="wxc-overlay" v-if = "show" @click="wxcPopupOverlayClicked"></div>-->
        <wxc-overlay v-if="show" show="true" duration="400" hasAnimation="true" opacity="0.5" @wxcOverlayBodyClicking="wxcPopupOverlayClicked"></wxc-overlay>
        <div :hack="isNeedShow" v-if = "show" ref="popup" class="popup">
            <div class="top">
                <image class="bgImg" src="./imgs/share/bgImg.png"></image>
                <text class="font">分享到</text>

            </div>
            <div class="bottom">
                <div class="btnBox" @click="share('0')">
                    <image class="btnImg" src="./imgs/share/wx.png"></image>
                    <text class="BtnFont">微信好友</text>
                </div>
                <div class="btnBox" @click="share('1')">
                    <image class="btnImg" src="./imgs/share/pyq.png"></image>
                    <text class="BtnFont">朋友圈</text>
                </div>
            </div>
            <div class="bottom1" @click="shareBack">
                <text class="backFont">取消</text>
            </div>

        </div>
    </div>
</template>

<script>
    const animation = weex.requireModule('animation');
    import { WxcOverlay } from "weex-ui";
    export default {
        props:{
            show: {
                type: Boolean,
                default: false
            },
        },
        components:{
            WxcOverlay
        },
        data() {
            return {

            }
        },
        created(){

        },
        computed: {
            isNeedShow() {
                setTimeout(() => {
                    this.appearPopup(this.show);
                }, 50);
                return this.show;
            }
        },
        methods: {
            share(type){
                this.$emit("shareProduct",type);
            },
            wxcPopupOverlayClicked(){
                const popupEl = this.$refs['popup'];
                animation.transition(popupEl, {
                    styles: {
//						transform: 'translateY(' + data + ')',
                        transform:'translateY(380px)'
                    },
                    duration:300,
                    delay: 0,
                    timingFunction:"ease-in"
                });
                setTimeout(()=>{
                    this.$emit("wxcPopupOverlayClicked");
                },300)
            },

            appearPopup(bool, duration = 300) {
                this.isShow = bool;
                const popupEl = this.$refs['popup'];
                if(!popupEl) {
                    return;
                }
                animation.transition(popupEl, {
                    styles: {
//						transform: 'translateY(' + data + ')',
                        transform:'translateY(-430px)'
                    },
                    duration,
                    delay: 0,
                    timingFunction:"ease-in"
                }, () => {
                    if(!bool) {
                        this.$emit('mpBarRightBtnClick');
                    }
                });
            },
        }
    }
</script>

<style scoped>

    .wxc-overlay {
        width: 750px;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        opacity: 0.9;
        background-color: rgba(0, 0, 0, 0.6);
    }

    .popup {
        position: fixed;
        bottom: -370px;
        left: 30px;
        width: 690px;
        height: 420px;
       align-items: center;
        background-color: rgb(255, 255, 255);
        border-radius: 15px;
    }
    .bottom{
        width: 690px;
        height: 250px;

        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 20px 30px;
    }

    .bottom1{
        width: 690px;
        height: 50px;
        margin-bottom: 20px;
        align-items: center;
        flex-direction: row;
        justify-content: center;
    }

    .wrapper {
        position: fixed;
        width: 750px;
        /*兼容H5异常*/
        z-index: 99999;
    }
    .btnBox{
       width: 300px;
        align-items: center;

    }
    .btnImg{
        width: 90px;
        height:90px;
        /*background-color:red;*/
    }
    .BtnFont{
        font-size: 28px;
        /* margin-top:30px; */
        color: rgb(51,51,51);
    }
    .backFont{
        /* margin-bottom: 30px; */
        font-size: 32px;
        /* margin-top:20px; */
        color: rgb(51,51,51);
    }
    .font{
        font-size: 28px;
        color: rgb(51,51,51);
    }
    .top{
        height: 50px;
        width: 690px;
        margin-top: 50px;
        align-items: center;
        justify-content: center;
    }
    .bgImg{
        position:absolute;
        height: 24px;
        width:598px;
        top: 13px;
        left: 46px;
    }
</style>
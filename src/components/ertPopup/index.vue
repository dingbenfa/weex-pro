// created by dingbenfa
// **** 弹层组件，支持上下左右四个方向面板弹出
// **** title   弹层标题
// **** height  弹层高度
// **** pupopShow  开启打开popup
// **** popupOverlayClicked  事件回调
// **** handlePupopClose  调用关闭
// **** // 

<template>
    <div>
        <wxc-popup ref="wxcPopup" popup-color="rgba(0, 0, 0, 0.01)"
        :show="pupopShow"
        :height="height"
        @wxcPopupOverlayClicked="wxcPopupOverlayClicked"
        pos="bottom">
            <div class="bf-popup-container">
                <div class="bf-popup-header">
                    <div class="popup-header-title">
                        <text class="popup-header-text">{{title}}</text>
                    </div>
                    <div class="popup-header-close" @click="handlePupopClose">
                        <image src="/src/imgs/easyRent/close-icon.png" style="width:48px;height:48px"></image>
                    </div>
                </div>
                <list>
                   <cell><slot></slot></cell>
                </list>
            </div>
        </wxc-popup>
    </div>
</template>

<script>
import { WxcPopup } from 'weex-ui'

export default {
    name: 'Popup',
    props: {
        title: {
            type: String,
            default: ""
        },
        pupopShow: {
            type: Boolean,
            default: false
        },
        height: {
            type: Number,
            default: 840
        }
    },
    components: {
        WxcPopup,
    },
    methods: {
        wxcPopupOverlayClicked() {
            this.$emit("popupOverlayClicked");

            this.$emit("handlePupopClose");
            this.$refs.wxcPopup.hide();
        },
        handlePupopClose() {
            this.$emit("handlePupopClose");
            this.$refs.wxcPopup.hide();
        },
    }
}
</script>

<style scoped>
.bf-popup-container{
    background-color: #ffffff;
    border-top-left-radius: 32px;
    border-top-right-radius: 32px;
    flex: 1;
}

.bf-popup-header{
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    padding-left: 30px;
    padding-right: 30px;
    border-style: solid;
    border-bottom-width: 1px;
    border-bottom-color: #F2F2F2;
    position: relative;
}

.popup-header-title{
    height: 120px;
    width: 690px;
    justify-content: center;
    align-items: center;
}

.popup-header-text{
    font-size: 32px;
    font-weight: bold;
    color: #333333;
}

.popup-header-close{
    height: 120px;
    width: 120px;
    justify-content: center;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    padding-right: 30px;
}

</style>

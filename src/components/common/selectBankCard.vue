<template>
    <wxc-popup :show="show" popup-color="rgb(255, 255, 255)" @wxcPopupOverlayClicked='closeClick' pos="bottom" :height="[isIphoneX ? '650' : '600']">
        <div :class="[isIphoneX ? 'container1' : 'container']">
            <div class="top-box">
                <text class="title">{{title}}</text>
                <div class="close-box" @click="closeClick">
                    <image class="close-icon" src='./imgs/popup-close.png'></image>
                </div>
            </div>
            <list>
                <cell class="cell" v-for="(item,key) in bankList" :key="key" @click="selectItem(item)">
                    <div class="cell-box">
                        <div class="left-box">
                            <image class="bankImg" v-if="item.bankLogo != undefined && item.bankLogo != ''" :src='`./imgs/banklogo/${item.bankLogo}.png`'></image>
                            <image class="bankImg" v-else src="./imgs/finance/logoImg.png"></image>
                            <text class="name">{{item.bankName}}</text>
                            <text class="name">{{item.cardAcType | cardTypes}}</text>
                            <text class="num">({{item.bankNo | cardNumberHidden}})</text>
                        </div>
                        <div class="right-box">
                            <image class="arrow" src='./imgs/arrow-right.png'></image>
                        </div>
                    </div>
                </cell>
                <cell class="cell" @click="addCard">
                    <div class="cell-box">
                        <div class="left-box">
                            <text class="name">+添加银行卡</text>
                        </div>
                        <div class="right-box">
                            <image class="arrow" src='./imgs/arrow-right.png'></image>
                        </div>
                    </div>
                </cell>
            </list>
        </div>
    </wxc-popup>
</template>

<script>

import { WxcPopup } from 'weex-ui';

const context = weex.requireModule("context");

export default {
    components:{
        WxcPopup
    },
    props:{
        title:{
            type:String,
            default:'请选择账户'
        },
        show:{
            type:Boolean,
            default:false
        },
        bankList:{
            type:Array,
            default:[]
        }
    },
    data(){
        return {
            isIphoneX:false,
            height:'600'
        }
    },
    created(){
        this.isipx(res=>{
            this.isIphoneX = res;
        });
    },
    methods:{
        // 关闭
        closeClick(){
            this.$emit("closeClick");
        },
        // 选择银行卡
        selectItem(item) {
            this.closeClick();
            this.$emit("selectClick",item);
        },
        // 跳转加挂页面
        addCard(){
            this.closeClick();
            context.launchStage("main.myCountList");
        }
    }
}
</script>

<style scoped>
    .container {
        height: 600px;
        background-color: #ffffff;
    }
    .container1 {
        height: 650px;
        padding-bottom: 50px;
        background-color: #ffffff;
    }
    .top-box{
        height: 90px;
        border-bottom-color: #f0f0f0;; 
        border-bottom-width: 1px;
        border-bottom-style: solid;
        justify-content: center;
        flex-direction: row;
        align-items: center;
        position: relative;
    }
    .title {
        color:#373737;
        font-size: 30px;
        text-align: center;
    }
    .close-box {
        width: 50px;
        height: 50px;
        position: absolute;
        right: 20px;
        top: 20px;
        align-items: center;
        justify-content:flex-end;
    }
    .close-icon {
        width: 26px;
        height: 26px;
    }
    .cell {
        padding-left: 25px;
    }
    .cell-box {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 90px;
        border-bottom-color: #f0f0f0;; 
        border-bottom-width: 1px;
        border-bottom-style: solid;
        padding-right: 25px;
    }
    .left-box {
        flex: 1;
        padding-right: 20px;
        flex-direction: row;
        align-items: center;
    }
    .bankImg {
        width: 50px;
        height: 50px;
    }
    .name {
        margin-left: 10px;
        color: #373737;
        font-size: 24px;
    }
    .num {
        margin-left: 10px;
        color: #999999;
        font-size: 24px;
    }
    .right-box {
        width: 25px;
        height: 25px;
    }
    .arrow {
        width: 25px;
        height: 25px;
    }
    .bottom-box {
        margin-left: 25px;
    }

</style>
<template>
    <div class="bf-page-container">
        <wxc-popup ref="wxcPopup" popup-color="#ffffff"
            :show="show"
            @wxcPopupOverlayClicked="popupRentSelectHide"
            pos="right">
            <scroller>
                <!-- <top-bar title="房源筛选"></top-bar> -->
                <div class="bf-select-container">
                    <list-heard :title="'租金'"></list-heard>
                    <div class="bf-block-box">
                        <div v-for="(item, index) in rentList" :key="'rent'+index">
                            <div @click="handleRentSel(item)" :class="['bf-block', rentSel==item? 'bf-block-active':'', (index+1)%3===0? 'bf-clear-margin':'']">
                                <text :class="['bf-block-text', rentSel==item? 'bf-block-text-active':'']">{{ item }}</text>
                            </div>
                        </div>
                    </div>
                    <div class="bf-custom-title">
                        <text class="rent-custom-text">租金区间(元)</text>
                    </div>
                    <div class="bf-rent-custom">
                        <input
                           type="number"
                           class="bf-rent-inp"
                           autofocus="false"
                           @focus="handleRentCustom"
                           @blur="handleRentCustom"
                           placeholder="请输入最低金额(元)"
                           v-model="minRent">
                        </input>
                        <div class="bf-rent-line">
                            <text class="rent-line-text">-</text>
                        </div>
                        <input
                           type="number"
                           class="bf-rent-inp"
                           autofocus="false"
                           @focus="handleRentCustom"
                           @blur="handleRentCustom"
                           placeholder="请输入最高金额(元)"
                           v-model="maxRent">
                        </input>
                    </div>

                    <list-heard :title="'区域'"></list-heard>
                    <div class="bf-block-box">
                        <div v-for="(item, index) in areaList" :key="'area'+index">
                            <div @click="handleAreaSel(item)" :class="['bf-block', areaSel==item? 'bf-block-active':'', (index+1)%3===0? 'bf-clear-margin':'']">
                                <text :class="['bf-block-text', areaSel==item? 'bf-block-text-active':'']">{{ item }}</text>
                            </div>
                        </div>
                    </div>

                    <list-heard :title="'租赁方式'"></list-heard>
                    <div class="bf-block-box">
                        <div v-for="(item, index) in rentTypeList" :key="'rentType'+index">
                            <div @click="handleRentTypeSel(item)" :class="['bf-block', rentTypeSel==item? 'bf-block-active':'', (index+1)%3===0? 'bf-clear-margin':'']">
                                <text :class="['bf-block-text', rentTypeSel==item? 'bf-block-text-active':'']">{{ item }}</text>
                            </div>
                        </div>
                    </div>

                    <list-heard :title="'品牌'"></list-heard>
                    <div class="bf-block-box">
                        <div v-for="(item, index) in brandList" :key="'rent'+index">
                            <div @click="handleBrandSel(item)" :class="['bf-block', brandSel==item? 'bf-block-active':'', (index+1)%3===0? 'bf-clear-margin':'']">
                                <text :class="['bf-block-text', brandSel==item? 'bf-block-text-active':'']">{{ item }}</text>
                            </div>
                        </div>
                    </div>
                </div>
                <page-bottom-btn leftTitle="清空" rightTitle="确定" @leftBtnClick="handleClearSelect" @rightBtnClick="handleSelect"></page-bottom-btn>
            </scroller>
        </wxc-popup>
    </div>
</template>

<script>
import { WxcPopup } from 'weex-ui'
// import topBar from "@/components/topBar/index.vue";
import ListHeard from "@/components/listHeader/index.vue";
import PageBottomBtn from "@/components/customDoubleBtn/index.vue";

const modal = weex.requireModule('modal')

export default {
    name: "RentSelection",
    props: {
        show: {
            type: Boolean,
            default: true
        }
    },
    components: {
        // topBar,
        WxcPopup,
        ListHeard,
        PageBottomBtn,
    },
    data() {
        return {
            rentSel: '不限',
            minRent: '',
            maxRent: '',
            areaSel: '全贵阳',
            rentTypeSel: '全部',
            brandSel: '全部',
            rentList: ['不限', '1000<', '1500 - 2000', '2000 - 2500', '2500 - 3000', '3000 - 3500', '3500 - 4000', '>4000'],
            areaList: ['全贵阳', '观山湖','花溪','云岩','南明','白云','乌当','清镇'],
            rentTypeList: ['全部','整租','合租'],
            brandList: ['全部','趣租','天天','链家','德祐','租租','好找家','亦居'],
        }
    },
    methods: {
        popupRentSelectHide () {
            
        },
        // 选择租金
        handleRentSel(item) {
            this.rentSel = item
            this.minRent = ""
            this.maxRent = ""
        },
        // 选择区域
        handleAreaSel(item) {
            this.areaSel = item
        },
        // 选择租赁方式
        handleRentTypeSel(item) {
            this.rentTypeSel = item
        },
        // 选择品牌
        handleBrandSel(item) {
            this.brandSel = item
        },
        handleRentCustom() {
            if(!!this.minRent || !!this.maxRent){
                this.rentSel = ""
            }else{
                this.rentSel = "不限"
            }
        },
        // 清空
        handleClearSelect() {
            this.rentSel='不限'
            this.minRent=''
            this.maxRent= ''
            this.areaSel= '全贵阳'
            this.rentTypeSel='全部'
            this.brandSel='全部'
            this.$emit("handleClearSelect", false);
        },
        // 确定筛选
        handleSelect() {
            this.$emit("emitParams", { param: 999});
        },
        handlePupopClose() {
            this.$refs.wxcPopup.hide();
        },
    }
}
</script>

<style scoped>
.bf-page-container{
    width: 750px;
}

.bf-select-container{
    padding-top: 88px;
    padding-bottom: 88px;
}

.bf-block-box{
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 25px;
    /* justify-content: space-between; */
}

.bf-block{
    border-width: 1px;
    border-style: solid;
    border-radius: 4px;
    height: 76px;
    width: 208px;
    align-items: center;
    justify-content: center;
    margin-bottom: 35px;
    background-color: #F1F2F2;
    border-color: #F1F2F2;
    margin-right: 33px;
}

.bf-clear-margin{
    margin: 0;
}

.bf-block-active{
    background-color: rgba(248, 149, 49, 0.2);
    border-color: rgba(248, 149, 49, 1);
}

.bf-block-text{
    font-size: 28px;
    color: #333333;
}

.bf-block-text-active{
    color: #F89531;
}

.bf-custom-title{
    padding-left: 30px;
    padding-bottom: 20px;
}

.rent-custom-text{
    color: #333333;
    font-size: 28px;
}

.bf-rent-custom{
    flex-direction: row;
    width: 750px;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 35px;
    justify-content: space-between;
}

.bf-rent-line{
    height:76px;
    justify-content: center;
    align-items: center;
}

.rent-line-text{
    color: #333333;
    font-size: 56px;
}

.bf-rent-inp{
    width:312x;
    height:76px;
    border-width: 1px;
    border-radius: 4px;
    background-color: #F1F2F2;
    border-width: 1px;
    border-style: solid;
    border-color: #DDDDDD;
    font-size: 24px;
    padding-left: 30px;
}

</style>
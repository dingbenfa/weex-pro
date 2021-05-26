// created by dingbenfa
// 我是房东 -- 房源详情
<template>
    <scroller style="flex: 1;" show-scrollbar="false">
        <div class="bf-container">
            <!-- <top-bar title="房屋详情"></top-bar> -->

            <div class="bf-cell-container">
                <div class="bf-cell-item">
                    <text class="cell-item-title">房屋信息</text>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">房源位置</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">贵州省贵阳市观山湖区</text>
                    </div>
                </div>
                <div class="bf-cell-item">
                    <text class="cell-item-name">公寓位置</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">瑞丽上层2栋一单元2402号</text>
                    </div>
                </div>
                <div class="bf-cell-item" v-if="releaseType===1">
                    <text class="cell-item-name">不动产权号</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">271389127987129879821739827983798127</text>
                    </div>
                </div>
                <div class="bf-cell-item" v-if="releaseType===2">
                    <text class="cell-item-name">房屋备案号</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">271389127987129879821739827983798127</text>
                    </div>
                </div>
                <div class="bf-cell-item">
                    <text class="cell-item-name">建筑面积</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">63m²</text>
                    </div>
                </div>
            </div>

            <div class="bf-cell-container">
                <div class="bf-cell-item">
                    <text class="cell-item-title">租赁信息</text>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">租金(元/月)</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">88,888,888.00</text>
                    </div>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">房屋运营公司</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">贵州趣租租赁有限公司</text>
                    </div>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">合同租期</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">2020.12.12 ～ 2021.12.12</text>
                    </div>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">付款频率</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">半年付</text>
                    </div>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">出租方式</text>
                    <div class="cell-item-more">
                        <text class="item-more-show-text">委托出租</text>
                    </div>
                </div>
            </div>
        </div>

        <page-bottom-btn leftTitle="客服电话" rightTitle="合同" @leftBtnClick="handleServiceTel" @rightBtnClick="handleToContract"></page-bottom-btn>

        <!-- 客服电话 -->
        <ert-popup title="客服电话" :height="425" :pupopShow="serviceshow" @handlePupopClose="servicePupopClose">
            <div class="bf-service-box">
                <image class="bf-circle-img" src="/src/imgs/easyRent/home/houseSelection.png" style="width:88px;height:88px"></image>
                <div>
                    <text class="service-tel-hello">下午好～尊敬的用户</text>
                    <div class="bf-service-tel">
                        <image src="/src/imgs/easyRent/tel-icon.png" style="width:32px;height:32px"></image>
                        <text class="service-tel-text">188 8888 8888</text>
                    </div>
                </div>
            </div>
            <div class="center-rent-btn">
                <div class="normal-btn" @click="handleCopyTel()">
                    <text class="normal-btn-font">复制电话号码</text>
                </div>
                <div class="normal-btn-bc" @click="handleCallTel()">
                    <text class="normal-btn-bc-font">拨打电话</text>
                </div>
            </div>      
        </ert-popup>
    </scroller>
</template>

<script>
//  import topBar from "@/components/topBar/index.vue";
import ertPopup from "@/components/ertPopup/index";
import PageBottomBtn from "@/components/customDoubleBtn/index.vue";

const clipboard = weex.requireModule('clipboard')

export default {
  name: "ReleaseHouses",
  components: {
    // topBar,
    ertPopup,
    PageBottomBtn,
  },
  data() {
    return {
      releaseType: 1,
      serviceshow: false,
    };
  },
  methods: {
    // 合同
    handleToContract() {

    },
    // 客服电话
    handleServiceTel() {
        this.serviceshow = true
    },
    // 延迟关闭客服电话pupop
    servicePupopClose() {
        let that = this;
        setTimeout(function(){
            that.serviceshow = false
        },100)
    },
    // 复制电话号码
    handleCopyTel() {
      clipboard.setString("188 8888 8888")
    },
    // 拨打电话
    handleCallTel() {
      
    },
  }
};
</script>

<style scoped>
.bf-container {
  width: 750px;
  background-color: #f1f2f2;
  padding-top: 108px;
  padding-bottom: 140px;
}

.bf-cell-container {
  width: 750px;
  background-color: #ffffff;
  margin-top: 20px;
  align-items: center;
}

.bf-cell-item {
  flex-direction: row;
  justify-content: space-between;
  width: 690px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #f1f2f2;
  padding-top: 40px;
  padding-bottom: 40px;
}

.cell-item-title {
  font-size: 32px;
  color: #333333;
}

.cell-item-name {
  font-size: 32px;
  color: #999999;
}

.item-more-show-text {
  font-size: 32px;
  width: 450px;
  color: #333333;
  text-align: right;
}

/* 客服电话 */
.bf-service-box{
    flex-direction: row;
    padding-left: 30px;
    border-bottom-width: 1px;
    border-bottom-color: #EBEDF0;
    height: 190px;
    align-items: center;
}

.bf-circle-img{
    border-radius: 44px;
    overflow: hidden;
    margin-right: 30px;
}

.bf-service-tel{
    flex-direction: row;
    align-items: center;
}

.service-tel-hello{
    font-size: 32px;
    color: #333333;
    line-height: 55px;
}

.service-tel-text{
    font-size: 28px;
    color: #333333;
    line-height: 45px;
    margin-left: 15px;
}
/* 按钮 */
.center-rent-btn {
    width: 750px;
    background-color: #fff;
    flex-direction: row;
    justify-content: space-around;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 20px; 
}

.normal-btn {
    width: 336px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #F89531;
    border-radius: 4px;
}

.normal-btn-font {
    color: #F89531;
    font-size: 32px;
    font-weight: 700;
}

.normal-btn-bc {
    width: 336px;
    height: 80px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #F89531;
    background-color: #F89531;
    border-radius: 4px;
}

.normal-btn-bc-font {
    font-size: 32px;
    font-weight: 400;
    color: #FFF;
}
/* 客服电话end */

</style>
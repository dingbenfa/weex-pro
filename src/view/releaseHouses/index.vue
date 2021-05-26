// created by dingbenfa
// 我是房东 -- 发布房源
<template>
    <scroller style="flex: 1;" show-scrollbar="false">
        <div class="bf-container">
            <!-- <top-bar title="发布房源"></top-bar> -->
            <div class="bf-cell-container">
                <div class="bf-cell-item">
                    <text class="cell-item-name">基本信息</text>
                </div>
                <div class="bf-cell-item" @click="handleHousePositionSel">
                    <text class="cell-item-name">房源位置</text>
                    <div class="cell-item-more">
                        <text class="item-more-text" v-if="cityAreaValue.length===0">请选择位置</text>
                        <text class="item-more-show-text" v-else>{{ cityValue[0] }} {{ cityAreaValue[0] }}</text>
                        <image src="/src/imgs/img_right.png" style="width:15px;height:28px"></image>
                    </div>
                </div>
                <div class="bf-cell-item">
                    <text class="cell-item-name">房源位置</text>
                    <input
                    class="cell-item-inp"
                    type="text"
                    placeholder="请输入小区名称单元号及房号"
                    style="width: 394px;"
                    value="">
                    </input>
                </div>
                <div class="bf-cell-item">
                    <text class="cell-item-name">房屋面积(m²)</text>
                    <input
                    class="cell-item-inp"
                    type="number"
                    placeholder="请输入房屋面积"
                    style="width: 231px;"
                    maxlength="6"
                    value="">
                    </input>
                </div>
                <div class="bf-cell-item">
                    <text class="cell-item-name">期望租金(元/月)</text>
                    <input
                    class="cell-item-inp"
                    type="number"
                    placeholder="请输入期望租金"
                    style="width: 231px;"
                    maxlength="6"
                    value="">
                    </input>
                </div>
                <div class="bf-cell-item" @click="handleCompanySel">
                    <text class="cell-item-name">运营公司</text>
                    <div class="cell-item-more">
                        <text class="item-more-text" v-if="companySelList.length===0">请选择运营公司</text>
                        <text class="item-more-show-text" v-else>{{ companySelText }}</text>
                        <image src="/src/imgs/img_right.png" style="width:15px;height:28px"></image>
                    </div>
                </div>
            </div>

            <div class="bf-cell-container">
                <div class="bf-cell-item">
                    <text class="cell-item-name">产权证明</text>
                </div>
                 <div class="bf-cell-item">
                    <div :class="['bf-cell-btn', releaseType===1? 'bf-cell-btn-active':'']" @click="handleReleaseType(1)">
                        <text :class="['bf-cell-btn-text', releaseType===1? 'bf-cell-btn-text-active':'']">不动产权号</text>
                    </div>
                    <div :class="['bf-cell-btn', releaseType===2? 'bf-cell-btn-active':'']" @click="handleReleaseType(2)">
                        <text :class="['bf-cell-btn-text', releaseType===2? 'bf-cell-btn-text-active':'']">房屋备案号</text>
                    </div>
                </div>
                <div class="bf-cell-item" v-if="releaseType===1">
                    <text class="cell-item-name">不动产权号</text>
                    <input
                    class="cell-item-inp"
                    type="text"
                    placeholder="请输入不动产权号"
                    style="width: 253px;"
                    value="">
                    </input>
                </div>
                <div class="bf-cell-item" v-if="releaseType===2">
                    <text class="cell-item-name">房屋备案号</text>
                    <input
                    class="cell-item-inp"
                    type="text"
                    placeholder="请输入房屋备案号"
                    style="width: 253px;"
                    value="">
                    </input>
                </div>
                 <div class="bf-cell-item">
                    <text class="cell-item-name">验证码</text>
                    <div class="cell-item-more">
                        <input
                        class="cell-item-inp"
                        type="text"
                        placeholder="请输入"
                        style="width: 253px;"
                        value="">
                        </input>
                        <text class="bf-line">|</text>
                        <image src="/src/imgs/code_img.png" style="width:200px;height:82px"></image>
                    </div>
                </div>
            </div>

            <div class="center-rent-btn">
                <custom-btn title="提交" @sureClick="handleReleaseSubmit"></custom-btn>
            </div>
        </div>

        <!-- 城市区域 -->
        <city-area :pupopShow="cityAreashow" :value="cityAreaValue" @getCityArea="getCityArea" @handlePupopClose="cityAreaPupopClose"></city-area>

         <!-- 运营公司 -->
        <ert-popup title="运营公司" :height="705" :pupopShow="companyshow" @handlePupopClose="companyPupopClose">
            <div class="bf-cell-container">
                <div class="bf-cell-item" v-for="(item, index) in companyList" :key="index" @click="handleCompanyCheck(item.value)">
                    <text class="cell-item-name">{{ item.name }}</text>
                    <image :src="companySelList.includes(item.value)? '/src/imgs/xy_select.png':'/src/imgs/xy_default.png'" style="width:30px;height:30px"></image>
                </div>
            </div>
        </ert-popup>
    </scroller>
</template>

<script>
//  import topBar from "@/components/topBar/index.vue";
import CustomBtn from "@/components/customBtn/index";
import ertPopup from "@/components/ertPopup/index";

import CityArea from "@/components/cityArea/index";

export default {
  name: "ReleaseHouses",
  components: {
    // topBar,
    CustomBtn,
    ertPopup,
    CityArea
  },
  data() {
    return {
      releaseType: 1,
      companyshow: false,
      cityAreashow: false,
      cityValue: [],
      cityAreaValue: [],
      companyList: [
        { name: "安居客", value: 1 },
        { name: "链家", value: 2 },
        { name: "安居客", value: 3 },
        { name: "链家", value: 4 },
        { name: "安居客", value: 5 },
        { name: "链家", value: 6 }
      ],
      companySelList: [1, 3, 5]
    };
  },
  computed: {
    companySelText() {
      let str = "";
      let companyList = this.companyList;
      let companySelList = this.companySelList;
      for (let i = 0; i < companySelList.length; i++) {
        for (let j = 0; j < companyList.length; j++) {
          if (companySelList[i] == companyList[j].value) {
            str += companyList[j].name + " ";
          }
        }
      }
      return str;
    }
  },
  methods: {
    // 提交
    handleReleaseSubmit() {},
    // 切换产权证明
    handleReleaseType(type) {
      this.releaseType = type;
    },
    // 选择运营公司
    handleCompanySel() {
      this.companyshow = true;
    },
    // 点击选择公司
    handleCompanyCheck(val) {
      if (this.companySelList.includes(val)) {
        let index = this.companySelList.indexOf(val);
        this.companySelList.splice(index, 1);
      } else {
        this.companySelList.push(val);
      }
    },
    // 延迟运营公司pupop
    companyPupopClose() {
      let that = this;
      setTimeout(function() {
        that.companyshow = false;
      }, 100);
    },
    // 选择房源位置
    handleHousePositionSel() {
      this.cityAreashow = true;
    },
    // 延迟房源位置pupop
    cityAreaPupopClose() {
      let that = this;
      setTimeout(function() {
        that.cityAreashow = false;
      }, 100);
    },
    // 获取城市区域
    getCityArea(param) {
      this.cityValue = param.city;
      this.cityAreaValue = param.area;
    }
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
  height: 112px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 690px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #f1f2f2;
}

.cell-item-name {
  font-size: 32px;
  color: #333333;
}

.cell-item-inp {
  height: 112px;
  font-size: 28px;
  color: #333333;
  padding-left: 30px;
  text-align: right;
}

.item-more-text {
  font-size: 28px;
  color: #999999;
  margin-right: 25px;
}

.item-more-show-text {
  font-size: 28px;
  width: 420px;
  color: #333333;
  lines: 1;
  text-overflow: ellipsis;
  text-align: right;
  margin-right: 25px;
}

.cell-item-more {
  height: 112px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.bf-cell-btn {
  height: 76px;
  width: 326px;
  background-color: #f1f2f2;
  border-style: solid;
  border-width: 1px;
  border-color: #f1f2f2;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
}

.bf-cell-btn-text {
  font-size: 28px;
  color: #333333;
}

.bf-cell-btn-active {
  border-color: #f89531;
  background-color: rgba(248, 149, 49, 0.2);
}

.bf-cell-btn-text-active {
  font-size: 28px;
  color: #f89531;
}

.bf-line {
  color: #edecf1;
  margin-left: 30px;
  margin-right: 30px;
  font-size: 32px;
}

.center-rent-btn {
  width: 750px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
}

.bf-clear-margin {
  margin: 0;
}
</style>
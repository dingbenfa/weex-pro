// created by dingbenfa
// 我是房东 -- 房源列表
<template>
  <scroller style="flex: 1;" show-scrollbar="false">
  <!-- <top-bar title="我是房东" :isBack="true" rightTxt="发布记录" @mpBarRightBtnClick="rightBarClick" :rightTxtStyle="rightStyle"></top-bar> -->

    <div class="container-record">
      <div class="bc-content" v-for="(item,key) in list" :key="key">
          <div class="content-tit-box">
            <div class="content-tit content-tit-header" @click="handleToDetail">
              <text class="bold-tit">{{item.room}}</text>
              <image src="/src/imgs/img_right.png" style="width:15px;height:28px"></image>
            </div>
            <div class="content-tit">
                <text class="hui-tit">租赁公司名称</text>
                <text class="right-normal-tit">{{item.companyName}}</text>
            </div>
            <div class="content-tit">
                <text class="hui-tit">合同租期</text>
                <text class="right-normal-tit">{{item.contDate}}</text>
            </div>
            <div class="content-tit">
                <text class="hui-tit">不动产权号</text>
                <text class="right-normal-tit">{{item.chanquanhao}}</text>
            </div>
          </div>
          
          <div class="bf-btn-box" v-if="item.status==1" @click="applicationForTermination">
              <text class="bf-btn-text">申请解约</text>
          </div>
          <div class="bf-btn-box" v-else-if="item.status==2" @click="toBillPayment">
              <text class="bf-btn-text">账单支付</text>
          </div>
          <div class="bf-double-btn-box" v-else-if="item.status==3">
            <div class="bf-small-btn-box" @click="handleSignRefuse">
              <text class="bf-btn-text">拒绝</text>
            </div>
            <div class="bf-line"></div>
            <div class="bf-small-btn-box" @click="handleToSign">
              <text class="bf-btn-text">去签约</text>
            </div>
          </div>
          <div class="bf-btn-box" v-else-if="item.status==4" @click="toBillDetails">
              <text class="bf-btn-text">账单明细</text>
          </div>
      </div>
    </div>

    <div class="fixed-rent-btn">
      <custom-btn title="发布房源" @sureClick="handleToRelease"></custom-btn>
    </div>
  </scroller>
</template>

<script>
// import topBar from "@/components/topBar/index.vue";
import CustomBtn from "@/components/customBtn/index";

export default {
  name: "checkOutList",
  components: {
    // topBar,
    CustomBtn
  },
  data() {
    return {
      list: [
        {
          value: 1,
          payDate: "2021.12.12 12:12:12",
          payType: "租金",
          room: "瑞丽上层2栋一单元2402号",
          roomDate: "2022.01.01",
          contDate: "2020.10.10 ～ 2022.12.12",
          status: 1,
          companyName: "贵州趣租租赁有限公司",
          chanquanhao: "127398217947983794793274987329873423"
        },
        {
          value: 2,
          payDate: "2021.12.12 12:12:12",
          payType: "租金",
          room: "瑞丽上层2栋一单元2402号",
          roomDate: "2022.01.01",
          contDate: "3年 (签约日期为起始日期)",
          status: 2,
          companyName: "贵州趣租租赁有限公司",
          chanquanhao: "127398217947983794793274987329873423"
        },
        {
          value: 3, // 待受理
          payDate: "2021.12.12 12:12:12",
          payType: "租金",
          room: "瑞丽上层2栋一单元2402号",
          roomDate: "2022.01.01",
          contDate: "2020.10.10 ～ 2022.12.12",
          status: 3,
          companyName: "贵州趣租租赁有限公司",
          chanquanhao: "127398217947983794793274987329873423"
        },
        {
          value: 4, // 待核实
          payDate: "2021.12.12 12:12:12",
          payType: "租金",
          room: "瑞丽上层2栋一单元2402号",
          roomDate: "2022.01.01",
          contDate: "2020.10.10 ～ 2022.12.12",
          status: 4,
          companyName: "贵州趣租租赁有限公司",
          chanquanhao: "127398217947983794793274987329873423"
        }
      ],
      show: false,
      rightStyle: {
        "font-size": "28px",
        color: "#309DF9"
      }
    };
  },
  methods: {
    // 发布记录
    rightBarClick() {},
    // 跳转详情
    handleToDetail() {},
    // 发布房源
    handleToRelease() {},
    // 申请解约
    applicationForTermination() {},
    // 账单支付
    toBillPayment() {},
    // 账单明细
    toBillDetails() {},
    // 拒绝
    handleSignRefuse() {},
    // 去签约
    handleToSign() {}
  }
};
</script>

<style scoped>
.container-record {
  width: 750px;
  background-color: #f1f2f2;
  align-items: center;
  padding-top: 108px;
  padding-bottom: 150px;
}

.bc-content {
  width: 690px;
  background-color: #ffffff;
  margin-top: 30px;
}

.content-tit-box {
  padding-bottom: 25px;
}

.content-tit {
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 15px;
  padding-left: 30px;
  padding-right: 30px;
}

.content-tit-header {
  padding-top: 30px;
  padding-bottom: 30px;
  margin-bottom: 20px;
}

.bold-tit {
  font-size: 28px;
  font-weight: bold;
  color: #333333;
}

.right-bc {
  height: 44px;
  border-radius: 2px;
  padding: 4px 16px;
}

.right-font {
  font-size: 28px;
  font-weight: 400;
}

/*已同意*/
.agree-green-bc {
  background-color: rgba(85, 163, 63, 0.2);
}

.agree-green {
  color: #55a33f;
}

.agree-fail-bc {
  background-color: rgba(225, 64, 40, 0.2);
}

.agree-fail {
  color: #e14028;
}

.wait-bc {
  background-color: rgba(242, 119, 22, 0.2);
}

.wait-bc-font {
  color: #f27716;
}

.hui-tit {
  font-size: 28px;
  font-weight: 400;
  color: #999999;
}

.right-normal-tit {
  font-size: 28px;
  font-weight: 400;
  color: #333333;
  width: 380px;
  text-align: right;
}

.bf-btn-box {
  height: 66px;
  border-style: solid;
  border-top-width: 1px;
  border-color: #f2f2f2;
  height: 95px;
  justify-content: center;
  align-items: center;
}

.bf-small-btn-box {
  height: 66px;
  width: 345px;
  border-style: solid;
  border-top-width: 1px;
  border-color: #f2f2f2;
  height: 95px;
  justify-content: center;
  align-items: center;
}

.bf-line {
  height: 32px;
  border-left-width: 1px;
  border-style: solid;
  border-left-color: #f2f2f2;
  margin-top: 28px;
}

.bf-btn-text {
  font-size: 28px;
  color: #333333;
}

.bf-double-btn-box {
  flex-direction: row;
  justify-content: space-between;
}

.fixed-rent-btn {
  width: 750px;
  padding-left: 30px;
  padding-right: 30px;
  flex-direction: row;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
}
</style>
<template>
  <div class="container">
    <div class="banker-center">
      <text class="banker-center-left">热销理财</text>
      <text class="banker-center-right" @click="jumpTo(details.url)">{{details.title}}</text>
    </div>
    <div class="wrapper" v-for="(finance , key) in financeList" :key="key">
      <text class="finance_name">{{finance.finance_type}}</text>
      <div class="buy_pro">
        <div>
          <div class="per_box">
            <text class="per">{{finance.rate}}</text>
            <text class="symbol">%</text>
          </div>
          <text class="down_text">预期年化收益率</text>
        </div>

        <div>
          <div class="per_box">
            <text class="day">{{finance.day}}</text>
            <text class="_text">天</text>
          </div>
          <text class="_down">理财期限</text>
        </div>
        <div>
          <div class="per_box">
            <text class="amount">{{finance.amount}}</text>
            <text class="_text">万元</text>
          </div>
          <text class="_down">起购金额</text>
        </div>
        <div class="but_btn" @click="jumpTo('main.Financialdetail')">
          <text class="but_btn_text">立即购买</text>
        </div>
      </div>
      <div class="sale_text">
        <div>
          <div class="bg_line"></div>
          <div class="sale_line" :style="{width:450*finance.saled_text}"></div>
        </div>
        <text class="saled_text">已售{{finance.saled_text*100+"%"}}</text>
      </div>
    </div>
  </div>
</template>

<style scoped>
.sale_line {
  height: 4px;
  margin-top: -4px;
  background-color: #ef3034;
  margin-left: 50px;
}

.bg_line {
  height: 4px;
  background-color: #eeeeee;
  width: 450px;
  margin-left: 50px;
  margin-top: 30px;
}

.banker-center {
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}

.banker-center-left {
  font-size: 30px;
  font-weight: 600;
  color: rgb(64, 69, 97);
}

.banker-center-right {
  font-size: 28px;
  color: #848996;
}

.container {
  width: 750px;
  background-color: #ffffff;
  margin-bottom: 15px;
}

.wrapper {
  width: 750px;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}

.finance_name {
  font-size: 28px;
  padding-left: 30px;
  margin-top: 30px;
  height: 40px;
  line-height: 40px;
  color: #404561;
}

.buy_pro {
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
}

.per_box {
  flex-direction: row;
  margin-left: 7px;
}

.per {
  padding-left: 30px;
  font-size: 54px;
  color: #ef3034;
  margin-top: -10px;
}

.symbol {
  margin-top: 13px;
  margin-left: 5px;
  color: #ef3034;
  font-size: 30px;
}

.down_text {
  padding-left: 34px;
  font-size: 20px;
  color: #848996;
}

.day {
  margin-top: 5px;
  font-size: 35px;
  color: #404561;
}

.amount {
  margin-top: 5px;
  font-size: 35px;
  color: #404561;
}

._text {
  font-size: 20px;
  margin-top: 15px;
}

._down {
  margin-top: 7px;
  font-size: 20px;
  color: #848996;
}

.but_btn {
  margin-right: 30px;
  margin-top: 15px;
  width: 138px;
  height: 55px;
  border-width: 1px;
  border-style: solid;
  border-color: #ef3034;
  border-radius: 58px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.but_btn_text {
  font-size: 24px;
  color: #ef3034;
}

.saled {
  margin-top: 40px;
  width: 500px;
  margin-left: 40px;
  height: 5px;
}

.sale_text {
  margin-left: -20px;
  width: 750px;
  height: 80px;
  flex-direction: row;
  background-color: #ffffff;
}

.saled_text {
  font-size: 25px;
  margin-top: 10px;
  margin-left: 80px;
  color: #b7bac1;
}
</style>
<script>
/**
 * @module 理财组件
 * @description 理财weex组件
 * @example  <hot-finance jsonurl="hotfinance.json"></hot-finance>
 * hotfinance.json数据格式如下:
 * {
    "$schema": "hot_finance_schema.json",
    "data": {
        "details": {
            "title": "更多",
            "url": "main.plnv"
        },
        "financeList": [{
                "finance_type": "智富1815期35天 （GXZF1819219）",
                "rate": 3.88,
                "day": 35,
                "amount": 5,
                "saled_text": 0.72
            },
            {
                "finance_type": "智富1815期35天 （GXZF1819219）",
                "rate": 3.88,
                "day": 35,
                "amount": 5,
                "saled_text": 0.92
            }
        ]
    }
}
 * 
 */
//理财类型： hot、black、presale 、setUp、soldOut
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
export default {
  /**
   * Props 接受父组件的传值
   * @prop {Json} jsonurl 理财组件的json文件路径
   */
  props: ["jsonurl"],
  data() {
    return {
      details: {
        title: "",
        url: ""
      },
      financeList: []
    };
  },
  created() {
    this.getFinance();
  },
  methods: {
    jumpTo(url) {
      if (url) {
        context.launchStage(url);
      }
    },
    getFinance() {
      if (this.jsonurl) {
        stream.fetch(
          {
            method: "GET",
            url: this.$store.state.jsonBaseUrl + this.jsonurl,
            type: "json"
          },
          res => {
            this.details = res.data.data.details;
            this.financeList = res.data.data.financeList;
          }
        );
      }
    }
  },
  watch: {
    jsonurl() {
      this.getFinance();
    }
  }
};
</script>
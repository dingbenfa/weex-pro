<template>
  <div>
    <div class="banker-center">
      <text class="banker-center-left">智能推荐</text>
      <text class="banker-center-right" @click="JumpTo('main.financeDeposit')">详情</text>
    </div>
    <div class="banker-middle">
      <image class="finance-big-img" :src="bgimg" />
      <div class="banker-middle-text">
        <text class="banker-middle-left">{{intell_title}}</text>
        <text class="banker-middle-center">{{intell_rate}}</text>
        <text class="banker-middle-middle">预期收益率</text>
        <text class="banker-middle-right">{{intell_info}}</text>
      </div>
      <image class="insert" :src="getimg" @click="JumpTo('main.Financialdetail')" />
    </div>
  </div>
</template>
<style scoped>
.banker-center {
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #ffffff;
  height: 80px;
  justify-content: space-between;
  align-items: center;
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
.banker-middle {
  height: 360px;
  margin-bottom: 16px;
  border-top-color: #eeeeee;
  border-top-width: 1px;
}
.finance-big-img {
  width: 750px;
  height: 378px;
}
.banker-middle-text {
  margin-top: -335px;
  justify-content: center;
  align-items: center;
}
.baker {
  background-color: #ffffff;
  height: 80px;
}
.banker-middle-left {
  font-size: 30px;
  color: #404561;
}
.banker-middle-center {
  font-size: 64px;
  font-weight: bolder;
  color: #ef3034;
  text-align: center;
  margin-top: 8px;
}
.banker-middle-middle {
  font-size: 28px;
  color: #8e939f;
  text-align: center;
}
.banker-middle-right {
  font-size: 28px;
  margin-top: 20px;
  color: #404561;
}
.insert {
  margin-left: 220px;
  margin-top: 30px;
  width: 317px;
  height: 52px;
}
</style>
<script>
/**
 * @module 推荐组件2
 * @description 推荐weex组件
 * @example  <intell jsonurl="intell.json"></intell>
 * intell.json数据格式如下:
 * {
    "$schema": "intell_schema.json",
    "data": {
        "title": "稳盈1816期35天 （ZXWY186132）",
        "rate": "3.88%",
        "info": "5万元起购 期限91天 额度紧张"
    }
}
 * 
 */
const stream = weex.requireModule("stream");
export default {
  /**
   * Props 接受父组件的传值
   * @prop {Json} jsonurl 推荐组件的json文件路径
   */
  props: ["jsonurl"],
  data() {
    return {
      bgimg: this.$store.state.imgBaseUrl + "tab_home/intell/place@3x.png",
      getimg: this.$store.state.imgBaseUrl + "tab_home/intell/insertbutton@3x.png",
      intell_title: "",
      intell_rate: "",
      intell_info: ""
    };
  },
  created() {
    this.getIntell();
  },
  watch: {
    jsonurl() {
      this.getIntell();
    }
  },
  methods: {
    getIntell() {
      stream.fetch(
        {
          method: "GET",
          url: this.$store.state.jsonBaseUrl + this.jsonurl,
          type: "json"
        },
        response => {
          if (response.status === 200) {
            var response_data = response.data.data;
            this.intell_title = response_data.title;
            this.intell_rate = response_data.rate;
            this.intell_info = response_data.info;
          }
        },
        () => {}
      );
    }
  }
};
</script>

<template>
    <div class="wrapper">
        <div class="banker-bottom">
            <div class="text-center">
                <text class="nume">当前版本：{{localAppVersion}}</text>
            </div>
            <div class="text-center">
                <text class="bottom">贵阳农商银行股份有限公司版权所有</text>
                <text class="bottom">黔ICP备12002763号-1</text>
                <text class="bottom">本APP支持IPv6</text>
            </div>
        </div>
    </div>
</template>

<style scoped>
.container {
  width: 750px;
}

.nume {
  /* margin-left: 246px; */
  color: #b4b5b5;
  margin-top: 2px;
  font-size: 20px;
}
.text-center{
  align-items: center;
}
.bottom {
  /* margin-left: 172px; */
  color: #b4b5b5;
  font-size: 20px;
}
.wrapper {
  width: 750px;
  position: relative;
  justify-content: space-between;
}

.banker-bottom {
  font-size: 20px;
  color: #b4b5b5;
  display: flex;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
<script>
//理财类型： hot、black、presale 、setUp、soldOut
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
export default {
  props: {
    finance: {
      type: String,
      default: "tab_user/hottalk.json",
      localAppVersion:'1.0'
    }
  },
  created() {
      // this.getData();
      this.localAppVersion = context.envGet("versionName"); //缓存版本号

  },
  data() {
      return {
          financeData: []
      };
  },
  methods: {
    goto(id) {
      context.launchStage(id);
    },
    getData() {
      if (this.finance) {
        stream.fetch(
          {
            method: "GET",
            url: "./json/" + this.finance,
            type: "json"
          },
          res => {
            this.financeData = res.data.data;
          }
        );
      }
    }
  },
  watch: {
    finance() {
      this.getData();
    }
  }
};
</script>
<template>
    <div>
        <image :src="bgImg" class="Img_bg" />
        <div class="container">
            <text class="title">总持仓（元）</text>
            <div class="details">
                <text class="amount" v-if="!$store.state.login">XXX.XX</text>
                <text class="amount" v-if="$store.state.login">{{Amount}}</text>
                <image :src="showImg" class="show_img" @click="toShow()" />
            </div>
        </div>
    </div>
</template>
<style scoped>
.container {
  height: 240px;
  justify-content: center;
  align-items: center;
  margin-top: -240px;
}
.details {
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
.show_img {
  height: 24px;
  width: 40px;
  margin-left: 20px;
}
.title {
  font-size: 30px;
  color: #ffffff;
}
.amount {
  font-size: 48px;
  color: #ffffff;
}
.Img_bg {
  width: 750px;
  height: 240px;
}
</style>
<script>
export default {
  data() {
    return {
      bgImg: this.$store.state.imgBaseUrl + "tab_finance/finance/background.png",
      showImg: this.$store.state.imgBaseUrl + "tab_finance/finance/details.png",
      Amount: "11,999.00"
    };
  },
  methods: {
    toShow() {}
  }
};
</script>

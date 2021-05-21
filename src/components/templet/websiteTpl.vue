<template>
  <div>
    <div class="center_area">
      <text class="near_text">附近网点</text>
      <text class="search_text" @click="jumpTo(search.url)">{{search.title}}</text>
    </div>
    <div class="left">
      <div>
        <text class="bank_text">{{message.name}}</text>
        <text class="time_text">营业时间：{{message.time}}</text>
        <text class="area_text">{{message.address}}</text>
        <div class="icon">
          <image class="pre_img" :src="orderImg" />
          <text class="pre_text" @click="jumpTo(order.url)">{{order.title}}</text>
          <image class="pre_img" :src="roadImg" />
          <text class="pre_text" @click="jumpTo(route.url)">{{route.title}}</text>
        </div>
      </div>
      <image class="right_img" :src="webImg.src" @click="jumpTo(webImg.url)" />
    </div>
  </div>
</template>
<style scoped>
.center_area {
  height: 80px;
  flex-direction: row;
  padding-left: 20px;
  padding-right: 20px;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  margin-bottom: 1px;
  margin-top: 15px;
}
.near_text {
  font-size: 30px;
  color: #404561;
  font-weight: 600;
}
.search_text {
  font-size: 26px;
  color: #848996;
}
.left {
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 30px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
}
.bank_text {
  font-size: 30px;
  color: #404561;
}
.time_text {
  margin-top: 10px;
  font-size: 24px;
  color: #848996;
}
.area_text {
  margin-top: 10px;
  font-size: 24px;
  color: #848996;
}
.icon {
  flex-direction: row;
  margin-top: 10px;
  padding-top: 20px;
}
.pre_img {
  width: 16px;
  height: 23px;
}
.pre_text {
  font-size: 24px;
  color: #848996;
  margin-right: 40px;
  margin-left: 10px;
  margin-top: -5px;
  padding-bottom: 25px;
}
.right_img {
  margin-left: 20px;
  width: 220px;
  height: 160px;
  border-radius: 5px;
}
</style>
<script>
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");

export default {
  props: ["jsonurl"],
  data() {
    return {
      orderImg: this.$store.state.imgBaseUrl + "tab_life/website/pre_img.png",
      roadImg: this.$store.state.imgBaseUrl + "tab_life/website/road_img.png",
      search: {
        title: "",
        url: ""
      },
      message: {
        name: "",
        time: "",
        address: ""
      },
      webImg: {
        name: "",
        url: "",
        src: ""
      },
      order: {
        title: "",
        url: ""
      },
      route: {
        title: "",
        url: ""
      }
    };
  },
  created() {
    stream.fetch(
      {
        method: "GET",
        url: this.$store.state.jsonBaseUrl + this.jsonurl,
        type: "json"
      },
      response => {
        if (response.status === 200) {
          var res = response.data.data;
          this.search = res.search;
          this.message = res.message;
          this.webImg = res.webImg;
          this.order = res.order;
          this.route = res.route;
        }
      },
      () => {}
    );
  },
  methods: {
    jumpTo(url) {
      if (url) {
        context.launchStage(url);
      }
    }
  }
};
</script>

<template>
  <div class="container">
    <text class="title">热门推荐</text>
    <div class="img_row">
      <image @click="goTo(item.url)" v-for="(item,key) in hot_recommend_list" :key="key" class="hot_img" :src="item.src" />
    </div>
  </div>
</template>

<style scoped>
  .container {
    background-color: #ffffff;
    margin-bottom: 15px;
  }

  .title {
    height: 80px;
    line-height: 80px;
    padding-left: 20px;
    font-size: 32px;
    color: #404561;
    font-weight: 600;
    border-bottom-color: #eeeeee;
    border-bottom-width: 1px;
  }

  .img_row {
    height: 214px;
    width: 750px;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .hot_img {
    width: 212px;
    height: 139px;
  }
</style>
<script>
/**
 * @module 热门推荐组件
 * @description 热门推荐weex组件
 * @example  <hot-recommend jsonurl="hotrecommend.json"></hot-recommend>
 * hotrecommend.json数据格式如下:
 * {
    "$schema": "hot_recommend_schema.json",
    "data": [{
            "url": "main.bankout",
            "src": "imgs/tab_home/hot/hot1.png",
            "name": ""
        },
        {
            "url": "",
            "src": "imgs/tab_home/hot/hot2.png",
            "name": ""
        },
        {
            "url": "main.mobilepay",
            "src": "imgs/tab_home/hot/hot3.png",
            "name": ""
        }
    ]
}
 * 
 */
  const stream = weex.requireModule("stream");
  const context = weex.requireModule("context");

  export default {
  /**
   * Props 接受父组件的传值
   * @prop {Json} jsonurl 热门推荐组件的json文件路径
   */
    props: ["jsonurl"],
    data() {
      return {
        hot_recommend_list: []
      };
    },
    created() {
      stream.fetch({
          method: "GET",
          url: this.$store.state.jsonBaseUrl + this.jsonurl,
          type: "json"
        },
        res => {
          this.hot_recommend_list = res.data.data;
        }
      );
    },
    methods: {
      goTo(url) {
        context.launchStage(url);
      }
    }
  };
</script>
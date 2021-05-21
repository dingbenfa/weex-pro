<template>
  <div>
    <div class="topic">
      <text class="topic_text">金话题</text>
      <text class="more" @click="jumpTo(more.url)">{{more.title}}</text>
    </div>
    <div v-if="showData==''">
      <scroller class="topic_img" scroll-direction="horizontal">
        <image class="fast" @click="jumpTo(item.url)" :src="item.src" v-for="(item,key) in ImgList" :key="key" />
      </scroller>
    </div>
    <div class="ad_area" v-for="(news,key) in NewsList" :key="key" @click="jumpTo(news.url)">
      <div class="text_area">
        <text class="face_text">{{news.title}}</text>
        <text class="hua_text">{{news.short}}</text>
        <text class="hours">{{news.time}}</text>
      </div>
      <image class="ad" :src="news.src" />
    </div>
  </div>
</template>
<style scoped>
.topic {
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
}

.topic_img {
  margin-top: 1px;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  height: 260px;
  width: 750px;
  margin-bottom: 1px;
}

.topic_text {
  color: #404561;
  font-size: 30px;
  font-weight: 600;
}

.more {
  font-size: 26px;
  color: #848996;
}

.fast {
  width: 450px;
  height: 200px;
  margin: 30px;
}

.ad_area {
  background-color: #ffffff;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 200px;
  border-bottom-color: #eeeeee;
  border-bottom-width: 1px;
}

.text_area {
  width: 450px;
  margin-right: 50px;
}

.face_text {
  font-size: 28px;
  color: #404561;
}

.hua_text {
  margin-top: 20px;
  font-size: 26px;
  color: #848996;
}

.hours {
  margin-top: 20px;
  color: #a6aeb4;
  font-size: 26px;
}

.ad {
  width: 200px;
  height: 140px;
  border-radius: 5px;
}
</style>
<script>
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");

export default {
  props: ["jsonurl","showData"],
  data() {
    return {
      ImgList: [],
      NewsList: [],
      more: {
        title: "",
        url: ""
      }
    };
  },
  created() {
    this.getGoldData()
  },
  methods: {
    jumpTo(url) {
      if (url) {
        context.launchStage(url);
      }
    },
    getGoldData(){
        if(!this.showData){
          stream.fetch(
            {
              method: "GET",
              url: this.$store.state.jsonBaseUrl + this.jsonurl,
              type: "json"
            },
            response => {
              if (response.status === 200) {
                this.more = response.data.data.more;
                this.ImgList = response.data.data.bigImgList;
                this.NewsList = response.data.data.newsList;
              }
            }
          );
        }else{
          this.NewsList=this.showData;
        }
      }
  },
  showData() {
        debugger;
        this.getGoldData()
      }
};
</script>
// created by dingbenfa
// 房源展示 -- 首页搜索
<template>
    <div class="bf-searchbar-container">
        <div class="bf-searchbar-back" @click="pageBack">
            <image class="bf-back-icon" src="/src/imgs/back.png"></image>
        </div>
        <div :class="['bf-searchbar', searchBtn? 'bf-sure-searchbar':'']">
            <div class="search-city" @click="openCityAreaPopup">
              <text class="search-city-lable">贵阳市</text>
              <image class="bf-more-icon" src="/src/imgs/bottom_sanjiao.png"></image>
              <div class="bf-line"></div>
            </div>
            <div class="search-val">
              <image class="bf-search-icon" src="/src/imgs/search_nor@3x.png"></image>
              <input ref="searchInp" value="瑞丽上层" :class="['search-input', searchBtn? 'search-sure-input':'']" :autofocus="autofocus" @focus="handleToSearch" placeholder-color="#999999" type="text" placeholder="请输入楼盘名称或地址"></input>
            </div>
        </div>
        <div class="bf-search-btn" @click="handleSearchList">
          <text class="search-btn-text">搜索</text>
        </div>

        <wxc-popup popup-color="rgb(92, 184, 92)"
            :show="cityAreaShow"
            @wxcPopupOverlayClicked="popupOverlayBottomClick"
            pos="bottom"
            height="400">
          <div>
            <city-area></city-area>
          </div>
        </wxc-popup>
    </div>
</template>

<script>
import { WxcSearchbar, WxcPopup } from 'weex-ui'
import { CityArea } from "../../../components/cityArea/index";

const modal = weex.requireModule('modal')

export default {
  name: "HomeSearchBar",
  props: {
    autofocus: {
      type: Boolean,
      default: false
    },
    searchBtn: {
      type: Boolean,
      default: false
    }
  },
  components:{
    WxcSearchbar,
    WxcPopup,
    CityArea
  },
  created() {
    
  },
  data() {
    return {
        cityAreaShow: false,
        searchbarStyle: {

        }
    };
  },
  methods: {
    pageBack () {
      if(this.searchBtn){
        this.$router.push({path:'/'})
      }else{
        this.goBack();
      }
    },
    // 跳转搜索页
    handleToSearch() {
      if(!this.searchBtn){
        this.$router.push({path:'/appSearch'})
      }
    },
    // 搜索查询
    handleSearchList() {
      modal.toast({
        message: "搜索查询",
        duration: 0.3
      })
    },
    openCityAreaPopup() {
      // this.cityAreaShow = true;
      modal.toast({
        message: "目前仅开放贵阳市",
        duration: 0.3
      })
    },
    popupOverlayBottomClick () {
      this.cityAreaShow = false;
    }
  }
};
</script>

<style scoped>
.bf-searchbar-container{
  width: 750px;
  background-color: #ffffff;
  /* height: 150px; */
  /* padding-top: 60px; */
  height: 88px;
  flex-direction: row;
  align-items: center;
}

.bf-searchbar-back{
  height: 88px;
  padding-left: 26px;
  padding-right: 15px;
  justify-content: center;
}

.bf-back-icon{
  width: 40px;
  height: 40px;
}

.bf-searchbar{
  width: 638px;
  height: 64px;
  flex-direction: row;
  justify-content: center;
  border-width: 1px;
  border-style: solid;
  border-color: #BBBBC2;
  border-radius: 32px;
}

.bf-sure-searchbar{
  width: 558px;
}

.bf-search-btn{
  height: 88px;
  width: 112px;
  justify-content: center;
  align-items: center;
}

.search-city{
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
}

.search-city-lable{
  font-size: 24px;
  color: #333333;
}

.search-val{
  position: relative;
}

.bf-more-icon{
  width: 12px;
  height: 12px;
  margin-left: 10px;
}

.bf-line{
  height: 25px;
  border-left-width: 2px;
  border-style: solid;
  border-color: #dddddd; 
  margin-left: 15px;
  margin-right: 15px;
}

.bf-search-icon{
  position: absolute;
  top: 22px;
  left: 0;
  width: 20px;
  height: 20px;
}

.search-input{
  height: 64px;
  width: 458px;
  padding-left: 30px;
  font-size: 24px;
}

.search-sure-input{
  width: 378px;
}

.search-btn-text{
  color: #309DF9;
  font-size: 28px;
}

</style>
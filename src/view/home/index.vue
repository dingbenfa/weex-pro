<template>
  <list>
    <header>
      <search-bar></search-bar>
      <div class="bf-header-menu" v-if="headerMenuShow" ref="headerMenu">
        <div class="bf-menu-card">
          <image class="bf-lable-icon" src="/src/imgs/easyRent/home/circleAdd.png"></image>
          <text class="bf-menu-name">发布房源</text>
        </div>
        <div class="bf-menu-card" @click="handleRentSelection">
          <image class="bf-lable-icon" src="/src/imgs/easyRent/home/menuMore.png"></image>
          <text class="bf-menu-name">筛选房源</text>
        </div>
      </div>
    </header>
    <cell @disappear="handleHeaderMenu(true)" @appear="handleHeaderMenu(false)">
      <slider class="slider" interval="3000" auto-play="true">
        <div class="frame" v-for="(img, key) in imageList" :key="key">
          <image class="image" resize="cover" :src="img.src"></image>
        </div>
      </slider>
    </cell>
    <cell>
      <div class="bf-menu-box">
        <div>
          <image class="bf-menu-icon" src="/src/imgs/easyRent/home/housingRelease.png"></image>
        </div>
        <div @click="handleRentSelection">
          <image class="bf-menu-icon" src="/src/imgs/easyRent/home/houseSelection.png"></image>
        </div>
      </div>
    </cell>
    <cell>
      <list-hearder title="房源信息" ref="listHeader"></list-hearder>
      <div>
          <house-list></house-list>
      </div>
    </cell>

    <dialog
      :show="returnDialogType().show"
      @confirm="confirm"
      @cancel="cancel"
      :content="returnDialogType().message"
      :left="returnDialogType().leftBtn"
      :right="returnDialogType().rightBtn"
    ></dialog>

    <rent-selection :show="rentSelectShow" @handleClearSelect="handleClearSelect" @emitParams="handleQueryParam"></rent-selection>

    <loading class="loading" @loading="onloading" :display="loadinging ? 'show' : 'hide'">
      <text class="indicator-text">加载中 ...</text>
      <loading-indicator class="indicator"></loading-indicator>
    </loading>
  </list> 

      <!-- <list> -->
        <!-- <cell v-for="(layout,key) in layoutlist" :key="key"> -->
          <!-- 轮播广告 -->
          <!-- <mp-slider
              autoPlay="true" 
              infinite="true" 
              hasIndicator="false" 
              interval='3000'
              :sliderStyle="sliderStyle"
              :jsonUrl="layout.url"
              :sliderImgStyle="sliderImgStyle"
              @mpSliderClick="adBannerJump"
              v-if="layout.type == 'AD'"
          ></mp-slider> -->

          <!-- 主菜单 -->
          <!-- <menu :jsonUrl="layout.url" v-if="layout.type === 'MENU'" @menuItemClick="menuItemClick"></menu> -->

          <!-- 房源信息 -->
         
        <!-- </cell> -->

      <!-- </list> -->

</template>

<script>
import { WxcPopup } from 'weex-ui'

import Dialog from "@/components/dialog/eyrtDialog";
import SearchBar from "./components/searchBar";
import Menu from "./components/menu";
import HouseList from "./components/houseList";
import ListHearder from "@/components/listHeader/index";

import RentSelection from "./components/rentSelection";

// import { MpSlider } from "madp-ui";

const modal = weex.requireModule('modal')
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
const dom = weex.requireModule('dom')

export default {
  name: "RentHome",
  components: {
    SearchBar,
    WxcPopup,
    // MpSlider,
    Menu,
    HouseList,
    ListHearder,
    RentSelection,
    Dialog
  },
  data() {
    return {
      loadinging: false,
      headerMenuShow: false,
      dialogType: 1,
      agreementDialog: {
        show: true,
        message: "以下展示房源的租客以及房屋所有权人租金由贵阳农商银行监管，确保租客和防护所有权人租金安全；房源运营由房屋租赁企业运营。",
        leftBtn: "取消",
        rightBtn: "我已知晓",
      },
      positionInfoDialog: {
        show: true,
        message: "是否允许“安心租”获取您的位置信息",
        leftBtn: "不允许",
        rightBtn: "允许",
      },
      positionOherDialog: {
        show: true,
        message: "定位您的位置为“成都市”，是否切换",
        leftBtn: "否",
        rightBtn: "是",
      },
      rentSelectShow: false,
      sliderStyle: {
        width: "750px",
        height: "246px",
        "background-color": "#ffffff"
      },
      sliderImgStyle: {
        width: "690px",
        height: "246px",
        "margin-left": "30px"
      },
      sliderIndex: "0",
      refreshing: false,
      layoutlist: [],
      laytou_url: "./json/easyRent/home/layout.json",
      imageList: [
        { src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg'},
        { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg'}
      ]
    };
  },
  created() {
    //查询楼层
    this.qry();
    // this.alertMsg(this.$store.state.testText + '11');
  },
  methods: {
    confirm() {
      this.agreementDialog.show = false;
    },
    cancel() {
      this.goBack();
    },
    popupRentSelectHide () {
      this.rentSelectShow = false;
    },
    // 房源筛选
    handleRentSelection() {
      this.rentSelectShow = true;
    },
    // 弹出层信息
    returnDialogType() {
      if(this.dialogType==2){ //获取位置信息
        return this.positionInfoDialog
      }else if(this.dialogType==3){ //定位位置获取
        return this.positionOherDialog
      }else{ //协议
        return this.agreementDialog
      }
    },
    onloading (event) {
      // modal.toast({ message: '加载更多', duration: 1 })
      this.loadinging = true
      setTimeout(() => {
        this.loadinging = false
      }, 2000)
    },
    handleHeaderMenu (show) {
      this.headerMenuShow = show
    },
    //轮播切换触发事件
    mpSliderPageChanged(event) {
      this.sliderIndex = event.index + "";
    },
    //点击轮播触发事件
    mpSliderClick(item) {
      context.launchStage(item.url);
    },
    mpSliderInnerClick(item, index) {
      if (item.url.indexOf("http") != -1) {
        location.href = item.url;
      } else {
        context.launchStage(item.url);
      }
    },
    //点击主菜单触发事件
    mpMenuItemClick(item) {
      context.launchStage(item.url);
    },
    qry(callback) {
      stream.fetch(
        {
          method: "GET",
          url: this.laytou_url,
          type: "json"
        },
        response => {
          if (response.status === 200) {
            this.layoutlist = response.data.data;
            if (callback) {
              callback();
            }
          }
        },
        () => {}
      );
    },
    //下拉刷新布局
    onrefresh(event) {
      this.alertMsg("正在刷新");
      this.refreshing = true;
      context.refreshRepo("main");
      this.qry(() => {
        this.refreshing = false;
      });
    },
    //点击主菜单触发事件
      menuItemClick(item) {
          if(item.name == '扫码取款') {
            this.qrCodeClick();
          } else {
            context.launchStage(item.url);
          }
      },
      // 筛选清空
      handleClearSelect(e) {
        const el = this.$refs.headerMenu
        dom.scrollToElement(el, { offset: 0, animated: false })

        this.rentSelectShow = false
      },
      // 筛选确认
      handleQueryParam(param) {
        const el = this.$refs.listHeader
        dom.scrollToElement(el, { offset: -190 })

        this.rentSelectShow = false;
        
        // modal.toast({ message: param, duration: 1 })
      }
  },
};
</script>

<style scoped>
.container{
  width: 750px;
  background-color: rgb(243, 243, 243);
  align-items: stretch;
}

.bf-header-menu{
  width: 750px;
  height: 88px;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  border-bottom-width: 1px;
  border-color: #F2F2F2;
  border-style: solid;
  padding-left: 30px;
  padding-right: 30px;
}

.bf-menu-card{
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 88px;
  line-height: 88px;
}

.bf-menu-name{
  color: #333333;
  font-size: 28px;
  font-weight: bold;
  margin-left: 15px;
}

.image {
  width: 690px;
  height: 300px;
  background-color: #ffffff;

}

.slider {
  padding-top: 15px;
  padding-left: 30px;
  width: 750px;
  height: 300px;
  background-color: #ffffff;
}

.frame {
  width: 690px;
  height: 300px;
  position: relative;
}

.bf-menu-box{
  width: 750px;
  background-color: #ffffff;
  flex-direction: row;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bf-menu-icon{
  width: 328px;
  height: 142px;
  margin-left: 17px;
  margin-right: 17px;
}

.bf-lable-icon{
  width: 48px;
  height: 48px;
}

.loading {
  width: 750;
  display: -ms-flex;
  display: -webkit-flex;
  display: flex;
  -ms-flex-align: center;
  -webkit-align-items: center;
  -webkit-box-align: center;
  align-items: center;
}
.indicator-text {
  color: #888888;
  font-size: 28px;
  text-align: center;
}
.indicator {
  margin-top: 20px;
  margin-bottom: 20px;
  height: 40px;
  width: 40px;
  color: #0000ff;
}

.bf-select-container{
  background-color: red;
}

</style>
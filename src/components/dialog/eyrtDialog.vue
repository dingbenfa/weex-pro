<template>
  <div class="wrapper">
    <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
    <div v-if="show" class="dialog-box">
      <div class="container">
        <div class="content">
            <text class="title">{{title}}</text>
            <text class="content-text">{{content}}</text>
        </div>
        <div class="bottom">
          <div class="bottom-left" @click="cancel">
            <text class="bottom-left-text">{{left}}</text>
          </div>
          <div class="bottom-right" @click="confirm">
            <text class="bottom-right-text">{{right}}</text>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { WxcOverlay } from "weex-ui";

export default {
  components: { 
    WxcOverlay 
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title:{
    	type:String,
    	default:""
    },
    content:{
    	type:String,
    	default:""
    },
    left:{
      type:String,
      default:"确认"
    },
    right:{
      type:String,
      default:"取消"
    },
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: fixed;
  width: 750px;
  /*兼容H5异常*/
  z-index: 99999;
}

.dialog-box{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  width: 622px;
  background-color: #fff;
  border-radius: 8px;
}

.content {
  width: 622px;
  align-items: center;
}

.title{
	color: #222;
	font-weight: 700;
	font-size: 36px;
	padding-top: 43px;
}

.content-text {
  width:526px;
  line-height: 42px;
  text-align: center;
  font-size: 30px;
  color: #666;
  padding-top: 30px;
  padding-bottom: 30px;
}

.bottom {
  width: 622px;
  height: 99px;
  border-top-width: 1px;
  border-top-color: #ddd;
  border-top-style: solid;
  justify-content: center;
  flex-direction: row;
}

.bottom-left {
  width: 310px;
  height: 99px;
  margin-right: 10px;
  border-right-color: #ddd;
  border-right-style: solid;
  border-right-width: 1px;
  justify-content: center;
  align-items: center;
}

.bottom-right {
  width: 312px;
  height: 99px;
  justify-content: center;
  align-items: center;
}

.bottom-left-text {
  font-size: 32px;
  color: #999;
}

.bottom-right-text {
  font-size: 32px;
  color: #DE240B;
}
</style>

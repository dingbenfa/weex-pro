<template>
	<div class="wrapper">
		<wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
		<div v-if="show" class="container" :style="{top:top}">
			<image class="bgImg" src="./imgs/successDBg.png"></image>
			<text class="content">{{content}}</text>
			<div class="btnBox" @click="confirm">
				<image class="btnBg" src="./imgs/successDBtn.png"></image>
				<text class="btn">{{btnText}}</text>
			</div>
		</div>
		
	</div>
</template>

<script>
	import { WxcOverlay } from "weex-ui";
	
	export default{
		components: { WxcOverlay },
		props: {
		    show: {
		      type: Boolean,
		      default: false
		    },
		    content:{
		    	type:String,
		    	default:""
		    },
		    btnText:{
		    	type:String,
		    	default:""
		    }
		},
		data(){
			return{
				top:"0px"
			}
		},
		mounted() {
		    this.getHeight();
		},
		methods:{
			 getHeight() {
		      var pageHeight = 750/weex.config.env.deviceWidth*weex.config.env.deviceHeight-360;
		      this.top = pageHeight / 2 + "px";
		   },
		   confirm(){
		   	this.$emit("confirm")
		   }
		}
	}
</script>

<style scoped>
.wrapper {
  position: fixed;
  width: 750px;
  /*兼容H5异常*/
  z-index: 99999;
}
.container{
	position: fixed;
	left: 186.5px;
	width: 377px;
	height: 387px;
	align-items: center;
}
.bgImg{
	position: absolute;
	left: 0px;
	top: 0px;
	width: 377px;
	height: 387px;
}
.content{
	font-family: PingFangSC-Medium;
	font-size: 30px;
	color: rgb(88,88,88);
	font-weight: 700;
	margin-top: 210px;
}
.btnBox{
	height: 112px;
	width: 275px;
	align-items: center;
	margin-top: 20px;
	justify-content: center;
}
.btnBg{
	position: absolute;
	top: 0px;
	left: 0px;
	height: 112px;
	width: 275px;
}
.btn{
	font-family: PingFangSC-Medium;
	font-size: 26px;
	color: rgb(255,255,255);
	margin-top: -25px;
}
	
</style>
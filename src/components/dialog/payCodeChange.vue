<template>
	<div class="conatainer">
		<wxc-overlay v-if="showBottom" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
		<div class="big" v-if="showBottom">
			<div class="title">
				<div class="chahao" @click="closeDialog">
					<image style="width: 45px;height: 45px;" src="./imgs/finance/chahao.png"></image>
				</div>
				<text class="font1">选择支付方式</text>
			</div>
			<scroller style="flex: 1;">
				<div class="item" @click="choose(item)" v-if="PebcArray.show">
					<div class="row">
						<image class="logoImg" src="./imgs/money.png"></image>
						<text class="font3">电子账户余额(PebcArray.money)</text>
					</div>
				</div>
				<div class="item" v-for="(item,key) in payCodeList" :key="key" @click="choose(item)">
					<div class="row1">
						<image class="logoImg" src="./imgs/finance/logoImg.png"></image>
						<text class="font3">贵阳农村商业银行</text>
                        <text class="font3">{{item.BankAcTypeName}}</text>
                        <text class="font3">({{item.AcNo|cardNumberHidden}})</text> <!--cardNumberHidden 截取后面4位-->
					</div>
					<div class="slectImgBox" v-if="item.isselect">
						<image class="slectImg" src="./imgs/finance/duihao.png"></image>
					</div>
				</div>
                <div class="item" @click="choose('ADD')">
					<div class="row">
						<image class="logoImg" src="./imgs/addList.png"></image>
						<text class="font3">添加银行卡</text>
					</div>
                    <div class="slectImgBox">
						<image class="img_right" src="./imgs/img_right.png"></image>
					</div>
				</div>
				<div style="width: 750px;height: 100px;"></div>
			</scroller>
		</div>
	</div>
</template>

<script>
	import { WxcOverlay } from "weex-ui";
	export default{
		props:{
			showBottom:{
				type:Boolean,
				default:false
			},
			payCodeList: {
				type: Array,
				default: () => []
			},
			PebcArray: {
				type: Object,
				default: () => ({})
			}
		},
		components:{
			WxcOverlay
		},
		data(){
			return{
			}
		},
		created(){
		},
		methods:{
			closeDialog(){
				this.$emit("closeBottomDialog");
			},
			choose(item){
				this.$emit("choose",item);
			}
		}
	}
</script>

<style scoped>
	.big{
		position: fixed;
		bottom: 0px;
		left: 0px;
		width: 750px;
		height: 600px;
		background-color: #FFFFFF;
	}
	.title{
		width: 750px;
		height: 100px;
		border-bottom-width: 1px;
		border-bottom-color:#e5e5e5 ;
		align-items: center;
		justify-content: center;
	}
	.font1{
		font-size: 30px;
		color: #333333;
	}
	.chahao{
		width: 60px;
		height: 60px;
		position: absolute;
		top: 20px;
		left: 30px;
		justify-content: center;
		align-items: center;
	}
	.slectImgBox{
		width: 60px;
		height: 60px;
		justify-content: center;
		align-items: center;
	}
	.row{
        width: 450px;
		flex-direction: row;
		align-items: center;
	}
	.row1{
        /* width: 500px; */
		/* background-color: red; */
		flex-direction: row;
		align-items: center;
	}
	.item{
		width: 700px;
		height: 100px;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		margin-left: 30px;
		border-bottom-width: 1px;
		border-bottom-color: #e5e5e5;
		padding-right: 20px;
	}
	.logoImg{
		width: 40px;
		height: 40px;
	}
	.font3{
		font-size: 26px;
		color: #333333;
		margin-left: 20px;
	}
	.font4{
		font-size: 26px;
		color: #999999;
		margin-left: 20px;
	}
	.slectImg{
		width: 27px;
		height: 19px;
	}
   .img_right{
		width: 17px;
		height: 30px;
	}
</style>
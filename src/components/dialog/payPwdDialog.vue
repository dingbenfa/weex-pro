<template>
	<div class="container">
		<wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
		<div v-if="show" :class="[showMoney?'bigBox1':'bigBox']" :style="{top:top}">
			<div class="top">
				<text class="title">{{title}}</text>
				<div class="imgBox" @click="close">
					<image class="closeImg" src="./imgs/finance/closeimg.png"></image>
				</div>
			</div>
			<div style="width: 690px;padding-bottom: 50px;">
				<div v-if="showMoney" style="height: 90px;width: 690px;align-items: center;">
					<div style="flex-direction: row;height: 90px;padding-top: 40px;align-items: center;">
						<text class="font1">{{moneyType}}：</text>
						<text class="font2">{{money | addDot}}</text>
						<text class="font1" style="margin-left: 5px;">元</text>
					</div>
				</div>
				<div :class="[showMoney?'fangge1':'fangge']" @click="openKbd">
					<div v-for="(item,key) in list" :key="key">
						<image class="img" :src="item.url"></image>
					</div>
				</div>
				<password-input immersiveStyle="true" openPEKbd="true" whenMaxCloseKbd="true" encryptType="22" :publicKey="$store.state.publicKey" @onTextChange="onTextChange" kbdType="Number" class="tit" minLength="6" maxLength="6" ref="Pwd" @PasswordInputShow="PasswordInputShow" kbdName="payPwd1" clearWhenOpenKbd="false"></password-input>
			</div>
			<div class="btn" @click="gotoNext">
				<image class="loginBgimg" src="./imgs/securityCenter/loginBg.png"></image>
				<text class="btnFont">提交</text>
			</div>
		</div>
	</div>
</template>

<script>
	import { WxcOverlay } from "weex-ui";
	export default {
		components: {
			WxcOverlay,
		},
		props: {
			show: {
				type: Boolean,
				default: false
			},
			moneyType: {
				type: String,
				default: "购买金额"
			},
			title: {
				type: String,
				default: "请输入交易密码"
			},
			money: {
				type: String,
				default: ""
			},
			showMoney: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				top: "0px",
				list: [{
						"url": "./imgs/payPwd/kuang1.png"
					},
					{
						"url": "./imgs/payPwd/kuang1.png"
					},
					{
						"url": "./imgs/payPwd/kuang1.png"
					},
					{
						"url": "./imgs/payPwd/kuang1.png"
					},
					{
						"url": "./imgs/payPwd/kuang1.png"
					},
					{
						"url": "./imgs/payPwd/kuang1.png"
					}
				]
			}
		},
		mounted() {
			this.getHeight();
//			this.$refs.Pwd.openPEkbd();
		},
		methods: {
			getHeight() {
				var pageHeight = 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 660;
				this.top = pageHeight / 2 + "px";
			},
			PasswordInputShow() {
				// for(var i = 0; i < this.list.length; i++) {
				// 	this.list[i].url = "./imgs/payPwd/kuang1.png"
				// }
			},
			onTextChange(data) {
				var textLength = parseInt(data.textlength);
				for(var i = 0; i < this.list.length; i++) {
					if(i < textLength) {
						this.list[i].url = "./imgs/payPwd/kuang2.png"
					} else {
						this.list[i].url = "./imgs/payPwd/kuang1.png"
					}
				}
			},
			close() {
				for(var i = 0; i < this.list.length; i++) {
					this.list[i].url = "./imgs/payPwd/kuang1.png"
				}
				// this.alertMsg();
				this.$emit("close") ;
			},
			gotoNext() {
				 this.postDo("Timestamp.do", {}, data => {
					this.$refs.Pwd.getValue(data.Timestamp, data => {
				 data = JSON.parse(data);
						if(parseInt(data.Length) == 0) {
							this.alertMsg("密码不能为空!");
							return true;
						} else if(parseInt(data.Length) != 6) {
							this.alertMsg("密码必须为6位数字密码!");
							return true;
						} else {
							this.$emit("getPwd", data.Value)
						}
					})
			 })
			},
			openKbd(){
				this.$refs.Pwd.becomeFirstResponder();
			}
		},
		filters: {
			addDot(val) {
				var Astr = val.toString();
				Astr = Astr.replace(/,/g, '');
				if(Astr.indexOf(".") != -1) {
					var str = Astr.split(".")[0]
					var afDot = Astr.split(".")[1]
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + "." + afDot;
				} else {
					var str = val.toString();
					var newVal = "";
					for(var i = 0; i <= str.length - 1; i++) {
						if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
							newVal = newVal + str.charAt(i) + ",";
						} else {
							newVal = newVal + str.charAt(i);
						}
					}
					return newVal + ".00";
				}
			},
			card(val){

			}
		}
	}
</script>

<style scoped>
	.bigBox {
		position: fixed;
		width: 690px;
		height: 500px;
		background-color: #FFFFFF;
		left: 30px;
		border-radius: 15px;
		align-items: center;
	}
	.bigBox1{
		position: fixed;
		width: 690px;
		height: 600px;
		background-color: #FFFFFF;
		left: 30px;
		border-radius: 15px;
		align-items: center;
	}

	.top {
		height: 100px;
		width: 690px;
		justify-content: center;
		align-items: center;
		border-bottom-color: rgb(244, 244, 244);
		border-bottom-width: 1px;
	}

	.title {
		font-size: 30px;
		color: #333333;
	}

	.closeImg {
		width: 23px;
		height: 23px;
	}

	.imgBox {
		height: 90px;
		width: 90px;
		position: absolute;
		right: 20px;
		top: 5px;
		justify-content: center;
		align-items: center;
	}

	.tit {
		width: 660px;
		height: 100px;
		margin-left: 45px;
		font-size: 35px;
		margin-top: 80px;
		line-height: 100px;
		opacity: 0;
	}

	.fangge {
		width: 690px;
		height: 100px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 80px;
	}
	.fangge1 {
		width: 690px;
		height: 100px;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		position: absolute;
		top: 150px;
	}

	.img {
		width: 82px;
		height: 87px;
	}

	.btn {
		width: 750px;
		height: 142px;
		margin-top: 20px;
		margin-bottom: 50px;
		justify-content: center;
		align-items: center;
	}

	.loginBgimg {
		height: 142px;
		width: 690px;
		position: absolute;
		left: 30px;
		top: 0;
	}

	.btnFont {
		font-size: 32px;
		color: #FFFFFF;
		font-weight: 700;
		margin-top: -30px;
	}

	.font1 {
		font-size: 26px;
		color: rgb(51, 51, 51);
	}

	.font2 {
		font-size: 36px;
		color: #F02333;
	}
</style>

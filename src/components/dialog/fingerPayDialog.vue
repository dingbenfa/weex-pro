<template>
	<div class="wrapper">
		<wxc-overlay :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
		<div v-if="show" class="container" :style="{top:top}">
			<image class="img" :src="fingerprintImageurl"></image>
			<text class="content-text">请验证已有指纹</text>
			<div class="bottom">
				<!--<div class="bottom-left" @click="cancel">
					<text class="bottom-left-text">取消</text>
				</div>-->
				<div class="bottom-right" @click="confirm">
					<text class="bottom-right-text">取消</text>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { WxcOverlay } from "weex-ui";
	const modal = weex.requireModule('modal')
	const stream = weex.requireModule('stream')
	const context = weex.requireModule('context')
	const fingerprint = weex.requireModule("fingerprint")
	const picker = weex.requireModule("picker");
	export default {
		props: {
			show: {
				type: Boolean,
				default: true
			}
		},
		components: {
			WxcOverlay
		},
		data() {
			return {
				top: "0px",
				fingerprintImageurl: this.$store.state.imgBaseUrl + "login/finger.png",
			};
		},
		mounted() {
			this.getHeight();
		},
		created() {
		},
		methods: {
			confirm() {
				this.$emit("NofingerLogin");
			},
			getHeight() {
				var pageHeight = 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 360;
				this.top = pageHeight / 2 + "px";
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

	.container {
		position: fixed;
		left: 91px;
		width: 568px;
		height: 360px;
		background-color: #fff;
		border-radius: 24px;
		align-items: center;
	}

	.img {
		margin-top: 30px;
		width: 125px;
		height: 125px;
	}

	.content-text {
		margin-top: 30px;
		width: 360px;
		text-align: center;
		font-size: 26px;
		color: rgb(94,93,93);
	}

	.bottom {
		margin-top: 30px;
		width: 568px;
		height: 99px;
		border-top-width: 1px;
		border-top-color: #ddd;
		border-top-style: solid;
		justify-content: center;
		flex-direction: row;
	}

	.bottom-left {
		width: 283px;
		height: 99px;
		margin-right: 10px;
		border-right-color: #ddd;
		border-right-style: solid;
		border-right-width: 1px;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
	}

	.bottom-right {
		width: 284px;
		height: 99px;
		justify-content: center;
		align-items: center;
		border-radius: 6px;
	}

	.bottom-left-text {
		font-size: 32px;
		color: #3277fa;
	}

	.bottom-right-text {
		font-family: PingFangSC-Regular;
		font-size: 32px;
		font-weight: 500;
		color: rgb(232,136,46);
	}
</style>

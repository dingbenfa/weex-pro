// created by dingbenfa
// 房源展示 -- 房间列表
<template>
	<div class="bf-list-container">
		<div class="bf-list-card" v-for="(item, key) in houseList" :key="key">
			<div class="bf-img-box">
				<image class="bf-list-img" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
			</div>
			<div class="bf-list-body" @click="gotoItem(item)">
				<div>
					<text class="bf-list-name">瑞丽上层21栋一单元 2420号 朝南 观山湖会展中心</text>
					<text class="bf-room-lable">17m² / 朝北 / 有阳台 / 大床 / 有卫生间 / 有卫生间 / 有卫生间</text>
				</div>
				<div class="bf-price-box">
					<div class="bf-price-text">
						<text class="bf-money-icon">¥</text>
						<text class="bf-list-cell">2800/月</text>
					</div>
					<div class="bf-small-btn" @click="handleToRoomInfo">
						<text class="small-btn-text">查看房源</text>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
export default {
	name: "HouseList",
	props: {
		jsonUrl: {
			type: String,
			default: ""
		}
	},
	data() {
		return {
			houseList: [{},{},{},{},{},{},{},{},{},{}],
		}
	},
	created() {
		// if(this.jsonUrl) {
		// 	this.getList();
		// }
	},
	methods: {
		getList() {
			stream.fetch({
					method: "GET",
					url: this.jsonUrl,
					type: "json"
				},
				res => {
					this.houseList = res.data.data.houseList;
				}
			);
		},
		gotoItem(item){
			context.launchStage(item.url);
		},
		// 查看房源详情
		handleToRoomInfo() {

		},
	}
}
</script>

<style scoped>
.bf-list-container{
	width: 750px;
	background-color: #ffffff;
	padding-left: 30px;
	padding-right: 30px;
	padding-top: 10px;
}

.bf-list-card{
	flex-direction: row;
	margin-bottom: 45px;
}

.bf-img-box{
	width: 256px;
	height: 192px;
	border-radius: 2px;
	overflow: hidden;
}

.bf-list-img{
	width: 256px;
	height: 192px;
}

.bf-list-body{
	width: 434px;
	height: 192px;
	padding-left: 20px;
	justify-content: space-between;
}

.bf-list-name{
	font-size: 28px;
	font-weight: bold;
	line-height: 42px;
	color: #333333;
	text-overflow: ellipsis;
	lines: 1;
}

.bf-list-cell{
	font-size: 28px;
	font-weight: bold;
	line-height: 42px;
	color: #FE7214;
}

.bf-room-lable{
	font-size: 24px;
	color: #999999;
	text-overflow: ellipsis;
	lines: 2;
	line-height: 36px;
}

.bf-lable-yellow{
	color: #BA452B;
}

.bf-lable-blue{
	color: #465198;
}

.bf-price-text{
	flex-direction: row;
}

.bf-money-icon{
	font-size: 21px;
	font-weight: bold;
	line-height: 44px;
	color: #FE7214;
	margin-right: 10px;
}

.bf-small-btn{
	width: 144px;
	height: 52px;
	border-radius: 4px;
	border-style: solid;
	border-width: 1px;
	border-color: #FE7214;
	justify-content: center;
	align-items: center;
}

.small-btn-text{
	font-size: 28px;
	color: #FE7214;
}

.bf-price-box{
	flex-direction: row;
	justify-content: space-between;
}

</style>

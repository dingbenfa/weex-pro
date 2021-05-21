<template>
	<div class="bf-list-container">
		<div class="bf-list-card" v-for="(item, key) in houseList" :key="key">
			<div class="bf-img-box">
				<image class="bf-list-img" src="https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg"></image>
			</div>
			<div class="bf-list-body" @click="gotoItem(item)">
				<text class="bf-list-name">瑞丽上层21栋一单元 2420号 朝南 观山湖会展中心</text>
				<text class="bf-list-cell">¥ 2800/月</text>
				<div class="bf-lable-box">
					<div class="bf-list-lable bf-bj-yellow"><text class="bf-lable-yellow">整租</text></div>
					<div class="bf-list-lable bf-bj-blue"><text class="bf-lable-blue">两室一厅</text></div>
					<div class="bf-list-lable bf-bj-blue"><text class="bf-lable-blue">68㎡</text></div>
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
		}
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
}

.bf-list-cell{
	font-size: 28px;
	font-weight: bold;
	line-height: 42px;
	color: #FE7214;
}

.bf-lable-box{
	flex-direction: row;
}

.bf-list-lable{
	margin-right: 10px;
	padding-left: 16px; 
	padding-right: 16px; 
	padding-top: 4px;
	padding-bottom: 4px;
	border-radius: 1px;
}

.bf-bj-yellow{
	background-color: #FFEECB;
}

.bf-bj-blue{
	background-color: #DFECFF;
}

.bf-lable-yellow{
	color: #BA452B;
}

.bf-lable-blue{
	color: #465198;
}


</style>

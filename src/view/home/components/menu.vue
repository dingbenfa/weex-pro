// created by dingbenfa
// 房源展示 -- 首页菜单
<template>
	<div>
		<div class="tab">
			<div class="menulist" :style="{'width':itemWidth}" v-for="(item,key) in menuList" :key="key" @click="JumpTo(item)">
				<image class="menuimg" :style="menuImgStyle" :src="item.src"></image>
				<text class="name" :style="fontStyle">{{item.name}}</text>
			</div>
		</div>
		
	</div>
</template>

<script>
	const context = weex.requireModule("context");
  	const stream = weex.requireModule("stream");
	export default {
		name: "HomeMenu",
		props:{
			jsonUrl: {
				type: String,
				default: ""
			}
		},
		data(){
			return{
				menuList:[],
				menuImgStyle:"",
				itemWidth:"",
				fontStyle:""
				
			}
		},
		mounted(){
			this.getMenu();
		},
		methods: {
			JumpTo(item) {
				this.$emit('menuItemClick',item);
				// context.launchStage(url);
			},
			getMenu() {
				stream.fetch({
						method: "GET",
						url: this.jsonUrl,
						type: "json"
					},
					response => {
						if(response.status === 200) {
							var tmp = response.data.data;
							this.menuList = tmp.menuList;
							var menuItem = tmp.menuItem;
							this.itemWidth = 750/menuItem.columns + "px";
							this.menuImgStyle["width"] = menuItem.imgWidth + "px";
							this.menuImgStyle["height"] = menuItem.imgHeight + "px";
							this.fontStyle["font-size"] = menuItem.fontSize;
							this.fontStyle["color"] = menuItem.fontColor;
						}
					},
					() => {}
				);
			}
		},
	}
</script>

<style scoped>
	.tab {
		width: 750px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		padding-bottom: 30px;
		background-color: #FFFFFF;
	}
	.menulist{
		align-items: center;
		justify-content: center;
	}
	.menuimg{
		height: 52px;
		width: 52px;
		margin-top: 30px;
	}
	.name{
		font-family: PingFangSC-Regular;
		font-size: 24px;
		color: rgba(102,102,102,0.9);
		letter-spacing: 0;
		margin-top: 20px;
	}
</style>
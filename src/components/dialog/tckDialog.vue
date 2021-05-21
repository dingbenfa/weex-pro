<template>
<scroller>
    <div class="wrapper">
        <wxc-overlay v-if="show" :show="true" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="container" :style="{top:top}">
            <div class="content">
                <text class="title">收益明细</text>
                <div class="font4">
                <text class="font5">日期</text>
                <text class="font10">收益(元)</text>
                </div>
                <div class="text2" v-for="(item,key) in detailData" :key="key">
                <text class="text1 color">{{item.Jiaoyirq}}</text>
                <text class="text4 color">{{item.Sjlxfsje | addDot}}</text>
                </div>
            </div>
                <div class="bottom-right" @click="confirm">
                    <text class="bottom-right-text">了解</text>
                </div>
        </div>
    </div>
</scroller>
</template>
<script>
    import {WxcOverlay} from "weex-ui";
    export default {
        components: {WxcOverlay},
        props: {
            show: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: ""
            },
            content: {
                type: String,
                default: ""
            },
            left: {
                type: String,
                default: "确认"
            },
            right: {
                type: String,
                default: "取消"
            },
            detailData:[]
        },
        data() {
            return {
                top: "0px",
                List:[]
            };
        },
        mounted() {
            this.getHeight();
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
                    if(afDot.length > 2){
                        return newVal + '.' + afDot.substring(0,2);
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
		},
methods: {
            confirm() {
                this.$emit("confirm");
            },
            cancel() {
                this.$emit("cancel");
            },
        },
        
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
        height: 950px;
        background-color: #fff;
        border-radius: 24px;
        align-items: center;
        margin-top: 200px;
    }

    .content {
        height: 850px;
        width: 568px;
        align-items: center;
    }

    .title {
        color: #222;
        font-weight: 700;
        font-size: 36px;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-bottom-color: #eaeaea;
        width: 568px;
        text-align: center;
    }
    .bottom-right {
        width: 568px;
        height: 99px;
        justify-content: center;
        align-items: center;
        border-radius: 6px;
    }
    .bottom-right-text {
        font-size: 32px;
        color: #3277fa;
    }

    .font2 {
        /*font-family: PingFangSC-Regular;*/
        display: inline;
        font-size: 22px;
        letter-spacing: 1px;
        line-height: 40px;
        color: rgb(51, 142, 218);
    }
    .font4{
        width:568px;
        height:70px;
        border-bottom-width: 1px;
        border-bottom-color: slategrey;
        background-color: #ddd;
        flex-direction: row;
        
    }
    .font5{
        font-size: 40px;
        color:rgb(51, 51, 51);
        margin-left: 140px;
    }
    .font10{
        font-size: 40px;
        color:rgb(51, 51, 51);
        margin-left: 140px;
    }
    .color{
        color: orange;
        margin-top: 5px;
    }
    .text1{
        font-size: 40px;
        margin-left:100px;
    }
    .text3{
        font-size: 40px;
        margin-left: 120px;
    }
    .text4{
        font-size: 40px;
        margin-left: 100px;
    }
    .text2{
        width:568px;
        height:70px;
        border-bottom-width: 1px;
        border-bottom-color: slategrey;
        background-color:#FFFFFF;
        flex-direction: row;
        
    }
</style>

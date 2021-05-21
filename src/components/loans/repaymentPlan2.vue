<template>
    <!--还款计划弹窗-->
    <div class="repayment_plan_wrapper">
       
        <!-- <c-overlay :repaymentPlanDialog="true" :hasAnimation="false"
                     opacity="0.5"></wxc-overlay> -->
                     <wxc-overlay  v-if="show" :hasAnimation="false"
                     opacity="0.5"></wxc-overlay>
                      <!-- <scroller class="repayment_plan_container"> -->
        <div v-if="show" class="repayment_plan_container" :style="{top:top}">
            <div class="repayment_plan_title">
                <div class="img_box">
                    <image class="close_img"></image>
                </div>
                <text class="title">{{repaymentPlanTitle}}</text>
                <div class="img_box" @click="closeDialog">
                    <image class="close_img" src="./imgs/loan/closeimg.png"></image>
                </div>
            </div>

            <div class="repayment_plan_content">
                <!--<div style="flex-direction: row;width: 568px;padding: 20px 30px;border-bottom: 1px solid #d2d2d2;justify-content: space-between">
                    <div style="flex-direction: row;">
                        <text class="repayment_plan_content_title">共计</text>
                        <text class="repayment_plan_content_title color">{{PeriodNo}}期</text>
                    </div>
                    <div style="flex-direction: row;">
                        <text class="repayment_plan_content_title">还款总额(元):</text>
                        <text class="repayment_plan_content_title color">{{PayTotalAmt}}</text>
                    </div>
                </div>-->
                <div class="repayment_plan_row">
                    <text class="repayment_plan_content_text1">还款时间</text>
                    <text class="repayment_plan_content_text">还款本金</text>
                    <text class="repayment_plan_content_text">还款利息</text>
                    <text class="repayment_plan_content_text2">还款总额</text>
                </div>
                <scroller class="scroller" style="flex: 1;">
                    <div style="flex-direction: row; align-items: center;justify-content: center;" v-for="(item,key) in planList" :key="key">
                        <text class="repayment_plan_content_text1">324234</text>
                        <text class="repayment_plan_content_text">2342343</text>
                        <text class="repayment_plan_content_text">234242</text>
                        <text class="repayment_plan_content_text2">324243</text>
                    </div>
                    <div style="height:30px;"></div>
                </scroller>
            </div>
        </div>
         <!-- </scroller> -->
    </div>
</template>

<script>
    import {WxcOverlay} from "weex-ui";

    export default {
        components: {WxcOverlay},
        name: "repaymentPlan",
        props: ['planList', 'repaymentPlanTitle','show'],
        data() {
            return {
                top: ''
            }
        },
        mounted() {
            this.getHeight()
        },
        methods: {
            getHeight() {
                var pageHeight = 750 / weex.config.env.deviceWidth * weex.config.env.deviceHeight - 460;
                this.top = pageHeight / 3 + "px";
            },
            closeDialog() {
                this.$emit('closeDialog')
            }
        },
        filters:{
        	addDot(val){
		        var Astr = val.toString();
		        Astr = Astr.replace(/,/g,'');
		        if(Astr.indexOf(".") != -1){
		            var str = Astr.split(".")[0]
		            var afDot = Astr.split(".")[1]
		            var newVal = "";
		            for(var i=0;i<=str.length-1;i++){
		                if((str.length-i)%3 == 1 && i!=(str.length-1)){
		                    newVal = newVal + str.charAt(i) + ",";
		                }else{
		                    newVal = newVal + str.charAt(i);
		                }
		            }
		            return newVal+"."+afDot;
		        }else{
		            var str = val.toString();
		            var newVal = "";
		            for(var i=0;i<=str.length-1;i++){
		                if((str.length-i)%3 == 1 && i!=(str.length-1)){
		                    newVal = newVal + str.charAt(i) + ",";
		                }else{
		                    newVal = newVal + str.charAt(i);
		                }
		            }
		            return newVal+".00";
		        }
		    },
		    sub(val){
		    	if(val == "" || val == undefined){
		    		return val;
		    	}else{
		    		return val.substring(0,4)+"-"+val.substring(4,6)+"-"+val.substring(6,8);
		    	}
		    }
        }
    }
</script>

<style scoped>

    /*弹出框*/
    .repayment_plan_wrapper {
        position: fixed;
        width: 750px;
        /*兼容H5异常*/
        z-index: 9999;
    }

    .repayment_plan_container {
        position: fixed;
        left: 91px;
        width: 568px;
        border-radius: 15px;
        align-items: center;
        height: 750px;
        background-color: white;
        z-index: 10000;
    }
    

    .repayment_plan_title {
        /* color: #222;
        font-weight: 700;
        font-size: 36px;
        margin-top: 43px;
        padding-bottom: 30px;
        border-bottom: 1px solid #d2d2d2;
        width: 568px;
        justify-content: center;
        align-items: center; */
        flex-direction: row;
        height: 100px;
		width: 568px;
		justify-content: space-between;
		align-items: center;
		border-bottom-color: rgb(244, 244, 244);
		border-bottom-width: 1px;
        position: absolute;
        
    }

    .title {
		font-size: 30px;
		color: #333333;
	}

    .repayment_plan_content {
        position: absolute;
        top:100px;
        width: 568px;
        height: 650px;
        justify-content: center;
        align-items: center;
        /* z-index: 100001; */
    }

    .repayment_plan_row {
        /* position: absolute; */
        height: 70px;
        flex-direction: row;
        width: 568px;
        align-items: center;
        justify-content: center;
    }

    .repayment_plan_content_text {
        line-height: 70px;
       	text-align: center;
        /* align-self: center; */
        font-size: 22px;
        color: #666;
        width: 141px;
        height: 70px;
        border-width: 0.5px;
       	border-color: #cbcbcb;
        /* z-index: 11000; */
    }
     .repayment_plan_content_text1 {
        /* align-self: center; */
        font-size: 22px;
        color: #666;
        width: 140px;
        height: 70px;
        border-left-width: 1px;
        border-top-width: 0.5px;
        border-right-width: 0.5px;
        border-bottom-width: 0.5px;
       	border-color: #cbcbcb;
       	line-height: 70px;
       	text-align: center;
        /* z-index: 11000; */
    }
     .repayment_plan_content_text2 {
       line-height: 70px;
       	text-align: center;
        /* align-self: center; */
        font-size: 22px;
        color: #666;
        width: 141px;
        height: 70px;
        border-left-width: 0.5px;
        border-top-width: 0.5px;
        border-right-width: 1px;
        border-bottom-width: 0.5px;
       	border-color: #cbcbcb;
        /* z-index: 11000; */
    }

    .repayment_plan_content_title {
        font-size: 25px;
        color: #666;
    }

    .img_box {
        /* height: 28px;
        width: 28px;
        position: absolute;
        right: 30px;
        top: 6px;
        justify-content: center;
        align-items: center;
        padding: 20px; */

        height: 90px;
		width: 90px;
		/* position: absolute; */
		right: 20px;
		top: 5px;
		justify-content: center;
		align-items: center;
    }

    .close_img {
        /* width: 28px;
        height: 28px; */

        width: 23px;
		height: 23px;
    }

    .scroller {
        width: 750px;
        height: 750px;
    }

    .color {
        color: orange;
    }
</style>
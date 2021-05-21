<template>
    <!--还款计划弹窗-->
    <div class="repayment_plan_wrapper">
        <wxc-overlay v-if="show" :hasAnimation="false" opacity="0.5"></wxc-overlay>
        <div v-if="show" class="repayment_plan_container" :style="{top:top}">
            <div class="repayment_plan_title">
                <text class="title">{{repaymentPlanTitle}}</text>
                <div class="img_box" @click="closeDialog">
                    <image class="close_img" src="./imgs/loan/closeimg.png"></image>
                </div>
            </div>

            <div class="repayment_plan_content">
                <div style="flex-direction: row;padding-left:20px;padding-right:20px;width: 568px;padding: 0 20px;border-bottom-width: 1px;border-bottom-color: #d4d4d4;justify-content: space-between">
                    <div style="flex-direction: row;">
                        <text class="repayment_plan_content_title">共计</text>
                        <text class="repayment_plan_content_title color">{{PeriodNo}}期</text>
                    </div>
                    <div style="flex-direction: row;">
                        <text class="repayment_plan_content_title">还款总额(元):</text>
                        <text class="repayment_plan_content_title color">{{PayTotalAmt}}元</text>
                    </div>
                </div>
                <div class="repayment_plan_row">
                    <text class="repayment_plan_content_text">还款时间</text>
                    <text class="repayment_plan_content_text1">还款本金</text>
                    <text class="repayment_plan_content_text1">还款利息</text>
                    <text class="repayment_plan_content_text1">还款总额</text>
                </div>
                <scroller
                        style="height: 520px;width: 568px;background-color: white;">
                    <div class="repayment_plan_content_data" v-for="(item,key) in planList" :key="key">
                        <text class="repayment_plan_content_text">{{item.ScheduledPaymentDate | sub}}</text>
                        <text class="repayment_plan_content_text1">{{item.PayPrincipalAmt | addDot}}</text>
                        <text class="repayment_plan_content_text1">{{item.PayInterestAmt}}</text>
                        <text class="repayment_plan_content_text1">{{item.PayAmt}}</text>
                    </div>
                    <div style="height:30px;"></div>
                </scroller>
            </div>
        </div>
    </div>
</template>

<script>
    import {WxcOverlay} from "weex-ui";

    export default {
        components: {WxcOverlay},
        name: "repaymentPlan",
        props: ['planList', 'repaymentPlanTitle', 'PayTotalAmt', 'PeriodNo', 'show'],
        data() {
            return {
                top: '',
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
        filters: {
            addDot(val) {
                var Astr = val.toString();
                Astr = Astr.replace(/,/g, '');
                if (Astr.indexOf(".") != -1) {
                    var str = Astr.split(".")[0]
                    var afDot = Astr.split(".")[1]
                    var newVal = "";
                    for (var i = 0; i <= str.length - 1; i++) {
                        if ((str.length - i) % 3 == 1 && i != (str.length - 1)) {
                            newVal = newVal + str.charAt(i) + ",";
                        } else {
                            newVal = newVal + str.charAt(i);
                        }
                    }
                    return newVal + "." + afDot;
                } else {
                    var str = val.toString();
                    var newVal = "";
                    for (var i = 0; i <= str.length - 1; i++) {
                        if ((str.length - i) % 3 == 1 && i != (str.length - 1)) {
                            newVal = newVal + str.charAt(i) + ",";
                        } else {
                            newVal = newVal + str.charAt(i);
                        }
                    }
                    return newVal + ".00";
                }
            },
            sub(val) {
                if (val == "" || val == undefined) {
                    return val;
                } else {
                    return val.substring(0, 4) + "-" + val.substring(4, 6) + "-" + val.substring(6, 8);
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
        /* z-index: 10000; */
        /*border-bottom-right-radius: 15px;*/
        /*border-bottom-left-radius: 15px;*/
    }

    .repayment_plan_title {
        height: 100px;
        width: 568px;
        justify-content: center;
        align-items: center;
        border-bottom-color: #d3d3d3;
        border-bottom-width: 1px;
    }

    .img_box {
        height: 90px;
        width: 90px;
        position: absolute;
        right: 20px;
        top: 5px;
        justify-content: center;
        align-items: center;
    }

    .close_img {
        width: 23px;
        height: 23px;
    }

    .title {
        font-size: 30px;
        color: #333333;
    }

    .repayment_plan_content {
        width: 568px;
        height: 650px;
        justify-content: center;
        align-items: center;
        /* z-index: 100001; */
    }

    .repayment_plan_row {
        height: 70px;
        flex-direction: row;
        width: 568px;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-bottom-color: rgb(239, 239, 239);
    }

    .repayment_plan_content_data {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-bottom-width: 1px;
        border-bottom-color: rgb(239, 239, 239);
    }

    .repayment_plan_content_text {
        width: 141px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 22px;
        color: #666;
        border-width: 0.5px;
        border-color: rgb(239, 239, 239);
    }

    .repayment_plan_content_text1 {
        width: 141px;
        height: 70px;
        line-height: 70px;
        text-align: center;
        font-size: 22px;
        color: #666;
        border-left-width: 0.5px;
        border-left-color: rgb(239, 239, 239);
    }

    .repayment_plan_content_title {
        font-size: 25px;
        color: #666;
    }

    .color {
        color: orange;
    }

</style>
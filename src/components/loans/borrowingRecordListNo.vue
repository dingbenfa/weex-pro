<template>
    <div class="container">
        <div v-for="(item,key) in List" :key="key" class="borrow_list">
            <div class="borrow_list_item">
                <div class="borrow_list_top">
                    <text class="borrow_list_date font color">放款日期 {{item.PutoutDate | sub}}</text>
                    <!--<text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-00'">随借随还</text>-->
                    <!--<text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-02'">等额本息</text>-->
                    <!--<text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-03'">一次性还本付息</text>-->
                    <text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-04'">按期付息一次还本</text>
                    <text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-01'">等额本息</text>
                </div>
                <div class="borrow_list_bottom">
                    <div class="borrow_list_bottom_row_img_box" v-if="item.LoanStatus == '1'">
                        <image class="borrow_list_bottom_row_img" src="./imgs/loan/overdue.png"></image>
                    </div>
                    <div class="borrow_list_bottom_row left">
                        <div class="row">
                            <text class="text1">借款金额(元)</text>
                            <text class="text color center">{{item.BusinessSum | addDot}}</text>
                        </div>
                        <div class="row" v-if="item.LoanStatus == '1'">
                            <text class="text">逾期天数</text>
                            <text class="text color">{{item.OverdueDays}} 天</text>
                        </div>
                    </div>
                    <div class="borrow_list_bottom_row" v-if="item.LoanStatus == '1'">
                        <div class="row">
                            <text class="text1">逾期金额(元)</text>
                            <text class="text color center">{{item.OverdueAmt | addDot}}</text>
                        </div>
                        <div class="row">
                            <text></text>
                        </div>
                    </div>
                    <div class="borrow_list_bottom_row">
                        <div class="row">
                            <text class="text1">当期还款金额(元)</text>
                            <text class="text color center">{{item.UnpayList[0].PayTotalAmt | addDot }}</text>
                        </div>
                        <div class="row">
                            <text class="text" @click="goToBorrowingDetail(item)">详情</text>
                            <div style="padding-left: 10px;justify-content: center;align-items: center;">
                                <image class="img_right" src="./imgs/loan/right.png"></image>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ["List"],
        components: {},
        data() {
            return {
                numberOfDate: 2,
                space: '',
                BusinessSum: '',
                OverdueAmt: '',
            }
        },
        methods: {
            goToBorrowingDetail(item) {
                this.$emit("goToBorrowingDetail", item);
            }
        },
        filters: {
            
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
    .container {
        align-items: center;
    }

    .font {
        font-size: 26px;
    }

    .color {
        color: rgb(132, 141, 159);
    }

    .borrow_list {
        width: 750px;
        flex-direction: column;
        justify-content: center;
    }

    .borrow_list_item {
        margin: 10px 0;
        background-color: white;
        padding: 6px 30px;
    }

    .borrow_list_top {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom-color: rgb(239, 239, 239);
        border-bottom-width: 1px;
        padding: 16px 0;
    }

    .borrow_list_type {
        color: #F8993A;
    }

    .borrow_list_bottom {
        justify-content: space-between;
        align-items: center;
        padding-top: 10px;
    }

    .borrow_list_bottom_row {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 690px;
    }

    .row {
        flex-direction: row;
        align-items: center;
    }

    .text {
        color: #4b4b4b;
        font-size: 28px;
        margin: 8px 0;
    }

    .text1 {
        color: #4b4b4b;
        font-size: 28px;
        margin: 8px 0;
        width: 300px;
    }

    .color {
        color: rgb(132, 141, 159);
    }

    .img_right {
        width: 15px;
        height: 25px;
    }

    .borrow_list_bottom_row_img_box {
        position: absolute;
        top:20px;
        right: 60px;
        z-index: 9999;
        width: 198px;
        height: 131px;
    }

    .borrow_list_bottom_row_img {
        z-index: 9999;
        width: 198px;
        height: 131px;
    }

</style>
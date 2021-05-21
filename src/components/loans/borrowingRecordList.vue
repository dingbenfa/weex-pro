<template>
    <div class="container">
        <div>
            <div v-for="(item,key) in noList" :key="key" class="borrow_list" @click="goToBorrowingDetail(item)">
                <div class="borrow_list_item">
                    <div class="borrow_list_top">
                        <text class="borrow_list_date font color">{{item.UnpayList[0].ScheduledPaymentDate | sub}} 应还总额(元)</text>
                        <!--<text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-00'">随借随还</text>-->
                        <!--<text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-02'">等额本息</text>-->
                        <!--<text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-03'">一次性还本付息</text>-->
                        <text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-04'">按期付息一次还本</text>
                        <text class="borrow_list_type font" v-if="item.RepaymentMethod == 'RPT-01'">等额本息</text>
                    </div>
                    <!-- 测试需要 后面一定删除 -->
                    <div class="borrow_list_top">
                        <text class="borrow_list_date font color">借据编号{{item.DuebillNo}}</text>
                    </div>


                    <div class="borrow_list_bottom">
                        <div class="borrow_list_bottom_right_img_box" v-if="item.LoanStatus == '1'">
                            <image class="borrow_list_bottom_right_img" src="./imgs/loan/overdue.png"></image>
                        </div>
                        <div class="borrow_list_bottom_left">
                            <div style="flex-direction: row;padding-bottom: 10px;">
                                <text class="borrow_list_num_symbol">¥</text>
                                <text class="borrow_list_num">{{item.UnpayList[0].PayTotalAmt | addDot}}</text>
                            </div>
                            <text class="borrow_list_tip font color">还款当日从账户余额自动提款</text>
                        </div>

                        <div class="borrow_list_bottom_right" style="flex-direction: row;align-items: center;"> 
                            <text class="borrow_list_detail font color">详情</text>
                            <image class="img_right" src="./imgs/tab_user/menu/img_right.png"></image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            noList: {
                type: Array,
                default: () => []
            },
        },
        components: {},
        data() {
            return {}
        },
        methods: {
            goToBorrowingDetail(item) {
                this.$emit("goToBorrowingDetail", item);
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
    .font {
        font-size: 26px;
    }

    .color {
        color: rgb(132, 141, 159);
    }

    .borrow_list {
        width: 700px;
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
        border-bottom: 1px solid rgb(229, 229, 229);
        height: 80px;
    }

    .borrow_list_bottom {
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 30px 0;
    }

    .borrow_list_num {
        font-size: 38px;
        color: #333;
        margin-top: 6px;
    }

    .borrow_list_num_symbol {
        font-size: 48px;
        color: #333;
        padding-right: 10px;
    }

    .borrow_list_type {
        color: #F8993A;
    }

    .borrow_list_bottom_left {

    }

    .borrow_list_bottom_right {
        position: relative;
    }

    .borrow_list_bottom_right_img_box {
        position: absolute;
        top:20px;
        right: 60px;
        z-index: 9999;
        width: 198px;
        height: 131px;
    }

    .borrow_list_bottom_right_img {
        z-index: 9999;
        width: 190px;
        height: 120px;
    }

    .borrow_list_detail {
        width: 60px;
    }

    .img_right {
        width: 15px;
        height: 25px;
    }
</style>
<template>
    <div style="width: 750px;">
        <div style="width: 750px;background-color: #FFFFFF;">
            <div class="cell" @click="toggle">
                <text class="menuName font">还款方式</text>
                <div class="row">
                    <text class="row_text font">每月等额本息</text>
                    <div>
                        <image class="img_right" src="./imgs/menu/img_right.png" v-if="financeShow"></image>
                        <image class="img_bottom" src="./imgs/menu/img_bottom.png" v-else></image>
                    </div>
                </div>
            </div>
            <!--子孩子-->
            <div class="cell_child" v-for="(item,key) in List" :key="key" @click="" v-if="!financeShow">
                <text class="itemName lightgray">{{item.name}}</text>
                <text class="font gray">{{item.money}}</text>
            </div>

            <div class="cell" @click="toggle">
                <text class="menuName font">借贷期限</text>
                <div class="row">
                    <text class="row_text font">12月</text>
                    <div>
                        <image class="img_right" src="./imgs/menu/img_right.png" v-if="financeShow"></image>
                        <image class="img_bottom" src="./imgs/menu/img_bottom.png" v-else></image>
                    </div>
                </div>
            </div>
            <div class="cell" @click="toggle">
                <text class="menuName font">借贷用途</text>
                <div class="row">
                    <text class="row_text font"></text>
                    <div>
                        <image class="img_right" src="./imgs/menu/img_right.png" v-if="financeShow"></image>
                        <image class="img_bottom" src="./imgs/menu/img_bottom.png" v-else></image>
                    </div>
                </div>
            </div>
            <div class="cell" @click="">
                <text class="menuName font">借贷利率</text>
                <div class="row">
                    <text class="row_text font">3.35%</text>
                </div>
            </div>
            <div class="cell" @click="toggle">
                <text class="menuName font">还款计划</text>
                <div class="row">
                    <text class="row_text font">还款日：每月20日</text>
                    <div>
                        <image class="img_right" src="./imgs/menu/img_right.png" v-if="financeShow"></image>
                        <image class="img_bottom" src="./imgs/menu/img_bottom.png" v-else></image>
                    </div>
                </div>
            </div>
            <div class="cell" @click="">
                <text class="menuName font">利息总额</text>
                <div class="row">
                    <text class="row_text font">5534.453</text>
                </div>
            </div>
        </div>
        <div class="read">
            <div style="width: 78px;height: 30px;padding-left: 40px;" @click="checkedC">
                <image class="checkImg" v-if="!checked" src="./imgs/loan/checkIn.png"></image>
                <image class="checkImg" v-else src="./imgs/loan/checkOut.png"></image>
            </div>
            <text class="read_text gray">本人已阅读《超值天添盈用户协议》</text>
        </div>
        <!--无下拉框的menu-->
        <!--<div class="cell">-->
        <!--<text class="menuName font">借款用途</text>-->
        <!--<text class="font gray">{{num}}</text>-->
        <!--</div>-->
    </div>
</template>

<script>

    export default {
        components: {},
        data() {
            return {
                financeShow: true,
                depositShow: true,
                List: [{
                    "name": "芝米天添盈",
                    "money": "23.00"
                },
                    {
                        "name": "亨利多理财",
                        "money": "23.00"
                    }
                ],
                depositList: [{
                    "name": "享利多",
                    "money": "23.00",
                    "url": "main.myXLD"
                }],
                date: '2010-3-2',
                num: '2442.35',
                sum: '3257.75',
                buttonText: '全额还款',
                checked: true
            }
        },
        methods: {
            toggle() {
                if (this.financeShow) {
                    this.financeShow = false;
                } else {
                    this.financeShow = true;
                }
            },
            checkedC() {
                if (this.checked) {
                    this.checked = false;
                } else {
                    this.checked = true;
                }
            },
        }
    }
</script>

<style scoped>

    .cell {
        height: 100px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-color: #EFEFEF;
        padding-right: 48px;
        background-color: #FFFFFF;
    }

    .font {
        font-size: 30px;
    }

    .menuName {
        font-family: PingFangSc-Regular;
        color: rgb(92, 92, 92);
        margin-left: 30px;
    }

    .row {
        flex-direction: row;
        align-items: center;
        height: 90px;
    }

    .row_text {
        padding-right: 20px;
        color: rgb(134, 134, 134);
    }

    .img_right {
        width: 15px;
        height: 25px;
    }

    .img_bottom {
        width: 24px;
        height: 14px;
    }

    .cell_child {
        width: 690px;
        height: 100px;
        margin-left: 36px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-color: #EFEFEF;
        padding-right: 48px;
    }

    .itemName {
        font-family: PingFangSc-Regular;
        font-size: 26px;
    }

    .lightgray {
        color: rgb(180, 180, 180);
    }

    .gray {
        color: gray;
    }

    .read {
        flex-direction: row;
        align-items: center;
        margin: 10px;
    }

    .read_text {
        margin: 20px 0;
        font-size: 24px;
    }

    .checkImg {
        width: 18px;
        height: 18px;
        margin-top: 10px;
    }
</style>
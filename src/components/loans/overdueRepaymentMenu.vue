<template>
    <div style="width: 750px;">
        <div style="width: 750px;background-color: #FFFFFF;">
            <div class="cell" @click="toggle">
                <text class="menuName font">逾期金额(元)</text>
                <div class="row">
                    <text class="row_text font"></text>
                    <div>
                        <image class="img_right" src="./imgs/tab_user/menu/img_right.png" v-if="financeShow"></image>
                        <image class="img_bottom" src="./imgs/tab_user/menu/img_bottom.png" v-else></image>
                    </div>
                </div>
            </div>
            <div class="cell_child" v-if="!financeShow">
                <text class="itemName lightgray">逾期本金</text>
                <text class="font gray"></text>
            </div>
            <div class="cell_child" v-if="!financeShow">
                <text class="itemName lightgray">逾期利息</text>
                <text class="font gray">{{item.money}}</text>
            </div>
        </div>
        <div class="others">
            <div class="cell">
                <text class="menuName font">逾期罚息(元)</text>
                <text class="font gray"></text>
            </div>
            <div class="cell">
                <text class="menuName font">应还总额(元)</text>
                <text class="font gray"></text>
            </div>
        </div>


        <div class="cell sum">
            <text class="menuName font">还款金额(元)</text>
<!--            <input type="number" class="input" placeholder="请输入还款金额" @input=""/>-->
            <weex-money ref="weexMoney" type="number" placeholder="请输入还款金额" class="input" @input="changeMoney"></weex-money>
            <div class="button">
                <text class="color_font">{{buttonText}}</text>
            </div>
        </div>
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
                buttonText: '全额还款'
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
            //调转详情页面
            gotoDetails(item) {
                context.launchStage(item.url);
            },
            //我的财富
            myDeposit() {
                if (this.depositShow) {
                    this.depositShow = false;
                } else {
                    this.depositShow = true;
                }
            },
            //跳转账户设置
            gotoAq() {
                context.launchStage("main.SecurityCenter");
            },
            toMsgCenter() {
                context.launchStage("main.msgCenter");
            }
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

    .others {
        margin-top: 20px;
    }

    .sum {
        margin-top: 20px;
    }

    .button {
        width: 160px;
        height: 62px;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
        border-width: 1px;
        border-color: rgba(255, 159, 66, 0.87);
    }

    .color_font {
        color: rgba(255, 159, 66, 0.87);
        font-size: 28px;
    }
    .input{
    	width: 300px;
    	color: rgb(180, 180, 180);
        font-size: 28px;
        placeholder-color:rgb(180, 180, 180);
        height: 100px;
        justify-content: center;
    }
</style>
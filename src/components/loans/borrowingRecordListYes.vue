<template>
    <div class="container">
        <div v-for="(item,key) in List" :key="key" class="borrow_list">
            <div class="borrow_list_item">
                <div class="borrow_list_bottom">
                    <div class="column">
                        <text class="text text1">借款金额(元)</text>
                        <text class="text">放款日期</text>
                    </div>
                    <div class="column">
                        <text class="text num">{{item.BusinessSum | addDot}}</text>
                        <text class="text color">{{item.PutoutDate | sub}}</text>
                    </div>
                    <text class="borrow_list_detail font gray" @click="goToBorrowingDetailYes(item)">详情></text>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["List"],
        components: {},
        data() {
            return {}
        },
        methods: {
            goToBorrowingDetailYes(item) {
                this.$store.state.Customer = item;
                this.jump("/borrowingDetailYes")
            }
        },
        filters: {
            addDot(val){
                if(val == "" || val == undefined) {
                    return "0.00"
                } else {
                    var Astr = val.toString();
                    Astr = Astr.replace(/,/g, '');
                    if(Astr.indexOf(".") != -1) {
                        var str = Astr.split(".")[0]
                        var afDot = Astr.split(".")[1]
                        if(afDot.length == 1){
                            afDot = afDot+"0"
                        }
                        var newVal = "";
                        for(var i = 0; i <= str.length - 1; i++) {
                            if((str.length - i) % 3 == 1 && i != (str.length - 1)) {
                                newVal = newVal + str.charAt(i) + ",";
                            } else {
                                newVal = newVal + str.charAt(i);
                            }
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

    .borrow_list_bottom {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 16px;
    }

    .column {
        flex-direction: column;
    }

    .text {
        color: #4b4b4b;
        margin: 12px 0;
        font-size: 28px;
    }

    .borrow_list_detail {
        justify-content: center;
        align-items: center;
    }

    .num {
        color: orange;
    }

    .gray {
        color: gray;
    }
</style>
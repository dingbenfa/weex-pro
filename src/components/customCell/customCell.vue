<template>
    <!--cell-->
    <div class="cell">
        <text class="left-font">{{title}}</text>
        <text class="right-font">{{content}}</text>
    </div>
</template>

<script>
    export default {
        name: "customCell",
        props:{
            title:{
                type:String,
                default:''
            },
            content:{
                type:String,
                default:''
            }
        }
    }
</script>

<style scoped>
    .cell {
        width: 686px;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-bottom-width: 1px;
        border-color: #EFEFEF;
        padding: 32px 0;
    }

    .left-font {
        font-size: 32px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999;
        flex: 1;
    }

    .right-font {
        font-size: 32px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #333;
        flex: 2;
        text-align: right;
    }

</style>
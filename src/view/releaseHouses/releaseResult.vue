// created by dingbenfa
// 我是房东 -- 发布房源结果
<template>
    <div class="bf-container">
        <div class="bf-top-bar"><text class="bf-bar-text">结果</text></div>

        <image src="/src/imgs/finance/bgimg3.png" style="width:186px;height:170px;margin-bottom: 30px;"></image>
        <text class="bf-tips-text">您的房源出租申请已提交租赁企业</text>
        <text class="bf-tips-text" style="margin-top: 25px;">请保持电话通畅</text> 

        <div class="center-rent-btn">
           <custom-btn title="确定" @sureClick="handleToSure"></custom-btn>
        </div>
    </div>
</template>

<script>
import CustomBtn from "@/components/customBtn/index";

export default {
    name: "ReleaseResult",
    components: {
        CustomBtn,
    },
    data() {
        return {

        }
    },
    methods: {
        // 确定
        handleToSure() {
            
        },
    }
}
</script>

<style scoped>
.bf-container{
    width: 750px;
    align-items: center;
    background-color: #fff;
}

.bf-top-bar{
    height: 88px;
    justify-content: center;
    align-items: center;
    margin-bottom: 95px;
}

.bf-bar-text{
    font-size: 36px;
    color: #333333;
    font-weight: bold;
}

.bf-tips-text{
    font-size: 28px;
    color: #333333;
}

.center-rent-btn {
    width: 750px;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 50px;
    background-color: #ffffff;
    flex-direction: row;
    justify-content: center;
}

.normal-btn {
    width: 290px;
    height: 64px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #F89531;
    border-radius: 4px;
    margin-right: 15px;
}

.normal-btn-font {
    color: #F89531;
    font-size: 32px;
    font-weight: 700;
}

.normal-btn-bc {
    width: 290px;
    height: 64px;
    justify-content: center;
    align-items: center;
    border-width: 1px;
    border-color: #F89531;
    background-color: #F89531;
    border-radius: 4px;
    margin-left: 15px;
}

.normal-btn-bc-font {
    font-size: 32px;
    font-weight: 400;
    color: #FFF;
}

</style>
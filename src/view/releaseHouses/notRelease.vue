// created by dingbenfa
// 我是房东 -- 未发布房源
<template>
    <div class="bf-container">
        <!-- <top-bar title="我是房东"></top-bar> -->

        <image src="/src/imgs/easyRent/note-grey-icon.png" style="width:320px;height:320px"></image>
        <text class="bf-tips-text">您暂未发布任何房源</text>

        <div class="center-rent-btn">
           <custom-btn title="发布房源" @sureClick="handleToRelease"></custom-btn>
        </div>
    </div>
</template>

<script>
//  import topBar from "@/components/topBar/index.vue";
import CustomBtn from "@/components/customBtn/index";

export default {
    name: "NotRelease",
    components: {
        // topBar,
        CustomBtn,
    },
    data() {
        return {

        }
    },
    methods: {
        // 发布房源
        handleToRelease() {
            
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
// created by dingbenfa
// 房源展示 -- 已下架详情
<template>
    <div class="bf-container">
        <!-- <top-bar title="房屋详情"></top-bar> -->

        <image src="/src/imgs/easyRent/note-grey-icon.png" style="width:320px;height:320px"></image>
        <text class="bf-tips-text">您收藏的房源已下架</text>

        <div class="center-rent-btn">
            <div class="normal-btn" @click="handleDelCollection">
                <text class="normal-btn-font">删除房源</text>
            </div>
            <div class="normal-btn-bc" @click="handleToCollection">
                <text class="normal-btn-bc-font">查看其他收藏</text>
            </div>
        </div>
    </div>
</template>

<script>
//  import topBar from "@/components/topBar/index.vue";

export default {
    components: {
        // topBar,
    },
    name: "offShelfDetail",
    data() {
        return {

        }
    },
    methods: {
        // 删除收藏
        handleDelCollection() {
            
        },
        // 查看其他收藏
        handleToCollection() {

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
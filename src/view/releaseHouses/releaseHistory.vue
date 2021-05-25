<template>
    <scroller>
        <div class="bf-container">
            <!-- <top-bar title="发布记录"></top-bar> -->

            <div class="bf-card-box">
                <div class="card-box-header">
                    <text class="card-box-name">瑞丽上层2栋一单元2402号</text>
                    <div class="card-box-label bf-bg-orange">
                        <text class="card-label-text bf-font-orange">待受理</text>
                    </div>
                </div>
                <div class="card-box-body">
                    <div class="card-box-item">
                        <text class="card-item-name">房源位置</text>
                        <text class="card-item-text">贵州省贵阳市观山湖区</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">期望租金(元/月)</text>
                        <text class="card-item-text">88,888.00</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">运营商</text>
                        <text class="card-item-text">贵州趣租租赁有限公司</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">建筑面积</text>
                        <text class="card-item-text">68m²</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">不动产权证号</text>
                        <text class="card-item-text">1231241283784793798798</text>
                    </div>
                </div>
            </div>

            <div class="bf-card-box">
                <div class="card-box-header">
                    <text class="card-box-name">瑞丽上层2栋一单元2402号</text>
                    <div class="card-box-label bf-bg-green">
                        <text class="card-label-text bf-font-green">已受理</text>
                    </div>
                </div>
                <div class="card-box-body">
                    <div class="card-box-item">
                        <text class="card-item-name">房源位置</text>
                        <text class="card-item-text">贵州省贵阳市观山湖区</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">期望租金(元/月)</text>
                        <text class="card-item-text">88,888.00</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">运营商</text>
                        <text class="card-item-text">贵州趣租租赁有限公司</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">建筑面积</text>
                        <text class="card-item-text">68m²</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">不动产权证号</text>
                        <text class="card-item-text">1231241283784793798798</text>
                    </div>
                </div>
            </div>

            <div class="bf-card-box">
                <div class="card-box-header">
                    <text class="card-box-name">瑞丽上层2栋一单元2402号</text>
                    <div class="card-box-label bf-bg-red">
                        <text class="card-label-text bf-font-red">已拒绝</text>
                    </div>
                </div>
                <div class="card-box-body">
                    <div class="card-box-item">
                        <text class="card-item-name">房源位置</text>
                        <text class="card-item-text">贵州省贵阳市观山湖区</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">期望租金(元/月)</text>
                        <text class="card-item-text">88,888.00</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">运营商</text>
                        <text class="card-item-text">贵州趣租租赁有限公司</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">建筑面积</text>
                        <text class="card-item-text">68m²</text>
                    </div>
                    <div class="card-box-item">
                        <text class="card-item-name">不动产权证号</text>
                        <text class="card-item-text">1231241283784793798798</text>
                    </div>
                </div>
            </div>
        </div>
    </scroller>
</template>

<script>
//  import topBar from "@/components/topBar/index.vue";

export default {
    name: 'ReleaseHistory',
    components: {
        // topBar,
    },
    data() {
        return {

        }
    },
    methods: {

    }
}
</script>

<style scoped>
.bf-container{
    width: 750px;
    align-items: center;
    background-color: #F1F2F2;
    padding-top: 108px;
}

.bf-card-box{
    width: 686px;
    height: 408px;
    background-color: #ffffff;
    padding: 30px;
    margin-bottom: 34px;
}

.card-box-header{
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 30px;
}

.card-box-name{
    font-size: 28px;
    color: #333333;
    font-weight: bold;
}

.card-box-label{
    height: 44px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
}

.card-label-text{
    font-size: 28px;
}

.card-box-item{
    flex-direction: row;
    margin-top: 20px;
    justify-content: space-between;
    align-items: center;
}

.card-item-name{
    font-size: 28px;
    color: #999999;
}

.card-item-text{
    font-size: 28px;
    color: #333333;
}

.bf-font-orange{
    color: #F27716;
}

.bf-font-green{
    color: #55A33F;
}

.bf-font-red{
    color: #E14028;
}

.bf-bg-orange{
    background-color: #FCE4D0;
}

.bf-bg-green{
    background-color: #DDEDD9;
}

.bf-bg-red{
    background-color: #F9D9D4;
}

</style>
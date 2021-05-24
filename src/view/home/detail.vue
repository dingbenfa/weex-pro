<template>
    <scroller>

        <div class="bf-rent-container">
            <div style="padding-left:30px;">
                <div class="bf-rent-header">
                    <div class="rent-header-left">
                        <div  class="rent-title-box">
                            <text class="rent-title-pri">¥ 2800 </text>
                            <text class="rent-title-label"> 元/月</text>
                        </div>
                        <text class="bf-font-sign">瑞丽上层21栋一单元 2420号</text>
                    </div>
                    <div class="rent-love-box" @click="handleCollection">
                        <image v-if="!isCollection" src="/src/imgs/easyRent/home/collection.png" style="width:48px;height:48px"></image>
                        <image v-else src="/src/imgs/easyRent/home/collectioned.png" style="width:48px;height:48px"></image>
                        <text class="rent-love-text">收藏</text>
                    </div>
                </div>
                
                <div class="bf-rent-info">
                    <div class="rent-info-block">
                        <text class="bf-font-sign">69㎡</text>
                        <text class="bf-font-label">房屋面积</text>
                    </div>
                    <div class="rent-info-block">
                        <text class="bf-font-sign">一室两厅</text>
                        <text class="bf-font-label">户型</text>
                    </div>
                    <div class="rent-info-block">
                        <text class="bf-font-sign">2021.12.12</text>
                        <text class="bf-font-label">入住时间</text>
                    </div>
                </div>

                <div class="rent-info-cell">
                    <text class="bf-info-text">房屋说明：主卧比较吵闹离街道比较近</text>
                    <text class="bf-info-text">水电费缴费模式：以实际生产为准</text>
                    <text class="bf-info-text">房屋运营公司：趣租有限公司</text>
                </div>

                <div class="bf-service-container">
                    <image src="/src/imgs/easyRent/home/person.png" style="width:32px;height:32px"></image>
                    <text class="bf-service-title">您的任何疑问，客服将耐心解答</text>
                    <div class="bf-service-btn" @click="handleServiceTel">
                        <text class="bf-font-blue">客服电话</text>
                    </div>
                </div>
            </div>

            <list-hearder title="房屋设施"></list-hearder>
            <div class="bf-flex-row">
                <div class="bf-device-box">
                     <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                     <text class="bf-font-grey">床</text>
                </div>
                <div class="bf-device-box">
                     <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                     <text class="bf-font-grey">浴缸</text>
                </div>
                <div class="bf-device-box">
                     <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                     <text class="bf-font-grey">电话</text>
                </div>
                <div class="bf-device-box">
                     <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                     <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box" @click="handleMoreDevice">
                     <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                     <text class="bf-font-grey">更多</text>
                </div>
            </div>

            <list-hearder title="地理位置"></list-hearder>
            <div class="bf-map-container">
                <image src="/src/imgs/easyRent/home/map.png" style="width:690px;height:288px"></image>
            </div>

        </div>

        <div class="bf-fixed-bottom">
            <custom-btn title="下单" @sureClick="handleToOrder"></custom-btn>
        </div>
        
        <!-- 设施更多 -->
        <ert-popup title="房屋设施" :height="720" :pupopShow="moreDeviceshow" @handlePupopClose="devicePupopClose">
            <div class="bf-flex-row" style="padding-top:30px;">
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">床</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">浴缸</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">电话</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">热水器</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">床</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">浴缸</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">电话</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">热水器</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">床</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">浴缸</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">电话</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">热水器</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">床</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">浴缸</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">电话</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">热水器</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">床</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">浴缸</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">电话</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">热水器</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">热水器</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
                <div class="bf-device-box">
                    <image src="/src/imgs/easyRent/home/device-icon.png" style="width:64px;height:64px"></image>
                    <text class="bf-font-grey">空调</text>
                </div>
            </div>            
        </ert-popup>

        <!-- 客服电话 -->
        <ert-popup title="客服电话" :height="500" :pupopShow="serviceshow" @handlePupopClose="servicePupopClose">
            <div class="bf-flex-row" style="padding-top:30px;">
                <text>客服电话</text>
            </div>            
        </ert-popup>
    </scroller>
</template>

<script>
import ListHearder from "@/components/listHeader/index";
import CustomBtn from "@/components/customBtn/index";
import ertPopup from "@/components/ertPopup/index";


export default {
    name: "RentHomeDetail",
    data() {
        return {
            isCollection: false,
            moreDeviceshow: false,
            serviceshow: false,
        }
    },
    components: {
        ListHearder,
        CustomBtn,
        ertPopup
    },
    methods: {
        // 下单
        handleToOrder() {

        },
        // 收藏
        handleCollection() {
            this.isCollection = !this.isCollection
        },
        // 房屋设施更多
        handleMoreDevice() {
            this.moreDeviceshow = true
        },
        // 延迟关闭房屋设施更多pupop
        devicePupopClose() {
            let that = this;
            setTimeout(function(){
                that.moreDeviceshow = false
            },500)
        },
        // 客服电话
        handleServiceTel() {
            this.serviceshow = true
        },
        // 延迟关闭客服电话pupop
        servicePupopClose() {
            let that = this;
            setTimeout(function(){
                that.serviceshow = false
            },500)
        },
        
    }
}

</script>

<style scoped>
.bf-rent-container{
    width: 750px;
    align-items: center;
    padding-bottom: 90px;
}

.bf-rent-header{
    flex-direction: row;
    justify-content: space-between;
    padding-top: 35px;
    padding-bottom:35px;
}

.rent-header-left{
    width: 570px;
}

.rent-love-box{
    flex-direction: row;
    justify-content: flex-end;
    align-items:center;
    width: 150px;
    padding-right:30px;
}

.rent-love-text{
    color: #333333;
    font-size: 28px;
    font-weight: bold;
    margin-left: 3px;
}

.rent-title-box{
    flex-direction: row;
    align-items: center;
    padding-bottom: 20px;
}

.rent-title-pri{
    color: #FF7C35;
    font-size: 36px;
    font-weight: bold;
}

.rent-title-label{
    color: #FF7C35;
    font-size: 28px;
    font-weight: bold;
}

.bf-rent-info{
    width: 690px;
    flex-direction: row;
    justify-content: space-around;
    border-top-width: 2px;
    border-bottom-width: 2px;
    border-style: solid;
    border-color: #F2F2F2;
    padding-top:30px;
    padding-bottom:30px;
}

.rent-info-block{
    align-items:center;
}

.bf-font-sign{
    color: #333333;
    font-size: 32px;
    font-weight: bold;
    line-height: 42px;
}

.bf-font-label{
    color: #999999;
    font-size: 28px;
    margin-top: 10px;
}

.rent-info-cell{
    padding-top: 10px;
}

.bf-info-text{
    color: #999999;
    font-size: 28px;
    margin-top:30px;
    line-height: 42px;
}

.bf-font-grey{
    color: #999999;
    font-size: 28px;
    margin-top:10px;
    line-height: 42px;
}

.bf-service-container{
    width: 690px;
    height:104px;
    flex-direction:row;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
    margin-top: 35px;
    background-color: #F7FAFF;
    margin-bottom:10px;
}

.bf-service-title{
    color: #333333;
    font-size: 28px;
    font-weight: bold;
}

.bf-service-btn{
    width: 144px;
    height: 52px;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    border-width:1px;
    border-style:solid;
    border-color: #27A2FF;
    border-radius: 4px;
}

.bf-font-blue{
    color: #27A2FF;
    font-size: 28px;
}

.bf-flex-row{
    flex-direction:row;
    flex-wrap: wrap;
    /* justify-content: space-around; */
    padding-left:30px;
    padding-right:30px;
    padding-bottom:15px;
}

.bf-device-box{
    width:137px;
    justify-content: center;
    align-items: center;
    padding-bottom:30px;
}

.bf-map-container{
    width: 690px;
    height: 288px;
}

.bf-fixed-bottom{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color:#ffffff;
}

</style>
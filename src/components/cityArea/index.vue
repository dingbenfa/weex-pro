// created by dingbenfa
// 房源展示 -- 城市区域选择
// **** 弹层组件，支持上下左右四个方向面板弹出
// **** title   弹层标题
// **** height  弹层高度
// **** pupopShow  开启打开popup
// **** popupOverlayClicked  事件回调
// **** handlePupopClose  调用关闭
// **** // 
<template>
    <div>
        <wxc-popup ref="wxcPopup" popup-color="rgba(0, 0, 0, 0.01)"
        :show="pupopShow"
        :height="height"
        @wxcPopupOverlayClicked="wxcPopupOverlayClicked"
        pos="bottom">
            <div class="bf-popup-container">
                <div class="bf-popup-header">
                    <div class="popup-header-title">
                        <text class="popup-header-text">{{title}}</text>
                    </div>
                    <div class="popup-header-close" @click="handlePupopClose">
                        <image src="/src/imgs/easyRent/close-icon.png" style="width:48px;height:48px"></image>
                    </div>
               	</div>
                <list>
				<cell>
					<div class="bf-cell-header">
						<text class="cell-header-title">城市</text>
						<div class="bf-city-box">
							<div class="bf-city-btn bf-active-btn" v-for="(item, index) in cityAreaList.city" :key="index">
								<text class="city-btn-text bf-active-btn-text">{{ item }}</text>
							</div>
						</div>
						<text class="cell-header-title">区域</text>
					</div>
				</cell>
                  <cell>
                    <div class="bf-cell-container">
                        <div class="bf-cell-item" v-for="(item, index) in cityAreaList.area" :key="index" @click="handleCityAreaCheck(item.name)">
                            <text class="cell-item-name">{{ item.name }}</text>
                            <image :src="value.includes(item.name)? '/src/imgs/xy_select.png':'/src/imgs/xy_default.png'" style="width:30px;height:30px"></image>
                        </div>
                    </div>
                  </cell>
                </list>
            </div>
        </wxc-popup>
    </div>
</template>

<script>
import { WxcPopup } from "weex-ui";

export default {
  name: "Popup",
  props: {
    title: {
      type: String,
      default: "城市区域选择"
    },
    pupopShow: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number,
      default: 840
    },
    moreSel: {
      // 是否多选
      type: Boolean,
      default: false
    },
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      cityAreaList: {
        city: ["贵阳市"],
        area: [
          { name: "观山湖区", value: "1" },
          { name: "花溪区", value: "2" },
          { name: "云岩区", value: "3" },
          { name: "南明区", value: "4" },
          { name: "白云区", value: "5" },
          { name: "乌当区", value: "6" }
        ]
      }
    };
  },
  components: {
    WxcPopup
  },
  methods: {
    wxcPopupOverlayClicked() {
      this.$emit("popupOverlayClicked");

      this.$emit("handlePupopClose");
      this.$refs.wxcPopup.hide();
    },
    handlePupopClose() {
      this.$emit("handlePupopClose");
      this.$refs.wxcPopup.hide();
    },
    // 点击选择区域
    handleCityAreaCheck(val) {
      if (this.moreSel) {
        if (this.value.includes(val)) {
          let index = this.value.indexOf(val);
          this.value.splice(index, 1);
        } else {
          this.value.push(val);
        }
      } else {
        if (this.value.includes(val)) {
          this.value = [];
        } else {
          this.value = [];
          this.value.push(val);
        }

        this.$emit("getCityArea", { city: ["贵阳市"], area: this.value });
      }
    }
  }
};
</script>

<style scoped>
.bf-popup-container {
  background-color: #ffffff;
  border-top-left-radius: 32px;
  border-top-right-radius: 32px;
  flex: 1;
}

.bf-popup-header {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding-left: 30px;
  padding-right: 30px;
  border-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #f2f2f2;
  position: relative;
}

.popup-header-title {
  height: 120px;
  width: 690px;
  justify-content: center;
  align-items: center;
}

.popup-header-text {
  font-size: 32px;
  font-weight: bold;
  color: #333333;
}

.popup-header-close {
  height: 120px;
  width: 120px;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 30px;
}

.bf-cell-container {
  width: 750px;
  background-color: #ffffff;
  margin-top: 20px;
  align-items: center;
}

.bf-cell-item {
  height: 112px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 690px;
  border-bottom-width: 1px;
  border-style: solid;
  border-bottom-color: #f1f2f2;
}

.cell-item-name {
  font-size: 32px;
  color: #333333;
}

.bf-cell-header {
  background-color: #fbfbfb;
  width: 750px;
  padding-left: 30px;
  padding-right: 30px;
}

.cell-header-title {
  font-size: 28px;
  color: #999999;
  margin-top: 15px;
  margin-bottom: 15px;
}

.bf-city-box {
  flex-direction: row;
  flex-wrap: wrap;
  padding-bottom: 10px;
}

.bf-city-btn {
  height: 65px;
  width: 150px;
  border-style: solid;
  border-width: 1px;
  border-color: #e0e0e0;
  background-color: #ffffff;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 30px;
}

.city-btn-text {
  font-size: 28px;
  color: #333333;
}

.bf-active-btn {
  border-color: #f89531;
  background-color: rgba(248, 149, 49, 0.2);
}

.bf-active-btn-text {
  color: #f89531;
}
</style>
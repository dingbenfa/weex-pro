<template>
  <div class="container" :style="{backgroundColor:backgroundColor}">
    <div class="cell-box" v-for="(items,index) in cellData" :key="index">
      <div class="row" v-for="(item,key) in items.cell" :key="key" :class="[key+1==items.cell.length ? 'm-btm0' : '']">

        <mp-cell :leftTxt="item.title"  :btnTxt="item.content" :arrowIcon="arrowIcon" @mpCellClick="jumpTo(item.url)" @mpCellLeftClick="jumpTo(item.url)" @mpCellBtnClick="jumpTo(item.url)" :hasBottomBorder="key+1==items.cell.length ? '' : '1'" ></mp-cell>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 750px;
}
.cell-box {
  margin-top: 16px;
}
.row {
  height: 120px;
  width: 750px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
  padding-left: 20px;
  padding-right: 43px;
  background-color: #ffffff;
}
.m-btm0 {
  margin-bottom: 0px;
}

</style>
<script>

import { MpCell} from "madp-ui";
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
export default {
  components: {
    MpCell
  },
  props: {
    cell: {
      type: String,
      default: "tab_user/cell.json"
    }
  },
  created() {
    this.getData();
  },
  data() {
    return {
      arrowIcon:"./imgs/arrow-right.png",
      backgroundColor: "#F8F8F8",
      cellData: []
    };
  },
  methods: {
    getData() {
      if (this.cell) {
        stream.fetch(
          {
            method: "GET",
            url: "./json/" + this.cell,
            type: "json"
          },
          res => {
            this.cellData = res.data.data;
          }
        );
      }
    },
    jumpTo(url) {
      if (url) {
        context.launchStage(url);
      }
    }
  },
  watch: {
    cell() {
      this.getData();
    }
  }
};
</script>
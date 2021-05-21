<template>
  <div class="container">
    <div class="wrap">
      <div class="row1">
        <div class="row1_content">
          <div class="item1">
            <text class="text1">未还总金额(元)</text>
          </div>
          <div class="item1">
            <text class="number color">{{info1}}</text>
          </div>
        </div>
        <!--<div class="row1_tip">-->
        <!--<text class="tip">全部还清</text>-->
        <!--</div>-->
      </div>
      <span class="line"></span>
      <div class="row1">
        <div class="item1">
          <text class="text1">目前分期还款金额(元)</text>
        </div>
        <div class="item1">
          <text class="number">{{info1}}</text>
        </div>
      </div>
      <div class="row2">
        <text class="text2">还款金额(元)</text>
        <div class="amount">
          <text class="amount_title">¥</text>
          <input class="tit"
                 placeholder="您的可借金额是"
                 type="text" />
        </div>
      </div>
      <div class="row3">
        <ul>
          <li class="text3">
            按月付息只支持提前结清
          </li>
        </ul>
      </div>
      <!--<div class="bottom-right" @click="confirm">-->
      <!--<text class="bottom-right-text">确认</text>-->
      <!--</div>-->
    </div>
  </div>
</template>


<script>
import { WxcOverlay } from 'weex-ui'

export default {
  components: {
    WxcOverlay
  },
  data() {
    return {
      imgshow: true,
      amount: 72899,
      info1: '35,392.12',
      info2: '203.13'
    }
  },
  methods: {}
}
</script>

<style scoped>
.container {
  width: 750px;
  background-color: rgb(248, 248, 248);
}

.wrap {
  text-align: center;
}

.row1 {
  height: 260px;
  margin: 0 20px;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
}

.item1 {
  width: 690px;
  height: 70px;
  margin: 0 auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.line {
  border-bottom: 1px solid #ebebeb;
}

.row2 {
  margin: 30px 20px;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 30px 20px;
}

.row3 {
  margin: 30px 20px;
  flex-direction: row;
  justify-content: flex-start;
  background-color: rgb(248, 243, 236);
  padding: 30px 20px;
}

.amount {
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  height: 100px;
}

.amount_title {
  font-size: 72px;
  padding-right: 12px;
}

.text3 {
  margin-left: 40px;
  font-size: 22px;
  color: #fc8109;
  list-style-type: disc;
}

.text1 {
  font-size: 24px;
  color: #808080;
}

.text2 {
  font-size: 36px;
  color: #666;
}

.number {
  font-size: 60px;
}

.color {
  color: #fc8109;
}

input {
  font-size: 32px;
  font-weight: 300;
  color: lightgray;
}
</style>
<!--31 提前还款-->
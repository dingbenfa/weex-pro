<template>
    <div class="bf-list-title">
        <image class="bf-title-icon" src="/src/imgs/easyRent/home/suxian.png"></image>
        <text class="bf-list-lable">{{ title }}</text>
    </div>
</template>

<script>
export default {
    name: "",
    props: {
        title: {
            type: String,
            default: "标题"
        }
    }
}
</script>

<style scoped>
.bf-list-title{
  width: 750px;
  background-color: #ffffff;
  height: 78px;
  flex-direction: row;
  align-items: center;
  padding-left: 30px;
}

.bf-title-icon{
  width: 6px;
  height: 30px;
  margin-right: 15px;
}

.bf-list-lable{
  font-size: 32px;
  font-weight: bold;
  color: #333333;
}
</style>
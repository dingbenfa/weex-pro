<template>
    <div class="container">
        <image :src="imgUrl" class="img_url" />
    </div>
</template>
<style scoped>
.container {
  height: 100px;
  justify-content: center;
  align-items: center;
}
.img_url {
  height: 22px;
  width: 187px;
}
</style>
<script>
/**
 * @module 底部组件
 * @description 页面滑到底部显示内容
 * @example  <bottom></bottom>
 * 
 * 
 */
export default {
    data(){
        return {
            imgUrl:this.$store.state.imgBaseUrl + "tab_home/bottom/downlogo@3x.png"
        }
    }
};
</script>

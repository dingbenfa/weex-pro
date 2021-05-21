<template>
  <image :src="adData.src" class="ad_src" @click="jumpTo(adData.url)" />
</template>
<style scoped>
.ad_src {
  width: 750px;
  height: 200px;
  margin-bottom: 15px;
}
</style>
<script>
const stream = weex.requireModule("stream");
const context = weex.requireModule("context");
export default {
  props: ["jsonurl"],
  data() {
    return {
      adData: {
        url: "",
        name: "",
        src: ""
      }
    };
  },
  created() {
    stream.fetch(
      {
        method: "GET",
        url: this.$store.state.jsonBaseUrl + this.jsonurl,
        type: "json"
      },
      response => {
        if (response.status === 200) {
          this.adData = response.data.data;
        }
      }
    );
  },
  methods: {
    jumpTo(url) {
      context.launchStage(url);
    }
  }
};
</script>
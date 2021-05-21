<template>
    <div class="container">
        <div class="wrap">
            <div class="instructions_wrap">
                <image style="width:300px;height:260px" :src="instructionsImgUrl"></image>
                <div class="div_wrap">
                  <text v-if="limit" class="instructions_content">{{instructionTitle}}:</text>
                   <text v-if="limit" class="instructions_content_num">{{instructionLimit}}</text>
                </div>
              
                <text v-if="info" class="instructions_info color">{{instructionInfo}}</text>
            </div>
        </div>
    </div>
</template>

<script>
    import {MpBar} from "madp-ui";

    const stream = weex.requireModule("stream");
    const context = weex.requireModule("context");
    export default {
        props: ['limit', 'info', 'instructionsImgUrl', 'instructionTitle', 'instructionLimit', 'instructionInfo', 'failure'],
        components: {
            MpBar
        },
        data() {
            return {}
        },
        methods: {
            mpBarLeftBtnClick() {
                this.goBack();
            },
        }
    }
</script>

<style scoped>
    .container {
        width: 750px;
        background-color: rgb(245, 245, 245);
    }

    .wrap {
        flex-direction: row;
        justify-content: center;
        padding: 50px;
        background-color: white;
    }
    .div_wrap{
         flex-direction: row;
        justify-content: center;
    }
    .instructions_wrap {
        align-items: center;
        flex-direction: column;
    }

    .instructions_content {
        width: 415px;
        text-align: right;
        padding-top: 20px;
         font-size: 36px;
        align-items: center;
        color: #888;
    }

    .instructions_content_num {
        width: 320px;
        text-align: left;
         padding-top: 20px;
        align-items: center;
        font-size: 36px;
        color: #262626;
    }

    .color {
        color: #FC8922;
    }

    .instructions_info {
        align-items: center;
        padding-top: 28px;
        font-size: 30px;
    }
</style>
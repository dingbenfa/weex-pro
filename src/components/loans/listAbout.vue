<template>
    <div class="container">
        <list class="wrap">
            <cell v-for="item in lists" class="repayment_info_list">
                <text class="repayment_info_list_title">{{item.title}}</text>
                <text class="repayment_info_list_num">{{item.num}}</text>
            </cell>
        </list>
    </div>
</template>

<script>
    export default {
        props: {
            lists: {
                title: Array,
                num: Array
            }
        },
        components: {},
        data() {
            return {}
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
        flex-direction: row;
        justify-content: center;
        background-color: white;
    }

    .repayment_info_list {
        width: 690px;
        height: 110px;
        flex-direction: row;
        justify-content: space-between;
        border-bottom: 1px solid #f1f1f1;
        padding: 0 20px;
        align-items: center;
    }

    .repayment_info_list_title {
        justify-content: space-between;
        font-size: 38px;
        color: #444;
    }

    .repayment_info_list_num {
        font-size: 38px;
        color: #444;
        font-weight: lighter;
    }
</style>
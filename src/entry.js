/*global Vue*/

/* weex initialized here, please do not move this line */
const { router } = require('./router');
const App = require('@/index.vue');

import mixins from '@/mixins'
Vue.mixin(mixins)

// import VueAMap from 'vue-amap';

// Vue.use(VueAMap);
// VueAMap.initAMapApiLoader({
//   key: 'c5b2f7f95674820801bd1e9a37508093',
//   plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
//   v: '1.4.4'  // 默认高德 sdk 版本为 1.4.4
// });

/* eslint-disable no-new */
new Vue(Vue.util.extend({el: '#root', router}, App));
router.push('/');


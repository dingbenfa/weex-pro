import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import AppHome from '@/view/home/index'
import RentHomeDetail from '@/view/home/detail'
import OffShelfDetail from '@/view/home/offShelfDetail'
import AppSearch from '@/view/search/index'
import ReleaseHouses from '@/view/releaseHouses/index' //我是房东 - 发布房源
import ReleaseList from '@/view/releaseHouses/releaseList' //我是房东 - 发布列表
import NotReleaseHouses from '@/view/releaseHouses/notRelease' //我是房东 - 未发布房源 
import ReleaseHistory from '@/view/releaseHouses/releaseHistory' //我是房东 - 发布记录
import ReleaseResult from '@/view/releaseHouses/releaseResult' //我是房东 - 发布结果

// import Amap from '@/view/amap/index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/appHome',
      component: AppHome
    },
    {
      path: '/rentHomeDetail',
      component: RentHomeDetail
    },
    {
      path: '/appSearch',
      component: AppSearch
    },
    {
      path: '/OffShelfDetail',
      component: OffShelfDetail
    },
    // {
    //   path: '/amap',
    //   component: Amap
    // },
    {
      path: '/releaseHouses',
      component: ReleaseHouses
    },
    {
      path: '/notReleaseHouses',
      component: NotReleaseHouses
    },
    {
      path: '/releaseHistory',
      component: ReleaseHistory
    },
    {
      path: '/releaseResult',
      component: ReleaseResult
    },
    {
      path: '/',
      component: ReleaseList
    },
  ]
})

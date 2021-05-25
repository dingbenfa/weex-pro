import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import AppHome from '@/view/home/index'
import RentHomeDetail from '@/view/home/detail'
import OffShelfDetail from '@/view/home/offShelfDetail'
import AppSearch from '@/view/search/index'
import ReleaseHouses from '@/view/releaseHouses/index'

// import Amap from '@/view/amap/index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
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
    // {
    //   path: '/',
    //   component: ReleaseHouses
    // },
  ]
})

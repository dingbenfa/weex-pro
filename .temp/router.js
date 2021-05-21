import Vue from 'vue'
/*global Vue*/
import Router from 'vue-router'
import AppHome from '@/view/home/index'
import RentHomeDetail from '@/view/home/detail'
import AppSearch from '@/view/search/index'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/AppHome',
      name: 'AppHome',
      component: AppHome
    },
    {
      path: '/',
      name: 'RentHomeDetail',
      component: RentHomeDetail
    },
    {
      path: '/appSearch',
      name: 'AppSearch',
      component: AppSearch
    },
  ]
})

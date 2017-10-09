import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '../components/Index'

import Test from '../components/test/Test'
import NavMenu from '../components/test/NavMenuTest'
import Tabs from '../components/test/TabsTest'
import Layout from '../components/test/LayoutTest'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/test',
      component:Test
    },
    {
      path: '/navmenu',
      component: NavMenu
    },
    {
      path: '/tabs',
      component: Tabs
    },
    {
      path: '/layout',
      component: Layout
    }
  ]
})

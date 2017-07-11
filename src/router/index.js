import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Store from '@/pages/Store'
import Notice from '@/pages/Notice'
import My from '@/pages/My'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Personal from '@/pages/Personal'
import Goods from '@/pages/Goods'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/store',
      name: 'store',
      component: Store
    },
    {
      path: '/notice',
      name: 'notice',
      component: Notice
    },
    {
      path: '/my',
      name: 'my',
      component: My
},
    {
      path:'/login',
      name :'login',
      component:Login
    },
    {
      path:'/register',
      name :'register',
      component:Register
    },
    {
      path :'/personal',
      name :'personal',
      component:Personal
    },
    {
      path:'/goods',
      name:'goods',
      component:Goods
    },
    {
      path:'*',
      redirect:'/home'
    }
    ]
})

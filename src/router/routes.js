import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
export default [
  { 
    path: '/center',
    name:Center,
    component: () => import("@/pages/Center"),
    meta: { show: true },
    children:[
      {
        path:"myorder",
        component:MyOrder
      },
      {
        path:"grouporder",
        component:GroupOrder
      }
    ]
  },
  {
    path: '/paysuccess',
    name:PaySuccess,
    component: () => import("@/pages/PaySuccess"),
    meta: { show: true }
  },
  {
    path: '/pay',
    name:Pay,
    component: () => import("@/pages/Pay"),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path == "/trade") {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/trade',
    name: Trade,
    component: () => import("@/pages/Trade"),
    meta: { show: true },
    beforeEnter: (to, from, next) => {
      if(from.path == "/shopcart") {
        next();
      } else {
        next(false);
      }
    }
  },
  {
    path: '/shopcart',
    name: ShopCart,
    component: () => import("@/pages/ShopCart"),
    meta: { show: true }
  },
  {
    path: '/addcartsuccess',
    name: 'addcartsuccess',
    component: () => import("@/pages/AddCartSuccess"),
    meta: { show: true }
  },
  {
    path: '/detail/:skuId?',
    component: () => import("@/pages/Detail"),
    meta: { show: true }
  },
  {
    path: '/home',
    component: () => import("@/pages/Home"),
    meta: { show: true }
  },
  {
    path: '/login',
    component: Login,
    meta: { show: false }
  },
  {
    path: '/register',
    component: Register,
    meta: { show: false }
  },
  {
    path: '/search/:keyword?',
    component: Search,
    meta: { show: true },
    name: 'search',
    props: ($route) => {
      return { keyword: $route.params.keyword, k: $route.query.k }
    }
  },
  {
    path: '/',
    redirect: '/home'
  }
]

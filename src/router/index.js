import Vue from 'vue'
import Router from 'vue-router'
import nearbyShops from '../pages/nearbyShops'
import Businesshome from '../pages/Businesshome'
import Gastrosoph from '../pages/Gastrosoph'
import allShops from '../pages/allShops'
import Paybill from '../pages/Paybill'
import payOver from '../pages/payOver'
import listItem from '../pages/listItem'
import DistanceNear from '../pages/DistanceNear'
import Mostdiscounts from '../pages/Mostdiscounts'
import DistanceNearshopcenter from '../pages/DistanceNearshopcenter'
import Meishilist from '../pages/Meishilist'
import Shophome from '../pages/Shophome'
import starProducts from '../pages/starProducts'
import Businessdetails from '../pages/Businessdetails'
import firmOrder from '../pages/firmOrder'
import shopPay from '../pages/shopPay'
import paySuccess from '../pages/paySuccess'
import payOk from '../pages/payOk'
import cardList from '../pages/cardList'
import toUp from '../pages/toUp'
import userMg from '../pages/userMg'
import pageStatus from '../pages/pageStatus'
import Sharepage from '../pages/Sharepage'
import Shareweima from '../pages/Shareweima'
import receiveCoupons from '../pages/receiveCoupons'
import logintaobao from '../pages/logintaobao'
import comPurchase from '../pages/comPurchase'
import goLocation from '../pages/goLocation'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/nearbyShops'
    },
    {
      name:'nearbyShops',
      path:'/nearbyShops',
      component:nearbyShops,
      meta:{
        keepAlive: true
      }
    },
    {
      name:'Businesshome',
      path:'/Businesshome',
      component:Businesshome
    },
    {
      path:'/',
      redirect:'/allShops'
    },
    {
      name:'allShops',
      path:'/allShops',
      component:allShops,
      children:[
        {
          path:'/allShops',
          redirect:'/allShops/Meishilist'
        },
        {
          name:'Meishilist',
          path:'/allShops/Meishilist',
          component:Meishilist
        }
      ]
    },
    {
      path:'/',
      redirect:'/Shophome'
    },
    {
      name:'Shophome',
      path:'/Shophome',
      component:Shophome,
      children:[
        {
          path:'/Shophome',
          redirect:'/Shophome/starProducts'
        },
        {
          name:'starProducts',
          path:'/Shophome/starProducts',
          component:starProducts
        },
        {
          name:'Businessdetails',
          path:'/Shophome/Businessdetails',
          component:Businessdetails
        }
      ]
    },
    // {
    //   name:'starProducts',
    //   path:'/Shophome/starProducts',
    //   component:starProducts
    // },
    // {
    //   name:'Businessdetails',
    //   path:'/Shophome/Businessdetails',
    //   component:Businessdetails
    // },
    {
      path:'/',
      redirect:'/cardList'
    },
    {
      path:'/cardList',
      component:cardList
    },
    {
      path:'/',
      redirect:'/toUp',
    },
    {
      path:'/toUp',
      component:toUp
    },
    {
      path:'/',
      redirect:'/userMg',
    },
    {
      path:'/userMg',
      component:userMg
    },
    {
      path:'/',
      redirect:'/pageStatus'
    },
    {
      path:'/pageStatus',
      component:pageStatus
    },
    {
      name:'payOk',
      path:'/payOk',
      component:payOk
    },
    {
      name:'firmOrder',
      path:'/firmOrder',
      component:firmOrder
    },
    {
      name:'shopPay',
      path:'/shopPay',
      component:shopPay
    },
    {
      name:'Paybill',
      path:'/Paybill',
      component:Paybill
    },
    {
      name:'paySuccess',
      path:'/paySuccess',
      component:paySuccess
    },
    {
      path:'/Sharepage',
      component:Sharepage
    },
    {
      path:'/Shareweima',
      component:Shareweima
    },
    {
      name:'payOver',
      path:'/payOver',
      component:payOver
    },
    {
      name:'comPurchase',
      path:'/comPurchase',
      component:comPurchase
    },
    {
      name:'goLocation',
      path:'/goLocation',
      component:goLocation
    },
    {
      name:'logintaobao',
      path:'/logintaobao',
      component:logintaobao
    },
    {
      name:'receiveCoupons',
      path:'/receiveCoupons',
      component:receiveCoupons
    },
    {
      name:'listItem',
      path:'/listItem',
      component:listItem
    }
  ]
})

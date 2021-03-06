import Vue from 'vue'
import Router from 'vue-router'
import nearbyShops from '../pages/nearbyShops'
import Businesshome from '../pages/Businesshome'
import allShops from '../pages/allShops'
import Paybill from '../pages/Paybill'
import payOver from '../pages/payOver'
import listItem from '../pages/listItem'
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
import Shareweima from '../pages/Shareweima'
import receiveCoupons from '../pages/receiveCoupons'
import logintaobao from '../pages/logintaobao'
import comPurchase from '../pages/comPurchase'
import goLocation from '../pages/goLocation'
import pingDuo from '../pages/pingDuo'
import shareSome from '../pages/shareSome'
import vsCode from '../pages/vsCode'
import payWay from '../pages/payWay'
import payoutLine from '../pages/payoutLine'
import alipayOk from '../pages/alipayOk'
import appSuccess from '../pages/appSuccess'
import alipayOk2 from '../pages/alipayOk2'
import outSuccess from '../pages/outSuccess'
import storeShop from '../pages/storeShop'
import shareShophome from '../pages/shareShophome'
import shareBusinessdetails from '../pages/shareBusinessdetails'
import sharestarProducts from '../pages/sharestarProducts'
import shareWeixin from '../pages/shareWeixin'
import activityProfile from '../pages/activityProfile'
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
      component:Businesshome,
      meta:{
        keepAlive: true
      }
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
      meta:{
        keepAlive: false
      },
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
      component:resolve => require(['../pages/Sharepage'],resolve)
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
      name:'shareSome',
      path:'/shareSome',
      component:shareSome
    },
    {
      path:'/',
      redirect:'/comPurchase'
    },
    {
      path:'/vsCode',
      component:vsCode
    },
    {
      path:'/payWay',
      component:payWay
    },
    {
      path:'/payoutLine',
      component:payoutLine
    },
    {
      path:'/alipayOk',
      component:alipayOk
    },
    {
      path:'/appSuccess',
      component:appSuccess
    },
    {
      path:'/alipayOk2',
      component:alipayOk2
    },
    {
      path:'/outSuccess',
      component:outSuccess
    },
    {
      name:'comPurchase',
      path:'/comPurchase',
      component:comPurchase,
      children:[
        {
          name:'pingDuo',
          path:'/pingDuo',
          component:pingDuo
        }
      ]
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
    },
    {
      name:'advertisingDetails',
      path:'/advertisingDetails',
      component:resolve => require(['../pages/advertisingDetails'],resolve)
    },
    {
      name:'storeShop',
      path:'/storeShop',
      component:storeShop
    },
    {
      name:'shareWeixin',
      path:'/shareWeixin',
      component:shareWeixin
    },
    {
      name:'activityProfile',
      path:'/activityProfile',
      component:resolve => require(['../pages/activityProfile'],resolve)
    },
    {
      name:'shareShophome',
      path:'/shareShophome',
      component:shareShophome,
      meta:{
        keepAlive: false
      },
      children:[
        {
          path:'/shareShophome',
          redirect:'/shareShophome/sharestarProducts'
        },
        {
          name:'sharestarProducts',
          path:'/shareShophome/sharestarProducts',
          component:sharestarProducts
        },
        {
          name:'shareBusinessdetails',
          path:'/shareShophome/shareBusinessdetails',
          component:shareBusinessdetails
        }
      ]
    }
  ]
})

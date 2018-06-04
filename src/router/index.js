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

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/nearbyShops',
      component:nearbyShops,
      children:[
        {
          path:'/nearbyShops/DistanceNear',
          component:DistanceNear
        },
        {
          path:'/nearbyShops/Mostdiscounts',
          component:Mostdiscounts
        }
      ]
    },
    {
      path:'/Businesshome',
      component:Businesshome,
      children:[
        {
          path:'/Businesshome/DistanceNearshopcenter',
          component:DistanceNearshopcenter
        }
      ]
    },
    {
      path:'/allShops',
      component:allShops,
      children:[
        {
          path:'/allShops/Meishilist',
          component:Meishilist
        }
      ]
    },
    {
      path:'/Shophome',
      component:Shophome,
      children:[
        {
          path:'/Shophome/starProducts',
          component:starProducts
        },
        {
          path:'/Shophome/Businessdetails',
          component:Businessdetails
        }
      ]
    },
    {
      path:'/Paybill',
      component:Paybill
    },
    {
      path:'/payOver',
      component:payOver
    },
    {
      path:'/listItem',
      component:listItem
    },
    {
      path:'*',
      redirect:'/nearbyShops'
    }
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})

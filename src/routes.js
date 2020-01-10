import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from './components/Home'

import Mine from './components/Mine'
import Order from './components/Order'
import Merchant from './components/Merchant/Merchant'
import SubmitOrder from "./components/SubmitOrder"
import MTAddressList from "./components/MTAddressList"


Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    component: Home,
    name: "home"
  },
  {
    path: "/order",
    component: Order,
    name: "order"
  },
  {
    path: "/mine",
    component: Mine,
    name: "mine"
  },
  {
    path: "/merchant/:merchant_id",
    component: Merchant,
    name: "merchan"
  },
  {
    path:"/submitorder",
    component:SubmitOrder,
    name:"submit_order"
  },
  {
    path:"/address",
    component:MTAddressList,
    name:"address_list"
  }
]


const router = new VueRouter({
  routes
})

export default router;
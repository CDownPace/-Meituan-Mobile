import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store =new Vuex.Store({
   state:{
     cart:[]
   },
   mutaions:{
     setCart(state,goodsList){
       state.cart=goodsList
     },
     clearCart(state){
       state.cart=[]
     }
   }
})

export default store
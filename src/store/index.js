import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    cartList:[]
  },
  mutations:{
    addCart(state,payload){
      console.log(111);
      payload.checked = true;
      state.cartList.push(payload);
      console.log(cartList);
    }
  },
  // mutations:{
  //   addCart(state,payload){
  //     return new Promise((resolve,reject)=>{
  //       payload.checked = true;
  //       state.cartList.push(payload)
  //       resolve("weq")
  //     })
  //   }
  // },
  getters:{
    GetList(state){
      return state.cartList
    }
  }
})
export default store
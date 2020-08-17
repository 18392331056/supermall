import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'home'
    },
    {
      path:"/home",
      component:() => import ("../views/home/home")
    },
    {
      path:"/cart",
      component:() => import ("../views/cart/cart")
    },
    {
      path:"/mine",
      component:() => import ("../views/mine/mine")
    },
    {
      path:"/sort",
      component:() => import ("../views/sort/sort")
    }
  ],
  mode:"history"
})

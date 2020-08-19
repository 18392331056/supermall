<template>
  <div id="home">
    <Nav-Bar class="home-top">
      <div slot="center">craig</div>  
    </Nav-Bar>
    <home-swiper :spiritualMassage="spiritualMassage" />
    <home-second :atmosphere="atmosphere" />
    <home-third/>
    <tab-control class="tab-control" :title="['微凉','月光','睡眠','精神']" @tabclick="tabclick"/>
    <goods-list :message="message[currentType]"/>
    <ul>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
      <li>123</li>
    </ul>
  </div>
</template>

<script>
import HomeSwiper from './homeChildren/HomeSwiper';
import HomeSecond from './homeChildren/HomeSecond';
import HomeThird from "./homeChildren/HomeThird";

import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabcontrol/TabControl';
import GoodsList from "components/content/goods/GoodsList";

import getHomeMultidata from 'network/home'
export default {
  name:"home",
  components: {
    HomeSwiper,
    HomeSecond,
    HomeThird,
    NavBar,
    TabControl,
    GoodsList,
  },
  data(){
    return {
      atmosphere:[],
      moonlightguitar:[],
      spa_deep_sleep:[],
      spiritualMassage:[],
      message:{
        'atmosphere':[],
        'moonlight_guitar':[],
        'spa_deep_sleep':[],
        'spiritual_massage':[]
      },
      currentType:"atmosphere"
    };
  },
  created(){
    //请求多个数据
    this.getHomeMultidata()
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabclick(index){
      switch (index) {
        case 0:
          this.currentType = 'atmosphere'
          break;
        case 1:
          this.currentType = 'moonlight_guitar'
          break;
        case 2:
          this.currentType = 'spa_deep_sleep'
          break;
        case 3:
          this.currentType = 'spiritual_massage'
          break;  
      }
    },


    /**
     * 网络请求相关的方法
     */
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.message = res;
        console.log(this.message);
        this.atmosphere = res.atmosphere;
        this.moonlightguitar =res.moonlight_guitar;
        this.spa_deep_sleep = res.spa_deep_sleep;
        this.spiritualMassage = res.spiritual_massage;
      })
    }
  },
  computed: {

  },
};
</script>

<style  scoped>
 .home-top{
   background-color: var(--color-criag);
   color: white;
   position: fixed;
   left: 0;
   top: 0;
   right: 0;
   z-index: 10;
 }
 #home{
   padding-top: 44px;
 }
 .tab-control{
   position: sticky;
   top: 44px;
 }
</style>
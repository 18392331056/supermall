<template>
  <div id="home">
    <Nav-Bar class="home-top">
      <div slot="center">craig</div>  
    </Nav-Bar>
    <home-swiper :spiritualMassage="spiritualMassage" />
    <home-second :atmosphere="atmosphere" />
    <home-third/>
    <tab-control class="tab-control" :title="['流行','新款','精选']"/>
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

import getHomeMultidata from 'network/home'
export default {
  name:"home",
  components: {
    HomeSwiper,
    HomeSecond,
    HomeThird,
    NavBar,
    TabControl,
  },
  data(){
    return {
      atmosphere:[],
      moonlight_guitar:[],
      spa_deep_sleep:[],
      spiritualMassage:[]
    };
  },
  created(){
    //请求多个数据
    this.getHomeMultidata()
  },
  methods: {
    getHomeMultidata(){
      getHomeMultidata().then(res => {
        this.atmosphere = res.atmosphere;
        this.moonlight_guitar =res.moonlight_guitar;
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
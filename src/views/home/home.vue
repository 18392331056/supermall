<template>
  <div id="home">
    <Nav-Bar class="home-top">
      <div slot="center">craig</div>  
    </Nav-Bar>
    <tab-control  class="tab-control"
                  :title="['微凉','月光','睡眠','精神']" 
                  @tabclick="tabclick"
                  ref="tabControl2"
                  v-show="isTabFixed"/>
    <scroll class="content"
            ref="bscroll" 
            :probetype='3' 
            @scrollPosition="scrollPosition"
            :pullupload=true
            @pullingup="pullingup" >
      <home-swiper :spiritualMassage="spiritualMassage" 
                    @swiperImgLoad="swiperImgLoad"/>
      <home-second :atmosphere="atmosphere" />
      <home-third/>
      <tab-control class="tab-control"
                   :title="['微凉','月光','睡眠','精神']" 
                   @tabclick="tabclick"
                   ref="tabControl"/>
      <goods-list :message="message[currentType]"/>
    </scroll>
    <back-top @click.native="btnBack()" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import HomeSwiper from './homeChildren/HomeSwiper';
import HomeSecond from './homeChildren/HomeSecond';
import HomeThird from "./homeChildren/HomeThird";

import NavBar from 'components/common/navbar/NavBar';
import TabControl from 'components/content/tabcontrol/TabControl';
import GoodsList from "components/content/goods/GoodsList";
import Scroll from 'components/common/scroll/Scroll';
import BackTop from 'components/content/backtop/BackTop';

import getHomeMultidata from 'network/home'
import debounce from '@/common/utils/index.js'
export default {
  name:"home",
  components: {
    HomeSwiper,
    HomeSecond,
    HomeThird,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
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
      currentType:"atmosphere",
      isShowBackTop:false,
      tabOffSetTop:0,
      isTabFixed:false
    };
  },
  created(){
    //请求多个数据
    this.getHomeMultidata()
  },
  mounted(){
    //监听item中图片加载完成后进行刷新
    const refresh = debounce(this.$refs.bscroll.refresh,200)
    this.$bus.$on('ImageRefresh',()=>{
      refresh()
    })
  },
  dedtroyed(){
    console.log("dedtroyed");
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    //根据点击后的index获取数据
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
      this.$refs.tabControl.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    //回到顶部
    btnBack(){
      this.$refs.bscroll.scrollTo(0,0,500)
    },
    //获取scroll定位,根据定位信息确定回到顶部按钮是否需要显示
    scrollPosition(position){
      //判断BackTop是否显示
      this.isShowBackTop = (-position.y) > 800;
      //判断tabcontrol是否吸顶（position：fixed）
      this.isTabFixed = (-position.y) > this.tabOffSetTop;
    },
    //接收上拉传递的数据
    pullingup(){
      console.log(this.currentType+'+loadMore');
      this.$refs.bscroll.finishPull();
    },
    //监听轮播图是否加载完成
    swiperImgLoad(){
      //获取tabcontrol的offsettop
        //所有组件中都有一个属性$el:作用是获取组件中的元素
        this.tabOffSetTop = this.$refs.tabControl.$el.offsetTop;
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
   /* position: fixed;
   left: 0;
   top: 0;
   right: 0;
   z-index: 10; */
 }
 #home{
   height: 100vh;
   /* padding-top: 44px; */
   position: relative;
 }
 /* .tab-control{
   position: sticky;
   top: 44px;
 } */
 .content{
   overflow: hidden;
   position: absolute;
   top: 44px;
   bottom: 49px;
   right: 0;
   left: 0;
 }
 .tab-control{
   position: relative;
   z-index: 9;
 }
</style>
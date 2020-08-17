<template>
  <tab-bar>
    <Tab-Bar-Item path="/home" itemTxtColor="rgb(66, 207, 167)">
      <img slot="item-img" src="~assets/img/tabbar/1.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/1-1.png" alt="">
      <div slot="item-txt">首页</div>
    </Tab-Bar-Item>
    <Tab-Bar-Item path="/sort" itemTxtColor="rgb(66, 207, 167)">
      <img slot="item-img" src="~assets/img/tabbar/2.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/2-2.png" alt="">
      <div slot="item-txt">分类</div>
    </Tab-Bar-Item>
    <Tab-Bar-Item path="/cart" itemTxtColor="rgb(66, 207, 167)">
      <img slot="item-img" src="~assets/img/tabbar/3.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/3-3.png" alt="">
      <div slot="item-txt">购物车</div>
    </Tab-Bar-Item>
    <Tab-Bar-Item path="/mine" itemTxtColor="rgb(66, 207, 167)">
      <img slot="item-img" src="~assets/img/tabbar/4.png" alt="">
      <img slot="item-img-active" src="~assets/img/tabbar/4-4.png" alt="">
      <div slot="item-txt">我的</div>
    </Tab-Bar-Item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/tabbar.vue'
import TabBarItem from 'components/common/tabbar/tabbar-item'
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data(){
    return {
      
    };
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style  scoped>

</style>
<template>
  <div id='details'>
    <details-nav @tabDetailsClick="tabDetailsClick" ref="detailsNav"></details-nav>
    <scroll class="content" 
            ref="dtscroll" 
            :probeType='3'
            @scrollPosition="detailsPosition"
            :pullupload=true
            @pullingup="pullingup">
      <ul>
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
        <li>列表16</li>
        <li>列表17</li>
        <li>列表18</li>
        <li>列表19</li>
        <li>列表20</li>
        <li>列表21</li>
        <li ref="one">列表22</li>
        <li>列表23</li>
        <li>列表24</li>
        <li>列表25</li>
        <li>列表26</li>
        <li>列表27</li>
        <li>列表28</li>
        <li>列表29</li>
        <li>列表30</li>
        <li>列表31</li>
        <li>列表32</li>
        <li>列表33</li>
        <li>列表34</li>
        <li>列表35</li>
        <li>列表36</li>
        <li>列表37</li>
        <li>列表38</li>
        <li>列表39</li>
        <li>列表40</li>
        <li>列表41</li>
        <li>列表42</li>
        <li>列表43</li>
        <li>列表44</li>
        <li>列表45</li>
        <li>列表46</li>
        <li>列表47</li>
        <li>列表48</li>
        <li>列表49</li>
        <li>列表50</li>
        <li>列表51</li>
        <li>列表52</li>
        <li>列表53</li>
        <li>列表54</li>
        <li>列表55</li>
        <li>列表56</li>
        <li>列表57</li>
        <li>列表58</li>
        <li>列表59</li>
        <li>列表60</li>
        <li>列表61</li>
        <li>列表62</li>
        <li>列表63</li>
        <li>列表64</li>
        <li>列表65</li>
        <li>列表66</li>
        <li>列表67</li>
        <li>列表68</li>
        <li ref="two">列表69</li>
        <li>列表70</li>
        <li>列表71</li>
        <li>列表72</li>
        <li>列表73</li>
        <li>列表74</li>
        <li>列表75</li>
        <li>列表76</li>
        <li>列表77</li>
        <li>列表78</li>
        <li>列表79</li>
        <li>列表80</li>
        <li>列表81</li>
        <li>列表82</li>
        <li>列表83</li>
        <li>列表84</li>
        <li>列表85</li>
        <li>列表86</li>
        <li>列表87</li>
        <li>列表88</li>
        <li>列表89</li>
        <li>列表90</li>
        <li>列表91</li>
        <li>列表92</li>
        <li>列表93</li>
        <li>列表94</li>
        <li>列表95</li>
        <li>列表96</li>
        <li>列表97</li>
        <li>列表98</li>
        <li>列表99</li>
        <li>列表100</li>
      </ul>
      <ul>
        <li>新列表1</li>
        <li>新列表2</li>
        <li>新列表3</li>
        <li>新列表4</li>
        <li>新列表5</li>
        <li>新列表6</li>
        <li>新列表7</li>
        <li>新列表8</li>
        <li>新列表9</li>
        <li>新列表10</li>
        <li>新列表11</li>
        <li>新列表12</li>
        <li>新列表13</li>
        <li>新列表14</li>
        <li>新列表15</li>
        <li>新列表16</li>
        <li>新列表17</li>
        <li>新列表18</li>
        <li>新列表19</li>
        <li>新列表20</li>
        <li>新列表21</li>
        <li>新列表22</li>
        <li>新列表23</li>
        <li>新列表24</li>
        <li>新列表25</li>
        <li>新列表26</li>
        <li>新列表27</li>
        <li>新列表28</li>
        <li>新列表29</li>
        <li>新列表30</li>
        <li>新列表31</li>
        <li>新列表32</li>
        <li>新列表33</li>
        <li>新列表34</li>
        <li>新列表35</li>
        <li>新列表36</li>
        <li>新列表37</li>
        <li>新列表38</li>
        <li>新列表39</li>
        <li>新列表40</li>
        <li>新列表41</li>
        <li>新列表42</li>
        <li>新列表43</li>
        <li ref="three">新列表44</li>
        <li>新列表45</li>
        <li>新列表46</li>
        <li>新列表47</li>
        <li>新列表48</li>
        <li>新列表49</li>
        <li>新列表50</li>
        <li>新列表51</li>
        <li>新列表52</li>
        <li>新列表53</li>
        <li>新列表54</li>
        <li>新列表55</li>
        <li>新列表56</li>
        <li>新列表57</li>
        <li>新列表58</li>
        <li>新列表59</li>
        <li>新列表60</li>
        <li>新列表61</li>
        <li>新列表62</li>
        <li>新列表63</li>
        <li>新列表64</li>
        <li>新列表65</li>
        <li>新列表66</li>
        <li>新列表67</li>
        <li>新列表68</li>
        <li>新列表69</li>
        <li>新列表70</li>
        <li>新列表71</li>
        <li>新列表72</li>
        <li>新列表73</li>
        <li>新列表74</li>
        <li>新列表75</li>
        <li>新列表76</li>
        <li>新列表77</li>
        <li>新列表78</li>
        <li>新列表79</li>
        <li>新列表80</li>
        <li>新列表81</li>
        <li>新列表82</li>
        <li>新列表83</li>
        <li>新列表84</li>
        <li>新列表85</li>
        <li>新列表86</li>
        <li>新列表87</li>
        <li>新列表88</li>
        <li>新列表89</li>
        <li>新列表90</li>
        <li>新列表91</li>
        <li>新列表92</li>
        <li>新列表93</li>
        <li>新列表94</li>
        <li>新列表95</li>
        <li>新列表96</li>
        <li>新列表97</li>
        <li>新列表98</li>
        <li>新列表99</li>
        <li>新列表100</li>
      </ul>
    </scroll>
    <details-bottom-bar @addToCart="addToCart"></details-bottom-bar>
    <back-top @click.native="btnBack()" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import DetailsNav from './detailCpnt/DetailsNav'
import DetailsBottomBar from './detailCpnt/DetailsBottomBar'
import Scroll from 'components/common/scroll/Scroll'
import {backTopMixin} from 'common/utils/mixin.js'
import getHomeMultidata from 'network/home'
export default {
  name:"Details",
  components: {
    DetailsNav,
    DetailsBottomBar,
    Scroll
  },
  mixins:[backTopMixin],
  data(){
    return {
      id:null,
      clickJump:[],
      currentIndex:0,
      data:null,
    };
  },
  created(){
    this.id = this.$route.params.id
    //请求多个数据
    this.getHomeMultidata()
  },
  mounted(){
    this.clickJump.push(0)
    this.clickJump.push(this.$refs.one.offsetTop)
    this.clickJump.push(this.$refs.two.offsetTop)
    this.clickJump.push(this.$refs.three.offsetTop) 
  },
  methods: {
    //获取数据
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
        this.data = res
      })
    },
    //实现点击tab根据index跳转到页面相对位置处
    tabDetailsClick(index){
      this.$refs.dtscroll.scrollTo(0,-this.clickJump[index],200)
    },
    //接收上拉传递的数据
    pullingup(){
      this.$refs.dtscroll.finishPull();
    },
    //根据监听scroll滚动的函数来获取每次滚动的具体位置信息
    detailsPosition(position){
      //获取Y值
      const positionY = -position.y

      /**
       *positionY和clickJump中的值进行对比[0, 378, 1224, 2574,]
        positionY在0和378之间,index = 0;
        positionY在378和1224之间,index = 1;
        positionY在1224和2574之间,index = 2;
        positionY大于2574,index = 3;
       */
      let length = this.clickJump.length
      for(let i=0;i<length;i++){
        if(this.currentIndex !== i &&((i<length-1 && positionY >= this.clickJump[i] && positionY < this.clickJump[i+1])||(i === length-1 && positionY >= this.clickJump[i]))){
          this.currentIndex = i;
          console.log(this.currentIndex);
          this.$refs.detailsNav.currentIndex = this.currentIndex
        }
      }
      //判断BackTop是否需要显示
      this.isShowBackTop = (-position.y) > 800;
    },
    addToCart(){
      const pruduct = {}
      pruduct.image = this.data.spa_deep_sleep[0].poster;
      pruduct.title = this.data.spa_deep_sleep[0].title;
      pruduct.price = 50
      
      //将商品添加到购物车里
      this.$toast.okShow()
    }
  },
  computed: {

  },
};
</script>

<style  scoped>
  #details{
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: white;
  }
  .content{
   overflow: hidden;
   position: absolute;
   top: 44px;
   bottom: 49px;
   right: 0;
   left: 0;
 }
</style>
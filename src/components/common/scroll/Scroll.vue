<template>
  <div ref="wrapper">
    <div class="content"> 
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';
export default {
  name:"Scroll",
  components: {

  },
  props:{
    probetype:{
      type:Number,
      default:0
    },
    pullupload:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      scroll:null
    };
  },
  mounted(){
    //1、在页面组件挂载完成之后创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper,{
      click:true,
      probeType:this.probetype,
      pullUpLoad:this.pullupload
    })
    //2、监听scroll滚动事件，传递滚动位置
    this.scroll.on('scroll',(position)=>{
      this.$emit("scrollPosition",position);
    })
    //3、监听上拉加载事件
    this.scroll.on('pullingUp',()=>{
      // console.log('上拉加载更多');
      //监听到滚动到底部,并且传递到父组件
      this.$emit('pullingup')
    })
  },
  methods: {
    scrollTo(x,y,time){
      this.scroll && this.scroll.scrollTo(x,y,time);
    },
    finishPull(){
      this.scroll && this.scroll.finishPullUp();
    },
    refresh(){
      this.scroll && this.scroll.refresh();
      // console.log('---');
    }
  },
  computed: {

  },
};
</script>

<style  scoped>

</style>
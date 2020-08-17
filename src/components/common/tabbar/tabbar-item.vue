<template>
  <div class="tabbar-item" @click="changeClick()">
    <div v-if="isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="itemTxtStyle">
      <slot name="item-txt"></slot>
    </div> 
  </div>
</template>

<script>
export default {
  components: {

  },
  props:{
    path:String,
    itemTxtColor:{
      type:String,
      default:"red",
    }
  },
  data(){
    return {
      // isActive:true
    };
  },
  methods: {
    changeClick(){
      this.$router.push(this.path)
    }
  },
  computed: {
    isActive(){
      return this.$route.path.indexOf(this.path) === -1
    },
    itemTxtStyle(){
      return this.isActive ? {} : {color:this.itemTxtColor}
    }
  },
};
</script>

<style  scoped>
  .tabbar-item{
   flex: 1;
   text-align: center;
   height: 49px;
 }
 .tabbar-item img{
   width: 24px;
   height: 24px;
   margin-top: 3px;
   vertical-align: middle;
   margin-bottom: 1px;
 }
 .tabbar-item div{
   font-size: 12px;
 }
 /* .itemTxt{
   color: rgb(111, 230, 111);
 } */
</style>
<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" :class="{active:index === currentIndex}" @click="itemClick(index)"> 
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:"TabControl",
  props:{
    title:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {

  },
  data(){
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
      this.$emit("tabclick",index)
    }
  },
  computed: {

  },
};
</script>
<style  scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #fff;
  }
  .tab-control-item{
    flex: 1;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color: var(--color-criag);
  }
  .active span{
    padding-bottom: 5px;
    border-bottom:2px solid var(--color-criag);
  }
</style>
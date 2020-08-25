<template>
  <div class="item">
    <img :src="messageItem.poster" alt="" @load="ImageLoad">
    <div>
      <p>{{messageItem.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    messageItem:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {

  },
  data(){
    return {

    };
  },
  methods: {
    ImageLoad(){
      this.$bus.$emit('ImageRefresh')
    }
  },
  computed: {

  },
};
</script>

<style  scoped>
  .item{
    width: 50%;
  }
  .item img{
    width: 98%;
    height: 180px;
  }
  .item p{
    font-size: 12px;
    color:black;
    text-align: center;
    margin: 10px 0;
  }
  
</style>
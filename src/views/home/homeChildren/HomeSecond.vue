<template>
  <div class="HomeSecond">
    <div v-for="item in atmosphere" class="HomeSecond-item">
      <img :src="item.poster" alt="">
      <p>{{item.title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  props:{
    atmosphere:{
      type:Array,
      default(){
        return []
      }
    }
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
  .HomeSecond{
    width: 100%;
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 10px 0 10px;
    border-bottom: 8px solid #eee;
  };
  .HomeSecond-item{
    flex: 1;
  }
  .HomeSecond-item img{
    width: 100px;
    height: 50px;
    margin-bottom: 5px;
  }
  .HomeSecond-item p{
    color: black;
    font-size: 12px;
    text-align: center;
  }
</style>
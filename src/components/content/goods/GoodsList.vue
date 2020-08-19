<template>
  <div class="goods">
    <GoodsListItem class="goods-list-item" v-for="item in message" :messageItem="item">
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  components: {
    GoodsListItem,
  },
  data(){
    return {

    };
  },
  props:{
    message:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style  scoped>
  .goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
  }
</style>
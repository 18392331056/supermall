<template>
  <swiper>
    <swiper-item v-for="item in spiritualMassage"> 
      <img :src="item.poster" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
  name:"HomeSwiper",
  props:{
    spiritualMassage:{
      type:Array,
      default(){
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem,
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
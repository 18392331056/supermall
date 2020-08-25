<template>
  <swiper>
    <swiper-item v-for="item in spiritualMassage"> 
      <img :src="item.poster" alt="" @load="swiperImgLoad">
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
      isLoad:false
    };
  },
  methods: {
    swiperImgLoad(){
      if(!this.isLoad)
      this.$emit('swiperImgLoad')
      this.isLoad = true
    }
  },
  computed: {

  },
};
</script>

<style  scoped>

</style>
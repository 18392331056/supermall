<template>
  <div>
    <Nav-Bar class="details-top">
      <div slot="left" class="back" @click="backLast">
        <img src="~assets/img/common/back.svg" alt="">
      </div>
      <div class="details-title" slot="center">
        <div class="title-item" 
             v-for="(item,index) in title" 
             :class="{active:index === currentIndex}"
             @click="itemClick(index)">{{item}}</div>
      </div>  
    </Nav-Bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
export default {
  components: {
    NavBar,
  },
  data(){
    return {
      title:['商品','评论','参数','推荐'],
      currentIndex:0
    };
  },
  methods: {
    itemClick(index){
      this.currentIndex = index
    },
    backLast(){
      this.$router.back()
    }
  },
  computed: {

  },
};
</script>

<style  scoped>
  .details-title{
    display: flex;
  }
  .title-item{
    flex: 1;
    font-size: 13px;
  }
  .active{
    color: var(--color-criag);
  }
  .back img{
    margin-top: 10px;
  }
</style>
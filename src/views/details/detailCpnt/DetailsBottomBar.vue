<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addCart">购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data(){
    return {
      
    };
  },
  methods: {
    addCart(){
      this.$emit('addToCart')
    }
  },
  computed: {

  },
};
</script>

<style  scoped>
  .bottom-bar{
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    text-align: center;
    box-shadow: 0 -2px 1px rgba(100,100,100,.1);
  }
  .bar-item{
    flex:1;
    display: flex;
  }
  .bar-item>div{
    flex: 1;
  }
  .bar-left .text{
    font-size: 13px;
  }
  .bar-left .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 6px auto 1px;
    background: url(~assets/img/detail/detail_bottom.png) 0 0/100%;
  }
  .bar-left .service{
    background-position: 0 -52px;
  }
  .bar-left .shop{
    background-position: 0 -98px;
  }
  .bar-right{
    font-size: 15px;
    color: #fff;
    line-height: 49px;
  }
  .bar-right .cart{
    background-color: #ff6088;
    color: #333;
  }
  .bar-right .buy{
    background-color: var(--color-criag);
  }
</style>
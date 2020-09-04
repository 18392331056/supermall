<template>
  <cart-bar class="cart-bar">
    <div slot="center" class="bar-item">购物车({{cartLength}})</div>
  </cart-bar>
</template>

<script>
import CartBar from 'components/common/navbar/NavBar';
export default {
  components: {
    CartBar,
  },
  data(){
    return {
      data:null
    };
  },
  methods: {

  },
  computed: {
    cartLength(){
      return this.$store.state.cartList.length
    },
  },
};
</script>

<style  scoped>
  .cart-bar{
    background-color: var(--color-criag);
  }
  .bar-item{
    color: #fff;
  }
</style>
<template>
<div>
  <cart-bar></cart-bar>
  <cart-list></cart-list>
  <cart-bottom-bar></cart-bottom-bar>
</div> 
</template>

<script>
import CartBar from './cartchild/CartBar'
import CartList from './cartchild/CartList'
import CartBottomBar from './cartchild/CartBottomBar'
export default {
  components: {
    CartBar,
    CartList,
    CartBottomBar
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
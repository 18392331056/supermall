<template>
  <div class="check-button" :class="{check:isChecked}" :style="{checkTwo:isTwoChecked}">
    <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name:'CheckButton',
  components: {
    
  },
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      isTwoChecked:false,
    };
  },
  methods: {
    changeCheck(){
      this.isChecked = !this.isChecked;
    },
  },
  computed: {
    
  },
};
</script>

<style  scoped>
  .check-button{
    border-radius:50%;
    border:2px solid #aaa;
  }
  .check-button img{
    width: 20px;
    height: 16px;
  }
  .check{
    background-color: var(--color-criag);
    border:2px solid var(--color-criag);
  }
  #checkTwo{
    background-color: var(--color-criag);
    border:2px solid var(--color-criag);
  }
</style>
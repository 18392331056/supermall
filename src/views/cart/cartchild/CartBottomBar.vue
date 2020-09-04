<template>
  <div class="cart-bottom-bar">
    <div class="item-select">
      <check-button :isChecked="isAllSelect" @click="selectClick"></check-button>
    </div>
    <span>全选</span>
    <div class="addAll">
      合计：{{totalPrice}}
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  name:'CartBottomBar',
  components: {
    CheckButton
  },
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      
    };
  },
  methods: {
    selectClick(){
      if(this.isAllSelect){//全部选中
        this.$store.state.cartList.forEach(element => {
          element.checked = false;
        });
      }else{
        this.$store.state.cartList.forEach(element => {
          element.checked = true;
        });
      }
    }
  },
  computed: {
    totalPrice(){
      return this.$store.state.cartList.filter(item=>{
        
      })
    },
    isAllSelect(){
      if(this.$store.state.cartList.length === 0) return false
      //方案一
      // return !(this.$store.state.cartList.filter(item => !item.checked).length)

      //方案二
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
};
</script>

<style  scoped>
  .cart-bottom-bar{
    background-color: #eee;
    height: 40px;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 49px;
    display: flex;
    align-items: center;
  }
  .item-select{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 10px;
  }
  .addAll{
    margin-left: 185px;
  }
</style>
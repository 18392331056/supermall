<template>
  <div class="cart-list">
    <scroll class="content" ref="cartScroll">
      <div v-for="(item,index) in GetList" :key="index" class="list-item">
        <div class="item-select">
          <check-button :isChecked="item.checked" ref="checkbtn" @click.native="checkClick(index)"></check-button>
        </div>
        <img :src="item.image" alt="">
        <div class="text">
          <p>{{item.title}}</p>
          <p>{{item.title}}</p>
        </div>
        <span>{{item.price}}$</span>
      </div>
    </scroll>
  </div>
</template>

<script>
import GetList from '@/store/index'
import Scroll from 'components/common/scroll/Scroll'
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  components: {
    name:'CartList',
    Scroll,
    CheckButton
  },
  data(){
    return {
      listData:null
    };
  },
  methods: {
    checkClick(index){
      console.log(this.$refs.checkbtn[index].isTwoChecked);
      this.$refs.checkbtn[index].changeCheck();
    },
  },
  computed: {
    GetList:{
      get(){
        return this.$store.getters.GetList
      },
      set(){
        this.listData = this.$store.getters.GetList
      }
    }
    // GetList(){
    //   return this.$store.getters.GetList
    // }
  },
  activated(){
    this.$refs.cartScroll.refresh()
  }
};
</script>

<style  scoped>
  .cart-list{
    height: calc(100vh - 44px - 49px);
  }
  .content{
    height: 100%;
    overflow: hidden;
  }
  /**.list-item */
  .list-item{
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 5px auto;
  }
  .list-item img{
    width: 150px;
    height: 100px;
    border-radius: 3px;
  }
  .text p:nth-child(1){
    font-weight: 600;
    margin-bottom: 15px;
  }
  .text p{
    font-size: 14px;
    color: black;
  }
  .list-item span{
    font-size: 14px;
  }
  .item-select{
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
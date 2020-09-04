<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
  name:'Toast',
  components: {

  },
  props:{
    
  },
  data(){
    return {
      message:'',
      isShow:false
    };
  },
  methods: {
    okShow(message='默认文字',time=1000){
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = '';
      }, time);
    }
  },
  computed: {

  },
};
</script>

<style  scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    color: #fff;
    padding: 8px 10px;
    background-color: rgba(0, 0, 0, .7);
    transform: translate(-50%,-50%);
     z-index: 999;
  }
</style>
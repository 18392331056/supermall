<template>
  <div id='details'>
    <details-nav></details-nav>
  </div>
</template>

<script>
import DetailsNav from './detailCpnt/DetailsNav'
export default {
  components: {
    DetailsNav
  },
  data(){
    return {
      id:null
    };
  },
  created(){
    this.id = this.$route.params.id
  },
  methods: {

  },
  computed: {

  },
};
</script>

<style  scoped>
  #details{
    position: relative;
    z-index: 9;
    background-color: white;
  }
</style>
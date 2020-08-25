<template>
  <div>
    {{id}}
  </div>
</template>

<script>
export default {
  components: {

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

</style>
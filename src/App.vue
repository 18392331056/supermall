<template>
  <div id="app">
    <router-view></router-view>
    <Main-Tabbar/>
  </div>
</template>

<script>
  import MainTabbar from 'components/content/mainTabbar/mainTabbar'
  export default {
    name: 'App',
    components: {
      MainTabbar
    }
  }
</script>

<style>
  @import "assets/css/base.css";
</style>

<template>
  <div id="app">
    <keep-alive exclude="Details">
      <router-view></router-view>
    </keep-alive>
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

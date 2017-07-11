<template>
  <div id="heade">
    <router-link to="/"><b><</b></router-link>
    <span>{{headMgs}}</span>
  </div>
</template>
<script>
  export default {
      props :["headMgs"]

  }
</script>
<style scoped>
  @import "../assets/css/head.css";
</style>

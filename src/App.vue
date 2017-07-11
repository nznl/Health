<template>
  <div id="app">
    <!--<router-view></router-view>-->
    <transition name="roll">
      <keep-alive><router-view></router-view></keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app'
}
</script>
<style scoped>
  .roll-enter-active{
    animation: rollIn 0.5s;
  }
  .roll-leave-active{
    animation: rollOut 0.5s;
  }
  @keyframes rollIn {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    to {
      opacity: 1;
      transform: none;
    }
  }
  @keyframes rollOut {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }
</style>

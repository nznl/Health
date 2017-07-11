<template>
  <div id="foot">
    <ul>
      <li><router-link to="/home"><img src="../assets/images/iconfont-shouye-(1).png" alt=""><span>首页</span></router-link></li>
      <li><router-link to="/store"><img src="../assets/images/iconfont-shangcheng-(1).png" alt=""><span>商城</span></router-link></li>
      <li><router-link to="/notice"><img src="../assets/images/iconfont-gonggao-(1).png" alt=""><span>公告</span></router-link></li>
      <li><router-link to="/my"><img src="../assets/images/iconfont-wode.png" alt=""><span>我的</span></router-link></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'foot',
}
</script>
<style scoped>
  @import "../assets/css/foot.css";
</style>

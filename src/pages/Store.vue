<template>
  <div id="store">
    <Heade headMgs="商城"></Heade>
    <img src="../assets/images/store/banner.png" alt="" id="banner">
    <ul id="nav1">
      <li><img src="../assets/images/store/lvse.png" alt=""> <b>&nbsp;</b><span>绿色食品</span></li>
      <li><img src="../assets/images/store/baojian.png" alt=""> <b>&nbsp;</b><span>保健器材</span></li>
      <li><img src="../assets/images/store/children.png" alt=""><b>&nbsp;</b> <span>婴幼儿专区</span></li>
      <li><img src="../assets/images/store/yao.png" alt=""> <b>&nbsp;</b><span>药品专区</span></li>
    </ul>
    <div class="gap"></div>
    <div class="top">
      <div class="left">
        <b style="font-size: 2rem ;color:#FB8231 ">|</b>
        <span style="font-size: 2rem;color: #7e7e7e;">绿色食品</span>
      </div>
      <div class="right">
        <p><span style="color:#FB8231">推荐食品</span> <b>|</b> 今日半价 | 热卖 &nbsp;&nbsp;<span class="iconfont icon-gengduo"></span></p>
      </div>
    </div>
    <div class="section">
      <img src="../assets/images/store/1.jpg" alt=""@click="toGoods">
      <img src="../assets/images/store/2.jpg" alt=""@click="toGoods">
      <img src="../assets/images/store/3.jpg" alt=""@click="toGoods">
      <img src="../assets/images/store/5.jpg" alt=""@click="toGoods">
    </div>
    <div class="top">
      <div class="left">
        <b style="font-size: 2rem ;color:#FB8231 ">|</b>
        <span style="font-size: 2rem;color: #7e7e7e;">运动保健器材</span>
      </div>
      <div class="right">
        <p><span style="color:#FB8231">推荐器材</span> <b>|</b> 今日半价 | 热卖 &nbsp;&nbsp;<span class="iconfont icon-gengduo"></span></p>
      </div>
    </div>
    <div class="section">
      <img src="../assets/images/store/1.jpg" alt=""@click="toGoods">
      <img src="../assets/images/store/2.jpg" alt=""@click="toGoods">
      <img src="../assets/images/store/3.jpg" alt=""@click="toGoods">
      <img src="../assets/images/store/5.jpg" alt=""@click="toGoods">
    </div>
  <Foot></Foot>
  </div>
</template>
<script>
  import Foot from "@/components/Foot"
  import Heade from "@/components/Heade"
  export default{
      components :{
          Foot,
          Heade
      },
    data(){
          return{
              headMgs : "商城"
          }
    },
    methods :{
        toGoods : function(){
            var _this = this;
            _this.$router.push({path:"/goods"})
        }
    }
  }
</script>
<style scoped>
  @import "../assets/css/store.css";
  @import "../assets/css/font/iconfont.css";
</style>

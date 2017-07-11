<template>
  <div id="home">
  <div id="header">
    <img src="../assets/images/iconfont-10-(1).png" alt="" id="adress">&nbsp;
    &nbsp;<span style="color: #FEFEFE">北京</span>&nbsp;
    <input type="text" placeholder="  输入商品关键词">
    <img src="../assets/images/iconfont-search-(3).png" alt="" id="search">
  </div>
  <Slider></Slider>
  <ul id="nav">
    <li><img src="../assets/images/19.png" alt=""> <span>健康养生</span></li>
    <li><img src="../assets/images/20.png" alt=""> <span>健康档案</span></li>
    <li><img src="../assets/images/21.png" alt=""> <span>行业新闻</span></li>
    <li><img src="../assets/images/22.png" alt=""> <span>在线客服</span></li>
  </ul>
    <div class="gap"></div>
    <div id="bottom">
    <div id="left">
      <div>
      <h2 style="font-size: 1.8rem">体检中心</h2>
        <br>
      <p style="font-size: 1.4rem">随时关注你的身体健康</p>
      </div>
      <img src="../assets/images/tijian.png" alt="">
    </div>
    <div id="right-s">
      <div>
      <h2 style="font-size: 1.8rem">健康评估</h2>
        <br>
      <p style="font-size: 1.4rem">最权威的医生评估</p>
      </div>
      <img src="../assets/images/iconfont-jiankang-(3).png" alt="">
    </div>
    <div id="right-x">
      <img src="../assets/images/iconfont-yiliaojigoufuzhi.png" alt="">
      <div>
      <h2 style="font-size: 1.8rem">体检机构</h2>
        <br>
      <p style="font-size: 1.4rem">多家机构任你挑选</p>
      </div>
    </div>
    </div>
    <div class="gap"></div>
    <Foot></Foot>
  </div>
</template>
<script>
  import Foot from '@/components/Foot'
  import Slider from '@/components/Slider'
  export default {
    name: 'home',
    components :{
        Foot,
        Slider
    }
  }
</script>
<style scoped>
  @import "../assets/css/home.css";
</style>

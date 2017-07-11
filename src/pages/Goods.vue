<template>
  <div id="goods">
    <div id="big">
  <Heade headMgs="商品详情"></Heade>
    <img src="../assets/images/goods/图片.png" alt="" width="100%">
    <div id="caption">
      <div id="mingZi">
        甘源牌蟹黄味瓜子仁青豆蚕豆四包装零食坚果炒货美食小吃
      </div>
      <span class="iconfont icon-fenxiang" style="font-size: 2.2rem" @click="changeStyle"></span>
    </div>
    <div class="gap"></div>
    <div id="wiBu">
    <div id="price">
      <div id="priceL">
        <p style="color: #7e7e7e">原价:￥35.00</p>
        <p>现价：<span style="color: red">￥:27.00</span></p>
      </div>
      <div id="priceR">
        购买
      </div>
    </div>
    </div>
    <div id="repertory">
      <p><span>库存: </span>199</p>
      <p><span>规格: </span>180g/每袋</p>
    </div>
    <div class="gap"></div>
    <div id="inFoB">
      <div id="inFoN">
        <img src="../assets/images/goods/iconfont-shuxingluru.png" alt="">
        &nbsp;&nbsp;
        <h1 style="font-size: 1.8rem">商品详情</h1>
      </div>
    </div>
    <img src="../assets/images/goods/组-19.png" alt="" class="photoB">
    <img src="../assets/images/goods/组-20.png" alt="" class="photoB">
    <img src="../assets/images/goods/组-21.png" alt="" class="photoB">
    <img src="../assets/images/goods/组-22.png" alt="" class="photoB">
    <div id="liang">
      <img src="../assets/images/goods/组-24.png" alt="" style="width: 50%;position: absolute;bottom: 0;right: 0;">
    </div>
    <img src="../assets/images/goods/dibu.png" alt="" style="width: 100%">
    <div id="shopping">
      <div id="one">
        <span class="iconfont icon-zan"style="color: orange;font-size: 1.6rem"><p>赞</p></span>
        <span class="iconfont icon-pinglun" style="font-size: 1.6rem"><p>评论</p></span>
        <span class="iconfont icon-shoucang" style="font-size: 1.6rem"><p>收藏</p></span>
      </div>
      <div id="two">在线预定</div>
      <div id="three">立即购买</div>
    </div>
    </div>
    <div id="fenxiang">
      <img src="../assets/images/goods/QQ.png" alt="" @click="vanish">
      <img src="../assets/images/goods/组-25.png" alt="" @click="vanish">
      <img src="../assets/images/goods/组-26.png" alt="" @click="vanish">
      <img src="../assets/images/goods/组-27.png" alt="" @click="vanish">
    </div>
  </div>
</template>
<script>
  import Heade from '@/components/Heade'
  export default{
      components :{
          Heade
      },
    methods :{
          changeStyle : function(){
              document.getElementById("fenxiang").style.display="block";
              document.getElementById("big").style.opacity=0.3;
            document.getElementById("big").style.background="#ebebeb"
          },
         vanish : function () {
           document.getElementById("fenxiang").style.display="none";
           document.getElementById("big").style.opacity = 1;
           document.getElementById("big").style.background="none"
         }
  }

  }
</script>
<style scoped>
  @import "../assets/css/goods.css";
  @import "../assets/css/font/iconfont.css";
</style>

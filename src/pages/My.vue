<template>
  <div id="my">
    <div id="info" @click="pre">
      <img src="../assets/images/my/组-23.png"  alt="" width="100%">
    <img src="../assets/images/my/组-26.png" alt="" id="tou">
      <div id="health">
        <span>您好！&nbsp;<img src="../assets/images/my/iconfont-next.png" alt=""></span>
        <span style="color: white;font-size: 1.4rem">{{messages}}</span>
      </div>
    </div>
    <div id="nav-my">
      <div id="nav-my-left">
        <img src="../assets/images/my/组-24.png" alt="">
        <span>我的病例</span>
      </div>
      <div id="nav-my-right">
        <img src="../assets/images/my/组-25.png" alt="">
        <span>我的订单</span>
      </div>
    </div>
    <div class="gap"></div>
    <div class="all" v-for="item in items">
    <div class="section-my">
      <div class="section-my-top">
      <img v-bind:src="item.url" alt="" style="width: 1.8rem"><span > &nbsp;&nbsp;{{item.mgs}}</span>
    </div>
      <img src="../assets/images/my/iconfont-xiala.png" alt="" class="section-my-bottom">
    </div>
    </div>
    <div id="gap"></div>
  <Foot></Foot>
  </div>
</template>
<script>
  import Foot from '@/components/Foot'
  export default{
      data(){
          return {
            items: [{url: require("../assets/images/my/iconfont-tijianbaogao.png"), mgs: "体检报告"},
              {url: require("../assets/images/my/iconfont-xiaoxi.png"), mgs: "系统消息"},
              {url: require("../assets/images/my/iconfont-huiyuan.png"), mgs: "会员中心"},
              {url: require("../assets/images/my/iconfont-fazhanpinggu.png"), mgs: "健康评估"},
              {url: require("../assets/images/my/iconfont-guanlianwuxian.png"), mgs: "关联亲情账号"}
            ],
            messages:"电话："+localStorage.getItem("userName")

          }

      },
      components : {
          Foot
      },
    methods : {
           pre : function(){
        var _this = this;
        if (localStorage.getItem("userName") == null) {
          _this.$router.push({path: '/login'});
        } else {
          _this.$router.push({path: '/personal'})
        }
      }
    }
  }
</script>
<style scoped>
  @import "../assets/css/my.css";
</style>

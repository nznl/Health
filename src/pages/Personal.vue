<template>
  <div id="personal">
  <heade headMgs="基本资料"></heade>
    <div class="bigCan" v-for="item in items">
  <div class="personalCan" >
    <div class="personalCan-left">
      <img v-bind:src="item.url" alt="">&nbsp;
      <span>{{item.mgs}}</span>
    </div>
    <div class="personalCan-right">
      <span>{{item.mgs1}}</span> &nbsp;
      <span class="iconfont icon-more"></span>
    </div>
  </div>
      <div class="gap"></div>
    </div>
  </div>
</template>
<script>
  import Heade from '@/components/Heade'
  export default{
    components :{
        Heade
    },
    data(){
        return{
            items :[
              {url:require("../assets/images/personal/组-20.png"),mgs:"用户名",mgs1:"画地为牢"},
              {url:require("../assets/images/personal/组-21.png"),mgs:"真实姓名",mgs1:"小钢炮"},
              {url:require("../assets/images/personal/组-22.png"),mgs:"修改密码",mgs1:""},
              {url:require("../assets/images/personal/组-23.png"),mgs:"手机号",mgs1:localStorage.getItem("userName")},
              {url:require("../assets/images/personal/组-24.png"),mgs:"证件号",mgs1:"500382199302018888"},
              {url:require("../assets/images/personal/组-25.png"),mgs:"邮箱",mgs1:"wuguang168@foxmail.com"},
              {url:require("../assets/images/personal/组-26.png"),mgs:"收货地址",mgs1:"四川成都"}
            ]

        }
    }
  }
</script>
<style scoped>
  @import "../assets/css/personal.css";
  @import "../assets/css/font/iconfont.css";
</style>

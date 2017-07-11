<template>
  <div id="login">
    <img src="../assets/images/login/beijing.png" alt="" style="max-width: 100%;max-height: 100%">
    <div id="content">
        <div id="circle">
          logo
        </div>
        <div class="phone">
          <img src="../assets/images/login/iconfont-shouji.png" alt="">
          <input type="text" placeholder="请输入手机号码" id="phoneNum">
        </div>
      <div class="phone">
        <img src="../assets/images/login/iconfont-mimaxiugai.png" alt="">
        <input type="text" placeholder="请输入密码" id="miMa">
      </div>
       <div id="signIn" @click ="goTo">登陆</div>
      <div id="words">
        <span style="color:#7979d1">忘记密码？</span>
        <b>|</b>
        <router-link to="/register"><span>立即注册</span></router-link>
      </div>
      <fieldset>
        <legend align="center">其他方式登录</legend>
      </fieldset>
      <div id="imgs">
        <img src="../assets/images/login/QQ.png" alt="">
        <img src="../assets/images/login/微信.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
  export default{

      methods :{
            goTo : function () {
                  var _this = this;
                  var num = document.getElementById("phoneNum").value;
                  var codes1=document.getElementById("miMa").value;
                  if(num == ""||codes1 ==""){
                      alert("请输入账号或者密码")
                  }else if(num == localStorage.getItem("userName")&&codes1==localStorage.getItem("codes")){
                    _this.$router.push({path: '/'});
                  }else {
                      alert("密码或用户名错误")
                  }
            }
      }
  }

</script>
<style scoped>
@import "../assets/css/login.css";
</style>

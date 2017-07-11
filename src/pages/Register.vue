
  <template>
    <div id="register">
      <div id="content">
        <div id="circle">
          logo
        </div>
        <div class="phone">
          <img src="../assets/images/login/iconfont-shouji.png" alt="">
          <input type="text" placeholder="请输入手机号码" id="phoneNum">
        </div>
        <div class="phone">
          <img src="../assets/images/register/iconfont-yanzhengma.png" alt="">
          <input type="text" placeholder="请输入验证码（不区分大小写）" id="authCode">
        </div>
        <div class="authCode" @click="authCode" id="authCode1">获取验证码</div>
        <div class="phone">
          <img src="../assets/images/login/iconfont-mimaxiugai.png" alt="">
          <input type="password" placeholder="请输入密码" id="pad">
        </div>
        <div class="authCode" style="margin-top: 4rem" @click="signUp" >注册</div>
        <div id="deal">
          <img src="../assets/images/register/组-11.png" alt="">&nbsp;
          同意《有益康软件用户协议》
        </div>
      </div>
    </div>
</template>
<script>
  export default{
      methods :{
        authCode :function(){
          var code;
          var arrays=new Array(
            '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'
          );
          code='';
          for(var i=0;i<6;i++){

            var r=parseInt(Math.random()*arrays.length);
            code+=arrays[r];
          }
          document.getElementById("authCode1").innerText=code;
        },
        signUp :function(){
            var _this = this;
            var reg =/^1[0-9]{10}$/
            var phoneNum = document.getElementById("phoneNum").value;
            var pad = document.getElementById("pad").value;
            var authCode = document.getElementById("authCode").value;
            var code =document.getElementById("authCode1").innerText;
            if(phoneNum == ""||pad == "" || authCode == ""){
                alert("输入不能为空，请重新输入")
            }else if (authCode.toLocaleLowerCase()!== code.toLowerCase()){
                alert("验证码错误!")
            }else if (reg.test(phoneNum) == false && pad!==""&&authCode.toLocaleLowerCase()==code.toLowerCase()) {
                alert("手机号输入错误")
            }else{
            localStorage.setItem("userName",phoneNum);
            localStorage.setItem("codes",pad);
            _this.$router.push({path:"/login"})
          }
        }
      }
}
</script>
  <style scoped>
    @import "../assets/css/register.css";
  </style>

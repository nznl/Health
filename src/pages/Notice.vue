<template>
  <div id="notice">
  <Heade headMgs="公告"></Heade>
    <div class="can" v-for="(i,idx) in list" :key="idx">
      <div class="img">
        <img :src="url.concat(i.companyLogo)" alt="" style="width:8rem">
      </div>
      <div class="word">
        <div class="wordTop">
          <span style="font-size: 1.6rem">{{i.companyFullName}}</span>
          <span style="color: #7e7e7e;font-size: 1rem">2015-12-5</span>
        </div>
        <div class="wordB">
          {{i.positionName}}

        </div>
      </div>
    </div>
    <div class="gap"></div>
  <Foot></Foot>
  </div>
</template>
<script>
  import Foot from '@/components/Foot'
  import Heade from '@/components/Heade'
  export default{
    beforeCreate(){
        var that =this
      fetch("../static/listmore.json")
        .then(response => response.json())
        .then(data =>console.log(that.list=data.content.data.page.result))
        .catch(e => console.log('oops,error', e))
    },
    data(){
        return{
            list: '',
          url:'https://www.lgstatic.com/'
        }
    },
      components :{
          Foot,
          Heade
      }
  }
</script>
<style scoped>
  @import "../assets/css/notice.css";
</style>

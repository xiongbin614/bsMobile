<template>
  <div class="login">
      <div class="l-header">
        <i @click="back" class="iconfont icon-back "></i>
        <p>登录</p>
        <span> &nbsp;</span>
      </div>
      <!-- 手机号邮箱 -->
      <div class="l-user l-logins">
        <input v-model="userName" type="text" placeholder="用户名/已验证手机/邮箱">
      </div>
      <!-- 密码 -->
      <div class="l-pwd l-logins">
        <input v-model="passWord" type="text" placeholder="请输入密码"><span>忘记密码</span>
      </div>
      <!-- 登录按钮 -->
      <div class="login-btn l-btn" @click="login">登录</div>
      <!-- 注册按钮 -->
      <router-link to="/register" tag="div" class="register-btn l-btn">注册</router-link>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      userName:null,
      passWord:null
    }
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    login(){
      console.log(document.cookie.indexOf('name'))
       axios.post('http://localhost:3005/bs/login',{
            userName: this.userName,
            passWord: this.passWord
      }).then(res=>{
        if(res.data.code===0){
          document.cookie=`name=${this.userName}`;
          this.$router.go(-1)
        }
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
.login{
  width: 100%;
  padding: 0 10px;
  .l-header{
    height: 44px;
    display: flex;
    margin-bottom: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid #DCDCDC;
    i{
      font-size: 22px;
    }
  }
  .l-logins{
    height: 50px;
    border-bottom: 1px solid #DCDCDC;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    input{
      height: 30px;
      border:0;
      width: 100%;
      font-size: 16px;
    }
  }
  .l-pwd{
    margin-bottom: 20px;
    input{
      width: 80%;
    }
    span{
      font-size: 14px;
      color: #222;
    }
  }
  .l-btn{
    height: 50px;
    width: 100%;
    background: #f10000;
    display: flex;
    color: white;
    justify-content: center;
    align-items: center;
    border-radius: 25px;
    margin-bottom: 10px;
  }
  .register-btn{
    background: white;
    color: #f10000;
    border:1px solid #f10000;
  }
}
</style>

<template>
  <div class="register">
      <div class="r-header">
        <i @click="back" class="iconfont icon-back "></i>
        <p>注册</p>
        <span> &nbsp;</span>
      </div>
      <!-- 手机号邮箱 -->
      <div class="r-user r-register">
        <input type="text" placeholder="请输入正确手机号" v-model="userName">
      </div>
      <!-- 密码 -->
      <div class="r-pwd r-register">
        <input type="text" placeholder="请输入验证码"><span>获取验证码</span>
      </div>
      <!-- 手机号邮箱 -->
      <div class="r-user r-register">
        <input type="text" placeholder="设置密码:  6到20位数字+字母或符号组成" v-model="passWord">
      </div>
      <!-- 登录按钮 -->
      <div @click="sumbit" class="register-btn1 r-btn">注册</div>
      <!-- 注册按钮 -->
      <!-- <div class="register-btn r-btn">注册</div> -->
  </div>
</template>

<script>
import axios from 'axios';
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
    // 注册按钮
    sumbit(){
      axios.post('http://localhost:3005/bs/register',{
            userName: this.userName,
            passWord: this.passWord
      }).then(res=>{
        console.log(res)
      })
    }
  }
}
</script>

<style lang="less">
.register{
  width: 100%;
  padding: 0 10px;
  .r-header{
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
  .r-register{
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
  .r-pwd{
    margin-bottom: 20px;
    input{
      width: 80%;
    }
    span{
      font-size: 14px;
      color: #222;
    }
  }
  .r-btn{
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
  .register-btn1{
    margin-top: 10px;
  }
  .register-btn{
    background: white;
    color: #f10000;
    border:1px solid #f10000;
  }
}
</style>

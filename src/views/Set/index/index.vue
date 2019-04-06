<template>
  <div class="set"> 
    <div class="header">
      <van-icon @click="back" name="arrow-left" />
      <span>账户设置</span>
      <i>&nbsp;</i>
    </div>
    <div class="main">
      <ul>
        <router-link to="/personInfo" tag="li">
          <div class="head">
            <div class="headImg"></div>
            <div class="headInfo">
              <p>asfafafafaf</p>
              <span>用户名：fafasfafas</span>
            </div>
          </div>
          <van-icon @click="back" name="arrow" />
        </router-link>
        <router-link tag="li" to="/adress">
          <span>地址管理</span>
          <van-icon @click="back" name="arrow" />
        </router-link>
        <li>
          <span>地址管理</span>
          <p><i>密码支付</i><van-icon @click="back" name="arrow" /></p>
        </li>
        <li>
          <span>地址管理</span>
          <p><i>密码支付</i><van-icon @click="back" name="arrow" /></p>
        </li>
        <li>
          <span>地址管理</span>
          <p><i>密码支付</i><van-icon @click="back" name="arrow" /></p>
        </li>
        <li>
          <span>地址管理</span>
          <p><i>密码支付</i><van-icon @click="back" name="arrow" /></p>
        </li>
        <li>
          <span>地址管理</span>
          <p><i>密码支付</i><van-icon @click="back" name="arrow" /></p>
        </li>
        
      </ul>
    </div>
  </div>
</template>

<script>
import { Button, Icon } from 'vant';
export default {
    components:{
      [Button.name] :Button,
      [Icon.name] :Icon,
    },
    methods:{
      back(){
        this.$router.go(-1)
      }
    }
}
</script>

<style lang='less' scoped>
  .set{
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #ccc;
    .header{
      height: 44px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      background: white;
    }
    .main{
      height: 100%;
      overflow: auto;
      ul{
        li{
          height: 40px;
          border-bottom: 1px solid #ccc;
          background: white;
          display: flex;
          padding: 5px;
          justify-content: space-between;
          align-items: center;
          p{
            display: flex;
            align-items: center;
          }
          &:nth-child(2){
            margin-bottom: 10px;
          }
           &:nth-child(1){
            height: 70px;
            .head{
              display: flex;
              align-items: center;
              .headImg{
                height: 50px;
                width: 50px;
                border: 1px solid #ccc;
                border-radius: 50%;
                margin-right: 10px;
              }
              .headInfo{
                display: flex;
                flex-direction: column;
                height: 40px;
                justify-content: space-between;
                span{
                  font-size: 12px;
                  color: #ccc;
                }
              }
            }
          }
        }
      }
    }
  }
</style>

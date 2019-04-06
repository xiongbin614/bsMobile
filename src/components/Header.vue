<template>
  <div class="header">
      <router-link tag="i" class="h-left iconfont icon-sort" to="/class"></router-link>
      <router-link tag="div" class="h-center" to="">
      </router-link>
      <router-link tag="div" class="h-right" to="/login">登录</router-link>
  </div>
</template>
<style lang="less">
  .header{
    height: 44px;
    z-index: 5;
    color: white;
    font-size: 14px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    // background: yellow;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    .h-right{
      width: 20%;
      text-align: center;
    }
    .h-left{
      width: 20%;
      text-align: center;
      font-size: 36px;
    }
    .h-center{
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 15px;
      height: 30px;
      background: white;
      width: 60%;
      input{
        height: 30px;
        width: 100%;
        border: 0;
      }
    }
  }
</style>

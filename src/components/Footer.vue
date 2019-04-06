<template>
  <div class="footer">
      <router-link tag="div" class="foot" to="/index">
        <i class="iconfont icon-home"></i>
        <span>首页</span>
      </router-link>
      <router-link tag="div" class="foot" to="/class">
        <i class="iconfont icon-cascades"></i>
        <span>分类</span>
      </router-link>
      <router-link tag="div" class="foot" to="/find">
        <i class="iconfont icon-faxian"></i>
        <span>我的订单</span>
      </router-link>
      <router-link tag="div" class="foot" to="cart">
        <i class="iconfont icon-cart_light"></i>
        <span>购物车</span>
      </router-link>
      <router-link tag="div" class="foot" to="/center">
        <i class="iconfont icon-my_light"></i>
        <span>我的</span>
      </router-link>
  </div>
</template>
<style lang="less" scoped>
  .footer{
    height: 49px;
    // position: fixed;
    // left: 0;
    // bottom: 0;
    background: white;
    width: 100%;
    display: flex;
    justify-content: space-around;
    background: #f9f9f9;
    align-items: center;
    .router-link-active{
      color: #e93b3d;
    }
    .foot{
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      font-size: 12px;
      i{
        font-size: 22px;
      }
    }
  }
</style>


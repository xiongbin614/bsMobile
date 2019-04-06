<template>
<!-- 详细商品展示 -->
  <div class="ShowClass">
      <div class="s-title">
          <img src="//img13.360buyimg.com/cms/jfs/t1/11654/39/7115/44428/5c4a6512E15fd74d0/f67c9e27f2dbd492.jpg" alt="">
          <p class="s-name">华为直营店</p>
          <p class="s-join">进店</p>
      </div>
      <div class="s-banner">
        <img src="//img11.360buyimg.com/cms/jfs/t1/27542/33/8123/177880/5c73405aE457084c8/975b51d414427635.jpg" alt="">
        <div class="s-focus">
          <p>1633万人关注</p>
          <p>华为官方旗舰店</p>
        </div>
        <i>》</i>
      </div>
      <ul class="s-sort">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <ul class="s-filtrate">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
  </div>
</template>
<style lang="less">
  .ShowClass{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    .s-title{
      height: 55px;
      padding: 0 8px;
      width: 100%;
      background: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 30px;
      }
      .s-name{
        font-size: 14px;
      }
      .s-join{
        font-size: 12px;
        color: #fff;
        background-color: #e93b3d;
        padding: 6px 6px 6px 15px;
        border-radius: 15px 0 0 15px;
      }
    }
    .s-banner{
      height: 85px;
      width: 95%;
      display: flex;
      justify-content: space-between;
      border: 1px solid #ddd;
      align-self: center;
      .s-focus{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
      i{
        display: flex;
        align-items: center;
        justify-content: center;
      }
      img{
        width: 210px;
      }
    }
    .s-sort{
      height: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li{
        height: 25px;
        width: 20%;
        background: yellow;
      }
    }
    .s-filtrate{
      height: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li{
        height: 25px;
        width: 20%;
        background: yellow;
        color: #666;
        background: #e5e5e5;
      }
    }
  }
</style>


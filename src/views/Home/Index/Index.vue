<template>
  <div class="index">
    <xbheader></xbheader>
    <div class="i-banner">
      <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t30754/260/200896565/56337/f6bd7d34/5beb3ec6Nb90a97ac.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/9215/25/14027/183517/5c516459E0ff4778e/a7b51a3f9f9db4f8.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/23068/34/8770/99750/5c78fba8E0a774a35/0269d2d89e126a83.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/23068/34/8770/99750/5c78fba8E0a774a35/0269d2d89e126a83.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/23068/34/8770/99750/5c78fba8E0a774a35/0269d2d89e126a83.jpg!cr_1125x549_0_72!q70.jpg.dpg" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="i-nav">
      <img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/16624/11/7881/33021/5c6f9aa1E0e61fcce/bb7b3ff696022c7d.png!q70.jpg.dpg" alt="">
      <img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/32996/36/2915/38482/5c6f9c10E8bd00c65/6ca123449e2d8e93.png!q70.jpg.dpg" alt="">
      <img src="//m.360buyimg.com/mobilecms/s250x200_jfs/t1/25522/15/5228/45476/5c6f9eacE0e1bcecc/fa689adca14dac97.png!q70.jpg.dpg" alt="">
    </div>
    <ul class="i-class">
      <li>
        <img src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp" alt="">
        <span>京东商城</span>
      </li>
      <li>
        <img src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp" alt="">
        <span>京东商城</span>
      </li>
      <li>
        <img src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp" alt="">
        <span>京东商城</span>
      </li>
      <li>
        <img src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp" alt="">
        <span>京东商城</span>
      </li>
      <li>
        <img src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp" alt="">
        <span>京东商城</span>
      </li>
      <li>
        <img src="http://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png.webp" alt="">
        <span>京东商城</span>
      </li>
      
    </ul>
    <!-- 为您推荐 -->
    <div class="buttom">
        <div class="b-title">
          为您推荐
        </div>
        <ul class="b-show">
            <!-- <router-link to="/ware" tag="li">
              <div class="b-showImg">
                <img src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t19024/62/2121376334/167330/1d1707ef/5ae59432N4b023ad1.jpg!q70.dpg" alt="">
              </div>
              <div class="b-showDescribe">
                postcss-px2rem会将px转换为rem，rem单位用于
                度的屏幕，根据标
                度的屏幕，根据标
                度的屏幕，根据标
              </div>
              <div class="b-price">
                <span>￥100</span>
                <p>看相似</p>
              </div>
            </router-link> -->
            <!-- <li>
              <div class="b-showImg">
                <img src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t19024/62/2121376334/167330/1d1707ef/5ae59432N4b023ad1.jpg!q70.dpg" alt="">
              </div>
              <div class="b-showDescribe">
                postcss-px2rem会将px转换为rem，rem单位用于
                度的屏幕，根据标
                度的屏幕，根据标
                度的屏幕，根据标
              </div>
              <div class="b-price">
                <span>￥100</span>
                <p>看相似</p>
              </div>
            </li> -->
            <!-- <li>
              <div class="b-showImg">
                <img src="//img13.360buyimg.com/mobilecms/s372x372_jfs/t19024/62/2121376334/167330/1d1707ef/5ae59432N4b023ad1.jpg!q70.dpg" alt="">
              </div>
              <div class="b-showDescribe">
                postcss-px2rem会将px转换为rem，rem单位用于
                度的屏幕，根据标
                度的屏幕，根据标
                度的屏幕，根据标
              </div>
              <div class="b-price">
                <span>￥100</span>
                <p>看相似</p>
              </div>
            </li> -->
        </ul>
    </div>
  </div>
</template>
<script>
import xbheader from '@/components/Header.vue';
import { Swipe, SwipeItem } from 'vant';
export default {
  components:{
    xbheader,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
  },
  methods: {
  handleChange(index) {

  }
}
}
</script>

<style lang="less">
  .index{
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
    .i-banner{
      width: 100%;
      height: 183px;
      // border: 1px solid red;
      // background: black;
      // opacity: 0.2;
      img{
        width: 100%;
      }
    }
    .i-nav{
      height: 100px;
      width: 100%;
      background: white;
      border: 1px solid red;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img{
        width: 33.33%;
      }
    }
    .i-class{
      height: 162px;
      width: 100%;
      display: flex;
      border: 1px solid yellow;
      justify-content: space-between;
      // align-items: center;
      flex-wrap:wrap;
      li{
        width: 20%;
        height: 74px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        img{
          height: 40px;
        }
        span{
          font-size: 12px;
          color: #666;
        }
      }
    }
    // 为您推荐
    .buttom{
      display: flex;
      width: 100%;
      background: #f0f2f5;
      min-height: auto;
      flex-direction: column;
      margin-bottom: 47px;
      .b-title{
        height: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #cccccc;
      }
      .b-show{
        width: 100%;
        min-height: auto;
        display: flex;
        justify-content: space-between;
        flex-wrap:wrap;
        li{
          width: 49%;
          height: 260px;
          flex-direction: column;
          display: flex;
          padding: 0 5px;
          background: white;
          margin-bottom: 5px;
          .b-showImg{
            height: 186px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 100%;
              height: 100%;
            }
          }
          .b-showDescribe{
            width: 100%;
            height: 35px;
            font-size: 13px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .b-price{
            height: 26px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            span{
              font-size: 16px;
              line-height: 26px;
              color: #f23030;
            }
            p{
              font-size: 12px;
              line-height: 26px;
              text-align: center;
              width: 49px;
              color: #686868;
              border: 1px solid #686868;
              border-radius: 3px;
            }
          }
        }
      }
    }
  }
</style>


<template>
  <div class="center">
    <!-- 头部 -->
    <div class="c-header">
      <div class="head-login">
          <img src="https://res.vmallres.com/nwap/20190228/staticm/img/personal/defaultface_user_after.png" alt="">
          <router-link to="/login" tag="span">登录/注册</router-link>
      </div>
      <router-link to="/set" tag="i" class="iconfont icon-mark"></router-link>
    </div>
    <!-- body主要内容 -->
    <div class="c-main">

        <div class="c-mainConent">
            <div class="login">
                <div class="l-login">
                    <img src="https://res.vmallres.com/nwap/20190228/staticm/img/personal/defaultface_user_after.png" alt="">
                    <!-- <router-link to="/login" @click="login" tag="div" class="qiandao"> -->
                    <div @click="login" class="qiandao">
                      <p>{{userName}}</p>
                      <span>签到领积分</span>
                    <!-- </router-link> -->
                    </div>
                </div>
                <ul class="m-property">
                  <li>
                    <i>-</i>
                    <span>积分</span>
                  </li>
                  <b></b>
                  <li>
                    <i>-</i>
                    <span>优惠卷</span>
                  </li>
                  <b></b>
                  <li>
                    <i>-</i>
                    <span>代金券</span>
                  </li>
                </ul>
            </div>
          <!-- 我的订单 -->
            <div class="my-order">
              <div class="order-top">
                <span>我的订单</span>
                <p>全部订单<i>1</i></p>
              </div>
              <ul class="order-bottom">
                  <li>
                    <i>1</i>
                    <span>代付款</span>
                  </li>
                  <li>
                    <i>1</i>
                    <span>待收货</span>
                  </li>
                  <li>
                    <i>1</i>
                    <span>待评价</span>
                  </li>
                  <li>
                    <i>1</i>
                    <span>退回货</span>
                  </li>
                  <li>
                    <i>1</i>
                    <span>回收单</span>
                  </li>
              </ul>
            </div>
            <!-- 我的商城 -->
            <div class="my-store">
              <div class="my-sTitle">
                <span>我的服务</span>
                <p>服务中心<i>1</i></p>
              </div>
              <ul class="my-serve">
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/G07ccteX3vNYZ93ZJVKe.png" alt="">
                  <span>以旧换新</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/a2Ow2HcAKPNE2jECvrg4.png" alt="">
                  <span>手机充值</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/bIwoJuOcF8sjggyMG4PQ.png" alt="">
                  <span>补购保障</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/TEJxSMpMfgceNFZjmoqF.png" alt="">
                  <span>线下门店</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/1W1R0l3V2gKSRv0RG81m.png" alt="">
                  <span>常见问题</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/6hAmuivo0xmeSXmUawi3.png" alt="">
                  <span>意见问题</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/49vWUTRbVJzX6cHkMifv.png" alt="">
                  <span>服务中心</span>
                </li>
                <li>
                  <img src="https://res.vmallres.com/pimages/pages/personal/a5OtLIwVflwgkJpPzVYs.png" alt="">
                  <span>防伪查询</span>
                </li>
              </ul>
            </div>
            <!-- 为您推荐 -->
            <p class="p-tuijian">为您推荐</p>
            <ul class="my-tuijian">
              <li>
                <img src="https://res.vmallres.com/pimages/recommendmsg/jSvtUsm6j0Fa6risMkqT.jpg" alt="">
              </li>
              <li>
                <img src="https://res.vmallres.com/pimages/recommendmsg/urmoEj4TULLR0PTH2iNE.jpg" alt="">
              </li>
              <li>
                <img src="https://res.vmallres.com/pimages/recommendmsg/kQT1TVVLEKI2uT2RcQxL.jpg" alt="">
              </li>
              <li>
                <img src="https://res.vmallres.com/pimages/recommendmsg/L0vzYXpWVGPfY9UH2Fm0.jpg" alt="">
              </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      userName:'登录/注册'
    }
  },
  mounted(){
      this.isLogin()
  },
  methods:{
    isLogin(){
      if (document.cookie.indexOf('name')===0) {
        this.userName=document.cookie.split('=')[1]
      }
    },
    login(){
      if(this.userName!='登录/注册'){
        this.$router.push('/set')
      }else{
        this.$router.push('/login')
      }
    }
  }
}
</script>


<style lang="less">
  .center{
    display: flex;
    width: 100%;
    background: rgb(248, 248, 248);
    flex-direction: column;
    flex: 1;
    overflow: auto;
     .c-header{
      z-index: 50;
      align-items: center;
      padding: 0 15px;
      height: 44px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      background: rgb(227, 47, 47);
      .head-login{
        display: flex;
        height: 100%;
        align-items: center;
        img{
          width: 31px;
          height: 31px;
          margin-right: 10px;
        }
        span{
          color: white;
        }
      }
      i{
        font-size: 22px;
        color: white;
      }
    }
    .c-main{
      width: 100%;
      display: flex;
      flex: 1;
      // background: yellowgreen;
      overflow: auto;
      .c-mainConent{
        height: 1000px;
        width: 100%;
        display: flex;
        flex-direction: column;
        .my-order{
          height: 113px;
          width: 90%;
          // background: yellow;
          background: white;
          margin-top: 34px;
          display: flex;
          align-self: center;
          border-radius: 10px;
          flex-direction: column;
          padding: 0 5px;
          .order-top{
            height: 41px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
              font-size: 16px;
              font-weight: 900;
            }
            p{
              font-size: 12px;
              color: #666;
            }
          }
          .order-bottom{
            display: flex;
            height: 61px;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            li{
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: space-around;
              width: 20%;
              height: 100%;
              // background: red;
              span{
                font-size: 12px;
                color: #666;
              }
              i{
                color: #666;
              }
            }
          }
        }
        .my-store{
          height: 224px;
          width: 90%;
          background: white;
          margin-top: 10px;
          display: flex;
          align-self: center;
          border-radius: 10px;
          flex-direction: column;
          .my-sTitle{
            display: flex;
            width: 100%;
            height: 42px;
            justify-content: space-between;
            align-items: center;
            padding: 0 5px;
            span{
              font-size: 16px;
              font-weight: 900;
            }
            p{
              font-size: 12px;
              color: #666;
            }
          }
          .my-serve{
            width: 100%;
            height: 172px;
            flex-wrap: wrap;
            display: flex;
            li{
              height: 50%;
              width: 25%;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              align-items: center;
              padding: 10px 0;
              img{
                width: 42px;
                height: 42px;
              }
              span{
                font-size: 12px;
              }
            }
          }
        }
        // 为您推荐
        .p-tuijian{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 50px;
          font-weight: 900;
        }
        .my-tuijian{
          min-height: auto;
          width: 100%;
          flex-direction: column;
          display: flex;
          li{
            width: 90%;
            display: flex;
            align-self: center;
            height: 114px;
            background: white;
            border-radius: 10px;
            margin-top: 10px;
            align-items: center;
            justify-content: center;
            img{
              width: 90%;
              display: flex;
              align-self: center;
            }
          }
        }


        .login{
          height: 151px;
          width: 100%;
          background: rgb(226, 42, 46);
          border-radius: 0 0 60px 60px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          .l-login{
              height: 62px;
              width: 100%;
              display: flex;
              align-items: center;
              margin-bottom: 50px;
              padding-left: 15px;
              img{
                width: 62px;
              }
              .qiandao{
                display: flex;
                flex-direction: column;
                height: 100%;
                justify-content: space-around;
                margin-left: 10px;
                p{
                  font-size: 20px;
                  color: white;
                }
                span{
                  font-size: 12px;
                  color: white;
                }
            }
      }
          .m-property{
            height: 70px;
            width: 90%;
            background: white;
            position: absolute;
            bottom: -24px;
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: space-around;
            b{
              height: 40%;
              border-right:1px solid rgb(249, 249, 249);
            }
            li{
              height: 50%;
              width: 30%;
              display: flex;
              flex-direction: column;
              align-items: center;
              i{
                color:rgb(161, 161, 161);
              }
              span{
                font-size: 12px;
                color: rgb(161, 161, 161);
              }
            }
        }    
    }
      }
    }
  }
</style>


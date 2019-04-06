<template>
  <div class="detail">
    <div class="d-header">
      <i class="iconfont icon-back " @click="back"></i>
      <span>商品详情</span>
      <p><router-link to="/cart" tag="i" class="iconfont icon-cart_light"></router-link><i class="iconfont icon-more"></i></p>
    </div>
    <div class="banner-img">
      <img :src="detailData.dynamicImg" alt="">
    </div>
    <!-- 名字 -->
    <div class="d-name">
      <span>
        自营
      </span>
      <i>{{detailData.catentdesc}}{{detailData.auxdescription}}
      </i>
    </div>
    <!-- 价格 -->
    <div class="d-price">
      <span>￥{{detailData.price}}</span>
      <i>降价提醒</i>
    </div>
    <!-- 选择属性参数 -->
    <div class="d-select">
      <span>已 选</span>
      <p>555555</p>
      <i class="iconfont icon-more"></i>
    </div>
    <!-- 配送地址 -->
    <div class="d-address">
      <span>送 至</span>
      <p><i class="iconfont icon-back"></i>   asfassfasfa</p>
      <i class="iconfont icon-more"></i>
    </div>
    <!-- 重量 -->
    <div class="d-weight">
      <span>重 量</span>
      <p>4.04KG</p>
    </div>
    <!-- 商品评价描述 -->
    <ul class="d-comment">
        <li>图片详情</li>
        <li>规格参数</li>
        <li>包装售后</li>
    </ul>
    <!-- 商品描述内容 -->
    <div class="d-conent"></div>
    <ul class="d-footer">
      <li class="df-kf df">
        <i class="iconfont icon-service_light"></i>
        <span>联系客服</span>
      </li>
      <li class="df-jd df">
        <i class="iconfont icon-like"></i>
        <span>收藏</span>
      </li>
      <li @click="goCart" class="df-cart df">
        <i class="iconfont icon-cart_light"></i>
        <span>购物车</span>
        <b v-show="num">{{num}}</b>
      </li>
      <li class="df-addcart dfbuy" @click="addCart">
        加入购物车
      </li>
      <li class="df-nowbuy dfbuy">
        立即购买
      </li>
    </ul>
  </div>
</template>

<script>
import store from '@/store'
import {mapGetters,mapState} from 'vuex';
import axios from 'axios';
export default {
  data(){
    return{
      id:null,
      num:0
    }
  },
  created(){
    // 获取urlid
    let id = this.$route.params.id.split('.')[0]
    // 触发action发送ajax请求
    store.dispatch('getDetail',id)

  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    addCart(){
      if(document.cookie.split('=')[0]==="name"){
        let id = this.$route.params.id.split('.')[0];
        this.num+=1;
        let data={
          userName:document.cookie.split('=')[1],
          productId:id,
          num:this.num
        }
        axios.post('http://localhost:3005/bs/addCart',data).then(res=>{
          console.log(res)
        }) 
      }else{
        this.$router.push('/login')
      }
       
    },
    goCart(){
      this.$router.push('/cart')
    }
  },
  computed:{
    ...mapState([
      'detailData'
    ])
  }
}
</script>

<style lang="less">
.detail{
  background: #e8e8ed;
  .d-header{
    height: 44px;
    width: 100%;
    // opacity: 0.5;
    background: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: fixed;
    top: 0;
    left: 0;
    i{
      display: flex;
      width: 30px;
      height: 30px;
      background: black;
      opacity: 0.5;
      color: white;
      font-size: 22px;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
    }
    i{
      
    }
    p{
      display: flex;
      justify-content: space-between;
      i{
        margin-left: 10px;
        font-size: 22px;
        
      }
    }
  }
  .banner-img{
    height: 375px;
    background: rebeccapurple;
    img{
      width: 100%;
    }
  }
  .d-name{
    min-height: 44px;
    width: 100%;
    overflow: hidden;
    font-size: 16px;
    padding: 0 10px;
    background: white;
    span{
      display: inline-block;
      width: 30px;
      border-radius: 4px;
      height: 16px;
      background: #e93c3e;
      color: white;
      font-size: 12px;
      text-align: center;
      line-height: 18px;
    }
    i{
      line-height: 18px;
      overflow: hidden;
      color: #e93c3e;
      // display: -webkit-box;
      // -webkit-line-clamp: 2;
      // word-break: break-all;
      // /* autoprefixer: off */
      // -webkit-box-orient: vertical;
    }
  }
  .d-price{
    min-height: 20px;
    background: white;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0 10px;
    span{
      color: #e4393c;
      font-size: 18px;
    }
    i{
      display: flex;
      height: 20px;
      width: 60px;
      border:1px solid #ddd;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      color: #333;
      border-radius: 2px;
    }
  }
  // 选择属性参数
  .d-select{
    height: 40px;
    background: white;
    padding: 0 10px;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: center;
    span{
      width: 10%;
      font-size: 12px;
      color: #999;
    }
    p{
      width: 80%;
      color: #333;
      font-size: 14px;
    }
    i{
      color: #999;
    }
  }
  // 配送地址
  .d-address{
    height: 58px;
    background: white;
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    span{
      width: 10%;
      font-size: 12px;
      color: #999;
    }
    p{
      width: 85%;
      font-size: 14px;
      color: #333;
      i{
        color: #ff9600;
      }
    }
    i{
      color: #999;
    }
  }
  // 重量
  .d-weight{
    height: 40px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    margin-bottom: 10px;
    background: white;
    border-top: 1px solid #e8e8ed;
    span{
      font-size: 12px;
      color: #999;
      margin-right: 10px;
    }
    p{
      font-size: 14px;
      color: #333;
    }
  }
  // 商品点评
  .d-comment{
    height: 40px;
    background: white;
    margin-top: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    li{
      height: 100%;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      border-bottom: 2px solid #f60;
      font-size: 13px;
      color: #333;
    }
  }
  // 商品面试内容
  .d-conent{
    min-height: 200px;
    background: yellow;
  }
  .d-footer{
    height: 49px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // background: red;
    position: fixed;
    bottom: 0;
    left: 0;
    .df{
      width: 14%;
      height: 100%;
      // background: gold;
      flex-direction: column;
      align-items: center;
      display: flex;
      position: relative;
      justify-content: space-around;
      background: white;
      opacity: 0.8;
      i{
        font-size: 22px;
        font-weight: 800;
        color: #999;
      }
      b{
        position: absolute;
        display: flex;
        width: 12px;
        color: white;
        height: 12px;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #e4393c;
        font-size: 7px;
        left: 26px;
        top: 3px;
      }
      span{
        font-size: 10px;
        color: #999;
      }
    }
    .dfbuy{
      width: 29%;
      height: 100%;
      justify-content: center;
      align-items: center;
      display: flex;
      color: white;
      font-size: 14px;
    }
    .df-addcart{
      background: #ff9600;
    }
    .df-nowbuy{
      background: #e4393c;
    }
  }
}
</style>


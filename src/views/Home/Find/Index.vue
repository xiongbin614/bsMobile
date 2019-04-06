<template>
  <div class="find">
    <div class="header">
      <span>我的订单</span>
    </div>
    <ul>
      <li v-for="(item,index) in orderList" :key="index">
        <img :src="item.dynamicImg" alt="">
        <div class="left">
          <p>{{item.catentdesc}}</p>
          <span><i>￥{{item.price}}</i><b>已付款</b></span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
    return {
      orderList:[]
    }
  },
  created(){
    this.getOrder();
  },
  methods:{
    getOrder(){
      let userName=document.cookie.split('=')[1]
      axios.post('http://localhost:3005/bs/getOrder',{
        userName:userName
      }).then(res=>{
       let temp=[];
       res.data.data.map(({product})=>{
        product.map(item=>{
          temp.push(item)
         })
       return 
        })
        this.orderList=temp;
      })
    }
  }
}
</script>

<style lang="less" scoped>
 .find{
    display: flex;
    flex: 1;
    flex-direction: column;
    .header{
      display: flex;
      align-items: center;
      justify-content: center;
      height: 44px;
      border-bottom: 1px solid #ccc;
    }
    ul{
      li{
        display: flex;
        height: 120px;
        align-items: center;
        padding: 0 15px;
        border: 1px solid #ccc;
        img{
          width: 85px;
          margin-right: 15px;
        }
        .left{
          display: flex;
          height: 100%;
          flex-direction: column;
          justify-content: space-between;
          padding: 20px 0;
          p{
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            word-break: break-all;
            /* autoprefixer: off */
            -webkit-box-orient: vertical;
          }
          span{
            display: flex;
            justify-content: space-between;
            align-items: center;
            i{
              color: red;
            }
          }
        }
      }
    }
 }
</style>


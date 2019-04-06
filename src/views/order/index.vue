<template>
  <div class="order">
    <div class="header">
      <van-icon @click="back" name="arrow-left" />
      <span>确认订单</span>
      <i>&nbsp;</i>
    </div>
     <div class="main">
       <router-link to="/eidtAdress" tag="div" class="adress">
         <div class="left">
           <van-icon name="location-o" />
         </div>
         <div class="right">
           <p><span>收货人：{{userInfo.name}}</span><i>{{userInfo.number}}</i></p>
           <div class="rightCenter">
             <span>收货地址：{{userInfo.adress}}</span>
             <van-icon name="location-o" />
           </div>
           <p>(收货不便时，可选择免费代收)</p>
         </div>
       </router-link>
       <ul class="info">
        <li v-for="(item,index) in dataList" :key="index">
          <img :src="item.dynamicImg" alt="">
          <div class="left">
            <span>{{item.catentdesc}}</span>
            <p><i>{{item.price}}</i><b>×{{item.num}}</b></p>
          </div>
        </li>
       </ul>
     </div>

    <van-submit-bar
      :price="price"
      button-text="提交订单"
      @submit="onSubmit"
      class="sumbit"
    />
  </div>
</template>

<script>
import { Button, Icon,AddressList,SubmitBar } from 'vant';
export default {
  components:{
      [Button.name] :Button,
      [Icon.name] :Icon,
      [AddressList.name] :AddressList,
      [SubmitBar.name]:SubmitBar,

    },
    data(){
      return{
        dataList:[],
        price:Number,
        userInfo:{
          name:'熊彬',
          number:15880335203,
          adress:'阿发沙发沙发沙发上',
        },
      }
    },
    computed:{
      //  dataList(){
        //  return this.$store.state.orderInfo ? this.$store.state.orderInfo : JSON.parse(localStorage.getItem('data'));
      //  }
    },
    created(){
      this.dataList=JSON.parse(localStorage.getItem('data'));
      this.price=JSON.parse(localStorage.getItem('price'));
      console.log(typeof this.price)
    },
    // destroyed(){
    //   localStorage.removeItem('data')
    //   localStorage.removeItem('price')
    // },
    methods:{
      onSubmit(){
        this.$router.push('/payMoney');
        localStorage.setItem('userInfo',JSON.stringify(this.userInfo))
      },
      back(){
        this.$router.go(-1);
        localStorage.removeItem('data')
        localStorage.removeItem('price')
      },
    }
}
</script>

<style lang="less" scoped>
  .order{
    height: 100%;
    display: flex;
    flex-direction: column;
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
      .adress{
        height: 100px;
        border-bottom: 1px solid #ccc;
        display: flex;
        .left{
          width: 10%;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
        .right{
          width: 90%;
          display: flex;
          height: 100%;
          padding: 15px 15px 15px 0;
          flex-direction: column;
          justify-content: space-between;
          .rightCenter{
            display: flex;
            align-items: center;
            justify-content: space-between;
            span{
              font-size: 14px;
            }
          }
          p{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 12px;
            span{
              font-size: 14px;
            }
            i{
              font-size: 14px;
            }
          }
        }
      }
      .info{
        height: auto;
        border: 1px solid #ccc;
        border-top: 30px solid #ccc;
        li{
          height: 120px;
          border: 1px solid #ccc;
          margin-bottom: 1px;
          display: flex;
          align-items: center;
          padding: 0 15px;
          img{
            width: 85px;
            margin-right: 15px;
          }
          .left{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 100%;
            padding: 20px 0;
            p{
              display: flex;
              align-items: center;
              justify-content: space-between;
              i{
                color: red;
              }
            }
          }
        }
      }
    }
    .sumbit{
      border-top: 1px solid #ccc;
    }
  }
</style>

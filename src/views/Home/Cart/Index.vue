<template>
  <div class="cart">
    <div class="c-header">购物车</div>
    <!-- 购物车显示主要模块 -->
    <div class="main">
      <div class="c-mainContent">
        <div class="c-warpShop">
          <div class="showShop">
              <ul>
                <li v-for="(item,index) in productList" :key="item.index">
                  <input type="checkbox" @click="checkedAction(index)" :checked="item.checked" name="" id="">
                  <img :src="item.dynamicImg" alt="">
                  <div class="leftItem">
                    <span>{{item.catentdesc}}</span>
                    <div class="price">
                      <div>￥{{item.price}}</div>
                      <p><i @click="adc(index)">-</i><b>{{item.num}}</b><i @click="add(index)">+</i></p>
                    </div>
                  </div>
                </li>
              </ul>
              <van-submit-bar
                :price="price"
                button-text="提交订单"
                @submit="onSubmit"
                class="submitbar"
              >
                <input @click="allCheckedAnction" :checked="allChecked" type="checkbox" name="全选" id="">
                <span slot="tip">
                  你的收货地址不支持同城送, <span>修改地址</span>
                </span>
              </van-submit-bar>
            <div v-if="!isProduct"><div v-show="!show">你的购物车还没东西，快去添加吧！</div></div>
            <div v-show="show" class="noLogin">
              <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png" alt="">
              <p>登录后可同步购物的商品</p>
              <router-link to="/login" tag="span">登录</router-link>
            </div>
          </div>
          <!-- 热销推荐 -->
          <div class="hot-title">热销推荐</div>
          <ul class="hot-shop">
            <li>
              <img src="https://res.vmallres.com/pimages/product/2601010086605//428_428_1551941458768mp.png" alt="">
              <p>荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9荣耀9</p>
              <span>￥3200</span>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import { Checkbox, CheckboxGroup,SubmitBar } from 'vant';
// import store from '@/store'
import {mapGetters,mapState} from 'vuex';
export default {
  components:{
    [Checkbox.name]:Checkbox,
    [CheckboxGroup.name]:CheckboxGroup,
    [SubmitBar.name]:SubmitBar,
  },
  data(){
    return{
      show:true,
      cartData:[],//购物车商品id，数量
      productInfo:[],
      productList:[],//购物车商品信息
      isProduct:true,
      checked:false,
      number:1,
      price:0,
      checkedProduct:[],
      allChecked:false,
    }
  },
  created(){
    this.ifLogin();
    this.getCartInfo();
    this.getCartDate();
    this.isProductAction();
  },
  methods:{
    allCheckedAnction(){
        this.allChecked=!this.allChecked;
        if(this.allChecked){
          this.price=0;
          for(let i=0;i<this.productList.length;i++){
            this.productList[i].checked=true;
            this.checkedProduct.push(this.productList[i])
          }
        }else{
          this.price=0;
          for(let i=0;i<this.productList.length;i++){
            this.checkedProduct=[];
            this.productList[i].checked=false;
          }
        }
      this.isCkeckedItem();
    },
    isCkeckedItem(){
      console.log(this.productList)
      for(let i=0;i<this.productList.length;i++){
        if(this.productList[i].checked){
          this.price+=Number(this.productList[i].price)*Number(this.productList[i].num)*100;
          this.checkedProduct.push(this.productList[i])
        }
      }
    },
    checkedAction(index){
      this.productList[index].checked=!this.productList[index].checked;
      this.price=0;
      this.checkedProduct=[];
      this.isCkeckedItem();
      
    },
    adc(index){
      if(this.productList[index].num==0){
          this.productList[index].num=0
      }else{
        this.productList[index].num--;
        this.price=0;
        this.checkedProduct=[];
        this.isCkeckedItem();
      }
    },
    add(index){
      this.productList[index].num++;
      this.price=0;
      this.checkedProduct=[];
      this.isCkeckedItem();
    },
    ifLogin(){
      if (document.cookie.indexOf('name')===0) {
        this.show=false;
      }
    },
    isProductAction(){
      if (this.cartData.length>0) {
        this.isProduct=false;
      }
    },
    getCartInfo(){
      if (document.cookie.indexOf('name')===0) {
        let name=document.cookie.split('=')[1]
        //如果secction存在就获取axios去请求数据
        axios.post('http://localhost:3005/bs/cartData',{
          userName:name
        }).then(res=>{
          if(res.status===200){
            if(res.data.data){
              this.cartData = res.data.data.map(({num,productId,userName})=>{
                return {num,productId,userName}
              })
            }
          }
        })
      }
    },
        // 获取用户购物车商品信息页面数据
    getCartDate(){
      axios.get('http://localhost:3005/bs/productCartInfo').then(res=>{
        console.log(res)
         let TempGoods= res.data.data.map(({goods})=>{
            return {...goods}
          })
          for(var i=0;i<TempGoods.length;i++){
            for(var k=0;k<this.cartData.length;k++){
                for(var j in TempGoods[i]){
                  if(TempGoods[i][j].catentryId===this.cartData[k].productId){
                    console.log(TempGoods[i][j])
                    TempGoods[i][j].num=this.cartData[k].num;
                    TempGoods[i][j].checked=false;
                   this.productList.push(TempGoods[i][j])
                  }
                }
            }
          }
      })
    },
    // 提交订单
    onSubmit(){
      this.$router.push('/order');
      console.log(this.checkedProduct)
      this.$store.commit('addOrder',this.checkedProduct)
      this.$store.commit('price',this.price)
    }
  }
}
</script>

<style lang="less">
  .cart{
    display: flex;
    flex-direction: column;
    background: rgb(247, 247, 247);
    flex: 1;
    .c-header{
      height: 44px;
      width: 100%;
      font-size: 18px;
      color: #333;
      border-bottom: 1px solid rgb(249, 249, 249);
      display: flex;
      justify-content: center;
      align-items: center;
      background: white;
    }
    .main{
      display: flex;
      flex: 1;
      width: 100%;
      overflow: auto;
      .c-mainContent{
        height: 100%;
        width: 100%;
        .c-warpShop{
            flex-direction: column;
            display: flex;
            width: 100%;
            .showShop{
              width: 100%;
              min-height: 228px;
              background: white;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              .submitbar{
                bottom: 49px;
              }
              ul{
                width: 100%;
                background: #f1f4f8;
                li{
                  background: white;
                  height: 120px;
                  border-radius: 10px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  border: 1px solid#ccc;
                  padding: 0 10px;
                  margin-top: 5px;
                  img{
                    width: 100px;
                  }
                  .leftItem{
                    height: 100%;
                    padding: 10px 0;
                    display: flex;
                    flex-direction: column;
                    width: 60%;
                    justify-content: space-between;
                    .price{
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      div{
                        color: #ca141d;
                      }
                      p{
                      display: flex;
                      justify-content: flex-end;
                      i{
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border: 1px solid #ccc;
                      }
                      b{
                        margin: 0 5px;
                      }
                    }
                    }
                    
                  }
                }
              }
              .noLogin{
                width: 100%;
                height: 228px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                padding: 25px 0;
                img{
                  width: 90px;
                  height: 90px;
                }
                span{
                  width: 60px;
                  height: 30px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border:1px solid #e93b3d;
                  border-radius: 4px;
                  font-size: 14px;
                  color: #e93b3d;
                }
                p{
                  font-size: 16px;
                  color: rgba(51,51,51,.66);
                }
              }
            }

        }
        
      // 热线推荐
      .hot-title{
        height: 54px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 800;
      }
      // 推荐商品
      .hot-shop{
        min-height: auto;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 48%;
          height: 240px;
          background: white;
          margin-bottom: 5px;
          margin-left: 5px;
          border-radius: 5px;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-around;
          padding: 10px 0;
          img{
            width: 135px;
            height: 135px;
          }
          span{
            color: #ca141d;
            font-weight: 800;
          }
          p{
            color: #333;
            font-size: 14px;
            max-width: 135px;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp:2;
            -webkit-box-orient:vertical; 
            white-space:normal;
            display:-webkit-box; 
          }
        }
      }

      }
      
    }
  }
</style>


<template>
  <!-- 展示手机 -->
      <router-link tag="ul" :to="'/detail/'+5" class="showItem">
        <li>
          <img :src="data.dynamicImg" alt="">
          <div class="item-detail">
            <p class="p-name">{{data.name}}</p>
            <p class="p-describe">
              <span v-for="(item,index) in data.appAttrTitle" :key="index">{{item}}</span>
              <!-- <span>6GB</span> -->
              <!-- <span>6GB</span> -->
            </p>
            <p class="p-price">￥{{data.price}}</p>
            <p class="p-self">
              <span>自营</span>
            </p>
            <p class="p-num"><em>61万+评价</em>  <em>好评率{{data.praiseRate}}</em></p>
          </div>
        </li>
      </router-link>
</template>

<script>
export default {
  props:["data"],
  // created(){
  //   console.log(this.data)
  // }
}
</script>

<style lang="less">
    // 展示手机
    .showItem{
      width: 100%;
      min-height: auto;
      li{
        height: 140px;
        width: 100%;
        background: white;
        border-bottom: 1px solid #f4f4f4;
        display: flex;
        align-items: center;
        img{
          width: 120px;
        }
        .item-detail{
          height: 100%;
          // padding-left: 8px;
          // background: greenyellow;
          width: 68%;
          display: flex;
          padding: 8px 8px;
          flex-direction: column;
          justify-content: space-around;
          // 功能描述
          .p-describe{
            height: 15px;
            width: 100%;
            display: flex;
            align-items: center;
            span{
              color: #999;
              background: #f2f2f7;
              text-align: center;
              line-height: 15px;
              font-size: 12px;
              min-width: auto;
              padding: 0 5px;
              border-radius: 2px;
              margin-right: 5px;
            }
          }
          // 名字
          .p-name{
            color: #333;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            white-space: normal;
            display: -webkit-box;
          }
          // 价格
          .p-price{
            color: #e93b3d;
            font-size: 16px;
          }
          // 自营
          .p-self{
            height: 15px;
            width: 100%;
            align-items: center;
            span{
              font-size: 12px;
              padding: 0 5px;
              min-width: auto;
              line-height: 15px;
              text-align: center;
              border-radius: 2px;
              height: 100%;
              color: white;
              background: #e93c3e;
            }
          }
          // 评价
          .p-num{
            font-size: 12px;
            color: #333;
          }
        }
      }
    }
</style>

<template>
  <div class="show">
              
              <h4>{{data.name}}</h4>
              <ul>
                <router-link :to="'/list/'+item._id" tag="li"  v-for="(item,index) in data.subCategorys" :key="index">
                  <!-- http://localhost:3005/images/5a1692eeN105a64b4.png -->
                  <img :src="'http://localhost:3005/images/class/'+item.categoryUrl" alt="">
                  <span>{{item.name}}</span>
                </router-link>
            
              </ul>
    </div>
</template>
<script>
export default {
  props:["data"]
}
</script>

<style lang="less">
    .show{
            width: 100%;
            min-height: auto;
            display: flex;
            flex-direction: column;
            h4{
              font-size: 14px;
              font-weight: 700;
              color: #333;
              margin-top: 10px;
              padding-left: 10px;
            }
            ul{
              width: 80%;
              height: 100%;
              display: flex;
              align-self: center;
              flex-wrap: wrap;
              align-content: flex-start;
              li{
                width: 33.33%;
                height: 120px;
                padding: 10px 0;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-items: center;
                // &:hover{
                //  border: 1px solid red;
                // } 
                img{
                  width: 70px;
                }
                span{
                  font-size: 12px;
                  color: #333;
                }
              }
            }
          }
</style>


<template>
  <div class="classify">
      <search></search>
      <div class="c-main">
          <div class="cms-left">
            <ul class="leftNav">
              <li :class="{active : active == item.name}"  @click="toggle(item.name)" v-for="(item,index) in data" :key='index'>{{item.name}}</li>
            </ul>
          </div>
          <div class="cms-right">
            <div class="rightShow">
              <div class="title-img" v-if="initdata.urlimg">
                <img :src="initdata.urlimg" alt="">
              </div>
              <mainShow :data="item" v-for="(item,index) in initdata.subCategorys" :key="index"></mainShow>             
            </div>
          </div>
      </div>
  </div>
</template>
<script>
import search from '@/components/Search.vue'
import mainShow from './MainShow.vue'
import axios from 'axios'
export default {
  components:{
    search,
    mainShow
  },
  data(){
    return{
      data:[],
      initdata:{},
      active:''
    }
  },
  created(){
    axios.get('http://localhost:3005/bs/class').then(res=>{
      this.data=res.data[0].data;
      console.log(res.data)
      this.toggle();
    }).catch(err=>{
      console.log(err)
    })
  },
  // 默认点击渲染不同的数据
  methods:{
    toggle(val='热门推荐'){
    this.active=val;
    this.initdata = this.data.find(item=>{
      if(item.name===val){
      console.log(item.name)
        return item
      }
    })
  }
  }
  
}
</script>

<style lang="less">
.active{
  color: #e93b3d!important;
}
  .classify{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: auto;
    .c-main{
      width: 100%;
      display: flex;
      overflow: auto;
      flex: 1;
        .cms-left{
          width: 20%;
          height: 100%;
          overflow: auto;
          background: #f8f8f8;
          .leftNav{
            width: 100%;
            min-height: auto;
            li{
              height: 46px;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 14px;
              color: #333;
            }
          }
        }
        .cms-right{
          width: 80%;
          height: 100%;
          overflow: auto;
          .rightShow{
            width: 100%;
            min-height: auto;
            display: flex;
            flex-direction: column;
            .title-img{
              height: 103px;
              width: 100%;
              padding: 5px 10px;
              img{
                width: 100%;
              }
            }
          }
        }
    }
  }
</style>


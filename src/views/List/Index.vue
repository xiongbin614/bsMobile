<template>
  <div class="list">
    <div class="l-main">
       <Search></Search>
       <!-- 筛选排序 -->
          <ul class="l-sort">
            <li>综合</li>
            <li>销量</li>
            <li>价格</li>
            <li>筛选</li>
          </ul>
          <!-- 筛选 -->
          <ul class="filter">
            <li>新品</li>
            <li>新品</li>
            <li>新品</li>
            <li>新品</li>
          </ul>
          <Item></Item>
    </div>
  </div>
</template>
<script>
import Search from '@/components/Search.vue';
import Item from '@/views/List/Item.vue';

export default {
  components:{
     Search,
     Item
  },
 
  
   
}
</script>
<style lang="less">
.list{
  height: 100%;
  width: 100%;
  overflow: auto;
  .l-main{
    width: 100%;
    height: 1000px;
    // 排序
    .l-sort{
      width: 100%;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      li{
        color: #333;
        font-size: 14px;
        width: 25%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
      // 筛选
    .filter{
      height: 44px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      background: white;
      position: sticky;
      top: 0;
      border-bottom: 1px solid #f4f4f4;
      li{
        height: 60%;
        width: 20%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #333;
        background: #f2f2f7;
        border-radius: 3px;
      }
    }
  }
}
</style>






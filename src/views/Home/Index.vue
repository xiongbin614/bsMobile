<template>
    <div class="home">
      <router-view ></router-view>
      <xbfooter></xbfooter>
    </div>
</template>
<script>
// import store from '@/store'
// import {mapGetters,mapState} from 'vuex';
import xbfooter from '@/components/Footer.vue';
import xbsearch from '@/components/Search.vue';
export default {
  components:{
    xbfooter,
    xbsearch
  },
  // created(){
  //   store.dispatch('getCart')//获取购物车用户添加的商品
  // }
}
</script>
<style lang="less">
  .home{
    flex-direction: column;
    display: flex;
    width: 100%;
    height: 100%;
    .center{
      display: flex;
      width: 100%;
      flex: 1;
    }
  }
</style>


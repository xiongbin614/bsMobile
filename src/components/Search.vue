<template>
  <div class="search">
      <i class="iconfont icon-back " @click="back"></i>
      <div class="search-input"></div>
      <i class="iconfont icon-more"></i>
  </div>
</template>
<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less">
  .search{
    height: 44px;
    padding: 0 10px;
    width: 100%;
    border-bottom:1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .search-input{
      height: 30px;
      width: 80%;
      background: rgb(247, 247, 247);
      border-radius: 15px;
    }
    i{
      font-size: 24px;
      color: #62646f;
    }
  }
</style>


<template>
    <div class="payMoney">
      <button @click="successAction">付款成功</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  methods:{
    successAction(){
      let name=document.cookie.split('=')[1];
      let product= localStorage.getItem('data')
      let price= localStorage.getItem('price')
      let userInfo= localStorage.getItem('userInfo')
      console.log(localStorage.getItem('price'))
      console.log(localStorage.getItem('data'))
      axios.post('http://localhost:3005/bs/order',{
        userName:name,
        price:price, 
        product:product,
        userInfo:userInfo,
      })
    }
  },
  destroyed(){
      // localStorage.removeItem('data')
      // localStorage.removeItem('price')
      localStorage.removeItem('userInfo')
    },
}
</script>

<style>

</style>

<template>
  <div class="adress">
    <div class="header">
      <van-icon @click="back" name="arrow-left" />
      <span>我的地址</span>
      <i>&nbsp;</i>
    </div>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { Button, Icon,AddressList } from 'vant';
export default {
 components:{
      [Button.name] :Button,
      [Icon.name] :Icon,
      [AddressList.name] :AddressList,
    },
    data(){
      return{
        chosenAddressId: '1',
         list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号'
        }
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '浙江省杭州市滨江区江南大道 15 号'
        }
      ]
      }
    },
    methods:{
      back(){
        this.$router.go(-1)
      },
      onAdd() {
      this.$router.push('/eidtAdress')
    },
      onEdit(item, index) {
        this.$router.push('/eidtAdress')
      },
    }
}
</script>

<style lang="less" socoped>
.header{
      height: 44px;
      border-bottom: 1px solid #ccc;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px;
      background: white;
    }
</style>

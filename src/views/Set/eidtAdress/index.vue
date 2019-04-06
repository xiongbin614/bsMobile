<template>
    <div class="editAdress">
      <div class="header">
        <van-icon @click="back" name="arrow-left" />
        <span>编辑/新增地址</span>
        <i>&nbsp;</i>
      </div>
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
</template>

<script>
import { Button, Icon,AddressEdit } from 'vant';
export default {
  data() {
    return {
      areaList:{
        dd:'5',
        ss:'6',
        ff:'8'
      },
      searchResult: []
    }
  },
  components:{
      [Button.name] :Button,
      [Icon.name] :Icon,
      [AddressEdit.name] :AddressEdit,
    },
  methods: {
    back(){
        this.$router.go(-1)
      }
    // onSave() {
    //   Toast('save');
    // },
    // onDelete() {
    //   Toast('delete');
    // },
    // onChangeDetail(val) {
    //   if (val) {
    //     this.searchResult = [{
    //       name: '黄龙万科中心',
    //       address: '杭州市西湖区'
    //     }];
    //   } else {
    //     this.searchResult = [];
    //   }
    // }
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

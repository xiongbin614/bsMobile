import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      listData:[],
      detailData:[],
      orderInfo: [],
      // price:null
  },
  mutations: {
    // 设置list页面数据
    setListData(state, payload){
      state.listData=payload;
      },
    setDetail(state, payload){
      state.detailData=payload
    },
    //提交订单-确认订单
    addOrder(state, payload){
      state.orderInfo = payload;
      localStorage.setItem('data', JSON.stringify(payload))
    },
    //提交订单-确认订单
    price(state, payload){
      console.log(typeof payload)
      localStorage.setItem('price', JSON.stringify(payload))
    }
  },
  actions: {
    // 获取list页面的数据
    getListData(context,id){
      axios.get('http://localhost:3005/bs/list').then(res => {
        // 返回对应品牌的所有数据
         let list=res.data.find(item=>{
          if (item.brandid===id){
            return item;
          }
        })
        // 拿到里面的每一个手机的数据对象
        let goods=list.goods;
        let objs= goods.map(item=>{
          let obj={
            name: item.catentdesc,
            price: item.price,
            dynamicImg: item.dynamicImg,
            catentryId: item.catentryId,
            appAttrTitle: item.extenalFileds.appAttrTitle,
            commentShow: item.extenalFileds.commentShow,
            praiseRate: item.praiseRate
          }
          return obj;
        })
        context.commit('setListData', objs)
      })
    },
    // 获取detail页面数据
    getDetail(context, id){
      axios.get('http://localhost:3005/bs/list').then(res=>{
        let a={}
       res.data.map(item=>{
         item.goods.find(i=>{
            if (i.catentryId==id){
              a=i;
              return i;
            }
          })
          return item;
        })
        context.commit('setDetail',a)
        console.log(a)
      })
    },
    
  }
})

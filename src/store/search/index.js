import { reqGetSearchInfo } from '@/api'
import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     searchList:{}
//   },
//   getters: {
//     goodsList(state) {
//       return state.searchList.goodsList
//     },
//     trademarkList(state) { 
//       return state.searchList.trademarkList
//     },
//     attrsList(state) {
//       return state.searchList.attrsList
//     }
//   },
//   mutations: {
//       GETSEARCHLIST(state,searchList) {
//         state.searchList = searchList
//       }
//   },
//   actions: {
//     async getSearchList({commit},params) {
//       let result = await reqGetSearchInfo(params)
//       if (result.code == 200) {
//         commit("GETSEARCHLIST", result.data)
//       }
//     }
//   },
//   modules: {},
// })

let state = {
  //搜索模块返回的数据
  searchList: {}
};
let mutations = {
  GETSEARCHLIST(state, searchList) {
       state.searchList = searchList;
  }
};
let actions = {
    async getSearchList({commit},params) {
      let result = await reqGetSearchInfo(params)
      if (result.code == 200) {
        commit("GETSEARCHLIST", result.data)
      }
    }
};

//getters:仓库的计算属性
//项目中:vuex的getters,为了简化数据而生。
let getters = {
  //计算新的属性:state,当前小仓库的数据
  goodsList(state) {
       return state.searchList.goodsList ||[];
  },
  //品牌的数据
  trademarkList(state) {
       return state.searchList.trademarkList;
  },
  //商品属性
  attrsList(state) {
       return state.searchList.attrsList;
  }
};

//对外暴露
export default {
  state,
  mutations,
  actions,
  getters
}

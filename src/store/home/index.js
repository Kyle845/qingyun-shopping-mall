import Vue from 'vue'
import Vuex from 'vuex'
import {reqCategoryList} from '@/api/requests.js'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    categoryList:[]
  },
  getters: {},
  mutations: {
    ADD(state) {
      state.count++
    },
    CATEGORYLIST(state,categoryList) {
      state.categoryList = categoryList;
  },
  },
  actions: {
    add({ commit }) {
      commit('ADD')
    },
    async categoryList({commit}) {
      let result = await reqCategoryList();
      console.log('result',result);
      if (result.code == 200) {
        //提交mutation存储服务器数据
        commit("CATEGORYLIST", result.data);
    }
  }
  },
  modules: {},
})

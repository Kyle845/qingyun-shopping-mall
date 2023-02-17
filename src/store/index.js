import Vue from 'vue'
import Vuex from 'vuex'
import {reqCategoryList,reqGetBannerList,reqFloorList} from '@/api/index.js'
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state: {
    categoryList:[],
    bannerList:[],
    floorList:[]
  },
  getters: {},
  mutations: {
    ADD(state) {
      state.count++
    },
    CATEGORYLIST(state,categoryList) {
      state.categoryList = categoryList;
  },
    BANNERLIST(state,bannerList) {
    state.bannerList = bannerList;
},
    GETFLOORLIST(state, floorList) {
      state.floorList = floorList;
    }
  },
  actions: {
    add({ commit }) {
      commit('ADD')
    },
    async categoryList({commit}) {
      let result = await reqCategoryList();
      if (result.code == 200) {
        //提交mutation存储服务器数据
        commit("CATEGORYLIST", result.data);
    }
  },
    async getBannerList({commit}) {
      let result = await reqGetBannerList();
      console.log(result)
      if (result.code == 200) {
        commit("BANNERLIST", result.data);
      }
    },
    async getFloorList({commit}) {
      let result = await reqFloorList();
      console.log("FloorList",result)
      if (result.code == 200) {

        commit("GETFLOORLIST", result.data);
      }
    },
  },
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  },
})

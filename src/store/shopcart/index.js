 import { reqCartList,reqDeleteCartById,reqUpdateCheckedById } from "@/api";
 const state = {
    cartList:[]
 };
 const mutations = {
    GETSHOPCART(state,cartList) {
        state.cartList = cartList;  
    }
 };
 const actions = {
    async getShopCart({commit}) {
        let result = await reqCartList();
        if (result.code == 200) {
            commit('GETSHOPCART',result.data)
        }
    },
    async deleteCartListBySkuId({commit},skuId) {
        let result = await reqDeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    async updateCheckedById({commit},{skuId,isChecked}) {
        let result = await reqUpdateCheckedById(skuId,isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error('failed'));
        }
    },
    deleteAllCheckedCart({dispatch,getters}) {
        let PromiseAll = [];
        getters.cartList.cartInfoList.forEach(item => {
            let promise = item.isChecked == 1 ? dispatch('deleteCartListBySkuId',item.skuId):'';
            PromiseAll.push(promise);
        })
    },
    updateAllCartIsChecked({dispatch,state},isChecked) {
        let promiseAll = [];
        state.cartList[0].cartInfoList.forEach(item => {
            let promise = dispatch('updateCheckedById',{skuId:item.skuId,isChecked});
            promiseAll.push(promise);    
        });
        return Promise.all(promiseAll);
    }
 };
 const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    }
 };
 export default {
    state,
    mutations,
    actions,
    getters
 } 
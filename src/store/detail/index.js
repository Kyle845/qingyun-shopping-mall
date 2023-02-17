import { reqGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import {getUUID} from '@/utils/uuid_token';
let state = {
    goodInfo:{},
    uuid_token:getUUID()
}; 
let mutations = {
    GETGOODINFO(state,goodInfo){
        state.goodInfo = goodInfo;
    }
};
let actions = {
    async getGoodInfo ({commit},skuId) {
        let result = await reqGoodsInfo(skuId);
        if (result.code == 200) {
            commit('GETGOODINFO',result.data)
        }
    },
    // async addOrUpdateShopCart({commit},{skuId,skuNum}) {
    //     let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    //     console.log(result); 
    // }
    async addOrUpdateShopCart({commit},{skuId,skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId,skuNum);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("hhhh"));
        }
    } 
};
let getters = { 
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || []
    }
};
export default {
    state,
    actions,
    mutations,
    getters
}
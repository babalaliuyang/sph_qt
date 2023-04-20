import { reqGetDetailList, reqAddOrUpdateShopCart } from "@/Api"

const state = {
    detailList: {}
}
const mutations = {
    GETDETAAILLIST(state, detailList) {
        state.detailList = detailList
    }
}
const actions = {
    async getDetailList({ commit }, skuid) {
        let result = await reqGetDetailList(skuid);
        console.log('详情列表', result);
        if (result.code == 200) {
            commit('GETDETAAILLIST', result.data)
        }
    },
    // 将产品添加到购物车
    async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
        console.log(skuId, skuNum);
        let result = await reqAddOrUpdateShopCart(skuId, skuNum)
        console.log('购物车', result);
        // 当前函数如果执行返回Promise
        if (result.code == 200) {
            return 'ok'
        } else {
            // 代表加入失败
            return Promise.reject(new Error('failed'))
        }
    }
}
const getters = {
    categoryView(state) {
        return state.detailList.categoryView || {}
    },
    skuInfo(state) {
        return state.detailList.skuInfo || {}
    },
    spuSaleAttrList(state) {
        return state.detailList.spuSaleAttrList || []
    },

}
export default {
    state,
    mutations,
    actions,
    getters
}

import { reqCartList, reqDeleteCartById, reqUpdateCheckedById } from "@/Api";

const state = {
    cartList: [],
    // uuid_token: uuid()
}
const mutations = {
    CARTLIST(state, cartList) {
        state.cartList = cartList
    },
}
const actions = {
    async CartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('CARTLIST', result.data)
        }
    },
    async DeleteCartById({ commit }, skuId) {
        let result = await reqDeleteCartById(skuId)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async UpdateCheckedById({ commit }, { skuId, isChecked }) {
        // console.log(skuId, isChecked);
        let result = await reqUpdateCheckedById(skuId, isChecked)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
}
const getters = {
    cartList(state) {
        return state.cartList[0] || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
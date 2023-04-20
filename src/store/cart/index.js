import { reqCartList } from "@/Api";

const state = {
    cartList: {},
    uuid_token: uuid()
}
const mutations = {
    CARTLIST(state, cartList) {
        state.cartList = cartList
    }
}
const actions = {
    async CartList({ commit }) {
        let result = await reqCartList()
        if (result.code == 200) {
            commit('CARTLIST', result.data)
        }
    }
}
const getters = {

}

export default {
    state,
    mutations,
    actions,
    getters
}
import { reqGetSearchInfo } from "@/Api";
// search模块的小仓库
const state = {
    searchInfo: {}
};
const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo
    }
};
const actions = {
    async getSearchInfo({ commit }, params) {
        // params形参：是当用户派发action的时候，第二个参数传过来的，至少是一个空对象
        let result = await reqGetSearchInfo(params);
        console.log(123, result);
        if (result.code == 200) {
            commit("GETSEARCHINFO", result.data)
        }
    },
};
// 计算属性，在项目中，为了简化仓库中的数据而生
const getters = {
    goodsList(state) {
        // console.log(123456546546, state);
        // 这里的state是当前仓库的state

        // 这样书写是有问题的
        return state.searchInfo.goodsList || [];
    },
    attrsList(state) {
        return state.searchInfo.attrsList || [];
    },
    trademarkList(state) {
        return state.searchInfo.trademarkList || []
    }
};
export default {
    state,
    mutations,
    actions,
    getters
}
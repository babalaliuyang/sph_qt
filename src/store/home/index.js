import { reqCategoryList } from '@/Api';
import { reqGetBannerList } from '@/Api';
import { reqGetFloorList } from '@/Api';

// home模块的小仓库
const state = {
    // state中数据默认初始值，别瞎写，服务器返回对象，初始值就写对象【根据接口返回值初始化的】
    categoryList: [],
    // 轮播图数据
    bannerlist: [],
    // floor数据
    floorlist: []

};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    GETBANNERLIST(state, bannerlist) {
        state.bannerlist = bannerlist
    },
    GETFLOORLIST(state, floorlist) {
        state.floorlist = floorlist
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器的数据
    async categoryList({ commit }) {
        let result = await reqCategoryList();
        console.log(result);
        if (result.code == 200) {
            commit("CATEGORYLIST", result.data)
        }
    },
    // 获取首页轮播图数据
    async getBannerList({ commit }) {
        let result = await reqGetBannerList()
        console.log('2', result);
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data)
        }
    },
    async getFloorList({ commit }) {
        let result = await reqGetFloorList()
        console.log('3', result);
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data)
        }
    }
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters
}
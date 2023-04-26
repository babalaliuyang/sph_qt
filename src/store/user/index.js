import { reqGetCode, reqUserRegister, reqUserLogin } from "@/Api";

const state = {
    code: ''
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    }
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        let result = await reqGetCode(phone)
        if (result.code == 200) {
            commit("GETCODE", result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    async userRegister({ commit }, user) {
        console.log(user);
        let result = await reqUserRegister(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            // console.log();
            return Promise.reject(new Error(result.message))
        }

    },
    async UserLogin({ commit }, user) {

        let result = await reqUserLogin(user)
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}
import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo } from "@/Api";

const state = {
    code: '',
    token: ''
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, token) {

    }
};
const actions = {
    // 获取验证码   x
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
            // localStorage.getItem('token', result.data.token)
            commit("USERLOGIN", result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    },
    // 获取用户信息
    async getUserInfo() {
        let result = await reqUserInfo()
        // console.log(result); 
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
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
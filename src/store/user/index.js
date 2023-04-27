import { reqGetCode, reqUserRegister, reqUserLogin, reqUserInfo, reqLogout } from "@/Api";

const state = {
    code: '',
    token: '',
    userInfo: {}
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        state.token = ''
        state.userInfo = {}
        localStorage.removeItem('token')
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
            // localStorage.getItem('token', result.data.token)
            commit("USERLOGIN", result.data.token)
            // token 持久化
            localStorage.setItem('token', result.data.token)
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        let result = await reqUserInfo()
        // console.log(result); 
        if (result.code == 200) {
            commit("GETUSERINFO", result.data)
            return 'ok'
        } else {
            return Promise.reject(new Error('result.message'))
        }
    },
    // 退出登录
    async userLogout({ commit }) {
        let result = await reqLogout()
        if (result.code == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
            return Promise.reject(new Error(result.message))
        }
    }
}
const getters = {
    /*  userInfo(state) {
         return state.userInfo
     } */
}

export default {
    state,
    mutations,
    actions,
    getters
}
// 引入进度条
import nProgress from "nprogress";
// 引入进度条样式
import "nprogress/nprogress.css";
// console.log('requert.js', nProgress);
// start: 进度条开始  done: 进度条结束
// 在当前模块中引入store
import store from "@/store";
// 对于axios进行二次封装
import axios from "axios";
// 1.利用axios对象的方法create，去创建一个axios实例
// 2.request就是axios，只不过稍微配置一下
const requests = axios.create({
    //配置对象
    // 基础路径，发请求的时候，路径当中会出现Api
    baseURL: "/api",
    // 代表请求超时的时间
    timeout: 5000,
})
// 请求拦截器：再发请求之前，请求拦截器可以检测到；可以在请求发出去之前做一些事
requests.interceptors.request.use((config) => {
    // config:配置对象，对象里面有一个属性很重要，hearders请求头
    // console.log(store);
    if (store.state.detail.uuid_token) {
        // 给请求头添加一个字段(userTempId)，和后台商量好
        config.headers.userTempId = store.state.detail.uuid_token
    }
    // 请求头携带token
    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    nProgress.start();
    return config
})

// 响应拦截器
requests.interceptors.response.use((res) => {
    // 成功的回调函数：服务器响应数据回来以后，相应拦截器可以检测到，可以做一些事情
    nProgress.done()
    return res.data
}, (error) => {
    // 响应失败的回调
    return Promise.reject(new Error('faile'))
})
// 对外暴露
export default requests
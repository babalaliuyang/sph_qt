// 当前之歌模块：Api进行统一管理
import requests from "./request";
import mockRequests from "./mockAjax.js"

// /api/product / getBaseCategoryList  get  无参数
// 三级联动接口
export const reqCategoryList = () => {
    // 发请求  axios请求返回的是promise对象
    return requests({ url: "/product/getBaseCategoryList", method: 'get' })
}
// 获取banner数据（首页轮播图）
export const reqGetBannerList = () => {
    return mockRequests({ url: '/banner', method: 'get' })
}
// 获取floor数据
export const reqGetFloorList = () => {
    return mockRequests({ url: '/floor', method: 'get' })
}
// 获取搜索模块数据  地址：api/list  请求方式：post  需要带参数
// 参数要有默认值，至少是一个空对象，
export const reqGetSearchInfo = (params) => {
    return requests({
        url: '/list',
        method: 'post',
        data: params
    })
}
/* export const reqGetDetailList = (skuid) => {
    return requests({
        url: '/item/',
        method: 'get',
        data: { skuId: skuid }
    })
} */
export const reqGetDetailList = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });
// 将产品添加到购物车当何种
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
    // console.log('1', skuId, skuNum);
    return requests({
        url: `/cart/addToCart/${skuId}/${skuNum}`,
        method: 'post',
        /*  data: {
             skuId: skuId,
             skuNum: skuNum
         } */
    })
}
export const reqCartList = () => {
    return requests({
        url: '/cart/cartList',
        method: 'get',
        data: {}
    })
}
// 删除购物车产品的接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' })
// 修改购物车产品选中状态
export const reqUpdateCheckedById = (skuId, isChecked) => requests({ url: `/cart/checkCart/${skuId}/${isChecked}`, method: 'get' })
// 获取验证码
export const reqGetCode = (phone) => requests({ url: `/user/passport/sendCode/${phone}`, method: 'get' })
// 用户注册
export const reqUserRegister = (data) => requests({ url: '/user/passport/register', data, method: 'post' })
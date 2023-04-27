// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '@/store'
// 使用自定义插件
Vue.use(VueRouter);


// console.log(VueRouter.prototype);  查看他的原型方法

// 先把vueRouter原型对象的push，先保存一下
let originPush = VueRouter.prototype.push;

// 重写push方法
// 第一个参数：告诉原来的方法，你往哪里跳转（传递那些参数）
VueRouter.prototype.push = function (location, resolve, reject) {
    if (resolve && reject) {
        originPush.call(this, location, resolve, reject)
    } else {
        originPush.call(this, location, () => { }, () => { })
    }
}

// 创建VueRouter类的实例
let router = new VueRouter({
    // 配置路由
    routes,
    // 滚动行为，让路由后的页面滚动条位于顶端
    scrollBehavior(to, from, savedPosition) {
        // x是横，y是竖
        return { x: 0, y: 0 }
    }
})
// 全局守卫：前置守卫（在路由跳转之间进行判断
router.beforeEach(async (to, from, next) => {
    // ro:可以获取到你要跳转到那个路由
    // from:可以获取到你从那个路由而来的信息
    // next:放行函数  next() 全放行  next(path) 放行指定的路由 next(false) 此路不通，原路返回
    // console.log('1', to);
    // console.log('2', from);
    // console.log('3', next);
    // next()
    console.log(store);
    let token = localStorage.getItem('token')
    let name = store.state.user.userInfo.name
    console.log('1', name);
    if (token) {
        // 一登陆
        if (to.path == '/login') {
            next('/')
        } else {
            if (name) {
                next()
            } else {
                try {
                    await store.dispatch('getUserInfo')
                    next()
                } catch (error) {
                    alert(error.message)
                    // token失效了获取不到用户信息
                    // localStorage.removeItem('token')
                    await store.dispatch('userLogout')
                    next('/login')
                }
            }
        }
    } else {
        // 未登录
        next()
    }
})


export default router;
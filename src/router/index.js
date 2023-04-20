// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
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

// 配置路由
export default new VueRouter({
    // 配置路由
    routes,
    // 滚动行为，让路由后的页面滚动条位于顶端
    scrollBehavior(to, from, savedPosition) {
        // x是横，y是竖
        return { x: 0, y: 0 }
    }
})

// 引入路游组件
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
// 路由配置信息
export default [
    {
        path: '/trade',
        component: Trade,
        meta: { isShow: true },
    }, {
        path: '/shopcart',
        component: ShopCart,
        meta: { isShow: true },
    },
    {
        path: '/addcartsuccess',
        component: AddCartSuccess,
        meta: { isShow: true },
        name: 'addcartsuccess'
    },
    {
        path: '/home',
        component: Home,
        // isShow 自定义字段，是否显示footer
        meta: { isShow: true }
    }, {
        // 
        path: '/search/:keyword?',
        component: Search,
        meta: { isShow: true },
        name: 'search'
    }, {
        path: '/login',
        component: Login,
        meta: { isShow: false }
    }, {
        path: '/register',
        component: Register,
        meta: { isShow: false }
    }, {
        path: '/detail/:skuid',
        component: Detail,
        meta: { isShow: true }
    },
    // 重新定向，在项 目跑起来的时候，访问/时，定向到首页
    {
        path: '*',
        redirect: 'home',

    }
]
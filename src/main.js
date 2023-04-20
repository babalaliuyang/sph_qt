import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'
// 引入Vuex仓库
import store from '@/store'

// 全局组件引入
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

// 注册全局组件
// 第一个参数：全局组件的名字   第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carsousel.name, Carsousel)
Vue.component(Pagination.name, Pagination)




Vue.config.productionTip = false
// 引入mockserve.js————————————mock数据
import '@/mock/mockServe'
// 引入swiper样式
import 'swiper/css/swiper.css';
/* import { reqGetSearchInfo } from '@/Api'
console.log('ceshishuju', reqGetSearchInfo({})) */
new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 注册路由
  router, 
  // 注册仓库：组件实例的身上会多个属性$store属性
  store
}).$mount('#app')

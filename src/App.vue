<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- 在Home、Search显示的，在登录、注册隐藏 -->
    <!-- <Footer v-if="$route.path == '/home' || $route.path=='/search'"></Footer> -->
    <Footer v-show="$route.meta.isShow"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer"; 

export default {
  name: "",
  components: {
    Header,
    Footer
  },
  mounted(){
    // 派发一个action，获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList");
    // this.$store.dispatch('getUserInfo')
  }
};
</script>

<style>
</style>

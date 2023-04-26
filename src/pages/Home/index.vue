<template>
  <div>
    <!-- 三级联动组件，已经注册为全局组件了，所以不需要在这里引入 -->
    <TypeNav></TypeNav>
    <ListContatiner></ListContatiner>
    <Recommend></Recommend>
    <Rank></Rank>
    <Link></Link>
    <Floor v-for="(floor) in floorlist" :key="floor.id" :list="floor"/>
    <Brand />
  </div>
</template>

<script>
import ListContatiner from "./ListContatiner/index.vue";
import Recommend from "./Recommend/index.vue";
import Rank from "./Rank/index.vue";
import Link from "./Like/index.vue";
import Floor from "./Floor/index.vue";
import Brand from "./Brand/index.vue";
import { mapState } from 'vuex';
export default {
  name: "",
  components: { 
    ListContatiner,  
    Recommend,
    Rank,
    Link,
    Floor,
    Brand,
  },
  mounted() {
    // 派发action：通过Vuex发起ajax请求，将数据存储到仓库当中
    this.$store.dispatch("getFloorList");
    // 获取用户信息在首页展示
    this.$store.dispatch('getUserInfo');
  },
  computed: {
    ...mapState({
      floorlist: state => state.home.floorlist,
    }),
  },
};
</script>

<style scoped lang="less">
</style>
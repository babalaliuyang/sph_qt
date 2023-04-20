<template>
  <div class="swiper-container" id="floor1Swiper" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="items in list"
        :key="items.id"
      >
        <img :src="items.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carsousel",
  props:['list'],
   watch: {
    // 监听bannerlist数据的变化，因为这条数据发生变化 -----从空数组变为有数据的数组
    // watch有两种写法  一种是对象的写法   一种是函数的写法
    bannerlist: {
      // 立即监听
      immediate: true,
      handler(newValue, oldValue) {
        // 保证在下次DOM更新 循环结束之后 执行延迟回调 在修改数据之后 立即使用这个方法，获取更新后的DOM
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },

            // // 如果需要滚动条
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>
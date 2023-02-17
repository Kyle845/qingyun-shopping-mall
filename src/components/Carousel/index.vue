<template lang="">
  <div class="swiper-container" id="floor1Swiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carouse1, index) in list"
        :key="carouse1.id"
      >
        <img :src="carouse1.imgUrl" />
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
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'Carsousel',
  props: ['list'],
  watch: {
    list: {
      immediate: true,
      handler() {
        var mySwiper = new Swiper('.swiper-container', {
          //
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination'
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },

          // 如果需要滚动条
          scrollbar: {
            el: '.swiper-scrollbar'
          }
        })
      }
    }
  }
}
</script>
<style lang=""></style>

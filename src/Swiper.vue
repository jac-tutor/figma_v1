<template>
  <swiper
    :modules="[Autoplay]"
    :loop="true"
    :autoplay="{
      delay: 1000,
      disableOnInteraction: false,
    }"
    :slides-per-view="1"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide><img src="https://picsum.photos/1920/500" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1920/500?" /></swiper-slide>
    <swiper-slide><img src="https://picsum.photos/1920/500?0" /></swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue"
import { Autoplay } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/autoplay"

const onSwiper = (swiper) => {
  console.log(swiper)
  swiper.autoplay.start()
}
const onSlideChange = () => {
  console.log("slide change")
}
</script>

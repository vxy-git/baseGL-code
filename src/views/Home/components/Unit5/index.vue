<script setup>

import Item from "./components/Item/index.vue";
import {ref} from "vue";
import t1Icon from "@/assets/img/t1.png"
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
const list = [
  {
    img:t1Icon
  },
  {
    img:t1Icon
  },
  {
    img:t1Icon
  },
  {
    img:t1Icon
  },
  {
    img:t1Icon
  }
]
const bannerCurrent = ref(0)
const swiperRef = ref(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)

// 统一的箭头状态更新函数
const updateArrowStatus = (swiper) => {
  canSlidePrev.value = !swiper.isBeginning
  canSlideNext.value = !swiper.isEnd
  bannerCurrent.value = swiper.realIndex
};

// 处理幻灯片切换结束事件
const changeEnd = (swiper) => {
  updateArrowStatus(swiper)
};

// 处理幻灯片切换事件，更新按钮状态
const onSlideChange = (swiper) => {
  updateArrowStatus(swiper)
};

// Swiper 初始化事件，设置初始按钮状态
const onSwiperInit = (swiper) => {
  swiperRef.value = swiper
  updateArrowStatus(swiper)
};

// 切换到上一张
const slidePrev = () => {
  swiperRef.value?.slidePrev();
};

// 切换到下一张
const slideNext = () => {
  swiperRef.value?.slideNext();
};

// 点击指示器跳转
const goToSlide = (index) => {
  swiperRef.value?.slideTo(index);
};
</script>

<template>
  <div class="mt-[55px]">
    <div class="w-[1300px] mx-auto">
      <div class="title text-center">
        The latest news and inspiring stories
      </div>
      <div class="mt-[46px] relative">
        <img
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev }" src="@/assets/img/icon4_active.png" alt=""
          @click="slidePrev">

        <div class="w-screen -ml-[calc((100vw-1300px)/2)]">
          <Swiper class="px-[310px]" @swiper="onSwiperInit" :slidesPerView="'auto'" :space-between="0" :loop="false" :grab-cursor="true"
            :watch-slides-progress="true" :watch-slides-visibility="true" :auto-height="false" :free-mode="false"
            :auto-width="true" :speed="800" @slide-change="onSlideChange" @slide-change-transition-end="changeEnd"
            @touch-end="(swiper) => updateArrowStatus(swiper)" @transition-end="(swiper) => updateArrowStatus(swiper)">
            <SwiperSlide class="w-[calc(860px+35px)]" :class="{
            'pr-[35px]':index !== list.length - 1,
          }" v-for="(item, index) in list" :key="index">
              <Item :data="item" />
            </SwiperSlide>
          </Swiper>
        </div>
        <img
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext }" src="@/assets/img/icon4_active.png" alt=""
          @click="slideNext">
      </div>
      <div class="flex justify-center gap-x-[10px] pt-[26px]">
        <div v-for="(item,index) in list" :class="{
          '!bg-black !w-[30px]':bannerCurrent === index
        }" :key="index" class="dotItem cursor-pointer" @click="goToSlide(index)"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}

.dotItem {
  width: 10px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}
</style>
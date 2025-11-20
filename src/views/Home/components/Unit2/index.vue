<script setup>
import Tabs from "@/components/Tabs/index.vue"
import {ref, computed} from "vue";
import Item from "./components/Item/index.vue"
const tabsCurrent = ref(0)
const tabsList = [
  "For Resin/Rosin",
  "Pod System",
  "Full Ceramic",
  "D9 Distillate",
  "US Stock",
  "Dab Pen",
  "510 Cartridge",
  "D8 Distillate"
]
import icon3 from "@/assets/img/icon3.png"
import icon5 from "@/assets/img/icon5.png"
import icon6 from "@/assets/img/icon6.png"
import icon7 from "@/assets/img/icon7.png"
import {Swiper,SwiperSlide} from "swiper/vue";
import "swiper/css";
const list = [
  {
    img:icon3
  },
  {
    img:icon5
  },
  {
    img:icon6
  },
  {
    img:icon7
  }
]
const swiperRef = ref(null)
const bannerCurrent = ref(0)
const currentIndex = ref(0)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const slidesPerGroup = 2

// 计算分组数量
const groupCount = computed(() => {
  return Math.ceil(list.length / slidesPerGroup)
})

// 统一的箭头状态更新函数
const updateArrowStatus = (swiper) => {
  canSlidePrev.value = !swiper.isBeginning
  canSlideNext.value = !swiper.isEnd
  bannerCurrent.value = swiper.activeIndex
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

// 点击指示器跳转到对应分组
const goToGroup = (groupIndex) => {
  const targetIndex = groupIndex * slidesPerGroup;
  swiperRef.value?.slideTo(targetIndex);
};
</script>

<template>
  <div class="unit2">
    <div class="w-[1300px] mx-auto pt-[80px]">
      <div class="title">
        Innovative products:<br/>
        The most advanced, the best fit.
      </div>
      <Tabs class="mt-[44px]" :list="tabsList" v-model="tabsCurrent"></Tabs>

      <div class="mt-[50px] relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <img
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || !isHovered }"
          src="@/assets/img/icon4_active.png"
          alt=""
          @click="slidePrev"
        >
        <div class="w-[100vw] -ml-[calc((100vw-1300px)/2)]">
          <Swiper
              class="px-[310px]"
              @swiper="onSwiperInit"
              :slidesPerView="'auto'"
              :slidesPerGroup="slidesPerGroup"
              :space-between="0"
              :loop="false"
              :grab-cursor="true"
              :watch-slides-progress="true"
              :watch-slides-visibility="true"
              :auto-height="false"
              :free-mode="false"
              :auto-width="true"
              :speed="800"
              @slide-change="onSlideChange"
              @slide-change-transition-end="changeEnd"
              @touch-end="(swiper) => updateArrowStatus(swiper)"
              @transition-end="(swiper) => updateArrowStatus(swiper)"
          >
          <SwiperSlide class="w-[calc(410px+35px)]" :class="{
            'pr-[35px]':index !== list.length - 1,
          }" v-for="(item, index) in list" :key="index">
            <Item :data="item" :isLast="canSlideNext === false && index >= list.length" />
          </SwiperSlide>
        </Swiper>
        </div>
        <img
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || !isHovered }"
          src="@/assets/img/icon4_active.png"
          alt=""
          @click="slideNext"
        >
      </div>
      <div class="flex justify-center gap-x-[10px] pt-[20px]">
        <div
          v-for="(item,index) in groupCount"
          :key="index"
          :class="{
            '!bg-black': bannerCurrent === index
          }"
          class="dotItem cursor-pointer hover:bg-gray-400 transition-colors duration-200"
          @click="goToGroup(index)"
        ></div>
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
  line-height: calc(94px / 2);
}
.dotItem{
  width: 20px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}
</style>
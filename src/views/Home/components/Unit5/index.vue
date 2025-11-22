<script setup>

import Item from "./components/Item/index.vue";
import {ref, onMounted, onUnmounted} from "vue";
import t1Icon from "@/assets/img/t1.png"
import { Splide, SplideSlide } from '@splidejs/vue-splide';
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
const splideRef = ref(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)

// 检测是否为移动端
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 767
}

// 初始化移动端检测
onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

// 清理事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// Splide 配置
const splideOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '2.18rem',
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100vw',
  fixedWidth: '53.75rem',
  focus: 'center',
}

// 统一的箭头状态更新函数
const updateArrowStatus = (splide) => {
  // loop 模式下箭头始终可用
  canSlidePrev.value = true
  canSlideNext.value = true
  bannerCurrent.value = splide.index
};

// 处理幻灯片切换结束事件
const changeEnd = (splide) => {
  updateArrowStatus(splide)
};

// 处理幻灯片切换事件，更新按钮状态
const onSlideChange = (splide) => {
  updateArrowStatus(splide)
};

// Splide 初始化事件，设置初始按钮状态
const onSplideInit = (splide) => {
  splideRef.value = splide
  updateArrowStatus(splide)
};

// 切换到上一张
const slidePrev = () => {
  splideRef.value?.go('<');
};

// 切换到下一张
const slideNext = () => {
  splideRef.value?.go('>');
};

// 点击指示器跳转
const goToSlide = (index) => {
  splideRef.value?.go(index);
};
</script>

<template>
  <div class="mt-[55px]">
    <div class="mx-auto">
      <div class="title text-center">
        The latest news and inspiring stories
      </div>
      <div class="mt-[46px] relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <img
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slidePrev">
        <Splide class="w-full" :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange"
          @splide:move="changeEnd">
          <SplideSlide class="h-[480px] max-w-[94vw]" v-for="(item, index) in list" :key="index">
            <Item :data="item" />
          </SplideSlide>
        </Splide>
        <img
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
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
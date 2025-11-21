<script setup>
import Tabs from "@/components/Tabs/index.vue"
import {ref, computed, onMounted, onUnmounted} from "vue";
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
import { Splide, SplideSlide } from '@splidejs/vue-splide';
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
const splideRef = ref(null)
const bannerCurrent = ref(0)
const currentIndex = ref(0)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)
const slidesPerGroup = 1

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
  type: 'slide',
  perPage: slidesPerGroup,
  perMove: slidesPerGroup,
  gap: '35px',
  padding: 0,
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100vw',
  focus: 0,
  omitEnd: true,
}

// 计算分组数量
const groupCount = computed(() => {
  return Math.ceil(list.length / 2)
})

// 统一的箭头状态更新函数
const updateArrowStatus = (splide) => {
  const currentIndex = splide.index
  const endIndex = splide.Components.Controller.getEnd()

  // 判断是否可以向前滑动：当前索引大于 0
  canSlidePrev.value = currentIndex > 0

  // 判断是否可以向后滑动：当前索引小于最后一个索引
  canSlideNext.value = currentIndex < endIndex

  // 更新当前分组索引
  bannerCurrent.value = Math.floor(currentIndex / slidesPerGroup)
};

// Splide 初始化事件，设置初始按钮状态
const onSplideInit = (splide) => {
  splideRef.value = splide
  updateArrowStatus(splide)
};

// 切换到上一张
const slidePrev = () => {
  splideRef.value?.go('-' + slidesPerGroup);
};

// 切换到下一张
const slideNext = () => {
  splideRef.value?.go('+' + slidesPerGroup);
};

// 点击指示器跳转到对应分组
const goToGroup = (groupIndex) => {
  const targetIndex = groupIndex * slidesPerGroup;
  splideRef.value?.go(targetIndex);
};
</script>

<template>
  <div class="unit2">
    <div class="mx-auto pt-[80px]">
      <div class="container-1300 container-box title">
        Innovative products:<br />
        The most advanced, the best fit.
      </div>
      <Tabs class="mt-[44px]" :list="tabsList" v-model="tabsCurrent"></Tabs>

      <div class="container-1300 container-box mt-[50px] relative" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false">
        <img
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slidePrev">
        <div class="w-full">
          <Splide class="w-full ml-[50%] translate-x-[-50%]" :options="splideOptions" @splide:mounted="onSplideInit"
            @splide:moved="updateArrowStatus">
            <SplideSlide class="flex-shrink-[1]" v-for="(item, index) in list" :key="index">
              <Item :data="item" :isLast="canSlideNext === false && index >= list.length" />
            </SplideSlide>
          </Splide>
        </div>
        <img
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
      </div>
      <div class="container-1300 container-box flex justify-center gap-x-[10px] pt-[20px]">
        <div v-for="(item,index) in groupCount" :key="index" :class="{
            '!bg-black': bannerCurrent === index
          }" class="dotItem cursor-pointer hover:bg-gray-400 transition-colors duration-200" @click="goToGroup(index)">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  white-space: nowrap;
  color: #000;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: calc(94px / 2);
}

.dotItem {
  width: 20px;
  height: 3px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #D9D9D9;
}
</style>
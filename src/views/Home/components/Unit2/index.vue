<script setup>
import Tabs from "@/components/Tabs/index.vue"
import {ref, computed, onMounted, onUnmounted, watch} from "vue";
import Item from "./components/Item/index.vue"
import { tabsList, productsData } from "@/data/products"
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const tabsCurrent = ref(0)
const products = computed(() => productsData[tabsCurrent.value] || [])
const splideRef = ref(null)
const bannerCurrent = ref(0)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)
const viewportWidth = ref(1920)
const perPageValue = computed(() => {
  if (viewportWidth.value <= 1000) return 2
  if (viewportWidth.value <= 1400) return 3
  return 4
})

// 检测是否为移动端
const checkMobile = () => {
  const width = window.innerWidth || 1920
  viewportWidth.value = width
  isMobile.value = width <= 767
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
const splideOptions = computed(() => ({
  type: 'slide',
  perPage: perPageValue.value,
  perMove: perPageValue.value,
  gap: '3%',
  padding: 0,
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100vw',
  focus: 0,
  omitEnd: true,
}))

// 计算分组数量
const groupCount = computed(() => {
  return Math.ceil((products.value.length || 0) / perPageValue.value)
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
  bannerCurrent.value = Math.floor(currentIndex / perPageValue.value)
};

// Splide 初始化事件，设置初始按钮状态
const onSplideInit = (splide) => {
  splideRef.value = splide
  updateArrowStatus(splide)
};

watch(tabsCurrent, () => {
  bannerCurrent.value = 0
  if (splideRef.value) {
    splideRef.value.go(0)
    updateArrowStatus(splideRef.value)
  }
})

watch(perPageValue, () => {
  // 切换设备宽度时重置到第一页，保持指示器正确
  if (splideRef.value) {
    splideRef.value.options = { ...splideRef.value.options, perPage: perPageValue.value, perMove: perPageValue.value }
    splideRef.value.refresh()
    splideRef.value.go(0)
    updateArrowStatus(splideRef.value)
  }
})

// 切换到上一张
const slidePrev = () => {
  splideRef.value?.go('-' + perPageValue.value);
};

// 切换到下一张
const slideNext = () => {
  splideRef.value?.go('+' + perPageValue.value);
};

// 点击指示器跳转到对应分组
const goToGroup = (groupIndex) => {
  const targetIndex = groupIndex * perPageValue.value;
  splideRef.value?.go(targetIndex);
};
</script>

<template>
  <div class="unit2">
    <div class="mx-auto pt-[80px]">
      <div class="c_1300 c_padding title">
        Innovative products:<br />
        The most advanced, the best fit.
      </div>
      <Tabs class="mt-[44px]" :list="tabsList" v-model="tabsCurrent"></Tabs>

      <div class="c_1300 c_padding mt-[50px] relative" @mouseenter="isHovered = true"
        @mouseleave="isHovered = false">
        <img
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slidePrev">
        <div class="w-full">
          <Splide class="w-full ml-[50%] translate-x-[-50%]" :options="splideOptions" :key="tabsCurrent" @splide:mounted="onSplideInit"
            @splide:moved="updateArrowStatus">
            <SplideSlide class="flex-shrink-[1]" v-for="(product, index) in products" :key="product.id">
              <Item :data="product" />
            </SplideSlide>
          </Splide>
        </div>
        <img
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
      </div>
      <div class="c_1300 c_padding flex justify-center gap-x-[10px] pt-[20px]">
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

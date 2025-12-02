<script setup>
import Tabs from "@/components/Tabs/index.vue"
import {ref, computed, onMounted, onUnmounted, watch} from "vue";
import ProductItem from "@/components/ProductItem/index.vue"
import { tabsList, productsData } from "@/data/products"
import { Splide, SplideSlide } from '@splidejs/vue-splide';

const tabsCurrent = ref(0)
const products = computed(() => productsData[tabsCurrent.value] || [])


// Splide 状态管理
const splideRef = ref(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)

// 展示列表（合并产品数据）
const productList = computed(() => Object.values(productsData).flat())

// 移动端检测
const checkMobile = () => {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// Splide 配置选项
const splideOptions = {
  type: 'slide',
  perPage: 4,
  perMove: 4,
  gap: '2%',
  padding: 0,
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true,
  keyboard: true,
  width: '100%',
  breakpoints: {
    1350: {
      perPage: 3,
      perMove: 3,
    },
    860: {
      perPage: 2,
      perMove: 2,
    },
  },
  focus: 0,
  omitEnd: true,
}

// 箭头状态更新
const updateArrowStatus = (splide) => {
  const currentIndex = splide.index
  const endIndex = splide.Components.Controller.getEnd()

  canSlidePrev.value = currentIndex > 0
  canSlideNext.value = currentIndex < endIndex
}

// Splide 初始化
const onSplideInit = (splide) => {
  splideRef.value = splide
  updateArrowStatus(splide)
}

// 导航方法
const slidePrev = () => {
  splideRef.value?.go('<')
}

const slideNext = () => {
  splideRef.value?.go('>')
}


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
            <SplideSlide v-for="(product, index) in products" :key="product.id">
              <ProductItem :data="product" />
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

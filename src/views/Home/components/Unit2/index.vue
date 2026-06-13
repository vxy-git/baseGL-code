<script setup>
import Tabs from '@/components/Tabs/index.vue'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import ProductItem from '@/components/ProductItem/index.vue'
import { productsData } from '@/data/productlist/products'
import { homeUnit2Data } from '@/data/home/home-unit2'
import { useCmsNavStore } from '@/stores/cmsNav'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'

// 降级导入（保留用于无 CMS 数据时）
const { tabs: staticTabs, products: staticProducts } = productsData

const cmsNavStore = useCmsNavStore()

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const cmsData = computed(() => {
  const homeNav = cmsNavStore.getNavByName('Home')
  return homeNav?.moduleList?.unit2?.data || null
})

const unitData = useUnitData(props, homeUnit2Data, { cmsData })

// 提取 tabs 列表（优先使用 CMS 数据，与 ProductList 保持一致）
const tabsList = computed(() => {
  const cmsCategories = cmsNavStore.productCategories || []
  if (cmsCategories.length > 0) {
    return cmsCategories.map(cat => cat.label)
  }
  // 降级到静态数据
  return staticTabs
})

const tabsCurrent = ref(0)

// 产品列表（优先使用 CMS 数据，与 ProductList 保持一致）
const products = computed(() => {
  const cmsCategories = cmsNavStore.productCategories || []
  if (cmsCategories.length > 0 && cmsCategories[tabsCurrent.value]) {
    return cmsCategories[tabsCurrent.value].products
  }
  // 降级到静态数据
  return staticProducts[tabsCurrent.value] || []
})

// Splide 状态管理
const bannerCurrent = ref(0)
const viewportWidth = ref(1920)
const splideRef = ref(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)

// 检测是否为移动端
const checkMobile = () => {
  const width = window.innerWidth || 1920
  viewportWidth.value = width
  isMobile.value = width <= 768
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

// 箭头状态更新
const updateArrowStatus = splide => {
  const currentIndex = splide.index
  const endIndex = splide.Components.Controller.getEnd()

  canSlidePrev.value = currentIndex > 0
  canSlideNext.value = currentIndex < endIndex
}

// Splide 初始化
const onSplideInit = splide => {
  splideRef.value = splide
  updateArrowStatus(splide)
}

// 导航方法
const slidePrev = () => {
  splideRef.value?.go('<')
  bannerCurrent.value -= 1
}

const slideNext = () => {
  splideRef.value?.go('>')
  bannerCurrent.value += 1
}

const perPageValue = computed(() => {
  if (viewportWidth.value <= 1000) return 2
  if (viewportWidth.value <= 1400) return 3
  return 4
})

// 计算分组数量
const groupCount = computed(() => {
  return Math.ceil((products.value.length || 0) / perPageValue.value)
})

// 点击指示器跳转到对应分组
const goToGroup = groupIndex => {
  const targetIndex = groupIndex * perPageValue.value
  splideRef.value?.go(targetIndex)
  bannerCurrent.value = groupIndex
}
</script>

<template>
  <div class="unit2">
    <div class="mx-auto pt-[80px]">
      <div class="c_1300 c_padding title whitespace-break-spaces">
        {{ unitData.unitTitle }}
      </div>
      <Tabs v-model="tabsCurrent" class="mt-[44px]" :list="tabsList"></Tabs>

      <div
        class="c_1300 c_padding mt-[50px] relative"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          type="image"
          :src="unitData.arrowIcon"
          alt=""
          :lazy="false"
          @click="slidePrev"
        />
        <div class="w-full">
          <Splide
            :key="tabsCurrent"
            class="w-full ml-[50%] translate-x-[-50%]"
            :options="unitData.splideOptions"
            @splide:mounted="onSplideInit"
            @splide:moved="updateArrowStatus"
          >
            <SplideSlide v-for="product in products" :key="product.id">
              <ProductItem :data="product" />
            </SplideSlide>
          </Splide>
        </div>
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          type="image"
          :src="unitData.arrowIcon"
          alt=""
          :lazy="false"
          @click="slideNext"
        />
      </div>
      <div class="c_1300 c_padding flex justify-center gap-x-[10px] pt-[20px]">
        <div
          v-for="(item, index) in groupCount"
          :key="index"
          :class="{
            '!bg-black': bannerCurrent === index,
          }"
          class="dotItem cursor-pointer hover:bg-gray-400 transition-colors duration-200"
          @click="goToGroup(index)"
        ></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/variables' as *;
.title {
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
  background: #d9d9d9;
}

@media screen and (max-width: $breakpoint-mobile) {
  .title {
    white-space: normal;
  }
}
</style>

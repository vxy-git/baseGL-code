<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRouter } from 'vue-router'
import { productsData } from '@/data/products'

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
  }
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

const router = useRouter()
const productLink = (linkType) => `/${linkType || 1}`
const goProduct = (linkType) => {
  router.push(productLink(linkType))
}

</script>

<template>
  <div class="w-full bg-[#000] pt-[114px] pb-[121px]">
    <div class="c_1300 c_padding mx-auto">
      <div class="title">
        More Products
      </div>

      <div class="cardBox mt-[45px] relative" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
        <!-- 左箭头 -->
        <img
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slidePrev">

        <!-- Splide 轮播容器 -->
        <Splide :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="updateArrowStatus">
          <SplideSlide v-for="product in productList" :key="product.id">
            <div class="card" :class="{ 'has-hover-bg': product.background }" @click="goProduct(product.linkType)">
              <img class="card-bg card-bg--main" :src="product.image" :alt="product.alt">
              <img
                v-if="product.background"
                class="card-bg card-bg--hover"
                :src="product.background"
                :alt="`${product.alt} hover`"
              >
              <div class="size-full absolute inset-0 flex flex-col justify-end items-start card-info">
                <div class="cardTitle pl-[20px] mt-[46px]">
                  {{ product.name }}
                </div>
                <div class="cardLabel px-[20px] mt-[8px]">
                  {{ product.description }}
                </div>
                <div class="btn ml-[20px] mt-[25px] mb-[42px]">
                  View More
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>

        <!-- 右箭头 -->
        <img
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          src="@/assets/img/icon4_active.png" alt="" @click="slideNext">
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #1CE785;
  font-family: Roboto;
  font-size: 80px;
  font-style: italic;
  font-weight: 800;
  line-height: 80px;
  /* 100% */
  letter-spacing: -4.8px;
}


.cardBox {
  .card {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 440px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #23242A;
    margin: 0 auto;
    cursor: pointer;

    &.has-hover-bg:hover {
      .card-bg--hover {
        opacity: 1;
        transform: scale(1.05);
      }

      .card-bg--main {
        opacity: 0;
      }
    }

    .card-bg {
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.5s ease, transform 0.5s ease;
    }

    .card-bg--main {
      opacity: 1;
    }

    .card-bg--hover {
      opacity: 0;
      transform: scale(1);
    }

    .card-info {
      z-index: 1;
    }

    .cardTitle {
      color: #FFF;
      font-family: Roboto;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      /* 133.333% */
    }

    .cardLabel {
      color: #F5F5F5;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }

    .btn {
      border-radius: 50px;
      background: #1CE785;
      width: 130px;
      height: 40px;
      flex-shrink: 0;
      color: #000;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>

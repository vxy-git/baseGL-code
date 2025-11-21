<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted, onUnmounted } from "vue";

// Splide 状态管理
const splideRef = ref(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)

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
        <SplideSlide v-for="item in 8" :key="item">
          <div class="card pt-[63px]">
            <img class="w-[185px] h-[165px] mx-auto" src="@/assets/img/icon25.png" alt="">
            <div class="cardTitle pl-[20px] mt-[46px]">
              UNIT
            </div>
            <div class="cardLabel px-[20px] mt-[8px]">
              UNICORE™ tech & large display
            </div>
            <div class="btn ml-[20px] mt-[25px]">
              View More
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
    width: 100%;
    height: 440px;
    flex-shrink: 0;
    border-radius: 20px;
    background: #23242A;
    margin: 0 auto;

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
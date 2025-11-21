<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted, onUnmounted } from "vue";

const deviceSpecs = [
  {
    label: 'Dimension(mm)',
    value: '71.0H*37.5W*13.0D'
  },
  {
    label: 'Tank Volume',
    value: '1mL / 2mL'
  },
  {
    label: 'Battery Capacity',
    value: '280mAh'
  },
  {
    label: 'Resistance',
    value: '1.8ohm'
  },
  {
    label: 'Voltage',
    value: '1.8V-2.0V-2.2V'
  },
  {
    label: 'Housing Material',
    value: 'Plastic'
  },
  {
    label: 'Ceramic Core',
    value: 'Unicore'
  },
  {
    label: 'Charging',
    value: 'Type-C'
  },
  {
    label: 'Options of Activation',
    value: 'Button & Inhale Activated'
  }
]

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
  gap: '27px',
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
  <div class="pt-[142px] pb-[140px]">
    <div class="title text-center">
      SPECS
    </div>
    <div class="flex container-1300 container-box mx-auto px-[35px] justify-between mobile_1300_col">
      <div class="w-[683px] max-w-full flex-shrink-0 pt-[66px]">
        <div v-for="(item, index) in deviceSpecs" :key="index" class="flex border-b border-white/20">
          <div class="tableText w-[370px]">{{ item.label }}</div>
          <div class="tableText">{{ item.value }}</div>
        </div>
      </div>
      <img src="@/assets/img/icon24.png" class="w-[418px] mt-[30px] -ml-[15px]" alt="">
    </div>
    <div class="container-1300 container-box mx-auto mt-[140px]">
      <div class="title2">
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
              <div class="cardLabel px-[20px] mt-[2px]">
                UNICORE™ tech & large display
              </div>
              <div class="btn ml-[20px] mt-[18px]">
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
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}

.tableText {
  color: #D9D9D9;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 70px;
}

.title2 {
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
      margin: 6px 0;
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
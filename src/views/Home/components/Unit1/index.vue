<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { ref, onMounted, watch, nextTick } from "vue";
const delay = 3000 // 设置自动播放间隔为 3 秒
const currentIndex = ref(0)
const splideRef = ref()

// Splide 配置
const splideOptions = {
  type: 'loop',
  autoplay: false,
  speed: 600,
  rewind: false,
  perPage: 1,
  pagination: false,
  arrows: false,
  drag: true,
  keyboard: true,
}

import img1 from "@/assets/img/banner1.png"

const list = ref([
  {
    title:"EXTRO",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO1",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO2",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO3",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  },
  {
    title:"EXTRO4",
    subTitle:"One puff to be a freak, it is the freaking best",
    img:img1,
    dotText:"DUKES User Manual"
  }
])

const changeEnd = (splide, newIndex) => {
  currentIndex.value = newIndex
}
const next = (e) => {
  splideRef.value?.splide?.go('+1')
}
const stop = ref(false)
</script>

<template>
  <div class="banner-container" :style="{
    '--delay':delay+'ms'
  }">
    <Splide
      class="h-full"
      :options="splideOptions"
      ref="splideRef"
      @splide:moved="changeEnd"
    >
      <SplideSlide class="h-full" v-for="item in list" :key="item.title">
        <div class="relative h-full">
          <img class="h-full object-cover absolute inset-0" :src="item.img" />
          <div class=" h-full relative">
            <div class="container-1300 container-box mx-auto flex flex-col justify-center h-full">
              <div class="title">
                {{item.title}}
              </div>
              <div class="subTitle">
                {{item.subTitle}}
              </div>
              <div class="btn flex items-center justify-center">
                <div class="btnText">Learn more</div>
                <img class="btn-icon" src="@/assets/img/icon2.png" alt="">
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>

    <div class="dot absolute bottom-[2px] left-0 flex justify-center z-10">
      <div @mouseover="stop = true" @mouseout="stop = false" class="container-1300 container-box flex justify-between">
        <div @mouseover="splideRef?.splide?.go(index)" v-for="(item, index) in list"
          :key="index"
          class="dot-item flex-1 cursor-pointer transition-all duration-300 hover:opacity-80"
          @click="splideRef?.splide?.go(index)">
          <div class="dotText text-center transition-colors duration-300"
            :class="{ 'text-[#1CE785]': currentIndex === index }">
            {{item.dotText}}
          </div>
          <div class="progress-track">
            <div class="progress-bar" :class="{
                'widAnim': index===currentIndex
              }" :style="{
                'animation-play-state': stop ? 'paused' : 'running'
              }" @animationend="next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Banner 容器
.banner-container {
  height: 880px;
  position: relative;
}

// 标题样式
.title {
  color: #FFF;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: 59px;
  margin-top: 10px;
}

// 副标题样式
.subTitle {
  color: #FFF;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
  margin-top: 15px;
}

// 按钮样式
.btn {
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
  margin-top: 32px;
  gap: 11.5px;

  .btnText {
    color: #222;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .btn-icon {
    width: 20px;
    height: 20px;
  }
}

// 底部指示器容器
.dot {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.60) 100%);
  width: 100%; // 修复固定宽度问题
  height: 139px;
  flex-shrink: 0;

  // 指示器项容器
  .container-1300 {
    gap: 13px;
  }

  // 单个指示器项
  .dot-item {
    padding-top: 61px;
  }

  // 指示器文字
  .dotText {
    color: #FFF;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
  }

  // 进度条轨道
  .progress-track {
    height: 2px;
    width: 100%;
    border-radius: 9999px;
    background: rgba(255, 255, 255, 0.3);
    margin-top: 10px;
    overflow: hidden;
  }

  // 进度条
  .progress-bar {
    height: 100%;
    width: 0;
    border-radius: 9999px;
    background: white;
    transition: all 0.5s ease-out;
  }
}

// 进度条动画
@keyframes wid {
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
}

.widAnim {
  animation: wid var(--delay) ease-in-out;
}
</style>
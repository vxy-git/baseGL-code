<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
const delay = 8000 // 每个视频固定播放 8 秒后切换
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

import MediaAsset from '@/components/MediaAsset.vue'
import { homeUnit1Data } from '@/data/home/home-unit1'
import { useCmsNavStore } from '@/stores/cmsNav'

const router = useRouter()

// ========== 使用 Pinia Store 获取导航数据 ==========
const cmsNavStore = useCmsNavStore()

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

// 计算属性:将 CMS Banner 数据转换为组件所需格式
const list = computed(() => {
  // 1. 优先使用 Props 传入的数据
  if (props.data?.bannerList?.length > 0) {
    return props.data.bannerList.map(banner => ({
      title: banner.title || '',
      subTitle: banner.subTitle || '',
      src: banner.src || '',
      type: banner.src && banner.src.endsWith('.mp4') ? 'video' : 'image',
      dotText: banner.dotText || banner.title || '',
      path: banner.path || '',
    }))
  }

  // 2. 其次使用 Store 中的数据 (兼容旧逻辑)
  if (cmsNavStore.bannerNavs.length > 0) {
    return cmsNavStore.bannerNavs.map(banner => ({
      title: banner.title,
      subTitle: banner.subTitle || '',
      src: banner.src,
      type: banner.src.endsWith('.mp4') ? 'video' : 'image',
      dotText: banner.dotText || banner.title,
      path: banner.path,
    }))
  }
  // 3. 最后使用本地配置
  return homeUnit1Data.bannerList
})

const changeEnd = (splide, newIndex) => {
  currentIndex.value = newIndex
}
const next = () => {
  splideRef.value?.splide?.go('+1')
}
const stop = ref(false)

const handleLearnMore = item => {
  if (!item?.path) return
  router.push(item.path)
}
</script>

<template>
  <div
    class="banner-container"
    :style="{
      '--delay': delay + 'ms',
    }"
  >
    <Splide ref="splideRef" class="h-full" :options="splideOptions" @splide:moved="changeEnd">
      <SplideSlide v-for="item in list" :key="item.title" class="h-full">
        <div class="relative h-full">
          <MediaAsset
            class="h-full min-w-[100vw] object-cover absolute inset-0"
            :type="item.type"
            :src="item.src"
            :controls="false"
            autoplay
            muted
            :loop="false"
            playsinline
          />
          <div class="h-full relative">
            <div class="c_1300 c_padding mx-auto flex flex-col justify-center h-full">
              <div class="title">
                {{ item.title }}
              </div>
              <div class="subTitle">
                {{ item.subTitle }}
              </div>
              <div class="btn flex items-center justify-center" @click="handleLearnMore(item)">
                <div class="btnText">Learn more</div>
                <MediaAsset
                  class="btn-icon"
                  type="image"
                  :src="homeUnit1Data.buttonIcon"
                  alt=""
                  :lazy="false"
                />
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>

    <div class="dot absolute bottom-[2px] left-0 flex justify-center z-10">
      <div
        class="c_1300 c_padding grid grid-flow-col auto-cols-fr"
        @mouseover="stop = true"
        @mouseout="stop = false"
      >
        <div
          v-for="(item, index) in list"
          :key="index"
          class="dot-item cursor-pointer transition-all duration-300 hover:opacity-80"
          @mouseover="splideRef?.splide?.go(index)"
          @click="splideRef?.splide?.go(index)"
        >
          <div
            class="dotText text-center transition-colors duration-300"
            :class="{ 'text-[#1CE785]': currentIndex === index }"
          >
            {{ item.dotText }}
          </div>
          <div class="progress-track">
            <div
              class="progress-bar"
              :class="{
                widAnim: index === currentIndex,
              }"
              :style="{
                'animation-play-state': stop ? 'paused' : 'running',
              }"
              @animationend="next"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
// Banner 容器
.banner-container {
  background-color: black;
  height: 100vh;
  position: relative;
}

// 标题样式
.title {
  color: #fff;
  font-family: Roboto;
  font-size: 50px;
  font-style: normal;
  font-weight: 900;
  line-height: 59px;
  margin-top: 10px;
}

// 副标题样式
.subTitle {
  color: #fff;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  margin-top: 15px;
}

// 按钮样式
.btn {
  width: 170px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1ce785;
  margin-top: 32px;
  gap: 11.5px;
  cursor: pointer;

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
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%);
  width: 100%; // 修复固定宽度问题
  height: 139px;
  flex-shrink: 0;

  // 指示器项容器
  .c_1300 {
    gap: 13px;
  }

  // 单个指示器项
  .dot-item {
    padding-top: 61px;
  }

  // 指示器文字
  .dotText {
    color: #fff;
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

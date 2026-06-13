<script setup>
import Tabs from "./Tabs/index.vue";
import MediaAsset from '@/components/MediaAsset.vue';
import { product1Unit5Data  } from '@/data/product1/product1-unit5'
import {ref, watch, onMounted, onUnmounted, nextTick, computed} from "vue";
import { useUnitData } from '@/composables/useUnitData'
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { useIntersectionObserver } from '@vueuse/core';

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

// 合并 CMS 数据和本地数据
const unitData = useUnitData(props, product1Unit5Data)

const tabsCurrent = ref(0)
const tabsList = computed(() => unitData.value.tabsList)

// 根据 Tab 显示的文案
const labelContents = computed(() => unitData.value.descriptions)

const currentLabel = computed(() => labelContents.value[tabsCurrent.value] || "")

// 媒体资源列表，支持图片和视频混合
const mediaList = computed(() => unitData.value.mediaList)
const containerRef = ref(null)  // 容器引用，用于可见性检测
const isVisible = ref(false)    // 是否在视口中可见
const splideRef = ref(null)
const mediaRefs = ref([])
const progressValues = ref([])
const progressTimers = ref([])
const playSessionId = ref(0)  // 播放会话ID，用于防止旧定时器继续运行

const splideOptions = {
  perPage: 1,
  perMove: 1,
  gap: '1.25rem',
  speed: 800,
  arrows: false,
  pagination: false,
  drag: true, // 允许拖拽
  keyboard: true,
  width: '100vw',
  fixedWidth: '50rem',
  padding: {
    left: 'calc((100vw - 50rem) / 2)',   // 动态计算左侧填充实现居中
    right: 'calc((100vw - 50rem) / 2)',  // 动态计算右侧填充实现居中
  },
  focus: 0,        // 聚焦第一个元素
  omitEnd: true,   // 防止末尾空白
  breakpoints: {
    1024: {
      fixedWidth: '40rem',
      padding: {
        left: 'calc((100vw - 40rem) / 2)',
        right: 'calc((100vw - 40rem) / 2)'
      }
    },
    768: {
      fixedWidth: null,
      padding: { left: 0, right: 0 },
      width: '100%'
    },
    640: {
      fixedWidth: null,
      padding: { left: 0, right: 0 },
      width: '100%'
    }
  }
}

// 初始化进度值
const initProgress = () => {
  progressValues.value = mediaList.value.map(() => 0)
}

// 设置媒体元素引用
const setMediaRef = (el, index) => {
  if (el) {
    mediaRefs.value[index] = el
  }
}

// 清除所有定时器
const clearAllTimers = () => {
  progressTimers.value.forEach(timer => {
    if (!timer) return

    if (typeof timer === 'number') {
      clearInterval(timer)
      clearTimeout(timer)
      cancelAnimationFrame(timer)
    } else if (timer.type === 'video') {
      timer.videoEl?.removeEventListener('timeupdate', timer.updateProgress)
      timer.videoEl?.removeEventListener('ended', timer.endedHandler)
      timer.videoEl?.pause?.()
    }
  })
  progressTimers.value = []
}

// 暂停所有视频
const pauseAllVideos = () => {
  mediaRefs.value.forEach((el, index) => {
    if (mediaList.value[index].type === 'video' && el) {
      const video = el.querySelector('video')
      if (video) {
        video.pause()
        video.currentTime = 0
      }
    }
  })
}

// 开始播放当前 Slide
const playCurrentSlide = (index) => {
  // 增加清理ID，取消之前的延迟定时器
  playSessionId.value++
  const currentSessionId = playSessionId.value

  const stopIfStale = () => {
    const stale = playSessionId.value !== currentSessionId || tabsCurrent.value !== index
    if (stale) {
      progressValues.value[index] = 0
    }
    return stale
  }

  // 清除所有旧的事件监听器
  progressTimers.value.forEach(timer => {
    if (timer?.type === 'video') {
      timer.videoEl?.removeEventListener('timeupdate', timer.updateProgress)
      timer.videoEl?.removeEventListener('ended', timer.endedHandler)
    }
  })

  clearAllTimers()
  pauseAllVideos()

  // 立即重置所有进度条为 0，确保从 0 开始
  progressValues.value = mediaList.value.map(() => 0)

  const media = mediaList.value[index]

  // 延迟 500ms 等待遮罩过渡完成后再开始播放进度
  const delayTimerId = setTimeout(() => {
    // 检查是否已经被新的调用取消
    if (stopIfStale()) return
    if (media.type === 'video') {
      // 视频：绑定播放事件
      const videoEl = mediaRefs.value[index]?.querySelector('video')
      if (videoEl) {
        videoEl.currentTime = 0
        videoEl.play().catch(err => console.error('视频播放失败:', err))

        const updateProgress = () => {
          if (stopIfStale()) return
          if (videoEl.duration) {
            progressValues.value[index] = (videoEl.currentTime / videoEl.duration) * 100
          }
        }

        const endedHandler = () => {
          if (stopIfStale()) return
          progressValues.value[index] = 100
          goToNext()
        }

        videoEl.addEventListener('timeupdate', updateProgress)
        videoEl.addEventListener('ended', endedHandler)

        // 保存所有引用用于清理
        progressTimers.value[index] = { type: 'video', videoEl, updateProgress, endedHandler }
      }
    } else {
      // 图片：10秒动画帧
      const duration = 10000 // 10秒
      const startTime = Date.now()
      let animationFrameId

      const animate = () => {
        if (stopIfStale()) {
          return
        }
        const elapsed = Date.now() - startTime
        const progress = Math.min((elapsed / duration) * 100, 100)
        progressValues.value[index] = progress

        if (progress >= 100) {
          cancelAnimationFrame(animationFrameId)
          goToNext()
        } else {
          animationFrameId = requestAnimationFrame(animate)
          progressTimers.value[index] = animationFrameId
        }
      }

      animationFrameId = requestAnimationFrame(animate)
      progressTimers.value[index] = animationFrameId
    }
  }, 500) // 等待 500ms 遮罩过渡完成

  // 保存延迟定时器 ID，以便清理
  progressTimers.value[index] = delayTimerId
}

// 切换到下一个 Slide（最后一个跳转到第一个）
const goToNext = () => {
  if (splideRef.value) {
    const currentIndex = tabsCurrent.value
    const totalSlides = mediaList.value.length

    if (currentIndex === totalSlides - 1) {
      // 最后一个 Slide：跳转到第一个，实现循环
      splideRef.value.go(0)
    } else {
      // 非最后一个：跳转到下一个
      splideRef.value.go('+1')
    }
  }
}

const onSplideInit = (splide) => {
  splideRef.value = splide
  tabsCurrent.value = splide.index

  // 等待 DOM 渲染完成后，检查是否可见再开始播放
  nextTick(() => {
    if (isVisible.value) {
      playCurrentSlide(splide.index)
    }
  })
}

const onSlideChange = (splide) => {
  const newIndex = splide.index
  tabsCurrent.value = newIndex

  // 只有在可见时才播放
  if (isVisible.value) {
    playCurrentSlide(newIndex)
  }
}

watch(tabsCurrent, (index) => {
  // 防止循环触发：只有当 Splide 的当前索引与 tabsCurrent 不同时才执行跳转
  if (splideRef.value?.index !== index) {
    splideRef.value?.go(index)
  }
})

onMounted(() => {
  initProgress()
})

// 监听组件是否在视口中可见
useIntersectionObserver(
  containerRef,
  ([{ isIntersecting }]) => {
    isVisible.value = isIntersecting

    if (isIntersecting) {
      // 进入屏幕：开始播放当前 Slide
      if (splideRef.value) {
        playCurrentSlide(tabsCurrent.value)
      }
    } else {
      // 离开屏幕：停止播放并重置所有进度
      clearAllTimers()
      pauseAllVideos()
      progressValues.value = progressValues.value.map(() => 0)
    }
  },
  { threshold: 0.3 }  // 当组件 30% 可见时触发
)

onUnmounted(() => {
  clearAllTimers()

  // 清理视频事件监听
  progressTimers.value.forEach(timer => {
    if (timer?.type === 'video') {
      timer.videoEl?.removeEventListener('timeupdate', timer.updateProgress)
      timer.videoEl?.removeEventListener('ended', timer.endedHandler)
    }
  })
})
</script>

<template>
  <div ref="containerRef" class="relative mt-[173px]">
    <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#111] w-screen h-[960px]"></span>
    <div class="relative">
      <div class="c_1230 c_padding">
        <div class="title">
          {{ unitData.mainTitle }}
        </div>
        <div class="mt-[58px] relative">
          <div class="w-full flex justify-center">
            <Splide :options="splideOptions" @splide:mounted="onSplideInit" @splide:moved="onSlideChange">
              <SplideSlide class="md:w-[800px] w-full max-w-[100vw] md:h-[500px] h-[300px]"
                v-for="(media, index) in mediaList" :key="index">
                <div :ref="el => setMediaRef(el, index)" class="media-wrapper"
                  :class="{ 'is-active': index === tabsCurrent }">
                  <!-- 黑色透明遮罩层 -->
                  <div class="overlay"></div>

                  <!-- MediaAsset 组件 -->
                  <MediaAsset :src="media.src" :alt="media.alt" :poster="media.poster"
                    :autoplay="false" :muted="true" :loop="false" :controls="false" class="media-content"
                    :class="{'!border-[#D9D9D9]': index === tabsCurrent}" />

                  <!-- 蓝色进度条 -->
                  <div class="progress-bar-container">
                    <div class="progress-bar" :style="{ width: `${progressValues[index] || 0}%` }"></div>
                  </div>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
      </div>
      <Tabs class="!h-[50px] mt-[40px]" :list="tabsList" v-model="tabsCurrent"></Tabs>
      <div class="c_1230 c_padding">
        <transition name="fade-up" mode="out-in">
          <div :key="tabsCurrent" class="label max-w-[1000px] w-full mx-auto mt-[28px]">
            {{ currentLabel }}
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #1CE785 0%, #80FFC1 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
}

.label {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

// 文案淡入上移动效
.fade-up-enter-active,
.fade-up-leave-active {
  transition: opacity 300ms ease, transform 300ms ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.fade-up-enter-to,
.fade-up-leave-from {
  opacity: 1;
  transform: translateY(0);
}

// 媒体容器
.media-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  overflow: hidden;
}

// 黑色透明遮罩层
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10;
  pointer-events: none;
  border-radius: 20px;
  opacity: 1;
  transition: opacity 2000ms ease-out; // 500ms 淡出过渡
}

// 当前激活的 Slide，遮罩透明
.media-wrapper.is-active .overlay {
  opacity: 0;
}

// MediaAsset 样式
.media-content {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  // border: 2px solid #F5F5F5;
  display: block;

  :deep(img),
  :deep(video) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
}

// 进度条容器
.progress-bar-container {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: rgba(255, 255, 255, 0);
  z-index: 20;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow: hidden;
}

// 蓝色进度条
.progress-bar {
  height: 100%;
  background: #1CE785; // 蓝色
  transition: width 0.1s linear;
  border-bottom-left-radius: 20px;
}
</style>
<script setup>
import { ref, onMounted, onUnmounted, toRef, computed } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useIntersectionObserver } from '@vueuse/core'
import MediaAsset from '@/components/MediaAsset.vue'

const props = defineProps({
  /** 媒体列表 [{ src, alt, poster?, type? }] */
  items: { type: Array, required: true },
  /** 箭头图标路径 */
  arrowIcon: { type: String, required: true },
  /** 容器 CSS class */
  containerClass: { type: String, default: '' },
  /** Splide 配置覆盖 */
  splideOptions: { type: Object, default: () => ({}) },
  /** 起始索引 */
  startIndex: { type: Number, default: 0 },
})

defineSlots()

const bannerCurrent = ref(0)
const splideRef = ref(null)
const canSlidePrev = ref(true)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)
const containerRef = ref(null)
const isVisible = ref(false)
const mediaRefs = ref([])
const progressValues = ref([])
const progressTimers = ref([])
const playSessionId = ref(0)

const defaultOptions = {
  type: 'loop',
  perPage: 1,
  perMove: 1,
  gap: '1.25rem',
  speed: 800,
  arrows: false,
  pagination: false,
  drag: false,
  keyboard: false,
  width: '100vw',
  fixedWidth: '50rem',
  focus: 'center',
  autoplay: false,
}

const mergedOptions = computed(() => ({
  ...defaultOptions,
  ...props.splideOptions,
  ...(props.startIndex !== undefined ? { start: props.startIndex } : {}),
}))

const itemsList = toRef(props, 'items')

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const initProgress = () => {
  progressValues.value = itemsList.value.map(() => 0)
}

const clearAllTimers = () => {
  progressTimers.value.forEach(timer => {
    if (timer) {
      clearTimeout(timer)
      cancelAnimationFrame(timer)
    }
  })
  progressTimers.value = []
}

const pauseAllVideos = () => {
  mediaRefs.value.forEach(mediaRef => {
    if (mediaRef && mediaRef.$el) {
      const videoEl = mediaRef.$el.querySelector('video')
      if (videoEl) {
        videoEl.pause()
        videoEl.currentTime = 0
        videoEl.removeEventListener('timeupdate', () => {})
        videoEl.removeEventListener('ended', () => {})
      }
    }
  })
}

const goToNext = () => {
  if (!splideRef.value) return
  const currentIndex = splideRef.value.index
  const totalSlides = itemsList.value.length
  if (currentIndex === totalSlides - 1) {
    splideRef.value.go(0)
  } else {
    splideRef.value.go('+1')
  }
}

const playCurrentSlide = index => {
  const currentSessionId = ++playSessionId.value
  const stopIfStale = () => currentSessionId !== playSessionId.value

  clearAllTimers()
  pauseAllVideos()
  initProgress()

  const mediaRef = mediaRefs.value[index]

  if (!mediaRef || !mediaRef.$el) return

  setTimeout(() => {
    if (stopIfStale()) return

    const videoEl = mediaRef.$el.querySelector('video')
    if (videoEl) {
      const updateProgress = () => {
        if (stopIfStale()) return
        const { currentTime, duration } = videoEl
        if (duration > 0) {
          progressValues.value[index] = (currentTime / duration) * 100
        }
      }
      const onEnded = () => {
        if (stopIfStale()) return
        goToNext()
      }
      videoEl.addEventListener('timeupdate', updateProgress)
      videoEl.addEventListener('ended', onEnded)
      videoEl.play()
    } else {
      const startTime = Date.now()
      const duration = 10000
      const animate = () => {
        if (stopIfStale()) return
        const elapsed = Date.now() - startTime
        const progress = Math.min((elapsed / duration) * 100, 100)
        progressValues.value[index] = progress
        if (progress < 100) {
          progressTimers.value[index] = requestAnimationFrame(animate)
        } else {
          goToNext()
        }
      }
      progressTimers.value[index] = requestAnimationFrame(animate)
    }
  }, 500)
}

const updateArrowStatus = splide => {
  canSlidePrev.value = true
  canSlideNext.value = true
  bannerCurrent.value = splide.index
}

const onSlideChange = splide => {
  updateArrowStatus(splide)
  if (isVisible.value) {
    playCurrentSlide(splide.index)
  }
}

const onSplideInit = splide => {
  splideRef.value = splide
  updateArrowStatus(splide)
}

const slidePrev = () => splideRef.value?.go('<')
const slideNext = () => splideRef.value?.go('>')

const setMediaRef = (el, index) => {
  if (el && el.$el && !mediaRefs.value[index]) {
    mediaRefs.value[index] = el
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  initProgress()

  useIntersectionObserver(
    containerRef,
    ([{ isIntersecting }]) => {
      isVisible.value = isIntersecting
      if (isIntersecting && splideRef.value) {
        playCurrentSlide(splideRef.value.index)
      } else {
        clearAllTimers()
        pauseAllVideos()
        initProgress()
      }
    },
    { threshold: 0.3 },
  )
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  clearAllTimers()
  pauseAllVideos()
})
</script>

<template>
  <section ref="containerRef" :class="containerClass">
    <!-- 头部插槽：标签 + 标题 -->
    <slot name="header" />

    <div
      class="carouselWrap relative"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="w-full">
        <Splide
          :options="mergedOptions"
          @splide:mounted="onSplideInit"
          @splide:moved="onSlideChange"
          @splide:move="updateArrowStatus"
        >
          <SplideSlide v-for="(media, index) in items" :key="index" class="h-[500px] max-w-[94vw]">
            <div
              class="media-wrapper relative w-full h-full rounded-[20px] overflow-hidden"
              :class="{ 'is-active': index === bannerCurrent }"
            >
              <!-- 非激活遮罩 -->
              <div class="overlay" />

              <MediaAsset
                :ref="el => setMediaRef(el, index)"
                :src="media.src"
                :alt="media.alt"
                :poster="media.poster"
                :autoplay="false"
                :muted="true"
                :loop="false"
                :controls="false"
                :lazy="false"
                class="media-content w-full h-full object-cover rounded-[20px]"
              />

              <!-- 幻灯片内容插槽 -->
              <slot name="slide-content" :item="media" :index="index" :active="index === bannerCurrent" />

              <!-- 进度条 -->
              <div
                class="progress-bar-container absolute bottom-0 left-0 right-0 h-[4px] bg-gray-200/30 rounded-b-[20px] overflow-hidden"
              >
                <div
                  class="progress-bar h-full bg-[#1CE785] transition-all duration-100"
                  :style="{ width: `${progressValues[index] || 0}%` }"
                />
              </div>
            </div>
          </SplideSlide>
        </Splide>
      </div>

      <!-- 箭头导航 -->
      <div class="size-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[1000px] mx-auto pointer-events-none">
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 left-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 rotate-180 pointer-events-auto"
          :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
          type="image"
          :src="arrowIcon"
          alt=""
          :lazy="false"
          @click="slidePrev"
        />
        <MediaAsset
          class="absolute cursor-pointer size-[50px] z-10 right-[10px] top-1/2 -translate-y-1/2 transition-opacity duration-100 pointer-events-auto"
          :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
          type="image"
          :src="arrowIcon"
          alt=""
          :lazy="false"
          @click="slideNext"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.media-wrapper {
  position: relative;
  overflow: hidden;
}

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
  transition: opacity 2000ms ease-out;
}

.media-wrapper.is-active .overlay {
  opacity: 0;
}

.media-content {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.progress-bar-container {
  z-index: 20;
}

.progress-bar {
  transition: width 100ms linear;
}
</style>

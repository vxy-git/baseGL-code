<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import { useIntersectionObserver } from '@vueuse/core'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit1Data } from '@/data/blog/unit1'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit1Data)
const list = computed(() => unitData.value.slides)

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

const splideOptions = {
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
  start: 1,
}

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const initProgress = () => {
  progressValues.value = list.value.map(() => 0)
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
      const videoElement = mediaRef.$el.querySelector('video')
      if (videoElement) {
        videoElement.pause()
        videoElement.currentTime = 0
        videoElement.removeEventListener('timeupdate', () => {})
        videoElement.removeEventListener('ended', () => {})
      }
    }
  })
}

const goToNext = () => {
  const currentIndex = splideRef.value.index
  const totalSlides = list.value.length

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

  const media = list.value[index]
  const mediaRef = mediaRefs.value[index]

  if (!mediaRef || !mediaRef.$el) return

  setTimeout(() => {
    if (stopIfStale()) return

    if (media.type === 'video') {
      const videoElement = mediaRef.$el.querySelector('video')
      if (videoElement) {
        const updateProgress = () => {
          if (stopIfStale()) return
          const { currentTime, duration } = videoElement
          if (duration > 0) {
            progressValues.value[index] = (currentTime / duration) * 100
          }
        }

        const onEnded = () => {
          if (stopIfStale()) return
          goToNext()
        }

        videoElement.addEventListener('timeupdate', updateProgress)
        videoElement.addEventListener('ended', onEnded)
        videoElement.play()
      }
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

const changeEnd = splide => {
  updateArrowStatus(splide)
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

const slidePrev = () => {
  splideRef.value?.go('<')
}

const slideNext = () => {
  splideRef.value?.go('>')
}

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
    { threshold: 0.3 }
  )
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
  clearAllTimers()
  pauseAllVideos()
})
</script>

<template>
  <section ref="containerRef" class="unit1">
    <div
      class="carouselWrap relative"
      aria-label="Featured blog posts"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
    >
      <div class="w-full">
        <Splide
          :options="splideOptions"
          @splide:mounted="onSplideInit"
          @splide:moved="onSlideChange"
          @splide:move="changeEnd"
        >
          <SplideSlide v-for="(slide, index) in list" :key="index" class="h-[500px] max-w-[94vw]">
            <article
              class="media-wrapper relative w-full h-full rounded-[20px] overflow-hidden"
              :class="{ 'is-active': index === bannerCurrent }"
            >
              <div class="overlay"></div>
              <MediaAsset
                :ref="el => setMediaRef(el, index)"
                :src="slide.src"
                :alt="slide.alt"
                :poster="slide.poster"
                :autoplay="false"
                :muted="true"
                :loop="false"
                :controls="false"
                :lazy="false"
                class="media-content w-full h-full object-cover rounded-[20px]"
              />
              <div class="textOverlay">
                <p class="featuredDate">{{ slide.date }}</p>
                <h1 class="featuredTitle">{{ slide.title }}</h1>
              </div>
              <div
                class="progress-bar-container absolute bottom-0 left-0 right-0 h-[4px] bg-gray-200/30 rounded-b-[20px] overflow-hidden"
              >
                <div
                  class="progress-bar h-full bg-[#1CE785] transition-all duration-100"
                  :style="{ width: `${progressValues[index] || 0}%` }"
                ></div>
              </div>
            </article>
          </SplideSlide>
        </Splide>
      </div>
      <div
        class="size-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-[1000px] mx-auto"
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
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit1 {
  padding-top: 110px;
  padding-bottom: 0;
  background: #fff;
}

.media-wrapper {
  position: relative;
  overflow: hidden;
}

.media-content {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  pointer-events: none;
  border-radius: 20px;
  transition: opacity 2000ms ease-out;
}

.media-wrapper.is-active .overlay {
  opacity: 0;
}

.textOverlay {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 15;
  min-height: 174px;
  padding: 56px 94px 40px;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(180deg, rgb(0 0 0 / 0%) 0%, rgb(0 0 0 / 72%) 100%);
  color: #fff;
}

.featuredDate {
  margin: 0 0 13px;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  text-align: center;
}

.featuredTitle {
  max-width: 651px;
  margin: 0 auto;
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  line-height: 41px;
  text-align: center;
}

.progress-bar-container {
  z-index: 20;
}

.progress-bar {
  transition: width 100ms linear;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit1 {
    padding-top: 60px;
  }

  .textOverlay {
    min-height: auto;
    padding: 38px 20px 22px;
  }

  .featuredDate {
    margin-bottom: 8px;
    font-size: 14px;
    line-height: 20px;
  }

  .featuredTitle {
    font-size: 22px;
    line-height: 28px;
  }
}
</style>

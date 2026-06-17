<script setup>
import { computed, nextTick, onBeforeUpdate, onMounted, onUnmounted, ref } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import MediaAsset from '@/components/MediaAsset.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit2Data } from '@/data/customize/unit2'

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit2Data)
const slides = computed(() => unitData.value.slides || [])
const splideRef = ref(null)
const canSlidePrev = ref(false)
const canSlideNext = ref(true)
const isHovered = ref(false)
const isMobile = ref(false)
const activeSlideIndex = ref(0)
const videoRefs = ref([])

const checkMobile = () => {
  isMobile.value = window.innerWidth <= 768
}

const setVideoRef = (el, index) => {
  if (el) {
    videoRefs.value[index] = el
  }
}

const resetVideo = video => {
  if (!video) return
  video.pause()
  video.currentTime = 0
}

const playActiveVideo = async () => {
  await nextTick()
  videoRefs.value.forEach((video, index) => {
    if (index !== activeSlideIndex.value) {
      resetVideo(video)
    }
  })

  const activeVideo = videoRefs.value[activeSlideIndex.value]
  if (!activeVideo) return
  activeVideo.currentTime = 0
  const playPromise = activeVideo.play()
  if (playPromise && typeof playPromise.catch === 'function') {
    playPromise.catch(() => {})
  }
}

onMounted(() => {
  checkMobile()
  window.addEventListener('resize', checkMobile)
  playActiveVideo()
})

onBeforeUpdate(() => {
  videoRefs.value = []
})

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile)
})

const updateArrowStatus = () => {
  canSlidePrev.value = true
  canSlideNext.value = true
}

const onSplideInit = splide => {
  splideRef.value = splide
  activeSlideIndex.value = splide?.index || 0
  updateArrowStatus()
  playActiveVideo()
}

const onSlideChange = (splide, newIndex) => {
  activeSlideIndex.value = typeof newIndex === 'number' ? newIndex : splide?.index || 0
  updateArrowStatus()
  playActiveVideo()
}

const slidePrev = () => {
  splideRef.value?.go('<')
}

const slideNext = () => {
  splideRef.value?.go('>')
}

const playNextSlide = () => {
  splideRef.value?.go('>')
}
</script>

<template>
  <section class="unit2">
    <div class="c_1300 c_padding">
      <h2>{{ unitData.title }}</h2>
      <div
        class="demoStage"
        @mouseenter="isHovered = true"
        @mouseleave="isHovered = false"
      >
        <Splide
          class="demoSplide"
          :options="unitData.splideOptions"
          @splide:mounted="onSplideInit"
          @splide:moved="onSlideChange"
        >
          <SplideSlide v-for="(slide, index) in slides" :key="slide.video" class="demoSlide">
            <video
              :ref="el => setVideoRef(el, index)"
              class="slideVideo"
              :src="slide.video"
              :aria-label="slide.alt"
              muted
              playsinline
              preload="metadata"
              @ended="playNextSlide"
            />
          </SplideSlide>
        </Splide>
        <div class="arrowLayer">
          <MediaAsset
            class="arrowIcon arrowIconPrev"
            :class="{ 'opacity-0 pointer-events-none': !canSlidePrev || (!isHovered && !isMobile) }"
            type="image"
            :src="unitData.arrowIcon"
            alt=""
            :lazy="false"
            @click="slidePrev"
          />
          <MediaAsset
            class="arrowIcon arrowIconNext"
            :class="{ 'opacity-0 pointer-events-none': !canSlideNext || (!isHovered && !isMobile) }"
            type="image"
            :src="unitData.arrowIcon"
            alt=""
            :lazy="false"
            @click="slideNext"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit2 {
  padding: 120px 0 117px;
  background: #fff;
}

h2 {
  color: #111;
  font-size: 40px;
  font-weight: 700;
  line-height: 47px;
  text-align: center;
}

.demoStage {
  position: relative;
  margin-top: 45px;
  overflow: visible;
}

.demoSplide {
  height: 600px;
}

.demoSplide :deep(.splide__track) {
  height: 100%;
  overflow: visible;
}

.demoSplide :deep(.splide__list) {
  height: 100%;
}

.demoSlide {
  height: 100%;
  max-width: 100%;
  border-radius: 10px;
  overflow: hidden;
}

.slideVideo {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.arrowLayer {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.arrowIcon {
  position: absolute;
  top: 50%;
  z-index: 10;
  width: 50px;
  height: 50px;
  cursor: pointer;
  transform: translateY(-50%);
  transition: opacity 0.1s;
  pointer-events: auto;
}

.arrowIconPrev {
  left: 20px;
  transform: translateY(-50%) rotate(180deg);
}

.arrowIconNext {
  right: 20px;
}

@media screen and (max-width: $breakpoint-mobile) {
  .unit2 {
    padding: 70px 0 60px;
  }

  h2 {
    font-size: 34px;
    line-height: 40px;
  }

  .demoSplide {
    height: auto;
    aspect-ratio: 13 / 6;
  }

  .demoSlide {
    width: 100% !important;
  }

  .arrowIcon {
    width: 42px;
    height: 42px;
  }

}
</style>

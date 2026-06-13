<script setup>
import { onMounted, onUnmounted, ref, computed } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import { unit6Data } from '@/data/technology/unit6.js'
import { useCmsNavStore } from '@/stores/cmsNav'
import { useUnitData } from '@/composables/useUnitData'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const cmsNavStore = useCmsNavStore()
const cmsData = computed(() => {
  const techNav = cmsNavStore.getNavByName('Technology')
  return techNav?.moduleList?.unit6?.data || null
})

const unitData = useUnitData(props, unit6Data, { cmsData })

const sectionRef = ref(null)
const mediaBoxRef = ref(null)
const mediaAssetRef = ref(null)
const titleRef = ref(null)
const descRef = ref(null)

const INITIAL_WIDTH = '100vw'
const INITIAL_HEIGHT = 2
const TARGET_WIDTH = 800
const TARGET_HEIGHT = 400
const PLAY_PROGRESS_START = 0.65

let scrollTl
let hasPlayedInExpanded = false

const playVideo = () => mediaAssetRef.value?.playFromStart?.()
const pauseVideo = () => mediaAssetRef.value?.pause?.()

const initAnimation = () => {
  const sectionEl = sectionRef.value
  const mediaEl = mediaBoxRef.value
  const titleEl = titleRef.value
  const descEl = descRef.value
  if (!sectionEl || !mediaEl || !titleEl || !descEl) return

  scrollTl && scrollTl.kill()

  gsap.set(mediaEl, { x: '-120vw', width: INITIAL_WIDTH, height: INITIAL_HEIGHT, autoAlpha: 1 })
  gsap.set(titleEl, { x: '120vw', autoAlpha: 0 })
  gsap.set(descEl, { x: '120vw', autoAlpha: 0 })
  pauseVideo()
  hasPlayedInExpanded = false

  scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: '+=300%',
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      onUpdate: self => {
        const progress = self.progress
        if (progress >= PLAY_PROGRESS_START && progress <= 1) {
          if (!hasPlayedInExpanded) {
            playVideo()
            hasPlayedInExpanded = true
          }
        } else {
          pauseVideo()
          hasPlayedInExpanded = false
        }
      },
      onLeave: () => {
        pauseVideo()
        hasPlayedInExpanded = false
      },
      onLeaveBack: () => {
        pauseVideo()
        hasPlayedInExpanded = false
      },
    },
  })

  scrollTl
    .to(
      mediaEl,
      {
        x: 0,
        ease: 'none',
        duration: 0.35,
      },
      0
    )
    .to(
      titleEl,
      {
        x: 0,
        autoAlpha: 1,
        ease: 'none',
        duration: 0.35,
      },
      0
    )
    .to(
      descEl,
      {
        x: 0,
        autoAlpha: 1,
        ease: 'none',
        duration: 0.35,
      },
      0
    )
    .to(
      mediaEl,
      {
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        ease: 'none',
        duration: 0.3,
      },
      0.35
    )
    .to(
      mediaEl,
      {
        width: TARGET_WIDTH,
        height: TARGET_HEIGHT,
        ease: 'none',
        duration: 0.1,
      },
      0.65
    ) // small hold before exit
    .to(
      [mediaEl, titleEl, descEl],
      {
        y: -120,
        autoAlpha: 0,
        ease: 'power1.in',
        duration: 0.25,
      },
      0.75
    )
}

const handleResize = () => {
  ScrollTrigger.refresh()
}

onMounted(() => {
  initAnimation()
  ScrollTrigger.refresh()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  scrollTl && scrollTl.kill()
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="sectionRef" class="section">
    <div class="content-wrapper">
      <div ref="titleRef" class="title2">
        {{ unitData.title }}
      </div>

      <div ref="mediaBoxRef" class="media-box mt-[34px]">
        <MediaAsset
          ref="mediaAssetRef"
          :src="unitData.video"
          type="video"
          alt=""
          class="media-asset !min-h-0"
          :controls="false"
          :autoplay="false"
          :muted="true"
          :loop="true"
        />
      </div>

      <div ref="descRef" class="title3 mt-[34px] whitespace-break-spaces">
        {{ unitData.description }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.section {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.content-wrapper {
  width: 100%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 140px 16px 80px;
  gap: 24px;
}

.text-block {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.media-box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 400px;
  will-change: transform, width, height, opacity;
}

.media-asset {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.title2 {
  max-width: 100%;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}

.title3 {
  max-width: 100%;
  width: 983px;
  color: #fff;
  font-family: Roboto, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
}
</style>

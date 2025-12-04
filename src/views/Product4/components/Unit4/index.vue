<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
// import dualPNG from '@/assets/dual.png'

const icon33 = '/assets/img/icon33.png'
const dualVideo = '/assets/product4/DUAL.mp4'
// const dualPNG = 'logo1.png'
const dualPNG = import.meta.env.VITE_BASE_URL + 'assets/product4/unit3/logo1.svg'

const sectionRef = ref(null)
const spacerRef = ref(null)
const maskRef = ref(null)
const videoRef = ref(null)
const videoMediaRef = ref(null)
const videoBoxRef = ref(null)
const contentRef = ref(null)
const titleRef = ref(null)
let ctx
let refreshHandler
let sectionFadeTween
const getPinDuration = () => window.innerHeight * 2
let isVideoPlaying = false
const playStartProgress = 0.65
const stopProgress = 0.7

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    let tl

    const getVideoStartMetrics = () => {
      if (!videoRef.value) return { width: 0, height: 0, x: 0, y: 0 }
      const rect = videoRef.value.getBoundingClientRect()
      return { width: rect.width, height: rect.height, x: 0, y: 0, borderRadius: '0px' }
    }

    const getVideoTargetMetrics = () => {
      if (!videoRef.value || !videoBoxRef.value) {
        return { width: 'auto', height: 'auto', x: 0, y: 0 }
      }
      const videoRect = videoRef.value.getBoundingClientRect()
      const boxRect = videoBoxRef.value.getBoundingClientRect()
      const videoCenterX = videoRect.left + videoRect.width / 2
      const videoCenterY = videoRect.top + videoRect.height / 2
      const boxCenterX = boxRect.left + boxRect.width / 2
      const boxCenterY = boxRect.top + boxRect.height / 2
      return {
        width: boxRect.width,
        height: boxRect.height,
        x: boxCenterX - videoCenterX,
        y: boxCenterY - videoCenterY,
        borderRadius: '20px'
      }
    }

    const buildTimeline = () => {
      if (tl) {
        tl.scrollTrigger && tl.scrollTrigger.kill()
        tl.kill()
      }

      const startMetrics = getVideoStartMetrics()
      const targetMetrics = getVideoTargetMetrics()
      const pinDuration = getPinDuration()

      tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: sectionRef.value,
          start: 'top top',
          end: () => '+=' + pinDuration,
          pin: true,
          scrub: true,
          pinSpacing: false,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const shouldPlay = self.progress >= playStartProgress
            const shouldStop = self.progress <= stopProgress
            if (shouldPlay && !isVideoPlaying) {
              isVideoPlaying = true
              videoMediaRef.value?.playFromStart?.()
            } else if (shouldStop && isVideoPlaying) {
              isVideoPlaying = false
              videoMediaRef.value?.pause?.()
              videoMediaRef.value?.resetToStart?.()
            }
          }
        }
      })

      if (spacerRef.value) {
        spacerRef.value.style.height = `${pinDuration}px`
      }

      if (maskRef.value) {
        tl.fromTo(
          maskRef.value,
          { scale: 1, opacity: 1 },
          { scale: 3, opacity: 0 }
        )
      }

      if (videoRef.value) {
        gsap.set(videoRef.value, { x: 0, y: 0 })

        tl.fromTo(
          videoRef.value,
          { ...startMetrics, immediateRender: false },
          { ...targetMetrics, immediateRender: false },
          maskRef.value ? '>' : 0
        )
      }

      if (titleRef.value) {
        tl.fromTo(
          titleRef.value,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power1.out' },
          '>'
        )
      }
    }

    const buildSectionFade = () => {
      if (sectionFadeTween) {
        sectionFadeTween.scrollTrigger && sectionFadeTween.scrollTrigger.kill()
        sectionFadeTween.kill()
        sectionFadeTween = null
      }
      if (sectionRef.value) {
        gsap.set(sectionRef.value, { opacity: 1 })
        sectionFadeTween = gsap.to(contentRef.value, {
          opacity: 0,
          ease: 'power1.in',
          scrollTrigger: {
            trigger: sectionRef.value,
            start: 'bottom 60%',
            end: 'bottom 20%',
            scrub: true
          }
        })
      }
    }

    buildTimeline()
    buildSectionFade()

    refreshHandler = () => {
      buildTimeline()
      buildSectionFade()
    }
    ScrollTrigger.addEventListener('refreshInit', refreshHandler)
    ScrollTrigger.refresh()
  }, sectionRef.value)
})

onBeforeUnmount(() => {
  if (refreshHandler) {
    ScrollTrigger.removeEventListener('refreshInit', refreshHandler)
  }
  ctx && ctx.revert()
})
</script>

<template>
  <div class="unit4-wrapper">
    <div ref="sectionRef" class="w-screen h-screen relative overflow-hidden unit4-section">
      <div ref="contentRef" class="relative c_1230 h-full c_padding flex flex-col justify-center items-center">
        <div ref="titleRef" class="">
          <div class="title">
            Twice the performance,<br />
            Triple the flavors.
          </div>
          <div class="label mt-[32px] mb-[32px]">
            Get ready for DUKES to spice up your taste buds. It combines both flavors for a new experience, allowing
            users
            to
            switch between tastes or enjoy a mix of both.
          </div>
        </div>
        <div ref="videoBoxRef" class="w-[94.5vh] max-w-full h-[53.7vh]"></div>
        <div ref="videoRef"
          class="video-layer absolute mt-[47px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[calc(100vh-96px)] overflow-hidden">
          <MediaAsset ref="videoMediaRef" class="size-full object-cover" type="video" :src="dualVideo"
            :autoplay="false" :muted="true" :loop="false" :controls="false" />
        </div>
        <div ref="maskRef"
          class="mask-layer w-screen h-screen absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          :style="{ backgroundImage: `url(${dualPNG})` }"></div>
      </div>
    </div>
    <div ref="spacerRef" class="unit4-spacer"></div>
  </div>
</template>

<style scoped lang="scss">
.unit4-wrapper {
  position: relative;
}

.unit4-section {
  isolation: isolate;
}

.unit4-spacer {
  width: 100%;
  height: 0;
}

.title {
  margin-top: 80px;
  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}

.label {
  color: #444;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}

.mask-layer {
  will-change: transform, opacity;
  transform-origin: center;
  pointer-events: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.video-layer {
  will-change: transform, width, height;
  transform-origin: center;
}
</style>

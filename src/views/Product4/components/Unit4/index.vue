<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'

const icon33 = '/assets/img/icon33.png'
const dualVideo = '/assets/product4/DUAL.mp4'
const dualLogo = import.meta.env.VITE_BASE_URL + 'assets/product4/unit3/logo1.png'

const sectionRef = ref(null)
const spacerRef = ref(null)
const maskRef = ref(null)
const videoRef = ref(null)
const videoBoxRef = ref(null)
const contentRef = ref(null)
const titleRef = ref(null)
let ctx
let refreshHandler
let sectionFadeTween
const getPinDuration = () => window.innerHeight * 2

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)

  ctx = gsap.context(() => {
    let tl

    const getVideoStartMetrics = () => {
      if (!videoRef.value) return { width: 0, height: 0, x: 0, y: 0 }
      const rect = videoRef.value.getBoundingClientRect()
      return { width: rect.width, height: rect.height, x: 0, y: 0 }
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
        y: boxCenterY - videoCenterY
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
          invalidateOnRefresh: true
        }
      })

      if (spacerRef.value) {
        spacerRef.value.style.height = `${pinDuration}px`
      }

      if (maskRef.value) {
        tl.fromTo(
          maskRef.value,
          { scale: 1, opacity: 1 },
          { scale: 4.5, opacity: 0 }
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
          class="video-layer absolute mt-[49px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[calc(100vh-96px)]">
          <MediaAsset class="size-full object-cover" type="video" :src="dualVideo" :autoplay="false" :muted="true"
            :loop="false" :controls="false" />
        </div>
        <!-- <div ref="maskRef"
          class="mask-layer w-[100vw] h-[calc(100vh-96px)] absolute left-1/2 top-1/2 mt-[48px] -translate-x-1/2 -translate-y-1/2"
          :style="{backgroundImage: `url(${dualLogo})`, backgroundOrigin: 'cover', backgroundPosition: 'center'}">
        </div> -->

        <div ref="maskRef" class="mask-layer w-screen h-screen absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg class="min-w-full min-h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080" fill="none">
            <path
              d="M1920 1080H0V0H1920V1080ZM845.809 561.945C845.809 572.883 848.12 582.095 852.742 589.582C857.43 597.069 863.875 602.701 872.078 606.477C880.346 610.253 889.786 612.141 900.398 612.141C911.01 612.141 920.385 610.253 928.523 606.477C936.727 602.701 943.139 597.069 947.762 589.582C952.449 582.095 954.793 572.883 954.793 561.945V468H925.594V561.945C925.594 568.326 924.585 573.534 922.566 577.57C920.613 581.607 917.749 584.569 913.973 586.457C910.262 588.345 905.737 589.289 900.398 589.289C895.19 589.289 890.665 588.345 886.824 586.457C883.048 584.569 880.151 581.607 878.133 577.57C876.115 573.534 875.105 568.326 875.105 561.945V468H845.809V561.945ZM717 468V610.188H760.652C770.288 610.188 779.077 608.592 787.02 605.402C795.027 602.147 801.896 597.557 807.625 591.633C813.419 585.643 817.879 578.482 821.004 570.148C824.194 561.815 825.789 552.603 825.789 542.512V535.773C825.789 525.617 824.194 516.405 821.004 508.137C817.879 499.803 813.419 492.642 807.625 486.652C801.831 480.663 794.962 476.073 787.02 472.883C779.142 469.628 770.451 468 760.945 468H717ZM964.754 610.188H995.906L1005.74 580.207H1056.85L1066.71 610.188H1097.96L1044.83 468H1017.59L964.754 610.188ZM1111.14 610.188H1202.55V587.336H1140.44V468H1111.14V610.188ZM760.945 490.949C766.609 490.949 771.622 491.926 775.984 493.879C780.346 495.767 784.025 498.599 787.02 502.375C790.014 506.151 792.26 510.806 793.758 516.34C795.32 521.874 796.102 528.286 796.102 535.578V542.512C796.102 552.017 794.734 560.122 792 566.828C789.331 573.534 785.359 578.645 780.086 582.16C774.812 585.611 768.335 587.336 760.652 587.336H746.297V490.949H760.945ZM1049.3 557.258H1013.27L1031.26 502.424L1049.3 557.258Z"
              fill="#F8F9FD" />
          </svg>
        </div>
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
}

.video-layer {
  will-change: transform, width, height;
  transform-origin: center;
}
</style>

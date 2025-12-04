<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
const l1 = '/assets/technology/t1/l1.mp4'
const r1 = '/assets/technology/t1/r1.jpg'
const r2 = '/assets/technology/t1/r2.mp4'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const videoBoxRef = ref(null)
const videoAssetRef = ref(null)
const rightWrapRef = ref(null)
const rightVideoBoxRef = ref(null)
const rightVideoAssetRef = ref(null)

let scrollTl
let rightVideoTrigger

const playLeft = () => videoAssetRef.value?.playFromStart?.()
const pauseLeft = () => videoAssetRef.value?.pause?.()

const getMetrics = () => {
  const sectionEl = sectionRef.value
  const rightEl = rightWrapRef.value
  const leftEl = videoBoxRef.value
  if (!sectionEl || !rightEl || !leftEl) return { translateY: 0, scrollDistance: 0 }

  const sectionRect = sectionEl.getBoundingClientRect()
  const rightRect = rightEl.getBoundingClientRect()
  const leftRect = leftEl.getBoundingClientRect()

  // 让右侧内容底部与左侧视频底部对齐时结束滚动
  const leftBottom = leftRect.bottom - sectionRect.top
  const rightBottom = rightRect.bottom - sectionRect.top
  const translateY = leftBottom - rightBottom
  const scrollDistance = Math.max(0, rightBottom - leftBottom + 40)

  return { translateY, scrollDistance }
}

const initScroll = () => {
  const sectionEl = sectionRef.value
  const rightEl = rightWrapRef.value
  if (!sectionEl || !rightEl) return

  scrollTl && scrollTl.kill()
  gsap.set(rightEl, { y: 0 })

  scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: () => `+=${getMetrics().scrollDistance}`,
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true,
      pinSpacing: true,
      onEnter: playLeft,
      onEnterBack: playLeft,
      onLeave: pauseLeft,
      onLeaveBack: pauseLeft
    }
  })

  scrollTl.to(rightEl, {
    y: () => getMetrics().translateY,
    ease: 'none'
  })
}

const initRightVideo = () => {
  const box = rightVideoBoxRef.value
  if (!box) return

  rightVideoTrigger && rightVideoTrigger.kill()

  rightVideoTrigger = ScrollTrigger.create({
    trigger: box,
    start: 'top 70%',
    end: 'bottom 30%',
    onEnter: () => rightVideoAssetRef.value?.playFromStart?.(),
    onEnterBack: () => rightVideoAssetRef.value?.playFromStart?.(),
    onLeave: () => rightVideoAssetRef.value?.pause?.(),
    onLeaveBack: () => rightVideoAssetRef.value?.pause?.()
  })
}

const handleResize = () => {
  initScroll()
  ScrollTrigger.refresh()
}

onMounted(() => {
  initScroll()
  initRightVideo()
  ScrollTrigger.refresh()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  scrollTl && scrollTl.kill()
  rightVideoTrigger && rightVideoTrigger.kill()
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="sectionRef" class="unit2 relative flex w-[1560px] max-w-full items-start mx-auto h-screen">
    <div class="shrink-0 w-[400px] mt-[150px]" ref="videoBoxRef">
      <MediaAsset ref="videoAssetRef" type="video" :src="l1" :autoplay="false" :muted="true" :loop="true"
        :controls="false" :view-play="true" playsinline class="mediaBox" />
    </div>
    <div ref="rightWrapRef"
      class="content-wrapper mt-[155px] will-change-transform pl-[98px] border-l-[1px] border-white/20 ml-[170px] pb-[65px] h-max pr-[134px]">
      <div class="content1 flex flex-col items-center">
        <div class="title1">
          100% Rosin-Ready
        </div>

        <div class="title2 mt-[20px] -ml-[5px] tracking-[0.2px]">
          Savor the most natural
          and rich flavors
        </div>

        <div class="title3 mt-[28px]">
          We always strive to be pioneers in the industry.
          Our patented U-shape ceramic design is the result of extensive testing and validation of various
          structures.
          It is the optimal structure for the vast majority of Resin and Rosin oils on the market.
          It is 30% thinner than ordinary ceramics while maintaining the strength, which means fewer terpene
          molecules
          are filtered out, and the rich, natural flavors are preserved.
        </div>

        <div class="flex pl-[3px] justify-center gap-x-[152px] mt-[36px]">
          <div class="flex flex-col items-center justify-center ">
            <div class="text1">
              30%
            </div>
            <div class="text2">
              Thinner in Structure
            </div>
          </div>
          <div class="flex flex-col items-center">
            <div class="text1 flex">
              45%
            </div>
            <div class="text2">
              Flavor Retention
            </div>
          </div>
        </div>
        <MediaAsset class="w-[763px] object-contain" type="image" :src="r1" alt="" />
      </div>
      <div class="content2 mt-[158px] flex flex-col items-center" ref="rightVideoBoxRef">
        <div class="title1">
          We Fixed It First
        </div>

        <div class="title2 mt-[20px]">
          The most effective <br>
          anti-clogging solution ever built.
        </div>

        <div class="title3 mt-[25px]">
          Most customers have reported bubble issues to us with various devices from different suppliers during oil
          filling. Our U-shape ceramic design solves this problem perfectly. No more burnt taste caused by clogged
          bubbles.
        </div>
        <MediaAsset ref="rightVideoAssetRef" :src="r2" type="video" class="w-[595px] mt-[66px]" muted :controls="false"
          :view-play="true" :loop="true" playsinline alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content-wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content1 {
  width: 100%;
  flex: 1;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 418px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.1; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }


  .text1 {
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
    margin-top: 0px;
  }
}

.content2 {
  width: 100%;

  .title1 {
    max-width: 100%;
    width: 164px;
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .title2 {
    max-width: 100%;
    width: 584px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
    line-height: 1.14; // 缩短行间距
    font-weight: 700;
  }

  .title3 {
    max-width: 100%;
    width: 750px;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    text-align: center;
  }

  .percentage {
    color: #1CE785;
    font-family: 'Roboto', sans-serif;
    font-size: 40px;
    text-align: center;
  }


  .text1 {
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
    color: #FFF;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    /* 150% */
    margin-top: 5px;
  }
}


@media screen and (max-width: 1500px) {
  .content-wrapper {
    margin-left: 0 !important;
  }
}

@media screen and (max-width: 1300px) {
  .content-wrapper {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .content1,
  .content2 {
    width: 60vw;
  }
}

@media screen and (max-width: 1100px) {
  .mediaBox {
    width: 30vw;
  }
}
</style>
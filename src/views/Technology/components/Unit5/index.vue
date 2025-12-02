<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import l1 from '@/assets/technology/t3/l1.mp4'
import r1 from '@/assets/technology/t3/r1.mp4'
import r2 from '@/assets/technology/t3/r2.mp4'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const videoBoxRef = ref(null)
const videoAssetRef = ref(null)
const rightWrapRef = ref(null)
const rightVideoBoxRef1 = ref(null)
const rightVideoBoxRef = ref(null)
const rightVideoAssetRef1 = ref(null)
const rightVideoAssetRef2 = ref(null)

let scrollTl
let rightVideoTrigger1
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

const initRightVideo1 = () => {
  const box = rightVideoBoxRef1.value
  if (!box) return

  rightVideoTrigger1 && rightVideoTrigger1.kill()

  rightVideoTrigger1 = ScrollTrigger.create({
    trigger: box,
    start: 'top 70%',
    end: 'bottom 30%',
    onEnter: () => rightVideoAssetRef1.value?.playFromStart?.(),
    onEnterBack: () => rightVideoAssetRef1.value?.playFromStart?.(),
    onLeave: () => rightVideoAssetRef1.value?.pause?.(),
    onLeaveBack: () => rightVideoAssetRef1.value?.pause?.()
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
    onEnter: () => rightVideoAssetRef2.value?.playFromStart?.(),
    onEnterBack: () => rightVideoAssetRef2.value?.playFromStart?.(),
    onLeave: () => rightVideoAssetRef2.value?.pause?.(),
    onLeaveBack: () => rightVideoAssetRef2.value?.pause?.()
  })
}

const handleResize = () => {
  initScroll()
  initRightVideo1()
  initRightVideo()
  ScrollTrigger.refresh()
}

onMounted(() => {
  initScroll()
  initRightVideo1()
  initRightVideo()
  ScrollTrigger.refresh()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  scrollTl && scrollTl.kill()
  rightVideoTrigger1 && rightVideoTrigger1.kill()
  rightVideoTrigger && rightVideoTrigger.kill()
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="sectionRef" class="relative flex max-w-[1702px] items-start mx-auto h-screen">
    <div ref="rightWrapRef"
      class="content-wrapper mt-[155px] pr-[110px] will-change-transform border-r-[1px] border-white/20 mr-[64px] pb-[65px] pl-[201px] h-max">
      <div class="content1 flex flex-col items-center" ref="rightVideoBoxRef1">
        <div class="title1">
          Built-in Wires
        </div>

        <div class="title2 mt-[23px] tracking-[0.3px]">
          No more dry burning
        </div>

        <div class="title3 mt-[23px]">
          We pay attention to every detail.<br>
          It is only when we use the highest-grade nichrome alloy as the heating coil material, shape it for uniform
          heat distribution, and embed it into the ceramic core, allowing the oil to be heated by the ceramic and not
          by
          exposed hot wires, that we say, "That's it. This is a truly perfect structure!"
        </div>
        <div class="w-[750px] mt-[66px] max-w-full">
          <MediaAsset
            ref="rightVideoAssetRef1"
            :src="r1"
            type="video"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
            :view-play="true"
            playsinline
            alt=""
          />
        </div>
      </div>
      <div class="content2 mt-[158px] flex flex-col items-center" ref="rightVideoBoxRef">
        <div class="title1">
          RTD Control
        </div>

        <div class="title2 mt-[23px]">
          Consistent Temp
        </div>

        <div class="title3 mt-[25px]">
          Unicore combines smoothness with purity, ensuring efficient THC and terpene extraction without burning, and
          guarantees an exceptional session every time.
        </div>
        <div class="w-[750px] mt-[66px] max-w-full">
          <MediaAsset
            ref="rightVideoAssetRef2"
            :src="r2"
            type="video"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
            :view-play="true"
            playsinline
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mediaBox shrink-0 w-[577px] mt-[150px]" ref="videoBoxRef">
      <MediaAsset
        ref="videoAssetRef"
        :src="l1"
        type="video"
        :autoplay="false"
        :muted="true"
        :loop="false"
        :controls="false"
        :view-play="true"
        playsinline
        alt=""
      />
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
    max-width: 100%;
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
  }

  .text2 {
    max-width: 100%;
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
    max-width: 100%;
    color: #1CE785;
    font-family: Roboto;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    line-height: 30px;
    /* 75% */
  }

  .text2 {
    max-width: 100%;
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




@media screen and (max-width: 1700px) {
  .content-wrapper {
    margin-right: 0 !important;
    margin-left: 0 !important;
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .content1,
  .content2 {
    width: 55vw;
  }

  .mediaBox {
    padding: 0 3vw;
    width: 35vw;
  }
}
</style>

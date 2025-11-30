<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import icon19 from '@/assets/img/icon19.png'
import icon4_1 from '@/assets/img/icon4_1.png'
import b3 from '@/assets/technology/b3.mp4'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const contentRef = ref(null)
const textRef2 = ref(null)
const mediaRef = ref(null)
const videoAssetRef = ref(null)
let ctx

let videoPlaying = false

const playVideo = () => {
  const inst = videoAssetRef.value
  const el = inst?.videoEl?.value
  if (!inst) return
  if (el && !el.paused && !el.ended) {
    videoPlaying = true
    return
  }
  const p = inst.playFromStart?.()
  if (p && typeof p.then === 'function') {
    p.then(() => { videoPlaying = true }).catch(() => { videoPlaying = false })
  } else {
    videoPlaying = true
  }
}

const pauseVideo = () => {
  if (videoAssetRef.value) {
    videoAssetRef.value.pause?.()
  }
  videoPlaying = false
}

const handleResize = () => {
  ScrollTrigger.refresh()
}

onMounted(() => {
  ctx = gsap.context(() => {
    const sectionEl = sectionRef.value
    const movingEl = contentRef.value
    const textEl = textRef2.value
    const mediaEl = mediaRef.value
    if (!sectionEl || !movingEl) return

    let startX = 0
    let endX = 0
    const textStartX = '30vw'
    const mediaStartSize = { width: 341, height: 341 }
    const mediaEndSize = { width: 1000, height: 533 }
    let mediaSizeTween
    const pauseHeadRoom = 0.1 // 末尾提前暂停的滚动比例
    const tailDuration = 2 // 尺寸补间完成后的停留时长

    const computePositions = () => {
      // 暂时归零位移方便获取真实位置
      const prevX = Number(gsap.getProperty(movingEl, 'x')) || 0
      gsap.set(movingEl, { x: 0 })
      const rect = movingEl.getBoundingClientRect()
      startX = 0 // 居中
      endX = window.innerWidth - rect.width - rect.left // 右侧贴边
      gsap.set(movingEl, { x: prevX })
    }

    const setInitialStates = () => {
      if (textEl) gsap.set(textEl, { x: textStartX })
      if (mediaEl) gsap.set(mediaEl, { width: mediaStartSize.width, height: mediaStartSize.height })
      pauseVideo()
    }

    computePositions()
    gsap.set(movingEl, { x: startX })
    setInitialStates()

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'center center',
        end: '+=260%',
        pin: true,
        scrub: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onEnter: () => playVideo(),
        onEnterBack: () => playVideo(),
        onRefresh: () => {
          computePositions()
          gsap.set(movingEl, { x: startX })
          setInitialStates()
        },
        onLeave: () => pauseVideo(),
        onLeaveBack: () => pauseVideo()
      },
      defaults: { ease: 'none' }
    })

    tl.to(movingEl, {
      x: () => endX,
      duration: 1
    })

    if (textEl) {
      tl.to(textEl, {
        x: 0,
        duration: 0.8
      }, 'textMedia')
    }

    if (mediaEl) {
      mediaSizeTween = tl.to(mediaEl, {
        width: mediaEndSize.width,
        height: mediaEndSize.height,
        duration: 0.8
      }, 'textMedia')

      mediaSizeTween.eventCallback('onComplete', () => {
        playVideo()
      })
      
    }

    // 在尾部增加停留段，给视频播放和暂停缓冲
    tl.to({}, { duration: tailDuration })

    tl.eventCallback('onUpdate', () => {
      const st = tl.scrollTrigger
      const nearEnd = st ? st.progress >= 1 - pauseHeadRoom : false
      if (nearEnd && videoPlaying) pauseVideo()
      if (!nearEnd && !videoPlaying) playVideo()
    })

    ScrollTrigger.refresh()
  }, sectionRef)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  ctx && ctx.revert()
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="sectionRef" class="relative mt-[6px] w-full h-screen bg-[#111111] overflow-hidden">
    <MediaAsset type="image" :src="icon4_1" alt="" class="absolute inset-0 w-full h-full object-cover" />

    <div class="size-full overflow-hidden">
      <div ref="contentRef" class="relative z-[2] h-full w-max flex items-center justify-start pt-[45px]">
        <div class="w-screen"></div>
        <div class="shrink-0 w-[50vw] min-w-[600px] flex flex-col justify-center items-start">
          <div class="w-[600px]">
            <div class="flex flex-col">
              <div class="text1 flex items-center">
                <MediaAsset class="size-[40px] scale-75 -translate-y-[2px] -translate-x-[2px] -ml-[14px]" type="image"
                  :src="icon19" alt="" />
                20% at firing temp
              </div>
            </div>

            <div class="title2 mt-[8px] ">
              Aerospace-grade<br>
              high thermal conductivity.
            </div>

            <div class="title3 mt-[32px]">
              We never let existing rules and regulations hold us back.<br>
              We pioneered the incorporation of aerospace-grade high thermal<br> conductivity materials into ceramics.
              Through
              round-the-clock firing<br> and suction tests, we have finally succeeded in firing the ceramic at<br> 1832
              °F
              (1000 ℃), surpassing our peers by 20%.
            </div>
          </div>
        </div>
        <div ref="textRef2" class="w-[600px] shrink-0 translate-x-[30vw]  min-w-[900px]">
          <div class="flex flex-col">
            <div class="text1 flex items-center">
              <MediaAsset class="size-[40px] scale-75 -translate-y-[2px] -translate-x-[2px] -ml-[14px]" type="image"
                :src="icon19" alt="" />
              20% at firing temp
            </div>
          </div>

          <div class="title2 mt-[8px] ">
            Aerospace-grade<br>
            high thermal conductivity.
          </div>

          <div class="title3 mt-[32px]">
            We never let existing rules and regulations hold us back.<br>
            We pioneered the incorporation of aerospace-grade high thermal<br> conductivity materials into ceramics.
            Through
            round-the-clock firing<br> and suction tests, we have finally succeeded in firing the ceramic at<br> 1832 °F
            (1000 ℃), surpassing our peers by 20%.
          </div>
        </div>
        <div class="w-screen flex flex-col justify-center items-center">
          <div ref="mediaRef" class="w-[341px] h-[341px]">
            <MediaAsset ref="videoAssetRef" type="video" :src="b3" :autoplay="false" :muted="true" :loop="false"
              :controls="false" preload="auto" playsinline alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title1 {
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}


.text1 {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}

.title2 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.14; // 缩短行间距
  letter-spacing: .8px;
}

.title3 {
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}

.percentage {
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
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
</style>

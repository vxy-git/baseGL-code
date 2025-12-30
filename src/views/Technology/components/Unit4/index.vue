<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import { technologyUnit4Data } from '@/data/technology-unit4.js'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const contentRef = ref(null)
const textRef2 = ref(null)
const mediaRef = ref(null)
const videoAssetRef = ref(null)
const bgVideoRef = ref(null)
const maskRef = ref(null)
let ctx
let bgVideoObserver

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

const setupBgVideoObserver = () => {
  if (bgVideoObserver) {
    bgVideoObserver.disconnect()
    bgVideoObserver = null
  }
  const sectionEl = sectionRef.value
  const bgInst = bgVideoRef.value
  if (!sectionEl || !bgInst) return
  bgVideoObserver = new IntersectionObserver((entries) => {
    const entry = entries?.[0]
    if (!entry) return
    if (entry.isIntersecting) {
      bgInst.playFromStart?.()
    } else {
      bgInst.pause?.()
    }
  }, { threshold: 0.2 })
  bgVideoObserver.observe(sectionEl)
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
    const maskEl = maskRef.value
    if (!sectionEl || !movingEl) return

    let startX = 0
    let endX = 0
    const textStartX = '100%'
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
      if (maskEl) gsap.set(maskEl, { opacity: 0 })
      pauseVideo()
    }

    computePositions()
    gsap.set(movingEl, { x: startX })
    setInitialStates()
    setupBgVideoObserver()

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

      // 根据内容位移进度控制背景遮罩透明度
      if (maskEl) {
        const currentX = Number(gsap.getProperty(movingEl, 'x')) || 0
        const travel = endX - startX
        const moveProgress = travel ? (currentX - startX) / travel : 0
        const maskProgress = gsap.utils.clamp(0, 1, moveProgress / 0.5) // 0-50% 位移
        const targetOpacity = maskProgress * 0.8
        gsap.set(maskEl, { opacity: targetOpacity })
      }
    })

    ScrollTrigger.refresh()
  }, sectionRef)
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  ctx && ctx.revert()
  if (bgVideoObserver) {
    bgVideoObserver.disconnect()
    bgVideoObserver = null
  }
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div ref="sectionRef" class="relative mt-[6px] w-full h-screen bg-[#111111] overflow-hidden">
    <MediaAsset ref="bgVideoRef" type="video" :src="technologyUnit4Data.media.bgVideo" :autoplay="false" :muted="true" :loop="false"
      :controls="false" preload="auto" playsinline alt="" class="absolute inset-0 w-full h-full object-cover" />
    <div ref="maskRef" class="absolute inset-0 bg-black opacity-0 pointer-events-none z-[1]"></div>

    <div class="size-full overflow-hidden">
      <div ref="contentRef" class="relative z-[2] h-full w-max flex items-center justify-start pt-[45px]">
        <div class="w-screen"></div>
        <div class="shrink-0 w-[1300px] flex justify-center items-start gap-[60px]">
          <div class="w-[600px] max-w-[90vw]">
            <div class="flex flex-col">
              <div class="text1 flex items-center">
                <MediaAsset class="size-[28px] mr-[11px]" type="image" :src="technologyUnit4Data.icons.icon" alt="" />
                <span>{{ technologyUnit4Data.sections.left.textLabel }}</span>
              </div>
            </div>

            <div class="title2 mt-[8px] whitespace-break-spaces">
              {{ technologyUnit4Data.sections.left.title }}
            </div>

            <div class="title3 mt-[32px]">
              {{ technologyUnit4Data.sections.left.description }}
            </div>
          </div>
          <MediaAsset type="image" :src="technologyUnit4Data.media.image1" alt="" class="w-[640px] h-[341px] object-contain" />
        </div>
        <div ref="textRef2" class="w-[600px] max-w-[90vw] shrink-0 translate-x-[100%]">
          <div class="flex flex-col">
            <div class="text1 flex items-center">
              <MediaAsset class="size-[28px] mr-[11px]" type="image" :src="technologyUnit4Data.icons.icon" alt="" />
              {{ technologyUnit4Data.sections.right.textLabel }}
            </div>
          </div>

          <div class="title2 mt-[8px] ">
            {{ technologyUnit4Data.sections.right.title }}
          </div>

          <div class="title3 mt-[32px]">
            {{ technologyUnit4Data.sections.right.description }}
          </div>
        </div>
        <div class="m_fit"></div>
        <div class="w-screen flex flex-col justify-center items-center">
          <div ref="mediaRef" class="w-[341px] h-[341px]">
            <MediaAsset ref="videoAssetRef" type="video" :src="technologyUnit4Data.media.video2" :autoplay="false" :muted="true" :loop="true"
              :controls="false" preload="auto" playsinline alt="" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title1 {
  max-width: 100%;
  width: 164px;
  height: 23px;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
}


.text1 {
  max-width: 100%;
  color: #1CE785;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
}

.title2 {
  max-width: 100%;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  line-height: 1.14; // 缩短行间距
  letter-spacing: .8px;
  font-weight: 700;
}

.title3 {
  max-width: 100%;
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

@media screen and (max-width: 1600px) {
  .m_fit {
    width: 100px;
  }
}

@media screen and (max-width: 1400px) {
  .m_fit {
    width: 200px;
  }
}

@media screen and (max-width: 1200px) {
  .m_fit {
    width: 300px;
  }
}

@media screen and (max-width: 1000px) {
  .m_fit {
    width: 400px;
  }
}


@media screen and (max-width: 800px) {
  .m_fit {
    width: 500px;
  }
}

@media screen and (max-width: 600px) {
  .m_fit {
    width: 600px;
  }
}
</style>
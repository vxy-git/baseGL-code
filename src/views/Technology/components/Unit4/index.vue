<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import icon19 from '@/assets/img/icon19.png'
import icon4_1 from '@/assets/img/icon4_1.png'
import icon4_2 from '@/assets/img/icon4_2.png'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const contentRef = ref(null)
let ctx

const handleResize = () => {
  ScrollTrigger.refresh()
}

onMounted(() => {
  ctx = gsap.context(() => {
    const sectionEl = sectionRef.value
    const movingEl = contentRef.value
    if (!sectionEl || !movingEl) return

    let startX = 0
    let endX = 0

    const computePositions = () => {
      // 暂时归零位移方便获取真实位置
      const prevX = Number(gsap.getProperty(movingEl, 'x')) || 0
      gsap.set(movingEl, { x: 0 })
      const rect = movingEl.getBoundingClientRect()
      startX = 0 // 居中
      endX = window.innerWidth - rect.width - rect.left // 右侧贴边
      gsap.set(movingEl, { x: prevX })
    }

    computePositions()
    gsap.set(movingEl, { x: startX })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionEl,
        start: 'center center',
        end: '+=200%',
        pin: true,
        scrub: true,
        pinSpacing: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onRefresh: () => {
          computePositions()
          gsap.set(movingEl, { x: startX })
        }
      }
    })

    tl.to(movingEl, {
      x: () => endX,
      ease: 'none'
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
      <div ref="contentRef" class="relative z-[2] h-full w-max flex items-center justify-start">
        <div class="w-screen"></div>
        <div class="shrink-0 w-[50vw] flex flex-col justify-center items-start">
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
        <div class="w-[600px] shrink-0 translate-x-[30vw]" ref="contentRef2">
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
          <MediaAsset ref="contentRef3" type="image" :src="icon4_2" alt="" class="w-[640px] h-[341px]" />
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

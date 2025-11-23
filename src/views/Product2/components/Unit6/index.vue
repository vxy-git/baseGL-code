<script setup>
import pack1Src from '@/assets/product2/plck1.jpg'
import pack2Src from '@/assets/product2/plck2.mp4'
import pack3Src from '@/assets/product2/plck3.png'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const unitRef = ref(null)
const trackRef = ref(null)
const panels = 4
let ctx

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger)
  ctx = gsap.context(() => {
    const distance = () => (panels - 1) * window.innerWidth
    gsap.to(trackRef.value, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: unitRef.value,
        pin: true,
        start: 'center center',
        end: () => '+=' + (panels - 1) * window.innerHeight,
        scrub: 0.4,
        invalidateOnRefresh: true
      }
    })
    ScrollTrigger.refresh()
  }, unitRef)
})

onBeforeUnmount(() => {
  if (ctx) ctx.revert()
})
</script>

<template>
  <div ref="unitRef" class="unit6-scroll">
    <div ref="trackRef" class="unit6-track">
      <div class="unit6-panel">
        <div class="c_1230 c_padding">
          <div class="relative w-full mx-[4px] flex flex-col items-center justify-center">
            <img class="ml-auto rotate-180" src="@/assets/img/icon71.svg" alt="">
            <div class="title">Pick Your Option</div>
            <img class="mr-auto" src="@/assets/img/icon71.svg" alt="">
          </div>
        </div>
      </div>

      <div class="unit6-panel">
        <div class="c_1230 c_padding">
          <div>
            <div class="w-full flex justify-between mx-auto gap-[43px] m_flex_col">
              <div>
                <div class="btn mt-[3px]">UNIVERSE</div>
                <div class="title1">It looks — and stays — beautiful.</div>
                <div class="title2">With big branding potential, it matches your vibe and makes the style uniquely
                  yours.</div>
              </div>
              <div class="shrink-0 h-[340px] w-[560px] rounded-[20px] bg-black">
                <MediaAsset type="image" :src="pack1Src" autoplay muted playsinline loop></MediaAsset>
              </div>
            </div>
            <div class="title3 mt-[70px]">DEEP TRACK
              3.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<span
                class="inline-block translate-x-[-10px]">01</span></div>
          </div>
        </div>
      </div>

      <div class="unit6-panel">
        <div class="c_1230 c_padding">
          <div>
            <div class="w-full flex justify-between mx-auto gap-[43px] m_flex_col">
              <div>
                <div class="btn mt-[3px]">UNIVERSE</div>
                <div class="title1">It looks — and stays — beautiful.</div>
                <div class="title2">With big branding potential, it matches your vibe and makes the style uniquely
                  yours.</div>
              </div>
              <div class="shrink-0 h-[340px] w-[560px] rounded-[20px] bg-black">
                <MediaAsset type="video" :src="pack2Src" autoplay muted playsinline loop></MediaAsset>
              </div>
            </div>
            <div class="title3 mt-[70px]">DEEP TRACK
              3.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<span
                class="inline-block translate-x-[-10px]">02</span></div>
          </div>
        </div>
      </div>

      <div class="unit6-panel">
        <div class="c_1230 c_padding">
          <div>
            <div class="w-full flex justify-between mx-auto gap-[43px] m_flex_col">
              <div>
                <div class="btn mt-[3px]">UNIVERSE</div>
                <div class="title1">It looks — and stays — beautiful.</div>
                <div class="title2">With big branding potential, it matches your vibe and makes the style uniquely
                  yours.</div>
              </div>
              <div class="shrink-0 h-[340px] w-[560px] rounded-[20px] bg-black">
                <MediaAsset type="image" :src="pack3Src" autoplay muted playsinline loop></MediaAsset>
              </div>
            </div>
            <div class="title3 mt-[70px]">DEEP TRACK
              3.0&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;<span
                class="inline-block translate-x-[-10px]">03</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.unit6-scroll {
  width: 100%;
}

.unit6-track {
  display: flex;
  will-change: transform;
}

.unit6-panel {
  width: 100vw;
  flex-shrink: 0;
}

.title {
  text-align: center;
  font-family: Roboto;
  font-size: 120px;
  font-style: normal;
  font-weight: 700;
  line-height: 145px;
  background: linear-gradient(180deg, #1CE785 0%, #C9FFE5 50%, #1CE785 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.title1 {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 24px;
}

.title2 {
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
  width: 100%;
  margin-top: 43px;
}

.title3 {
  color: rgba(255, 255, 255, 0.80);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  text-align: center;

  span {
    color: #1CE785;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
}

.btn {
  width: 140px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: #1CE785;
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  //justify-content: center;
  //letter-spacing: -.1px;
  padding-left: 24px;
}
</style>
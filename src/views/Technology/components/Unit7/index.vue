<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import b2 from '@/assets/technology/b2.png'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imageBoxRef = ref(null)
const contentRef = ref(null)

const SCALE_TARGET = 1.374
let scrollTl

const initAnimation = () => {
  const sectionEl = sectionRef.value
  const imageEl = imageBoxRef.value
  const contentEl = contentRef.value
  if (!sectionEl || !imageEl || !contentEl) return

  scrollTl && scrollTl.kill()

  gsap.set(imageEl, { scale: 1, transformOrigin: 'center center' })
  gsap.set(contentEl, { opacity: 0 })

  scrollTl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionEl,
      start: 'top top',
      end: '+=200%',
      pin: true,
      scrub: true,
      anticipatePin: 1,
      invalidateOnRefresh: true
    }
  })

  scrollTl
    .to(imageEl, {
      scale: SCALE_TARGET,
      ease: 'none',
      duration: 0.6
    })
    .to(contentEl, {
      opacity: 1,
      y: 0,
      ease: 'power1.out',
      duration: 0.4
    })
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
  <div ref="sectionRef" class="section pt-[97px]">
    <div class="inner c_1300">
      <div ref="imageBoxRef" class="image-wrapper">
        <MediaAsset :src="b2" type="image" alt="" class="c_1300 h-[560px]" />
      </div>
      <div ref="contentRef" class="content-layer">
        <div class="title2">
          From lab to awards: journey to the top
        </div>
        <div class="title3 mt-[54px]">
          Our R&D Director, Frank, with 20 years of industry experience, has worked with US labs for 18 months,
          conducting round-the-clock tests to redefine the gold standard for Rosin and Resin oils. This dedication means
          we don't just offer testing capabilities—we offer proven results.<br />
          We once partnered with a client for a year-long testing phase to ensure their product not only made a big hit
          in the market but also stood the test of time.<br />
          Choose us, and you're not just choosing a supplier—you're choosing a reliable partner you can always count on.
        </div>
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

.inner {
  position: relative;
  width: 100%;
  height: 560px;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  will-change: transform;
}

.content-layer {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 142px;
  pointer-events: none;
}

.title2 {
  width: 679px;
  height: 47px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-size: 40px;
  text-align: center;
  line-height: 1.1; // 缩短行间距
  letter-spacing: 0.2px;
}

.title3 {
  width: 983px;
  color: #FFF;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}
</style>

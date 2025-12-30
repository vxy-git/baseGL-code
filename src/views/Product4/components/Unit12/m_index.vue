<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import { product4Unit12Data } from '@/data/product4/product4-unit12'
const logoPool = product4Unit12Data.images.units;

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imgBox = ref(null)
const imageLayers = ref([])
let tl

onMounted(() => {
  if (!sectionRef.value || !imgBox.value) {
    return
  }

  const resizeDuration = 1
  const fadeTargets = (imageLayers.value || [])
    .map((layer) => layer?.$el ?? layer)
    .filter(Boolean)
    .reverse()
    .slice(0, logoPool.length - 1)

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=600',
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  })

  tl.fromTo(
    imgBox.value,
    { width: '100vw', height: '100vh', borderRadius: '0px' },
    {
      width: '100%',
      height: '100%',
      borderRadius: '20px',
      ease: 'none',
      immediateRender: false,
      duration: resizeDuration
    }
  )

  if (fadeTargets.length) {
    const step = resizeDuration / fadeTargets.length
    fadeTargets.forEach((layer, index) => {
      const startTime = index * step
      tl.set(layer, { opacity: 0 }, startTime)
    })
  }
})

onUnmounted(() => {
  tl && tl.kill()
})
</script>

<template>
  <div ref="sectionRef" class="h-screen flex justify-center items-center bg-[#F8F9FD] overflow-hidden">
    <div class="title flex justify-center items-center">
      <span class="w-[calc((100vw-100px)/2)] text-right">{{ product4Unit12Data.content.leftTitle }}</span>
      <div class="size-[100px] relative">
        <div ref="imgBox" class="img-box absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="size-full relative">
            <MediaAsset ref="imageLayers" class="absolute inset-0 size-full object-cover" type="image" :src="logo"
              alt="" :lazy="false" v-for="(logo, index) in logoPool" :key="index" />
          </div>
        </div>
      </div>
      <span class="w-[calc((100vw-100px)/2)] text-left">{{ product4Unit12Data.content.rightTitle }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: 80px;
  /* 53.333% */
  display: flex;
  justify-content: center;
  gap: 32px;
}

.img-box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .title {
    font-size: 48px;
    gap: 16px;
  }
}
</style>

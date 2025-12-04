<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
const logo0 = '/assets/img/icon41.png'
const logo1 = '/assets/product4/unit9-1.jpg'
const logo2 = '/assets/product4/unit9-2.jpg'
const logo3 = '/assets/product4/unit9-3.jpg'
const logo4 = '/assets/product4/unit9-4.jpg'
const logo5 = '/assets/product4/unit9-5.jpg'
const logo6 = '/assets/product4/unit9-6.jpg'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imgBox = ref(null)
let tl

onMounted(() => {
  if (!sectionRef.value || !imgBox.value) {
    return
  }

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
    { width: '100vw', height: '100vh' },
    {
      width: '100%',
      height: '100%',
      ease: 'none',
      immediateRender: false
    }
  )
})

onUnmounted(() => {
  tl && tl.kill()
})
</script>

<template>
  <div ref="sectionRef" class="h-screen flex justify-center items-center bg-[#F8F9FD] overflow-hidden">
    <div class="title flex justify-center items-center">
      <span class="w-[calc((100vw-261px)/2)] text-right">GO</span>
      <div class="size-[261px] relative">
        <div ref="imgBox" class="img-box absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div class="size-full relative">
            <MediaAsset class="absolute inset-0 size-full object-cover" type="image" :src="logo" alt="" :lazy="false"  v-for="(logo, index) in [logo0, logo1, logo2, logo3, logo4, logo5, logo6]" :key="index" />
          </div>
        </div>
      </div>
      <span class="w-[calc((100vw-261px)/2)] text-left">Creative</span>
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
}
</style>
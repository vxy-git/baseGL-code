<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MediaAsset from '@/components/MediaAsset.vue'
import icon41 from '@/assets/img/icon41.png'
import unit91 from '@/assets/product4/unit9-1.jpg'
import unit92 from '@/assets/product4/unit9-2.jpg'
import unit93 from '@/assets/product4/unit9-3.jpg'
import unit94 from '@/assets/product4/unit9-4.jpg'
import unit95 from '@/assets/product4/unit9-5.jpg'
import unit96 from '@/assets/product4/unit9-6.jpg'

gsap.registerPlugin(ScrollTrigger)

const sectionRef = ref(null)
const imgBox = ref(null)
const imgLayers = ref([])
const imgSequence = [unit91, unit92, unit93, unit94, unit95, unit96, icon41]

const setImgLayerRef = (el, index) => {
  if (el) {
    imgLayers.value[index] = el
  }
}

let tl

onMounted(() => {
  if (!sectionRef.value || !imgBox.value) {
    return
  }

  const layers = imgLayers.value.filter(Boolean)
  if (!layers.length) return

  gsap.set(layers, { opacity: 0 })
  gsap.set(layers[0], { opacity: 1 })

  const step = 1 / (layers.length - 1)
  const fadeDur = 0.2

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: sectionRef.value,
      start: 'top top',
      end: '+=800',
      scrub: true,
      pin: true,
      anticipatePin: 1
    }
  })

  tl.fromTo(
    imgBox.value,
    { width: '100vw', height: 'max-content' },
    {
      width: '100%',
      height: 'max-content',
      ease: 'none',
      immediateRender: false,
      duration: 1
    }
  )

  layers.forEach((layer, index) => {
    if (index === layers.length - 1) return
    const at = step * index
    const nextLayer = layers[index + 1]
    tl.to(layer, { opacity: 0, duration: fadeDur, ease: 'power1.inOut' }, at)
      .to(nextLayer, { opacity: 1, duration: fadeDur, ease: 'power1.inOut' }, at + fadeDur * 0.25)
  })
})

onUnmounted(() => {
  tl && tl.kill()
})
</script>

<template>
  <div ref="sectionRef" class="h-screen flex justify-center items-center bg-[#F8F9FD]">
    <div class="title flex justify-center items-center">
      <span class="w-[calc((100vw-261px)/2)] text-right">GO</span>
      <div class="size-[261px] relative">
        <div ref="imgBox" class="img-box absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <MediaAsset
            v-for="(src, index) in imgSequence"
            :key="index"
            :ref="el => setImgLayerRef(el, index)"
            :src="src"
            type="image"
            class="img-layer"
            alt=""
            :lazy="false"
          />
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
  height: max-content;
}

.img-layer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
}
</style>

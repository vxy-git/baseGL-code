<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import FrameSequence from '@/components/FrameSequence.vue'
import { useUnitData } from '@/composables/useUnitData'
import { unit4Data } from '@/data/customize/unit4'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  data: {
    type: Object,
    default: null,
  },
})

const unitData = useUnitData(props, unit4Data)
const { frames, tarURL, imageFile, imageName, imageExtension } = unitData.value.frameConfig

const seqProgress = ref(0)
const sequencePanel = ref(null)

let tl
let refreshTimers = []
const refreshScrollTrigger = () => {
  ScrollTrigger.refresh()
}
const scheduleRefreshes = () => {
  refreshTimers = [100, 500, 1200].map(delay => window.setTimeout(refreshScrollTrigger, delay))
}

onMounted(() => {
  window.addEventListener('load', refreshScrollTrigger)

  tl = gsap.timeline({
    scrollTrigger: {
      trigger: sequencePanel.value,
      start: 'top top',
      end: '+=5000',
      pin: true,
      scrub: 1,
      anticipatePin: 0,
      fastScrollEnd: false,
      invalidateOnRefresh: true,
    },
  })

  tl.add(() => {
    seqProgress.value = 0
  }).to(seqProgress, { value: 1, duration: 3.6, ease: 'power1.inOut' })

  requestAnimationFrame(() => {
    ScrollTrigger.refresh()
  })
  scheduleRefreshes()
})

onUnmounted(() => {
  tl?.scrollTrigger?.kill()
  tl?.kill()
  refreshTimers.forEach(timer => window.clearTimeout(timer))
  refreshTimers = []
  window.removeEventListener('load', refreshScrollTrigger)
})
</script>

<template>
  <section class="unit4">
    <div ref="sequencePanel" class="sequencePanel">
      <section class="sequenceWrap">
        <div class="frameLayer">
          <FrameSequence
            :frames="frames"
            :tar-u-r-l="tarURL"
            :image-file="imageFile"
            :image-name="imageName"
            :image-extension="imageExtension"
            :progress="seqProgress"
            object-fit="contain"
          />
        </div>
      </section>
    </div>
  </section>
</template>

<style scoped lang="scss">
.unit4 {
  background: #fff;
}

.sequencePanel {
  box-sizing: border-box;
  height: 100vh;
  background: #fff;
}

.sequenceWrap {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.frameLayer {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

</style>

<script setup>
import { ref, onUnmounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import MediaAsset from '@/components/MediaAsset.vue'

import videoTemp from '@/assets/product4/3-Temperature-Control.mp4'
import videoBattery from '@/assets/product4/Battery-Life-Monitor.mp4'
import videoPreheat from '@/assets/product4/Preheat-Status-Indication.mp4'
import videoPuff from '@/assets/product4/Puff-Counter.mp4'

const boxDosingRef = ref(null)
const boxPreheatRef = ref(null)
const boxTempRef = ref(null)
const boxBatteryRef = ref(null)

const videoDosingRef = ref(null)
const videoPreheatRef = ref(null)
const videoTempRef = ref(null)
const videoBatteryRef = ref(null)

const stops = []

function observeBox(boxRef, videoRef) {
  const { stop } = useIntersectionObserver(
    boxRef,
    ([{ isIntersecting }]) => {
      const inst = videoRef.value
      if (!inst) return
      if (isIntersecting) {
        inst.playFromStart?.()
      } else {
        inst.pause?.()
      }
    },
    { threshold: 0.3 }
  )
  stops.push(stop)
}

observeBox(boxDosingRef, videoDosingRef)
observeBox(boxPreheatRef, videoPreheatRef)
observeBox(boxTempRef, videoTempRef)
observeBox(boxBatteryRef, videoBatteryRef)

onUnmounted(() => {
  stops.forEach(fn => {
    try { fn?.() } catch {}
  })
})
</script>

<template>
  <div class=" bg-black pt-[392px] pb-[215px]">
    <div class="w-[calc(520px+15px+695px)] mx-auto">
      <div class="justify-between flex">
        <div ref="boxDosingRef" class="bg-[#D9D9D9] h-[440px] w-[520px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            Dosing Timer
          </div>
          <MediaAsset
            ref="videoDosingRef"
            type="video"
            :src="videoPuff"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
            class="w-full h-full object-cover"
          />
        </div>
        <div ref="boxPreheatRef" class="bg-[#D9D9D9] h-[440px] w-[695px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            Preheat Status Indication
          </div>
          <MediaAsset
            ref="videoPreheatRef"
            type="video"
            :src="videoPreheat"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
      <div class="justify-between flex mt-[15px]">
        <div ref="boxTempRef" class="bg-[#D9D9D9] h-[440px] w-[695px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            3-Temperature Control
          </div>
          <MediaAsset
            ref="videoTempRef"
            type="video"
            :src="videoTemp"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
            class="w-full h-full object-cover"
          />
        </div>
        <div ref="boxBatteryRef" class="bg-[#D9D9D9] h-[440px] w-[520px] rounded-[20px] relative overflow-hidden">
          <div class="tag absolute left-[21px] top-[25px]">
            Battery Life Monitor
          </div>
          <MediaAsset
            ref="videoBatteryRef"
            type="video"
            :src="videoBattery"
            :autoplay="false"
            :muted="true"
            :loop="false"
            :controls="false"
            class="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.tag{
  padding: 0 30px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: #000;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
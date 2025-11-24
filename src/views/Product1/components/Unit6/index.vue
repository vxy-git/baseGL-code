<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import product1_inhale_L from '@/assets/product1/inhale-L.mp4'
import product1_inhale_R from '@/assets/product1/inhale-R.mp4'

const videoLeftRef = ref(null)
const videoRightRef = ref(null)

// 左侧视频进入/离开屏幕控制
useIntersectionObserver(
  videoLeftRef,
  ([{ isIntersecting }]) => {
    if (!videoLeftRef.value) return

    if (isIntersecting) {
      videoLeftRef.value.currentTime = 0 // 从头播放
      videoLeftRef.value.play()
    } else {
      videoLeftRef.value.pause()
      videoLeftRef.value.currentTime = 0 // 重置到开始
    }
  },
  { threshold: 0.5 } // 视频50%进入视口时触发
)

// 右侧视频进入/离开屏幕控制
useIntersectionObserver(
  videoRightRef,
  ([{ isIntersecting }]) => {
    if (!videoRightRef.value) return

    if (isIntersecting) {
      videoRightRef.value.currentTime = 0 // 从头播放
      videoRightRef.value.play()
    } else {
      videoRightRef.value.pause()
      videoRightRef.value.currentTime = 0 // 重置到开始
    }
  },
  { threshold: 0.5 } // 视频50%进入视口时触发
)

</script>

<template>
  <div class="mt-[180px] c_1230 c_padding">
    <div class="label">
      High-end feature
    </div>
    <div class="title mt-[20px]">
      Inhale & Button Activated
    </div>
    <div class=" w-full flex justify-center gap-[20px] mt-[52px] m_flex_col">
      <div class="flex-1 w-full rounded-[20px]">
        <video ref="videoLeftRef" class="w-full h-full object-cover" :src="product1_inhale_L" muted playsinline loop></video>
      </div>
      <div class="flex-1 w-full rounded-[20px]">
        <video ref="videoRightRef" class="w-full h-full object-cover" :src="product1_inhale_R" muted playsinline loop></video>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.label {
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: center;
}

.title {
  color: #FFF;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
}
</style>
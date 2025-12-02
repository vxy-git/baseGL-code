<script setup>
import unit3_l from '@/assets/product3/unit3-l.mp4'
import unit3_r from '@/assets/product3/unit3-r.mp4'
import MediaAsset from '@/components/MediaAsset.vue'

const handleContainerEnter = (e) => {
  const box = e?.currentTarget
  if (!box) return
  const videos = box.querySelectorAll('video')
  videos.forEach(v => {
    try {
      v.currentTime = 0
      v.play()?.catch?.(() => {})
    } catch {}
  })
}

const handleContainerLeave = (e) => {
  const box = e?.currentTarget
  if (!box) return
  const videos = box.querySelectorAll('video')
  videos.forEach(v => {
    try {
      v.pause()
      v.currentTime = 0
    } catch {}
  })
}

</script>

<template>
    <div class="mt-[158px] c_1230 c_padding pb-[170px] m_mt_0">
      <div class="title1 text-center">
        UNICORN PRO
      </div>
      <div class="title2 mt-[19px]">
        Inhale & Button Activated
      </div>
      <div class="flex gap-[20px] justify-center mt-[54px] m_flex_col" @mouseenter="handleContainerEnter" @mouseleave="handleContainerLeave">
        <MediaAsset
          type="video"
          :src="unit3_l"
          :autoplay="false"
          :muted="true"
          :loop="false"
          :controls="false"
          class="w-full h-[440px] rounded-[20px] overflow-hidden bg-[#D9D9D9] object-cover"
        />
        <MediaAsset
          type="video"
          :src="unit3_r"
          :autoplay="false"
          :muted="true"
          :loop="false"
          :controls="false"
          class="w-full h-[440px] rounded-[20px] overflow-hidden bg-[#D9D9D9] object-cover"
        />
      </div>
    </div>
</template>

<style scoped lang="scss">
.img {
  width: 1400px;
  height: 656px;
  flex-shrink: 0;
  aspect-ratio: 175/82;
}

.title1 {
  color: #caa1ed;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
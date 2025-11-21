<script setup>
import product1_inhale_L from '@/assets/product1/inhale-L.mp4'
import product1_inhale_R from '@/assets/product1/inhale-R.mp4'

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
        <video class="w-full h-full object-cover" :src="product1_inhale_L" autoplay muted playsinline loop></video>
      </div>
      <div class="flex-1 w-full rounded-[20px]">
        <video class="w-full h-full object-cover" :src="product1_inhale_R" autoplay muted playsinline loop></video>
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
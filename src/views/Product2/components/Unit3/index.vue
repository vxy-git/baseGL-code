<script setup>
import either_L from '@/assets/product2/either-L.mp4'
import either_R from '@/assets/product2/either-R.mp4'



</script>

<template>
  <div class="mt-[158px] c_1230 c_padding">
    <div class="title1 text-center">
      Take your pick
    </div>
    <div class="title2 mt-[19px]">
      Either one’s a winner
    </div>
    <div class="flex gap-[20px] justify-center mt-[54px] m_flex_col">
      <div class="w-full h-[440px] bg-black rounded-[20px]">
        <video class="w-full h-full object-cover" :src="either_L" autoplay muted playsinline loop></video>
      </div>
      <div class="w-full h-[440px] bg-black rounded-[20px]">
        <video class="w-full h-full object-cover" :src="either_R" autoplay muted playsinline loop></video>
      </div>
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
  color: #1CE785;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}

.title2 {
  color: #FFF;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
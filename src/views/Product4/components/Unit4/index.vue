<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
const icon33 = '/assets/img/icon33.png'
const dualVideo = '/assets/product4/DUAL.mp4'
const dualLogo = '/assets/product4/unit3/logo1.svg'
</script>

<template>
  <div class="pb-[208px] c_1230 c_padding mt-[152px]">
    <div class="title -mt-[8px]">
      Twice the performance,<br />
      Triple the flavors.
    </div>
    <div class="label mt-[34px] mb-[47px]">
      Get ready for DUKES to spice up your taste buds. It combines both flavors for a new experience, allowing users to
      switch between tastes or enjoy a mix of both.
    </div>
    <div class="relative w-[1020px] max-w-full mx-auto h-[580px] max-h-max min-h-max block object-cover">
      <MediaAsset class="size-full" type="video" :src="dualVideo" :autoplay="false" :muted="true" :loop="false"
        :controls="false" />

      <MediaAsset class="size-[101%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover " type="image" :src="dualLogo" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  color: #111;
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 47px;
}

.label {
  color: #444;
  text-align: center;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  /* 150% */
}
</style>
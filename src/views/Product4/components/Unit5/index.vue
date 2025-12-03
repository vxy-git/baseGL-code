<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import videoSrc from '@/assets/product4/Dual-Gemco-Core.mp4'
</script>

<template>
  <div class="pt-[294px] c_1230 c_padding">
    <div class="title">
      Dual Gemco Core
    </div>
    <div class="w-[900px] h-[409px] mx-auto mt-[64px] max-w-full">
      <MediaAsset type="video" :src="videoSrc" :autoplay="false" :muted="true" :loop="false"
        :controls="false" :view-play="true" class="w-full h-full object-cover rounded-[20px]" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.title {
  text-align: center;
  font-family: Roboto;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: linear-gradient(90deg, #10814A 0%, #1CE785 50%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
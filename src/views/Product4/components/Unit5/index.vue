<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { DUAL_GEMCO_CORE_VIDEO, TITLE_TEXT } from '@/data/product4-unit5.js'
</script>

<template>
  <div class="pt-[294px] c_1230 c_padding">
    <div class="title">
      {{ TITLE_TEXT }}
    </div>
    <div class="w-[900px] h-[409px] mx-auto mt-[64px] max-w-full">
      <MediaAsset type="video" :src="DUAL_GEMCO_CORE_VIDEO" :autoplay="false" :muted="true" :loop="true"
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
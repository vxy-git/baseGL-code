<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { LABEL_TEXT, TITLE_TEXT, VIDEO_LEFT, VIDEO_RIGHT } from '@/data/product1-unit6'
</script>

<template>
  <div class="relative mt-[180px] c_1230 c_padding">
    <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#111] w-screen h-[780px]"></span>
    <div class="relative">
      <div class="label">
        {{ LABEL_TEXT }}
      </div>
      <div class="title mt-[20px]">
        {{ TITLE_TEXT }}
      </div>
      <div class=" w-full flex justify-center gap-[20px] mt-[52px] m_flex_col">
        <div class="flex-1 w-full rounded-[20px]">
          <MediaAsset class="w-full h-full object-cover" type="video" :src="VIDEO_LEFT" :autoplay="false"
            :muted="true" :loop="true" :controls="false" :view-play="true" playsinline />
        </div>
        <div class="flex-1 w-full rounded-[20px]">
          <MediaAsset class="w-full h-full object-cover" type="video" :src="VIDEO_RIGHT" :autoplay="false"
            :muted="true" :loop="true" :controls="false" :view-play="true" playsinline />
        </div>
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
<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { unit9BlockData } from '@/data/unicorn-series/unit9-block'
</script>

<template>
  <div class="mt-[158px] c_1230 c_padding pb-[170px] m_mt_0">
    <div class="title1 text-center">
      {{ unit9BlockData.labels.firstLabel }}
    </div>
    <div class="title2 mt-[19px]">
      {{ unit9BlockData.content.mainTitle }}
    </div>
    <div class="flex gap-[20px] justify-center mt-[54px] m_flex_col h-[440px] min-h-max">
      <MediaAsset
        type="video"
        :src="unit9BlockData.media.leftImage"
        :autoplay="false"
        :muted="true"
        :loop="true"
        :controls="false"
        :view-play="true"
        class="w-full h-full min-h-max rounded-[20px] overflow-hidden object-cover"
      />
      <MediaAsset
        type="video"
        :src="unit9BlockData.media.rightImage"
        :autoplay="false"
        :muted="true"
        :loop="true"
        :controls="false"
        :view-play="true"
        class="w-full h-full min-h-max rounded-[20px] overflow-hidden object-cover"
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
  color: #caa4fb;
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

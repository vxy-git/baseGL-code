<script setup>
import {
  ADVANCED_INTERACTIVITY_IMG,
  DUAL_CHAMBER_IMG,
  MULTIPLE_OPTIONS_IMG,
  POST_FREE_IMG,
  DUAL_CHAMBER_LABEL,
  POST_FREE_LABEL,
  MULTIPLE_OPTIONS_LABEL,
  ADVANCED_INTERACTIVITY_LABEL
} from '@/data/product4-unit2.js';
import MediaAsset from '@/components/MediaAsset.vue'
</script>

<template>
  <div class="flex flex-col gap-y-[20px] pt-[110px] c_1230 c_padding">
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ DUAL_CHAMBER_LABEL }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="DUAL_CHAMBER_IMG" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ POST_FREE_LABEL }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="POST_FREE_IMG" alt="" />
      </div>
    </div>
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ MULTIPLE_OPTIONS_LABEL }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="MULTIPLE_OPTIONS_IMG" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ ADVANCED_INTERACTIVITY_LABEL }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="ADVANCED_INTERACTIVITY_IMG" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text {
  color: #000;
  text-align: center;
  font-family: Roboto;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
}
</style>
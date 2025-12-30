<script setup>
import { product4Unit2Data  } from '@/data/product4/product4-unit2.js';
import MediaAsset from '@/components/MediaAsset.vue'
</script>

<template>
  <div class="flex flex-col gap-y-[20px] pt-[110px] c_1230 c_padding">
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ product4Unit2Data.labels.dualChamber }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="product4Unit2Data.images.dualChamber" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ product4Unit2Data.labels.postFree }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="product4Unit2Data.images.postFree" alt="" />
      </div>
    </div>
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ product4Unit2Data.labels.multipleOptions }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="product4Unit2Data.images.multipleOptions" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ product4Unit2Data.labels.advancedInteractivity }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="product4Unit2Data.images.advancedInteractivity" alt="" />
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
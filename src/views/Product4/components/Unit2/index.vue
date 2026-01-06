<script setup>
import { product4Unit2Data  } from '@/data/product4/product4-unit2.js';
import MediaAsset from '@/components/MediaAsset.vue'
import { computed } from 'vue';

const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

const unitData = computed(() => {
  if (props.data) {
    console.log(props.data)
    return { ...product4Unit2Data, ...props.data };
  }
  return product4Unit2Data;
});
</script>

<template>
  <div class="flex flex-col gap-y-[20px] pt-[110px] c_1230 c_padding">
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ unitData.labels.dualChamber }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="unitData.images.dualChamber" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ unitData.labels.postFree }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="unitData.images.postFree" alt="" />
      </div>
    </div>
    <div class="flex justify-center gap-[20px] m_flex_warp">
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ unitData.labels.multipleOptions }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="unitData.images.multipleOptions" alt="" />
      </div>
      <div class="w-[605px] h-[340px] relative">
        <div class="text absolute top-[21px] left-[28px]">{{ unitData.labels.advancedInteractivity }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="unitData.images.advancedInteractivity" alt="" />
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
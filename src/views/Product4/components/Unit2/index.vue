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
    return { ...product4Unit2Data, ...props.data };
  }
  return product4Unit2Data;
});
</script>

<template>
  <div class="flex flex-col pt-[110px] c_1230 c_padding">
    <div class="flex flex-wrap justify-center gap-[20px]">
      <div
        v-for="(feature, index) in unitData.features"
        :key="index"
        class="w-[605px] h-[340px] relative"
      >
        <div class="text absolute top-[21px] left-[28px]">{{ feature.label }}</div>
        <MediaAsset class="size-full rounded-[20px] object-cover" type="image" :src="feature.image" alt="" />
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
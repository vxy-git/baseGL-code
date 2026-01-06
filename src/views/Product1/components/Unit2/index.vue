<script setup>
import { computed } from 'vue';
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit2Data  } from '@/data/product1/product1-unit2'

// 接收 data prop
const props = defineProps({
  data: {
    type: Object,
    default: null
  }
});

// 合并 CMS 数据和本地数据
const unitData = computed(() => {
  if (props.data) {
    return { ...product1Unit2Data, ...props.data };
  }
  return product1Unit2Data;
});
</script>

<template>
<div class=" relative c_1230 h-[670px] max-h-max c_padding my-[105px] flex items-center justify-center">
  <!-- <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#111] w-screen h-[880px]"></span> -->
  <MediaAsset
    class="relative size-full mx-auto object-contain max-h-max"
    type="image"
    :src="unitData.image"
    alt=""
    :lazy="false"
  />
</div>
</template>

<style scoped lang="scss">

</style>
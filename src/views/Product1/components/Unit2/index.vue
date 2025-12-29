<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
import { product1Unit2Data  } from '@/data/product1-unit2'
</script>

<template>
<div class=" relative c_1230 h-[670px] max-h-max c_padding my-[105px] flex items-center justify-center">
  <!-- <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[#111] w-screen h-[880px]"></span> -->
  <MediaAsset
    class="relative size-full mx-auto object-contain max-h-max"
    type="image"
    :src="product1Unit2Data.image"
    alt=""
    :lazy="false"
  />
</div>
</template>

<style scoped lang="scss">

</style>
<script setup>
import MediaAsset from '@/components/MediaAsset.vue'
const dualVideo = '/assets/product4/DUAL.mp4'
</script>

<template>
  <div class=" relative max-w-[1020px] h-[580px] mx-auto my-[152px] c_1230 c_padding">
    <MediaAsset class="size-full object-cover rounded-[20px] overflow-hidden" type="video" :src="dualVideo"
      :autoplay="false" :muted="true" :loop="false" :controls="false" />
  </div>
</template>

<style scoped lang="scss"></style>
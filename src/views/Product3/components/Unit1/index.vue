<script setup>
import MediaAsset from '@/components/MediaAsset.vue';
const videoSrc = 'https://img.cloudcode.ink/assets/product3/banner.mp4';

</script>

<template>
  <div class="unit1 mt_nav bg-black relative">
    <MediaAsset
      class="w-full h-full object-cover"
      type="video"
      :src="videoSrc"
      :controls="false"
      :autoplay="false"
      :muted="true"
      :loop="false"
      :viewPlay="true"
      playsinline
    />
  </div>
</template>

<style scoped lang="scss">
.unit1 {
  min-height: calc(980px / 1920px * 100vw);
}
</style>